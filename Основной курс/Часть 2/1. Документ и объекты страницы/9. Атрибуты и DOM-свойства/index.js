'use strict'
// Получите пользовательский атрибут
// важность: 5
// 1. Получите div в переменную.
// 2. Получите значение атрибута "data-widget-name" в переменную.
// 3. Выведите его.
// Документ:

// <body>
//   <div id="widget" data-widget-name="menu">Выберите жанр</div>
//   <script>
//     /* ... */
//   </script>
// </body>


// let div = document.querySelector('#widget');
// console.log(div);
// let attribute = div.getAttribute('data-widget-name');
// console.log(attribute);





// Поставьте класс ссылкам
// важность: 3
// Сделайте желтыми внешние ссылки, добавив им класс external.

// Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.

//  <style>
//   .external {
//     background-color: yellow
//   }
// </style>

// <a name="list">список</a>
// <ul>
//   <li><a href="http://google.com">http://google.com</a></li>
//   <li><a href="/tutorial">/tutorial.html</a></li>
//   <li><a href="local/path">local/path</a></li>
//   <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
//   <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//   <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>


// let externalLinks = document.querySelectorAll('a[href*="://"]:not([href^="http://internal.com"])');
// for (let i = 0; i < externalLinks.length; i++) {
//     externalLinks[i].classList.add('external');
// }