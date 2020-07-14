/**
 * Simulating as if arrays are not dynamically resizable like in C++ and Java.
 * (completely unnecessary in JavaScript, however, worth practicing the implementation)
 */
class ArrayList {
    constructor(initialLength = 16) {
        this.arr = new Array(initialLength);

        // logical length - actual number of elements stored in arr.
        this.size = 0; 
    }

    isFull() {
        return this.size === this.arr.length;
    }

    resizeArr() {
        // console.log("resize is called!");

        let temp = new Array(this.arr.length * 2);

        for (let i = 0; i < this.size; i++) 
            temp[i] = this.arr[i];
        
        // Store the address of the newly created array.
        this.arr = temp;
    }

    isOutOfBounds(index) {
        return index < 0 || index >= this.size;
    }

    add(value) {
        if (this.isFull()) 
            this.resizeArr();

        this.arr[this.size] = value;

        this.size++;
    }

    indexOf(val) {
        for (let i = 0; i < this.size; i++)
            if (this.arr[i] === val)
                return i;
        return -1;
    }

    contains(val) {
        return this.indexOf(val) !== -1;
    }

    get(index) {
        if (this.isOutOfBounds(index))
            throw new RangeError("given index is out of bounds!");
        
        return this.arr[index];
    }

    length() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.size = 0;
    }

    addAtIndex(index, val) {
        if (this.isOutOfBounds(index))
            throw new RangeError("given index is out of bounds!");
        
        if (this.isFull())
            this.resizeArr();

        // make room for this new element (shift everything right by 1).
        for (let i = this.size - 1; i >= index; i--)
            this.arr[i+1] = this.arr[i];

        this.arr[index] = val;
        this.size++;
    }

    remove(index) {
        if (this.isOutOfBounds(index))
            throw new RangeError("given index is out of bounds!");

        // Shift everything left by 1.
        for (let i = index; i < this.size - 1; i++)
            this.arr[i] = this.arr[i+1];

        this.size--;
    }

    removeByVal(val) {
        try {
            this.remove( this.indexOf(val) ); // throws error if no value found.
        } catch (err) {
            throw Error("There is no such value: " + val);
        }
    }

    toString() {
        let str = "[ ";
        for (let i = 0; i < this.size; i++) {
            str += this.arr[i];
            if (i < this.size - 1)
                str += ", "
        }
        str += " ]";
        return str;
    }
}

module.exports = ArrayList;