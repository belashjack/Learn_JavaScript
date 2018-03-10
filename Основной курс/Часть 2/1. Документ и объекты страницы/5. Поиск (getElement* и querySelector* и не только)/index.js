'use strict'
// Поиск элементов
// важность: 4
// Ниже находится документ с таблицей и формой.

// Найдите (получите в переменную) в нём:

// Все элементы label внутри таблицы. Должно быть 3 элемента.
// Первую ячейку таблицы (со словом "Возраст").
// Вторую форму в документе.
// Форму с именем search, без использования её позиции в документе.
// Элемент input в форме с именем search. Если их несколько, то нужен первый.
// Элемент с именем info[0], без точного знания его позиции в документе.
// Элемент с именем info[0], внутри формы с именем search-person.


// console.log(document.querySelector('table').querySelectorAll('label'));
// console.log(document.getElementById('age-table').rows[0].cells[0]);
// console.log(document.querySelectorAll('form')[1]);
// console.log(document.querySelector('form[name="search"]'));
// console.log(document.querySelector('form[name="search"] input'));
// console.log(document.getElementsByName('info[0]')[0]);
// console.log(document.querySelector('form[name="search-person"] [name="info[0]"]'))





// Дерево
// важность: 5
// Есть дерево из тегов <ul>/<li>.

// Напишите код, который для каждого элемента <li> выведет:

// Текст непосредственно в нём (без подразделов).
// Количество вложенных в него элементов <li> – всех, с учётом вложенных.


// let lis = document.querySelectorAll('li');

// for (let i = 0; i < lis.length; i++) {
//     console.log(lis[i].firstChild.data.trim(), lis[i].querySelectorAll('li').length);
// }