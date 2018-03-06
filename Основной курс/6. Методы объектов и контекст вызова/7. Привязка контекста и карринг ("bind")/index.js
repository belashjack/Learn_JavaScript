'use strict';
// Использование функции вопросов
// важность: 5
// Вызов user.checkPassword() в коде ниже должен, при помощи ask, спрашивать пароль и вызывать loginOk/loginFail в зависимости от правильности ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// "use strict";
// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   loginOk: function() {
//     alert( this.login + ' вошёл в сайт' );
//   },

//   loginFail: function() {
//     alert( this.login + ': ошибка входа' );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?", this.password, this.loginOk, this.loginFail);
//   }
// };

// user.checkPassword();
// P.S. Ваше решение должно также срабатывать, если переменная user будет перезаписана, например вместо user.checkPassword() в конце будут строки:
// var vasya = user;
// user = null;
// vasya.checkPassword();
// -----------------------------------------------------------------------

// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }

// var user = {
//     login: 'Василий',
//     password: '12345',

//     loginOk: function () {
//         alert(this.login + ' вошёл в сайт');
//     },

//     loginFail: function () {
//         alert(this.login + ': ошибка входа');
//     },

//     checkPassword: function () {
//         ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//     }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();




// Использование функции вопросов с каррингом
// важность: 5
// Эта задача – усложнённый вариант задачи Использование функции вопросов. В ней объект user изменён.
// Теперь заменим две функции user.loginOk() и user.loginFail() на единый метод: user.loginDone(true/false), который нужно вызвать с true при верном ответе и с false – при неверном.
// Код ниже делает это, соответствующий фрагмент выделен.
// Сейчас он обладает важным недостатком: при записи в user другого значения объект перестанет корректно работать, вы увидите это, запустив пример ниже (будет ошибка).
// Как бы вы написали правильно?
// Исправьте выделенный фрагмент, чтобы код заработал.
// "use strict";

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   // метод для вызова из ask
//   loginDone: function(result) {
//     alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?", this.password,
//       function() {
//         user.loginDone(true);
//       },
//       function() {
//         user.loginDone(false);
//       }
//     );
//   }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();
// Изменения должны касаться только выделенного фрагмента.
// Если возможно, предложите два решения, одно – с использованием bind, другое – без него. Какое решение лучше?

// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }

// var user = {
//     login: 'Василий',
//     password: '12345',

//     loginDone: function (result) {
//         alert(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
//     },

//     checkPassword: function () {
//         ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
//     }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();