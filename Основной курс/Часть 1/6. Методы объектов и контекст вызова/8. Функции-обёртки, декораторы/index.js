'use strict';
// Логирующий декоратор (1 аргумент)
// важность: 5
// Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
// Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f.
// В этой задаче можно считать, что у функции f ровно один аргумент.
// Работать должно так:

// function work(a) {
//   /* ... */ // work - произвольная функция, один аргумент
// }

// function makeLogging(f, log) { /* ваш код */ }

// var log = [];
// work = makeLogging(work, log);

// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log

// for (var i = 0; i < log.length; i++) {
//   alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// }
// ---------------------------------------

// function work(a) {
//     /* ... */ // work - произвольная функция, один аргумент
// }

// function makeLogging(f, log) {
//     return function(a) {
//         log.push(a);
//         f.call(this, a);
//     }
// }

// var log = [];
// work = makeLogging(work, log);

// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log

// for (var i = 0; i < log.length; i++) {
//     console.log('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
// }




// Логирующий декоратор (много аргументов)
// важность: 3
// Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
// Условие аналогично задаче Логирующий декоратор (1 аргумент), но допускается func с любым набором аргументов.
// Работать должно так:

// function work(a, b) {
//   alert( a + b ); // work - произвольная функция
// }

// function makeLogging(f, log) { /* ваш код */ }

// var log = [];
// work = makeLogging(work, log);

// work(1, 2); // 3
// work(4, 5); // 9

// for (var i = 0; i < log.length; i++) {
//   var args = log[i]; // массив из аргументов i-го вызова
//   alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
// }
// ----------------------------------------------------

// function work(a, b) {
//     console.log(a + b); // work - произвольная функция
// }

// function makeLogging(f, log) {
//     return function () {
//         var tempArr = [];
//         for (var i = 0; i < arguments.length; i++) {
//             tempArr.push(arguments[i]);
//         }
//         log.push(tempArr);
//         f.apply(this, arguments);
//     }
// }

// var log = [];
// work = makeLogging(work, log);

// work(1, 2); // 3
// work(4, 5); // 9

// for (var i = 0; i < log.length; i++) {
//     var args = log[i]; // массив из аргументов i-го вызова
//     console.log('Лог:' + args.join()); // "Лог:1,2", "Лог:4,5"
// }




// Кеширующий декоратор
// важность: 5
// Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты.

// В этой задаче функция f имеет только один аргумент, и он является числом.
// 1. При первом вызове обертки с определенным аргументом – она вызывает f и запоминает значение.
// 2. При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.
// Должно работать так:

// function f(x) {
//   return Math.random() * x; // random для удобства тестирования
// }

// function makeCaching(f) { /* ваш код */ }

// f = makeCaching(f);

// var a, b;

// a = f(1);
// b = f(1);
// alert( a == b ); // true (значение закешировано)

// b = f(2);
// alert( a == b ); // false, другой аргумент => другое значение

// function f(x) {
//     return Math.random() * x; // random для удобства тестирования
// }

// function makeCaching(f) {
//     var obj = {};
//     function wrapper() {
//         if (obj[arguments[0]] === undefined) {
//             obj[arguments[0]] = f.apply(this, arguments);
//         }
//         return obj[arguments[0]];
//     }
//     return wrapper;
// }

// f = makeCaching(f);

// var a, b;

// a = f(1);
// b = f(1);
// console.log(a == b); // true (значение закешировано)

// b = f(2);
// console.log(a == b); // false, другой аргумент => другое значение