'use strict';
// Добавить get/set-свойства
// важность: 5
// Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:

// function User(fullName) {
//   this.fullName = fullName;
// }

// var vasya = new User("Василий Попкин");
// Имя и фамилия всегда разделяются пробелом.
// Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

// var vasya = new User("Василий Попкин");

// // чтение firstName/lastName
// alert( vasya.firstName ); // Василий
// alert( vasya.lastName ); // Попкин

// // запись в lastName
// vasya.lastName = 'Сидоров';

// alert( vasya.fullName ); // Василий Сидоров
// Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set. Лишнее дублирование здесь ни к чему.

// function User(fullName) {
//     this.fullName = fullName;
//     Object.defineProperty(this, 'firstName', {get: function() {
//         return this.fullName.split(' ')[0];
//     }});
//     Object.defineProperty(this, 'lastName', {configurable: true, get: function() {
//         return this.fullName.split(' ')[1];
//     }});
//     Object.defineProperty(this, 'lastName', {set: function(value) {
//         this.fullName = this.firstName + ' ' + value;
//     }});
// }

// var vasya = new User("Василий Пупкин");

// console.log(vasya);
// console.log(vasya.firstName);
// console.log(vasya.lastName);
// vasya.lastName = 'Daniels';

// console.log(vasya.fullName);