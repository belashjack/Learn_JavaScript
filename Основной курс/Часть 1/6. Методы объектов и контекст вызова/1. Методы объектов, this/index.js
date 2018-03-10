'use strict';
// Создайте калькулятор
// важность: 5
// Создайте объект calculator с тремя методами:
// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений
// var calculator = {
//   ...ваш код...
// }
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// var calculator = {
//     read:  getValues,
//     sum:  sumValues,
//     mul:  multiplyValues
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// function getValues() {
//     this.a = +prompt('Enter first value:');
//     this.b = +prompt('Enter second value:');
// };
// function sumValues() {
//     return this.a + this.b;
// };
// function multiplyValues() {
//     return this.a * this.b;
// };




// Цепочка вызовов
// важность: 2
// Есть объект «лестница» ladder:

// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
//     this.step++;
//   },
//   down: function() { // вниз по лестнице
//     this.step--;
//   },
//   showStep: function() { // вывести текущую ступеньку
//     alert( this.step );
//   }
// };
// Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

// ladder.up().up().down().up().down().showStep(); // 1
// Как видно, такая запись содержит «меньше букв» и может быть более наглядной.
// Такой подход называется «чейнинг» (chaining) и используется, например, во фреймворке jQuery.

var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().up().up().down().showStep(); // 1