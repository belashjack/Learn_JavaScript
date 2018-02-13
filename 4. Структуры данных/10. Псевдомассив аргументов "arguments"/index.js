'use strict';
// Проверка на аргумент-undefined
// важность: 5
// Как в функции отличить отсутствующий аргумент от undefined?
// function f(x) {
//   // ..ваш код..
//   // выведите 1, если первый аргумент есть, и 0 - если нет
// }
// f(undefined); // 1
// f(); // 0

// f(undefined);
// f();

// function f() {
//     if (arguments.length) {
//         console.log('1');
//     } else {
//         console.log('0');
//     }
// }




// Сумма аргументов
// важность: 5
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
// sum() = 0
// sum(1) = 1
// sum(1, 2) = 3
// sum(1, 2, 3) = 6
// sum(1, 2, 3, 4) = 10

// console.log(sum());
// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 10, -6));

// function sum() {
//     if (!arguments.length) {
//         return 0;
//     }
//     var args = [];
//     for (var i = 0; i < arguments.length; i++) {
//         args[i] = arguments[i];
//     }
//     return args.reduce(reduceFunction);

//     function reduceFunction(sum, current) {
//         return sum + current;
//     }
// }
