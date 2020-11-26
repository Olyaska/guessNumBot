'use strict';
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const guessNum = function() { 
    const random = Math.ceil(Math.random()*100);
    console.log(random);
    let userTry = prompt('Угадай число от 1 до 100');

    const checkUserAnswer = function() {
        if (userTry === null) {
            alert('Игра окончена!');
        } else {
            while (!isNumber(userTry)) { 
                userTry = prompt('Введи число!');
            }
            
            if (userTry > random) {
                userTry = prompt('Загаданное число меньше');
                checkUserAnswer();
            } else if (userTry < random) {
                userTry = prompt('Загаданное число больше');
                checkUserAnswer();
            } else {
                alert('Поздравляю, Вы угадали!!!');
            }
        }
    };

    return checkUserAnswer();
};

const start = guessNum;
start();