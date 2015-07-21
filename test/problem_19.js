var expect = require("chai").expect;
var assert = require("chai").assert;
var TwoStackQueue = require('../es5/19_two_stack_queue');

describe("Problem 19: two stack queue", function() {
    it('should export a function', function(){
        assert.isFunction(TwoStackQueue, 'exports a function');
        var queue = new TwoStackQueue();
        assert.isFunction(queue.enqueue, 'has enqueue method');
        assert.isFunction(queue.dequeue, 'has dequeue method');
    });

    it('should work like a queue', function(){
        var queue = new TwoStackQueue();
        queue.enqueue(1); // 1
        queue.enqueue(2); // 1 2
        queue.enqueue(3); // 1 2 3

        expect(queue.dequeue()).to.equal(1); // 2 3
        queue.enqueue(4); // 2 3 4
        expect(queue.dequeue()).to.equal(2); // 3 4
        expect(queue.dequeue()).to.equal(3); // 4
        expect(queue.dequeue()).to.equal(4); // null
        expect(queue.dequeue()).to.equal(null);
    });
});