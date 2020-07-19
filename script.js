'use strict';

let logo = document.querySelector('.cross'),
    reset = document.getElementById('reset'),
    start = document.getElementById('start');

let logoInterval,
    count = 0,
    requestId;

let logoAnimate = function() {

    logoInterval = requestAnimationFrame(logoAnimate);
    count++;

    const pageHeight = document.documentElement.clientHeight,
        logoHeight = logo.offsetHeight,
        resetHeight = reset.offsetHeight;

    const MAXHEIGHT = pageHeight - logoHeight - resetHeight;

    if (count < MAXHEIGHT) {
        logo.style.marginTop = count + 'px';
    } else {
        cancelAnimationFrame(logoInterval);
    }
};

let isAnimate = true;

start.addEventListener('click', () => {
    start.textContent = (start.textContent === 'Старт') ? 'Пауза' : 'Старт';

    if (isAnimate) {
        logoInterval = requestAnimationFrame(logoAnimate);
        isAnimate = false;
    } else {
        isAnimate = true;
        cancelAnimationFrame(logoInterval);
    }
});


reset.addEventListener('click', () => {
    count = 0;
    isAnimate = true;
    cancelAnimationFrame(logoInterval);

    logo.style.marginTop = '0';
    start.textContent  === 'Старт';
});
