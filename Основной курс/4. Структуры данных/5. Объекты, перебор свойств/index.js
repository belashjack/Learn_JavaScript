'use strict';
// Определите, пуст ли объект
// важность: 5
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

// var obj = {
//     "1": 'one',
// }
// console.log(isEmpty(obj));
// function isEmpty(obj) {
//     for (var key in obj) {
//         return false;
//     }
//     return true;
// }



// Сумма свойств
// важность: 5
// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0

// var salaries = new Object();
// salaries['Вася'] = 400;
// salaries['Петя'] = 0;
// salaries['Даша'] = 3000;

// var sum = 0;
// for (var key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);



// Свойство с наибольшим значением
// важность: 5
// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников»

// var salaries = {
//     'Вася': 400,
//     'Петя': 0,
//     'Даша': 4000
// };

// var max = -1;
// var maxName = '';
// for (var key in salaries) {
//     if (salaries[key] >= max) {
//         max = salaries[key];
//         maxName = key;
//     }
// }
// console.log(max !== -1 ? maxName : 'нет сотрудников');



// Умножьте численные свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2
// P.S. Для проверки на число используйте функцию:
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

var obj = {
    width: 200,
    height: 300,
    title: "My menu"
}
console.log(multiplyNumeric(obj));

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
    return obj;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }