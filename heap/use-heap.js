const MinHeap = require("./heap");

let h = new MinHeap();
h.insert(5);
h.insert(6);
h.insert(3);
h.insert(2);
h.insert(1);
h.insert(1);

console.log(h.size);
console.log(h.arr);

while (h.size != 0) {
    h.remove();
    console.log(h.arr);
}