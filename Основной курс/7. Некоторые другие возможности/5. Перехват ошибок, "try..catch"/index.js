'use strict';
// Eval-калькулятор с ошибками
// важность: 5
// Напишите интерфейс, который принимает математическое выражение (в prompt) и результат его вычисления через eval.

// При ошибке нужно выводить сообщение и просить переввести выражение.

// Ошибкой считается не только некорректное выражение, такое как 2+, но и выражение, возвращающее NaN, например 0/0.
// !!!!!!!!!!!!!! сделал похожее,просто чтобы понять try...catch, вычисление через eval не делал.

// while (true) {
//     var answer = prompt('Enter math expression:');
//     if (answer === null) {
//         break;
//     }
//     var result = eval("+answer");
//     try {
//         if (isNaN(result)) {
//             throw new Error;
//         }
//         break;
//     } catch (error) {
//         console.log('Ошибка ' + error.name);
//     }
// }

// console.log(result);