function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var pivot = arr[0];
    var left = [];
    var right = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

var array = [3, 6, 8, 10, 1, 2, 9, 5, 7, 4];
var sortedArray = quicksort(array);
console.log(sortedArray);