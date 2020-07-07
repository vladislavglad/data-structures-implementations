class MinHeap {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return index * 2 + 1;
    }

    getRightChild(index) {
        return index * 2 + 2;
    }

    swap(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    insert(val) {
        this.arr.push(val);
        
        // Keep track of child and its parent.
        let i = this.size;
        let p = this.getParent(i);

        // Go up until you reach root -> min element.
        while (p >= 0) {

            // If child is less then parent -> swap
            // Otherwise, child is in the correct spot -> break.
            if (this.arr[i] < this.arr[p]) {
                this.swap(i, p);

                // Move up the tree.
                i = p;
                p = this.getParent(i);

            } else break;
        }

        this.size++;
    }

    remove() {
        this.swap(0, this.size-1);
        let minVal = this.arr.pop();
        this.size--;

        this.minHeapify(0);

        return minVal;
    }

    minHeapify(index) {

        let leftChildIndex = this.getLeftChild(index);
        let RightChildIndex = this.getRightChild(index);

        let minIndex;

        if (leftChildIndex < this.size && this.arr[leftChildIndex] < this.arr[index])
            minIndex = leftChildIndex;
        else 
            minIndex = index;

        if (RightChildIndex < this.size && this.arr[RightChildIndex] < this.arr[minIndex])
            minIndex = RightChildIndex;

        if (minIndex !== index) {
            this.swap(index, minIndex);
            this.minHeapify(minIndex);
        }

    }
}

module.exports = MinHeap;