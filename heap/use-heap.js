const MinHeap = require("./heap");

let h = new MinHeap();
h.insert(5);
h.insert(6);
h.insert(3);
h.insert(2);
h.insert(1);
h.insert(1);

// console.log(h.size);
// console.log(h.arr);
printHeap(h);

let heap = new MinHeap( [5, 6, 3, 2, 1, 1] ); 
// console.log(heap.size);
// console.log(heap.arr);
printHeap(heap);

function printHeap(heap) {
    console.log(heap.arr);
    while (heap.size != 0) {
        heap.remove();
        console.log(heap.arr);
    }
}