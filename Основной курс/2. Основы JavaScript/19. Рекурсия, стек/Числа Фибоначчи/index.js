'use strict';
function fib(n) {
    var firstNumber = 0;
    var secondNumber = 0;
    var result = 1;
    for(var i = 1; i <= n-1; i++) {
        firstNumber = secondNumber;
        secondNumber = result;
        result = firstNumber + secondNumber;
    }
    return result;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));