const HashTable = require('./hash-table');

let h = new HashTable();
let key = 'orange';
h.insert(key);
console.log(h.retrieve(key));

let key2 = "XL pizza";
let val = "$16";
h.insertPair(key2, val);
console.log(h.retrieve(key2));

console.log(h);