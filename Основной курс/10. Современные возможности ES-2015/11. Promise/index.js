'use strict';
// Промисифицировать setTimeout
// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.

// Пример использования:
// delay(1000)
//   .then(() => alert("Hello!"))
// Такая функция полезна для использования в других промис-цепочках.

// Вот такой вызов:
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     doSomeThing();
//     resolve();
//   }, ms)
// });

// Станет возможным переписать так:
// return delay(ms).then(doSomething);


// function delay(ms) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(resolve, ms);
//     })
// }

// delay(1000).then(() => console.log('Hello!'));



// Загрузить массив последовательно
// Есть массив URL:
//  'use strict';
// let urls = [
//   'user.json',
//   'guest.json'
// ];
// Напишите код, который все URL из этого массива загружает – один за другим (последовательно), и сохраняет в результаты в массиве results, а потом выводит.
// Вариант с параллельной загрузкой выглядел бы так:
// Promise.all( urls.map(httpGet) )
//   .then(alert);
// В этой задаче загрузку нужно реализовать последовательно.


// let urls = [
//     'user.json',
//     'guest.json'
// ];
// let results = [];

// urls.forEach(url => {
//     Promise.resolve()
//     .then(() => httpGet(url))
//     .then((result) => {
//         results.push(result)
//     });
// });

// Promise.resolve().then(() => {
//     console.log(results);
// })

// function httpGet(url) {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//         xhr.onload = function () {
//             if (this.status == 200) {
//                 resolve(this.response);
//             } else {
//                 var error = new Error(this.statusText);
//                 error.code = this.status;
//                 reject(error);
//             }
//         };
//         xhr.onerror = function () {
//             reject(new Error("Network Error"));
//         };
//         xhr.send();
//     });
// }