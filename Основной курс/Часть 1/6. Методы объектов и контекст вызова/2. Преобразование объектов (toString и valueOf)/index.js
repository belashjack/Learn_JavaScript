'use strict';
// Сумма произвольного количества скобок
// важность: 2
// Напишите функцию sum, которая будет работать так:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// Количество скобок может быть любым.
// Пример такой функции для двух аргументов – есть в решении задачи Сумма через замыкание.

// function sum(a) {
//     var result = a;
//     function internalFunction(b) {
//         result += b;
//         return internalFunction;
//     }
//     internalFunction.toString = function() {
//         return result;
//     }
//     return internalFunction;
// }

// console.log(sum(1)(2));
// console.log(sum(1)(2)(3));