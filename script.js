'use strict';
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const quit = function() {
    alert('Игра окончена! До свидания!');
};

const guessNum = function() { 
    const random = Math.ceil(Math.random()*100);
    console.log('random: ', random);
    
    let attempts = 10;
    let userTry = prompt('Угадай число от 1 до 100');

    const checkUserAnswer = function() {
        if (userTry === null) {
            quit();

        } else {
            while (!isNumber(userTry)) { 
                userTry = prompt('Введи число!');
            }
            
            let finish;
            if (+userTry === random) {
                finish = confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?');
                if (finish === true) {
                    start();
                }
            } else {
                while (attempts-- > 0) {
                    if (userTry > random) {
                        userTry = prompt('Загаданное число меньше. Осталось ' + attempts + ' попыток');
                        checkUserAnswer();
                    } else if (userTry < random) {
                        userTry = prompt('Загаданное число больше. Осталось ' + attempts + ' попыток');
                        checkUserAnswer();
                    }
                } 
                finish = confirm('Попытки закончились! Хотите сыграть еще?'); // не могу понять, как выйти: Когда нажимаю ок на 'Игра окончена! До свидания!'Б все равно возвращается в эту строчку.
                if (finish === true) {
                    start();
                } else {
                    quit();
                }
            }
        }
    };

    return checkUserAnswer();
};

const start = guessNum;
start();
