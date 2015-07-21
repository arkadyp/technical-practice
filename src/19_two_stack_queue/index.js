var Stack = function() {
    this.values = [];
};

Stack.prototype.push = function(value) {
    this.values.push(value);
}

Stack.prototype.pop = function() {
    return this.values.length ? this.values.pop() : null;
}

Stack.prototype.isEmpty = function() {
    return this.values.length === 0;
}

var TwoStackQueue = function() {
    this.enqueue_stack = new Stack();
    this.dequeue_stack = new Stack();
};

TwoStackQueue.prototype.enqueue = function(value) {
    while (!this.dequeue_stack.isEmpty()) {
        this.enqueue_stack.push(this.dequeue_stack.pop());
    }

    this.enqueue_stack.push(value);
};

TwoStackQueue.prototype.dequeue = function() {
    while (!this.enqueue_stack.isEmpty()) {
        this.dequeue_stack.push(this.enqueue_stack.pop());
    }

    return this.dequeue_stack.pop();
}

module.exports = TwoStackQueue;
