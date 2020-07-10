const HashTable = require('./hash-table');

let h = new HashTable();
let key = 'orange';
h.insert(key);
console.log(h.retrieve(key));

let key2 = "XL pizza";
let val = "$16";
h.insertPair(key2, val);
console.log(h.retrieve(key2));

h.insert("apple");
h.insert("cookie");
h.insert("banana");
h.insert("mango");
h.insert("cherry");

console.log(h);

// check the "bucket" before removing the key.
let tempIndex = h.getIndex("cookie");
console.log('\n"Bucket" content at index ' + tempIndex + ":");
console.log(h.retrieve("cookie"));

// make sure the value has been delited.
h.remove("cookie");
console.log('"Bucket" content at index ' + tempIndex + " after removing an item:");
console.log(h.table[tempIndex]);
