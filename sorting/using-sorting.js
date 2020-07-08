const mergeSort = require('./merge-sort');
const quickSort = require('./quick-sort');

let arr = [7, 2, 3, 4, 1, 5, 0];
let arr2 = [...arr]; // clone an array.

console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(`arr after mergeSort: ${arr}`);

quickSort(arr2, 0, arr.length - 1);
console.log(`arr after quickSort: ${arr2}`);