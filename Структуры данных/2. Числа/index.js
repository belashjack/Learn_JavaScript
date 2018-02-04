'use strict';
// Создайте страницу, которая предлагает ввести два числа и выводит их сумму.
// var firstNumber = prompt('Enter first number:');
// var secondNumber = prompt('Enter second number:');

// alert(+firstNumber + +secondNumber);

// Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:
function getDecimal(n) {
    return (n%1);
}

console.log(getDecimal(12.345));
console.log(getDecimal(1.2));
console.log(getDecimal(-1.2));