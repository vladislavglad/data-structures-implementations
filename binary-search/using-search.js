const quickSort = require("../sorting/quick-sort");
const binarySearch = require('./binary-search');

let arr = [];
populateArr(arr);

console.log("arr before sorting: " + arr);
quickSort(arr, 0, arr.length - 1);
console.log("arr after sorting: " + arr + "\n");

searchRandKeys(arr);


function populateArr(arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor( Math.random() * 25 );
    }
}

function searchRandKeys(arr) {
    for (let i = 0; i < 5; i++) {
        let randKey = Math.floor( Math.random() * 25);
        let index = binarySearch(arr, randKey);
    
        if (index != -1)
            console.log("key: " + randKey + " is at index: " + index);
        else
            console.log("key: " + randKey + " was not found.");
    }
}