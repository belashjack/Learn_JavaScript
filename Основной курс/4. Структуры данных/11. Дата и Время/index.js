'use strict';
// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
// Временная зона – местная. Выведите его на экран.

// var date = new Date(2012, 1, 20, 3, 12);
// console.log(date);




// Имя дня недели
// важность: 5
// Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
// Например:
// var date = new Date(2012,0,3);  // 3 января 2012
// alert( getWeekDay(date) );      // Должно вывести 'вт'

// var date = new Date(365447586);

// getWeekDay(date);

// function getWeekDay(date) {
//     var daysNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//     console.log(daysNames[date.getDay()]);
// }




// День недели в европейской нумерации
// важность: 5
// Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
// День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
// var date = new Date(2012, 0, 3);  // 3 янв 2012
// alert( getLocalDay(date) );       // вторник, выведет 2

// var date = new Date(2012, 0, 7);
// console.log(getLocalDay(date));

// function getLocalDay(date) {
//     if (date.getDay() === 7) {
//         return 0;
//     }
//     return date.getDay() + 1;
// }




// День указанное количество дней назад
// важность: 4
// Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
// Например, для 2 января 2015:
// var date = new Date(2015, 0, 2);
// alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
// P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.

// var date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));

// function getDateAgo(date, daysAgo) {
//     var dateCopy = new Date(date);
//     dateCopy.setDate(dateCopy.getDate() - daysAgo);
//     return dateCopy.getDate();
// }




// Последний день месяца?
// важность: 5
// Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
// Параметры:
// year – 4-значный год, например 2012.
// month – месяц от 0 до 11.
// Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// console.log(getLastDayOfMonth(2012, 0));
// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth(2013, 1));

// function getLastDayOfMonth(year, month) {
//     return new Date(year, month+1, 0).getDate();
// }




// Сколько секунд уже прошло сегодня?
// важность: 5
// Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
// Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// console.log(getSecondsToday());

// function getSecondsToday() {
//     var now = new Date();
//     return Math.floor((now - new Date(now.getFullYear(), now.getMonth(), now.getDate()))/1000);
// }




// Сколько секунд - до завтра?
// важность: 5
// Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// console.log(getSecondsToTomorrow());

// function getSecondsToTomorrow() {
//     var now = new Date();
//     return Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()+1) - now)/1000);
// }




// Вывести дату в формате дд.мм.гг
// важность: 3
// Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
// Например:
// var d = new Date(2014, 0, 30); // 30 января 2014
// alert( formatDate(d) ); // '30.01.14'
// P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.

// var date = new Date(2014, 0, 30);
// formatDate(date);

// function formatDate(date) {
//     var dd = date.getDate();
//     if (dd < 10) {
//         dd = '0' + dd;
//     }
//     var mm = date.getMonth() + 1;
//     if (mm < 10) {
//         mm = '0' + mm;
//     }
//     var yy = date.getFullYear();
//     yy = yy.toString().slice(2);
//     console.log(dd + '.' + mm + '.' + yy);
// }




// Относительное форматирование даты
// важность: 4
// Напишите функцию formatDate(date), которая форматирует дату date так:
// Если со времени date прошло менее секунды, то возвращает "только что".
// Иначе если со времени date прошло менее минуты, то "n сек. назад".
// Иначе если прошло меньше часа, то "m мин. назад".
// Иначе полная дата в формате "дд.мм.гг чч:мм".
// Например:
// function formatDate(date) { /* ваш код */ }
// alert( formatDate(new Date(new Date - 1)) ); // "только что"
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"

// console.log(formatDate(new Date(new Date - 1000*60*192)));

// function formatDate(date) {
//     var diff = Date.now() - date;
//     console.log(diff);
//     if (diff < 1000) {
//         return 'только что';
//     } else if (diff < 1000*60) {
//         return Math.floor(diff/1000) + ' секунд назад';
//     } else if (diff < 1000*60*60) {
//         return Math.floor(diff/(1000*60)) + ' минут назад';
//     } else {
//         var d = date;
//         d = ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + 
//             ('' + d.getFullYear()).slice(-2) + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
//         return d;
//     }
// }