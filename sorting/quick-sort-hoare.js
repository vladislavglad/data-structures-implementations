function quickSort(arr, left, right) {
    let index = partition(arr, left, right);

    if (left < index - 1) 
        quickSort(arr, left, index - 1);

    if (right > index)
        quickSort(arr, index, right);

}

function partition(arr, left, right) {
    let pivot = arr[ Math.floor( (left + right)/2 ) ];
    
    while (left <= right) {

        while (arr[left] < pivot) 
            left++;

        while (arr[right] > pivot)
            right--;

        if (left <= right) {
            swap(arr, left, right);
            left++
            right--;
        }
    }

    return left;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
} 

module.exports = quickSort;
