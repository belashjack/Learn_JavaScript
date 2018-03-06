'use strict';
// Добавить функциям defer
// важность: 5
// Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.
// После этого должен работать такой код:

// function f() {
//   alert( "привет" );
// }
// f.defer(1000); // выведет "привет" через 1 секунду

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// }

// function f() {
//     console.log("привет");
// }

// f.defer(1000); // выведет "привет" через 1 секунду




// Добавить функциям defer с аргументами
// важность: 4
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// То есть, должны корректно передаваться аргументы.

// Function.prototype.defer = function (ms) {
//     var func = this;
//     return function () {
//         var args = arguments;
//         setTimeout(function () {
//             func.apply(this, args);
//         }, ms)
//     }
// }

// function f(a, b) {
//     console.log(a + b);
// }