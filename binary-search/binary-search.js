// Array must be alread sorted!
function binarySearch(arr, key, start, end) {
    if (start > end) 
        return -1;
    
    let mid = Math.floor( (start + end) / 2 );
    // console.log(mid);

    if (arr[mid] === key)
        return mid;
    else if (key < arr[mid])
        return binarySearch(arr, key, start, mid - 1);
    else 
        return binarySearch(arr, key, mid + 1, end);   
}

function search(arr, key) {
    return binarySearch(arr, key, 0, arr.length - 1);
}

module.exports = search;