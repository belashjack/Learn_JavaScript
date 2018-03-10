'use strict';
// Запускать только при включённой кофеварке
// важность: 5
// В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

// В итоге должен работать такой код:

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.run(); // ошибка, кофеварка выключена!
// А вот так – всё в порядке:

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run(); // ...Кофе готов!

// function Machine(power) {
//     this._enabled = false;
//     this._power = power;

//     this.enable = function() {
//         this._enabled = true;
//     }
//     this.disable = function() {
//         this._enabled = false;
//     }
// }

// function CoffeeMachine(power) {
//     Machine.apply(this, arguments);
//     var waterAmount = 0;
//     function onReady() {
//         console.log('Кофе готов.'); 
//     }

//     this.setWaterAmount = function(amount) {
//         waterAmount = amount;
//     };
//     this.run = function() {
//         if (!this._enabled) {
//             throw new Error('Ошибка! Кофеварка не включена.');
//         }
//         setTimeout(onReady, 1000);
//     }
// }

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.run();
// coffeeMachine.enable();

// coffeeMachine.setWaterAmount(100);
// coffeeMachine.disable();




// Останавливать кофеварку при выключении
// важность: 5
// Когда кофеварку выключают – текущая варка кофе должна останавливаться.

// Например, следующий код кофе не сварит:

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable(); // остановит работу, ничего не выведет
// Реализуйте это на основе решения предыдущей задачи.

// function Machine(power) {
//     this._enabled = false;
//     this._power = power;

//     this.enable = function () {
//         this._enabled = true;
//     }
//     this.disable = function () {
//         this._enabled = false;
//     }
// }

// function CoffeeMachine(power) {
//     Machine.apply(this, arguments);
//     var waterAmount = 0;
//     var timer;
//     function onReady() {
//         console.log('Кофе готов.');
//     }

//     this.setWaterAmount = function (amount) {
//         waterAmount = amount;
//     };
//     this.run = function () {
//         if (!this._enabled) {
//             throw new Error('Ошибка! Кофеварка не включена.');
//         }
//         timer = setTimeout(onReady, 1000);
//     }
//     var parentDisable = this.disable;
//     this.disable = function() {
//         parentDisable.call(this);
//         clearTimeout(timer);
//     }
// }

// var coffeeMachine = new CoffeeMachine(10000);

// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable();




// Унаследуйте холодильник
// важность: 4
// Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():

//  * Приватное свойство food хранит массив еды.
//  * Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
//  * Если холодильник выключен, то добавить еду нельзя, будет ошибка.
//  * Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
//  * Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.
// Код для проверки:

// var fridge = new Fridge(200);
// fridge.addFood("котлета"); // ошибка, холодильник выключен
// Ещё код для проверки:

// // создать холодильник мощностью 500 (не более 5 еды)
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "зелень");
// fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
// Код использования холодильника без ошибок:

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");

// var fridgeFood = fridge.getFood();
// alert( fridgeFood ); // котлета, сок, варенье

// // добавление элементов не влияет на еду в холодильнике
// fridgeFood.push("вилка", "ложка");

// alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
// Исходный код класса Machine, от которого нужно наследовать:

// function Machine(power) {
//   this._power = power;
//   this._enabled = false;

//   var self = this;

//   this.enable = function() {
//     self._enabled = true;
//   };

//   this.disable = function() {
//     self._enabled = false;
//   };
// }

// function Machine(power) {
//     this._power = power;
//     this._enabled = false;

//     var self = this;

//     this.enable = function () {
//         self._enabled = true;
//     };

//     this.disable = function () {
//         self._enabled = false;
//     };
// }

// function Fridge(power) {
//     Machine.apply(this, arguments);
//     var food = [];
//     function checkCapacity() {
//         if (food.length < power / 100) {
//             return true;
//         }
//         return false;
//     }

//     this.addFood = function () {
//         if (!this._enabled) {
//             throw new Error('Ошибка, холодильник выключен.');
//         }
//         for (var i = 0; i < arguments.length; i++) {
//             if (!checkCapacity()) {
//                 throw new Error('Ошибка, слишком много еды.');
//             }
//             food.push(arguments[i]);
//         }
//     };
//     this.getFood = function () {
//         return food.slice();
//     };
// }

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");

// var fridgeFood = fridge.getFood();
// console.log(fridgeFood); // котлета, сок, варенье

// // добавление элементов не влияет на еду в холодильнике
// fridgeFood.push("вилка", "ложка");

// console.log(fridge.getFood()); // внутри по-прежнему: котлета, сок, варенье




// Добавьте методы в холодильник
// важность: 5
// Добавьте в холодильник методы:

// Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
// Публичный метод removeFood(item), который удаляет еду item из холодильника.
// Код для проверки:

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood({
//   title: "котлета",
//   calories: 100
// });
// fridge.addFood({
//   title: "сок",
//   calories: 30
// });
// fridge.addFood({
//   title: "зелень",
//   calories: 10
// });
// fridge.addFood({
//   title: "варенье",
//   calories: 150
// });

// fridge.removeFood("нет такой еды"); // без эффекта
// alert( fridge.getFood().length ); // 4

// var dietItems = fridge.filterFood(function(item) {
//   return item.calories < 50;
// });

// dietItems.forEach(function(item) {
//   alert( item.title ); // сок, зелень
//   fridge.removeFood(item);
// });

// alert( fridge.getFood().length ); // 2
// В качестве исходного кода используйте решение предыдущей задачи.

// function Machine(power) {
//     this._power = power;
//     this._enabled = false;

//     var self = this;

//     this.enable = function () {
//         self._enabled = true;
//     };
//     this.disable = function () {
//         self._enabled = false;
//     };
// }

// function Fridge(power) {
//     Machine.apply(this, arguments);
//     var food = [];
//     function checkCapacity() {
//         if (food.length < power / 100) {
//             return true;
//         }
//         return false;
//     }

//     this.addFood = function () {
//         if (!this._enabled) {
//             throw new Error('Ошибка, холодильник выключен.');
//         }
//         for (var i = 0; i < arguments.length; i++) {
//             if (!checkCapacity()) {
//                 throw new Error('Ошибка, слишком много еды.');
//             }
//             food.push(arguments[i]);
//         }
//     };
//     this.getFood = function () {
//         return food.slice();
//     };
//     this.filterFood = function (func) {
//         return food.filter(func);
//     };
//     this.removeFood = function (item) {
//         var index = food.indexOf(item);
//         if (index != -1) {
//             food.splice(index, 1);
//         }
//     }
// }

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood({
//     title: "котлета",
//     calories: 100
// });
// fridge.addFood({
//     title: "сок",
//     calories: 30
// });
// fridge.addFood({
//     title: "зелень",
//     calories: 10
// });
// fridge.addFood({
//     title: "варенье",
//     calories: 150
// });

// fridge.removeFood("нет такой еды"); // без эффекта
// console.log(fridge.getFood().length); // 4

// var dietItems = fridge.filterFood(function (item) {
//     return item.calories < 50;
// });

// dietItems.forEach(function(item) {
//     console.log(item.title);
//     fridge.removeFood(item);
// });

// console.log(fridge.getFood().length);




// Переопределите disable
// важность: 5
// Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.

// Код для проверки:

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("кус-кус");
// fridge.disable(); // ошибка, в холодильнике есть еда
// В качестве исходного кода используйте решение предыдущей задачи.

// function Machine(power) {
//     this._power = power;
//     this._enabled = false;

//     var self = this;

//     this.enable = function () {
//         self._enabled = true;
//     };
//     this.disable = function () {
//         self._enabled = false;
//     };
// }

// function Fridge(power) {
//     Machine.apply(this, arguments);
//     var food = [];
//     function checkCapacity() {
//         if (food.length < power / 100) {
//             return true;
//         }
//         return false;
//     }

//     this.addFood = function () {
//         if (!this._enabled) {
//             throw new Error('Ошибка, холодильник выключен.');
//         }
//         for (var i = 0; i < arguments.length; i++) {
//             if (!checkCapacity()) {
//                 throw new Error('Ошибка, слишком много еды.');
//             }
//             food.push(arguments[i]);
//         }
//     };
//     this.getFood = function () {
//         return food.slice();
//     };
//     this.filterFood = function (func) {
//         return food.filter(func);
//     };
//     this.removeFood = function (item) {
//         var index = food.indexOf(item);
//         if (index != -1) {
//             food.splice(index, 1);
//         }
//     }
//     var parentDisable = this.disable;
//     this.disable = function() {
//         if (food.length !== 0) {
//             throw new Error('Ошибка, в холодильнике есть еда');
//         }
//         parentDisable();
//     }
// }

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("кус-кус");
// fridge.disable(); // ошибка, в холодильнике есть еда