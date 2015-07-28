function process_operand(operand_str, a, b) {
    switch (operand_str) {
        case '+' :
            return a + b; 
        case '-' :
            return a - b; 
        case '*' :
        case 'x' :
        case 'X' :
        case '×' :
            return a * b; 
        case '/' :
            return a / b;
        default:
            throw new Error(`${operand_str} is not a supported arithmetic operation.`)
    }
}

function rpn_calc(str) {
    var tokens = str.split(' ');
    var token;
    var processed_values = [];
    for (let i = 0; i < tokens.length; i++) {
        token = tokens[i];
        
        // it's a number
        if (!isNaN(token)) {
            processed_values.push(+token);
        }
        // it's an operand
        else {
            let value2 = processed_values.pop();
            let value1 = processed_values.pop();
            let result = process_operand(token, value1, value2);
            processed_values.push(result);
        }
    }
    return processed_values[0];
}

module.exports = rpn_calc;