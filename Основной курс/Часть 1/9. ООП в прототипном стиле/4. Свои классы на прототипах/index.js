'use strict';
// Перепишите в виде класса
// важность: 5
// Есть класс CoffeeMachine, заданный в функциональном стиле.
// Задача: переписать CoffeeMachine в виде класса с использованием прототипа.
// Исходный код:

// function CoffeeMachine(power) {
//     var waterAmount = 0;
//     var WATER_HEAT_CAPACITY = 4200;
//     function getTimeToBoil() {
//         return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
//     this.run = function () {
//         setTimeout(function () {
//             alert('Кофе готов!');
//         }, getTimeToBoil());
//     };
//     this.setWaterAmount = function (amount) {
//         waterAmount = amount;
//     };

// }

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();
// P.S.При описании через прототипы локальные переменные недоступны методам, поэтому нужно будет переделать их в защищённые свойства.

// function CoffeeMachine(power) {
//     this._power = power;
//     this._waterAmount = 0;
// };
// CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
// CoffeeMachine.prototype._getTimeToBoil = function() {
//     return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
// }
// CoffeeMachine.prototype.run = function () {
//     setTimeout(function () {
//         console.log('Кофе готов!');
//     }, this._getTimeToBoil());
// };
// CoffeeMachine.prototype.setWaterAmount = function (amount) {
//     this._waterAmount = amount;
// };

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();




// Хомяки с __proto__
// важность: 5
// Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ – "Hamster").
// Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления.
// Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.
// В чём дело? Как поправить?

//  function Hamster() {}

// Hamster.prototype.food = []; // пустой "живот"

// Hamster.prototype.found = function(something) {
//   this.food.push(something);
// };

// // Создаём двух хомяков и кормим первого
// var speedy = new Hamster();
// var lazy = new Hamster();

// speedy.found("яблоко");
// speedy.found("орех");

// alert( speedy.food.length ); // 2
// alert( lazy.food.length ); // 2 (!??)
// -----------------------------------------------
// function Hamster() {
//     this.food = [];
// }

// Hamster.prototype.found = function (something) {
//     this.food.push(something);
// };

// var speedy = new Hamster();
// var lazy = new Hamster();

// speedy.name = 'Speedy';

// speedy.found("яблоко");
// speedy.found("орех");

// console.log(speedy.food.length);
// console.log(lazy.food.length);