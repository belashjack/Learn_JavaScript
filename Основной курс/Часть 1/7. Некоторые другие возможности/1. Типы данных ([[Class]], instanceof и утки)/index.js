'use strict';
// Полиморфная функция formatDate
// важность: 5
// Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.
// Ее первый аргумент должен содержать дату в одном из видов:

// 1. Как объект Date.
// 2. Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
// 3. Как число секунд с 01.01.1970.
// 4. Как массив [гггг, мм, дд], месяц начинается с нуля
// Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.

// Пример работы:

// function formatDate(date) { /* ваш код */ }

// alert( formatDate('2011-10-02') ); // 02.10.11
// alert( formatDate(1234567890) ); // 14.02.09
// alert( formatDate([2014, 0, 1]) ); // 01.01.14
// alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

// function formatDate(date) {
//     if (date.getYear) {
//         var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//         var mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
//         var yy = date.getFullYear() % 100 === 0 ? '0' + date.getFullYear() % 100: date.getFullYear() % 100;
//         return dd + '.' + mm + '.' + yy;
//     }
//     if (typeof date === 'string') {
//         date = new Date(date);
//         var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//         var mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
//         var yy = date.getFullYear() % 100 === 0 ? '0' + date.getFullYear() % 100: date.getFullYear() % 100;
//         return dd + '.' + mm + '.' + yy;
//     }
//     if (typeof date === 'number') {
//         date = new Date(date);
//         var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//         var mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
//         var yy = date.getFullYear() % 100 === 0 ? '0' + date.getFullYear() % 100: date.getFullYear() % 100;
//         return dd + '.' + mm + '.' + yy;
//     }
//     if (Array.isArray(date)) {
//         var dd = date[2] < 10 ? '0' + date[2] : date[2];
//         var mm = date[1] + 1 < 10 ? '0' + (date[1] + 1) : date[1] + 1;
//         var yy = date[0] % 100 === 0 ? '0' + date[0] % 100: date[0] % 100;
//         return dd + '.' + mm + '.' + yy;
//     }
// }

// console.log(formatDate(new Date(2014, 0, 1))); // 01.01.14
// console.log(formatDate('2011-10-02')); // 02.10.11
// console.log(formatDate(1234567890)); // 14.02.09
// console.log(formatDate([2014, 0, 1])); // 01.01.14
