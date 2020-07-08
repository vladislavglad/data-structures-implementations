function quickSort(arr, left, right) {
    if (left < right) {
        let index = partition(arr, left, right);
        quickSort(arr, left, index - 1);
        quickSort(arr, index + 1, right);
    }
}

function partition(arr, left, right) {
    let pivotVal = arr[right];
    let currentIndex = left - 1;

    for (let i = left; i <= right - 1; i++) {
        if(arr[i] <= pivotVal) {
            currentIndex++;
            swap(arr, currentIndex, i);
        }
    }

    swap(arr, currentIndex + 1, right);
    return currentIndex + 1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
} 

module.exports = quickSort;