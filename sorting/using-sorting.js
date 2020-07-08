const mergeSort = require('./merge-sort');

let arr = [7, 2, 3, 4, 1, 5, 0];

console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);