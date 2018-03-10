'use strict';
// Создать Calculator при помощи конструктора
// важность: 5
// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.
// Пример использования:

// var calculator = new Calculator();
// calculator.read();

// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('Enter first value:');
//         this.b = +prompt('Enter second value:');
//     }
//     this.sum = function() {
//         return this.a + this.b;
//     }
//     this.mul = function() {
//         return this.a * this.b;
//     }
// }

// var calculator = new Calculator();

// calculator.read();

// console.log('Сумма равна: ' + calculator.sum());
// console.log('Произведение равно: ' + calculator.mul());




// Создать Accumulator при помощи конструктора
// важность: 5
// Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

// Более формально, объект должен:

// Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
// Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function() {
//         this.value += +prompt('Enter value to add:');
//     }
// }

// var accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value)

// function Calculator() {
//     var obj = {
//         '+': function (a, b) {
//             return a + b;
//         },
//         '-': function (a, b) {
//             return a - b;
//         }
//     }

//     this.calculate = function (strToCalc) {
//         this.arr = strToCalc.split(' ');
//         return obj[this.arr[1]](+this.arr[0], +this.arr[2]);
//     }
//     this.addMethod = function (name, func) {
//         obj[name] = func;
//     }
// }

var calc = new Calculator();
var powerCalc = new Calculator();

console.log(calc.calculate('3 + 7'));
console.log(calc.calculate('3 - 9'));

powerCalc.addMethod("*", function (a, b) {
    return a * b;
});
powerCalc.addMethod("/", function (a, b) {
    return a / b;
});
powerCalc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

console.log(powerCalc.calculate('3 * 8'));
console.log(powerCalc.calculate('3 / 9'));
console.log(powerCalc.calculate('3 ** 3'));