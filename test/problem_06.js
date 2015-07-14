var expect = require("chai").expect;
var assert = require("chai").assert;
var find_rectangle = require('../es5/6_find_rectangle');

describe("Problem 6: find rectangle", function(){
    it('should find intersection', function(){
        var rectangle1 = {
            x: 0,
            y: 0,
            height: 5,
            width: 5
        };

        var rectangle2 = {
            x: 2,
            y: 2,
            height: 5,
            width: 5
        };

        var intersection_rectangle = find_rectangle(rectangle1, rectangle2);
        var intersection_rectangle2 = find_rectangle(rectangle2, rectangle1);
        var expected_intersection = {
            x: 2,
            y: 2,
            height: 3,
            width: 3
        }

        expect(intersection_rectangle).to.deep.equal(expected_intersection);
        expect(intersection_rectangle2).to.deep.equal(expected_intersection);
    });

    it('should find intersection when one rectangle is inside of the other', function(){
        var rectangle1 = {
            x: 0,
            y: 0,
            height: 10,
            width: 10
        };

        var rectangle2 = {
            x: 2,
            y: 2,
            height: 5,
            width: 5
        };

        var intersection_rectangle = find_rectangle(rectangle1, rectangle2);
        var expected_intersection = {
            x: 2,
            y: 2,
            height: 5,
            width: 5
        }

        expect(intersection_rectangle).to.deep.equal(expected_intersection);
    });

    it('should return null if there isn\`t an intersection', function(){
        var rectangle1 = {
            x: 0,
            y: 0,
            height: 5,
            width: 5
        };

        var rectangle2 = {
            x: 10,
            y: 10,
            height: 5,
            width: 5
        };

        var intersection_rectangle = find_rectangle(rectangle1, rectangle2);
        expect(intersection_rectangle).to.deep.equal(null);
    });

    it('should work with negative numbers', function(){
        var rectangle1 = {
            x: -10,
            y: -10,
            height: 10,
            width: 10
        };

        var rectangle2 = {
            x: -5,
            y: -2,
            height: 100,
            width: 100
        };

        var intersection_rectangle = find_rectangle(rectangle1, rectangle2);
        var expected_intersection = {
            x: -5,
            y: -2,
            height: 2,
            width: 5
        };
        expect(intersection_rectangle).to.deep.equal(expected_intersection);
    });
});