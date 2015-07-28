var expect = require("chai").expect;
var assert = require("chai").assert;
var RPN_Calc = require('../es5/rpn_calc');

describe("Reverse Polish notation calculator", function() {
    it('should export a function', function(){
        assert.isFunction(RPN_Calc, 'exports a function');
    });

    it('should figure out calculations', function(){
        var result;
        result = RPN_Calc('-4 6 +');
        expect(result).to.equal(2, 'works with "-4 6 +"');

        result = RPN_Calc('5 1 2 + 4 × + 3 -');
        expect(result).to.equal(14, 'works with "5 1 2 + 4 × + 3 -"');

        result = RPN_Calc('2 3 11 + 5 - *');
        expect(result).to.equal(18, 'works with "2 3 11 + 5 - *"');
        
    });
});