function siempreHambriento(arr1) {
    var tengoHambre = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] == "comida") {
            console.log("Delicioso");
            tengoHambre++;
        }
    }
    if (tengoHambre == 0) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"



function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var a = 0; a < arr.length; a++) {
        if (arr[a] > cutoff) {
            filteredArr.push(arr[a]);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // Debería imprimir [6, 8, 10, 9]



function betterThanAverage(arr2) {
    var sum = 0;

    for (var e = 0; e < arr2.length; e++) {
        sum += arr2[e];
    }

    var avg = sum / arr2.length;
    var count = 0

    for (var e = 0; e < arr2.length; e++) {
        if (arr2[e] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4



function reverse(arr3) {
    var left = 0;
    var right = arr3.length - 1;
    while (left < right) {
        var temp = arr3[left];
        arr3[left] = arr3[right];
        arr3[right] = temp;
        left++;
        right--;
    }
    return arr3;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



function fibonacciArray(n) {
    var fibArr = [0, 1];
    while (fibArr.length < n) {
        var prev = fibArr[fibArr.length - 1];
        var prevprev = fibArr[fibArr.length - 2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]