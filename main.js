'use strict'

// ? Запитай у користувача його вік і визначи, ким він є: дитиною (0-12), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let userAgeStart = true;

while (userAgeStart) {
        let userAge = prompt('Вкажи свій вік', '');
        if (userAge === null) {
            userAgeStart = false;
        } else if (+userAge !== +userAge) {
            alert('Вкажи данні в форматі число');
        } else {
            userAge = +userAge;
            if (userAge > 0 && userAge <= 12) {
                alert('Дитина');
                userAgeStart = false;
            } else if (userAge > 12 && userAge <= 18) {
                alert('Підліток');
                userAgeStart = false;
            } else if (userAge > 18 && userAge <= 60) {
                alert('Дорослий');
                userAgeStart = false;
            } else if (userAge > 60) {
                alert('Пенсіонер');
                userAgeStart = false;
            }
        }
    }