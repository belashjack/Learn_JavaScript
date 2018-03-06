'use strict';
// Получить последний элемент массива
// важность: 5
// Как получить последний элемент из произвольного массива?
// У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
// Напишите код для получения последнего элемента goods.

// var goods = [1, 'two', true, 47];
// console.log(goods[goods.length-1]);



// Добавить новый элемент в массив
// важность: 5
// Как добавить элемент в конец произвольного массива?
// У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».

// var goods = [1, 'two', true, 47];
// goods[goods.length] = 'Компьютер';
// console.log(goods);



// Создание массива
// важность: 5
// Задача из 5 шагов-строк:
// Создайте массив styles с элементами «Джаз», «Блюз».
// Добавьте в конец значение «Рок-н-Ролл»
// Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
// Удалите первое значение массива и выведите его alert.
// Добавьте в начало значения «Рэп» и «Регги».

// var styles = ['Jazz', 'Blues'];
// console.log(styles);
// styles.push('Rock-n-Roll');
// console.log(styles);
// styles[styles.length-2] = 'Classic';
// console.log(styles);
// alert(styles.shift());
// console.log(styles);
// styles.unshift('Rap', 'Reggae');
// console.log(styles);



// Получить случайное значение из массива
// важность: 3
// Напишите код для вывода alert случайного значения из массива.

// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

// console.log(getRandomElement(arr));

// function getRandomElement(arr) {
//     return arr[getRandomNumber(0, arr.length-1)];
// }

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }



// Создайте калькулятор для введённых значений
// важность: 4
// Напишите код, который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива

// var arr = [];
// var value = prompt('Enter value:');
// console.log(value !== null && !isNaN(+value));
// while (value !== '' && value !== null && !isNaN(+value)) {
//     arr.push(+value);
//     value = prompt('Enter value:');
// }

// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);




// Поиск в массиве
// важность: 3
// Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

// var arr = ["test", 2, 1.5, false];

// console.log(find(arr, false));

// function find(arr, value) {
//     for ( var i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// }




// Фильтр диапазона
// важность: 3
// Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

// var arr = [5, 4, 3, 8, 0];
// var newArr = filter(arr, 1, 3);
// console.log(newArr);
// console.log(arr);

// function filter(arr, a, b) {
//     return arr.slice(a, b+1);
// }