function mergeSort(arr, start, end) {
    if (start < end) {
        let mid = Math.floor( (start+end)/2 );
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}

function merge(arr, start, mid, end) {
    let leftArr = [];
    let rightArr = [];

    let index = start;

    // Includes mid (upper bound)
    for (let i = 0; i <= mid - start; i++) {
        leftArr[i] = arr[index];
        index++;
    }   

    index = mid + 1;
    // mid + 1 until end (includind end);
    for (let i = 0; i <= end - mid - 1; i++) {
        rightArr[i] = arr[index];
        index++;
    }
        

    let leftIndex = 0;
    let rightIndex = 0;
    let currentIndex = start;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            arr[currentIndex] = leftArr[leftIndex];
            leftIndex++;
        } else {
            arr[currentIndex] = rightArr[rightIndex];
            rightIndex++;
        } 

        currentIndex++;
    }

    while (leftIndex < leftArr.length) {
        arr[currentIndex] = leftArr[leftIndex];
        currentIndex++;
        leftIndex++;
    }


    while (rightIndex < rightArr.length) {
        arr[currentIndex] = rightArr[rightIndex];
        currentIndex++;
        rightIndex++;
    }

}

module.exports = mergeSort;