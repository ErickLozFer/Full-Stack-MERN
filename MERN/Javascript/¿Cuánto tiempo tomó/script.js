//Optimización de código
Number.prototype.isPrime = function () {
    if (this <= 1) {
        return false;
    }
    if (this <= 3) {
        return true;
    }
    if (this % 2 === 0 || this % 3 === 0) {
        return false;
    }

    let i = 5;
    while (i * i <= this) {
        if (this % i === 0 || this % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
};

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2;
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


//Calcular primos 100,000 y 1,000,000
Number.prototype.isPrime = function () {
    if (this <= 1) {
        return false;
    }
    if (this <= 3) {
        return true;
    }
    if (this % 2 === 0 || this % 3 === 0) {
        return false;
    }

    let i = 5;
    while (i * i <= this) {
        if (this % i === 0 || this % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
};

const { performance } = require('perf_hooks');

function findNthPrime(n) {
    let primeCount = 0;
    let num = 2;
    while (primeCount < n) {
        if (num.isPrime()) {
            primeCount++;
        }
        num++;
    }
    return num - 1;
}

const start1 = performance.now();
const prime100000 = findNthPrime(100000);
console.log(`The 100,000th prime number is ${prime100000}`);
console.log(`This took ${performance.now() - start1} milliseconds to run`);

const start2 = performance.now();
const prime1000000 = findNthPrime(1000000);
console.log(`The 1,000,000th prime number is ${prime1000000}`);
console.log(`This took ${performance.now() - start2} milliseconds to run`);


// iterative es más rápida
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);


//Función más eficiente
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed2 = [...story].reverse().join("");

console.log(reversed2);
