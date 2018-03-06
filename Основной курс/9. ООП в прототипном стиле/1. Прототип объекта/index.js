'use strict';
// Алгоритм для поиска
// важность: 5
// Есть объекты:
// var head = {
//     glasses: 1
// };
// var table = {
//     pen: 3
// };
// var bed = {
//     sheet: 1,
//     pillow: 2
// };
// var pockets = {
//     money: 2000
// };
// Задание состоит из двух частей:
// Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего - либо шёл по алгоритму pockets -> bed -> table -> head.
// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.
// После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses ? Попробуйте протестировать.

// var head = {
//     glasses: 1
// };
// var table = {
//     pen: 3,
//     __proto__: head
// };
// var bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
// var pockets = {
//     money: 2000,
//     __proto__: bed
// };
// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(table.money);

// console.time('pockets.glasses');
// for (var i = 0; i < 10000000; i++) {
//     pockets.glasses;
// }
// console.timeEnd('pockets.glasses');

// console.time('head.glasses');
// for (var i = 0; i < 10000000; i++) {
//     head.glasses;
// }
// console.timeEnd('head.glasses');