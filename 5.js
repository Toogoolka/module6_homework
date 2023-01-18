// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.


let num1 = 5;
let num2 = 2;

const mathRes = (x, n) => {
    let result = x;
    for(let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

console.log(`Число ${num1} в степени ${num2} равняется: ${mathRes(num1,num2)}`)