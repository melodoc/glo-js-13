'use strict';

//first part

let arr = ['2254', '341531', '455313', '54645', '445343', '543415', '32212323'];

arr.forEach(function (element) {
    if (element.startsWith('2') || element.startsWith('4')) {
        console.log(element);
    }
});

//second part

let primeNums = function () {

    for (let i = 2; i <= 100; i++) {
        let count = 0;
        for (let j = 2; j <= i; j++) {
            if (i % j !==0 ) { 
                continue; 
            }
            count++;
        }

        if (count === 1)  {
            console.log(i + `. Делители этого числа: 1 и ${i}`);
        }
    }
};

primeNums();
