'use strict';

const bookElement = document.querySelectorAll('.book');
bookElement[0].before(bookElement[1]);
bookElement[0].after(bookElement[4]);
bookElement[5].after(bookElement[2]);

const body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const adBlock = document.querySelector('.adv');
adBlock.remove();

const bookName = document.querySelectorAll('a');
bookName[2].textContent = 'Книга 3. this и Прототипы Объектов';

const bookChapter = document.querySelectorAll('li');

//boook 2
bookChapter[13].after(bookChapter[15]);
bookChapter[15].after(bookChapter[8]);
bookChapter[10].before(bookChapter[14]);
bookChapter[9].after(bookChapter[12]);

//boook 5
bookChapter[37].after(bookChapter[45]);
bookChapter[40].after(bookChapter[38]);
bookChapter[44].before(bookChapter[41]);

//boook 6
bookChapter[55].insertAdjacentHTML('afterend', 'Глава 8: За пределами ES6');