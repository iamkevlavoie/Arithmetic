//Addition
exports.add = function(value_1, value_2){
    return `Operation: Addition. Value1: ${value_1} Value 2: ${value_2} Result: ${value_1+value_2}`;
}


// Substraction
exports.sub = function(value_1, value_2) {
    return `Operation: Subtraction. Value1: ${value_1} Value2: ${value_2} Result: ${value_1-value_2}`;
}; 
// Multiplication
exports.mul = function(value_1, value_2) {
    return `Operation: Multiplication. Value1: ${value_1} Value2: ${value_2} Result: ${value_1*value_2}`;
}; 
// Division
exports.div = function(value_1, value_2) {
    return `Operation: Division. Value1: ${value_1} Value2: ${value_2} Result: ${value_1/value_2}`;
};