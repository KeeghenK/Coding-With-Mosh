const _array = new WeakMap();

class Stack {
    constructor() {
        _array.set(this, []);
    }
    peek() {
        if (_array.get(this).length === 0) throw new Error('Stack is empty.');
        return _array.get(this)[_array.get(this).length - 1];
    }
    pop() {
        if (_array.get(this).length === 0) throw new Error('Stack is empty.');
        return _array.get(this).pop();
    }
    push(obj) {
        return _array.get(this).push(obj);
    }
    get count() {
        return  _array.get(this).length;
    }
}
const stack = new Stack();