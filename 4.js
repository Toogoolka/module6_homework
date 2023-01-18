// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная
// от первого и заканчивая вторым. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15.
// Каждую секунду в консоль должно печататься число, начиная
// с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).


let inNum = 5;
let outNum = 15;
function timer(a, b){
    let counter = a;
    const intervalTimer = setInterval(function (a) {
        console.log(counter);
        counter++;
    }, 1000, a, b);
    setTimeout(function () {
        clearInterval(intervalTimer)
    }, (b-a+1)*1000);
}
timer(inNum, outNum)