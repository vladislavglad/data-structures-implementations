function quickSort(arr, left, right) {
    if (left < right) {
        let index = partition(arr, left, right);
        quickSort(arr, left, index);
        quickSort(arr, index+1, right);
    }
        
}

function partition(arr, left, right) {
    let pivotIndex = Math.floor( (left + right)/2 );
    let pivot = arr[pivotIndex];
    // console.log("Pivot value: " + pivot);

    while(true) {

        while (arr[left] < pivot)
            left++;

        while (arr[right] > pivot)
            right--;

        if (left >= right)
            return right;

        swap(arr, left, right);
    }

    // console.log("" + arr);
    // console.log("Returning index: " + left);
    
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
} 

module.exports = quickSort;
