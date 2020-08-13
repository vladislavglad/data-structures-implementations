const mergeSort = require('./merge-sort');
const quickSortLomuto = require('./quick-sort-lomuto');
const quickSortHoare = require('./quick-sort-hoare');

let arr = [7, 2, 3, 4, 1, 5, 0];
let arr2 = [...arr]; // clone an array.
let arr3 = [...arr];

console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(`arr after mergeSort: ${arr}`);

quickSortLomuto(arr2, 0, arr.length - 1);
console.log(`arr after Lomuto's quickSort: ${arr2}`);

quickSortHoare(arr3, 0, arr.length - 1);
console.log(`arr after Hoare's quickSort: ${arr3}`);
