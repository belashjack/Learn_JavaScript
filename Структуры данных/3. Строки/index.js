'use strict';
// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом:

// var str = "";
// console.log(ucFirst(str));

// function ucFirst(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }



// Проверьте спам
// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
// Функция должна быть нечувствительна к регистру

// var str = "Viagra motion orange wire zebra";

// console.log(checkSpam(str));

// function checkSpam(str) {
//     var upperCaseStr = str.toUpperCase();
//     var badWordsArray = ['VIAGRA', 'XXX'];
//     for ( var i = 0; i < badWordsArray.length; i++) {
//         if (upperCaseStr.indexOf(badWordsArray[i]) != -1) {
//             return true;
//         }
//     }
//     return false;
// }



// Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
// Результатом функции должна быть (при необходимости) усечённая строка

// var str = 'I feel adrenaline in my veins';
// console.log(truncate(str, 20));

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength-3) + '...';
//     }
//     return str;
// }


// Выделить число
// Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.

var str = '$120';

console.log(extractCurrencyValue(str));

function extractCurrencyValue(str) {
    return +str.slice(1);
}