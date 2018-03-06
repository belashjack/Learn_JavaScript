'use strict';
// Превратите объект в JSON
// важность: 3
// Превратите объект leader из примера ниже в JSON:

// var leader = {
//   name: "Василий Иванович",
//   age: 35
// };
// После этого прочитайте получившуюся строку обратно в объект.

// var leader = {
//     name: "Василий Иванович",
//     age: 35
// };

// var leaderInJSON = JSON.stringify(leader);
// leader = JSON.parse(leaderInJSON);

// console.log(leader);




// Превратите объекты со ссылками в JSON
// важность: 3
// Превратите объект team из примера ниже в JSON:

// var leader = {
//   name: "Василий Иванович"
// };

// var soldier = {
//   name: "Петька"
// };

// // эти объекты ссылаются друг на друга!
// leader.soldier = soldier;
// soldier.leader = leader;

// var team = [leader, soldier];
// 1. Может ли это сделать прямой вызов JSON.stringify(team)? Если нет, то почему?
// 2. Какой подход вы бы предложили для чтения и восстановления таких объектов?

// var leader = {
//     name: "Василий Иванович"
// };

// var soldier = {
//     name: "Петька"
// };

// leader.soldier = soldier;
// soldier.leader = leader;

// console.log(leader, soldier);
// var team = [leader, soldier];
// console.log(JSON.stringify(team, function(key, value) {
//     if (key === 'leader' || key === 'soldier') {
//         return undefined;
//     }
//     return value;
// })); - но это решение неправильное. Лучше тебе, Женя, создать свою функцию toJSON