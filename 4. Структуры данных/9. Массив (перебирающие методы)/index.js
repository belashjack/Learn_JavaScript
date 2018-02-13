'use strict';
// Перепишите цикл через map
// важность: 5
// Код ниже получает из массива строк новый массив, содержащий их длины:
// var arr = ["Есть", "жизнь", "на", "Марсе"];
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }
// alert( arrLength ); // 4,5,2,5
// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.

// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var newArr = arr.map(function (elem) {
//     return elem.length;
// });

// console.log(newArr);




// Массив частичных сумм
// важность: 2
// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.

// var arr = [1, 2, 3, 4, 5];

// var newArr = getSums(arr);

// console.log(newArr);

// function getSums(arr) {
//     var result = [];


//     var totalSum = arr.reduce(function reduceFunction(sum, current, i, arr) {
//         result.push(sum);
//         return sum + current;
//     });

//     result.push(totalSum);

//     return result;
// }