'use strict';
// Вывод чисел каждые 100 мс
// важность: 5
// Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100 мс. То есть, весь вывод должен занимать 2000 мс, в течение которых каждые 100 мс в консоли появляется очередное число.

// Нажмите на кнопку, открыв консоль, для демонстрации:

// printNumbersInterval()

// P.S. Функция должна использовать setInterval.

// function printNumbersInterval() {
//     var number = 1;
//     var interval1 = setInterval(function() {
//         console.log(number++);
//         if (number > 20) {
//             clearInterval(interval1);
//         }
//     }, 100);

// }

// printNumbersInterval();




// Вывод чисел каждые 100 мс, через setTimeout
// важность: 5
// Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс, но с использованием рекурсивного setTimeout вместо setInterval.

// function printNumbersInterval() {
//     var number = 1;
//     setTimeout(function show() {
//         if (number <= 20) {
//             console.log(number++);
//             setTimeout(show, 100)
//         }
//     }, 100);
// }

// printNumbersInterval();




// Функция-задержка
// важность: 5
// Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.

// Например:

// function f(x) {
//   alert( x );
// }

// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);

// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
// Упрощённо можно сказать, что delay возвращает "задержанный на ms" вариант f.

// В примере выше у функции только один аргумент, но delay должна быть универсальной: передавать любое количество аргументов и контекст this.

// function f(x) {
//     console.log(x);
// }

// function delay(f, value) {
//     return function () {
//         var thisValue = this;
//         var args = arguments;
//         setTimeout(function () {
//             f.apply(thisValue, args);
//         }, value);
//     }
// }

// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);

// f1000("test");
// f1500("test2");



// и две последние вообще не решил.