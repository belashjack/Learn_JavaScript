'use strict';
// Счетчик объектов
// важность: 5
// Добавить в конструктор Article:

// Подсчёт общего количества созданных объектов.
// Запоминание даты последнего созданного объекта.
// Используйте для этого статические свойства.

// Пусть вызов Article.showStats() выводит то и другое.

// Использование:

// function Article() {
//   this.created = new Date();
//   // ... ваш код ...
// }

// new Article();
// new Article();

// Article.showStats(); // Всего: 2, Последняя: (дата)

// new Article();

// Article.showStats(); // Всего: 3, Последняя: (дата)

// function Article() {
//     this.created = new Date();
//     Article.number++;
//     Article.last = this.created;
// }

// Article.showStats = function() {
//     console.log('Всего: ' + Article.number + ', Последняя:' + Article.last);
// }

// Article.number = 0;
// new Article();
// new Article();
// Article.showStats(); // Всего: 2, Последняя: (дата)
// new Article();
// Article.showStats(); // Всего: 3, Последняя: (дата)