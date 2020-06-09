'use strict';

function processData(inputData) {
   
    if (!inputData || inputData === null || typeof inputData !== 'string') {
        return 'Вы ввели не строку';
    }

    let processString = inputData.trim();

    if (processString.length > 30) {
        processString = processString.substring(0, 30) + '...';
    }
    return processString;
}

let userString1 = 123456789012345678901234567890;
console.log(processData(userString1));

let userString2 = '   123456789012345678901234567890   ';
console.log(processData(userString2));

let userString3 = '123456789012345678901234567890kljj';
console.log(processData(userString3));

let userString4 = '123456789012345678901234567890';
console.log(processData(userString4));

let userString5 = '  1234567890123hthd45678901234567890  ';
console.log(processData(userString5));

let userString6 = true;
console.log(processData(userString6));

let userString7 = false;
console.log(processData(userString7));

let userString8 = null;
console.log(processData(userString8));

let userString9 = undefined;
console.log(processData(userString9));