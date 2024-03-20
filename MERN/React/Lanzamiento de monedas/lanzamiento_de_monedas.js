function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        const maxAttempts = 100;

        const flipCoin = () => Math.random() > 0.5 ? "heads" : "tails";

        const tryFlip = () => {
            attempts++;
            let result = flipCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
                if (headsCount === 5) {
                    resolve(`It took ${attempts} tries to flip five "heads"`);
                } else {
                    tryFlip();
                }
            } else {
                headsCount = 0;
                if (attempts >= maxAttempts) {
                    reject("More than 100 attempts without flipping five consecutive 'heads'");
                } else {
                    tryFlip();
                }
            }
        };

        tryFlip();
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");