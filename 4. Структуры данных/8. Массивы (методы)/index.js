'use strict';
// Добавить класс в строку
// важность: 5
// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
// var obj = {
//   className: 'open menu'
// }
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
// alert( obj.className ); || "open menu new me"
// P.S. Ваша функция не должна добавлять лишних пробелов.

// var obj = {
//     className: ''
// };

// addClass(obj, 'contacts');
// addClass(obj, 'menu');
// addClass(obj, 'menu2');
// console.log(obj);

// function addClass(obj, newClassName) {
//     var classNamesArray = obj['className'].split(' ');
//     for (var i = 0; i < classNamesArray.length; i++) {
//         if (classNamesArray[i] === newClassName) {
//             return;
//         }
//     }
//     classNamesArray.push(newClassName);
//     obj['className'] = classNamesArray.join(' ');
// }



// Перевести текст вида border-left-width в borderLeftWidth
// важность: 3
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть, дефисы удаляются, а все слова после них получают заглавную букву.

// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

// function camelize(str) {
//     var strArray = str.split('-');
//     for (var i = 1; i < strArray.length; i++) {
//         strArray[i] = strArray[i].charAt(0).toUpperCase(0) + strArray[i].slice(1);
//     }
//     return strArray.join('');
// }




// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
// var obj = {
//   className: 'open menu'
// };
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
// removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
// obj = {
//   className: 'my menu menu'
// };
// removeClass(obj, 'menu');
// alert( obj.className ); // 'my'
// Лишних пробелов после функции образовываться не должно.

// var obj = {
//   className: 'open menu open open open open'
// };
// console.log(obj);
// console.log(removeClass(obj, 'open'));

// function removeClass(obj, classToDelete) {
//     var classNamesArray = obj.className.split(' ');
//     for (let i = 0; i < classNamesArray.length; i++) {
//         if (classNamesArray[i] === classToDelete) {
//             classNamesArray.splice(i, 1);
//             obj.className = classNamesArray.join(' ');
//             i--;
//         }
//     }
//     return obj;
// }




// Фильтрация массива "на месте"
// важность: 4
// Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать.

// var arr = [5, 3, 8, 1, 9, 4, 2, 1, -3];

// console.log(arr);
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }




// Сортировать в обратном порядке
// важность: 5
// Как отсортировать массив чисел в обратном порядке?

// var arr = [5, 2, 1, -10, 8];

// console.log(arr);
// arr.sort(sortFunction);
// console.log(arr);

// function sortFunction(a, b) {
//     return b-a;
// };




// Скопировать и отсортировать массив
// важность: 5
// Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
// Исходный массив не должен меняться.
// Постарайтесь сделать код как можно короче.

// var arr = ["HTML", "JavaScript", "CSS"];

// console.log(arr);
// var arrSorted = arr.sort();
// console.log(arrSorted);




// Случайный порядок в массиве
// важность: 3
// Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке

// var arr = [1, 2, 3, 4, 5];

// console.log(arr);
// arr.sort(sortFunction);
// console.log(arr);

// function sortFunction(a, b) {
//     return Math.random() - 0.5;
// }




// Сортировка объектов
// важность: 5
// Напишите код, который отсортирует массив объектов people по полю age.
// Например:
// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };
// var people = [ vasya , masha , vovochka ];
// ... ваш код ...
// || теперь people: [vovochka, masha, vasya]
// alert(people[0].age) // 6
// Выведите список имён в массиве после сортировки.

// var vasya = {
//     name: "Вася",
//     age: 18
// };
// var masha = {
//     name: "Маша",
//     age: 23
// };
// var vovochka = {
//     name: "Вовочка",
//     age: 6
// };

// var people = [vasya, masha, vovochka];

// console.log(people);
// people.sort(sortFunction);
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name);
// }

// function sortFunction(a, b) {
//     return a.age - b.age;
// }




// Вывести односвязный список
// важность: 5
// Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
// Напишите функцию printList(list) при помощи рекурсии.
// Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
// Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.

var list = {
    value: 1
}
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// просто
// printList(list);

// рекурсия
// printList(list);

// рекурсия в обратном порядке
// printReverseList(list);

// в обратном порядке без рекурсии
// printReverseList(list);

// просто
// function printList(list) {
//     var tmp = list;
//     while (tmp) {
//         console.log(tmp.value);
//         tmp = tmp.next;
//     }
// }

// рекурсия
// function printList(list) {
//     console.log(list.value);
//     if (list.next) {
//         printList(list.next);
//     }
// }

// рекурсия в обратном порядке
// function printReverseList(list) {
//     if (list.next !== undefined) {
//         printReverseList(list.next);
//     }
//     console.log(list.value);
// }

// в обратном порядке без рекурсии
// function printReverseList(list) {
//     var arrayOfValues = [];
//     var tmp = list;
//     while (tmp) {
//         arrayOfValues.push(tmp.value);
//         tmp = tmp.next;
//     }
//     for (var i = arrayOfValues.length - 1; i >= 0; i--) {
//         console.log(arrayOfValues[i]);
//     }
// }




// Отфильтровать анаграммы
// важность: 3
// Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
// воз - зов
// киборг - гробик
// корсет - костер - сектор
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.




// Оставить уникальные элементы массива
// важность: 3
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:
// function unique(arr) {
//   /* ваш код */
// }
// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];
// alert( unique(strings) ); // кришна, харе, 8-()

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

console.log(unique(strings));

function unique(arr) {
    var used = [];
    for (var i = 0; i < arr.length; i++) {
        if (used.indexOf(arr[i]) === -1) {
           used.push(arr[i]);
        } else {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}