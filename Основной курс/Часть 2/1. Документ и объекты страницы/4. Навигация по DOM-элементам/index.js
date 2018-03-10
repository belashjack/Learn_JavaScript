// DOM children
// важность: 5
// Для страницы:

// <!DOCTYPE HTML>
// <html>
// <head>
//   <meta charset="utf-8">
// </head>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Маша</li>
//     <li>Вовочка</li>
//   </ul>
//   <!-- комментарий -->
//   <script>
//     // ... ваш код
//   </script>
// </body>
// </html>

// Напишите код, который получит элемент HEAD.
// Напишите код, который получит UL.
// Напишите код, который получит второй LI. Будет ли ваш код работать в IE8-, если комментарий переместить между элементами LI?


// console.log(document.head);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.children[1].children[1];);





// Выделите ячейки по диагонали
// важность: 5
// Напишите код, который выделит все ячейки в таблице по диагонали.

// Вам нужно будет получить из таблицы table все диагональные td и выделить их, используя код:

// // в переменной td DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';


// let table = document.body.firstElementChild;

// for (let i = 0; i < table.rows.length; i++) {
// 	td = table.rows[i].cells[i];
// 	td.style.backgroundColor = 'red';
// }
