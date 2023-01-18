function sum(x) {            //Написать функцию, которая принимает число как аргумент и возвращает функцию
    return function(y) {     //которая также принимает число как аргумент и возвращает сумму этих двух чисел.
        return x + y;
    };
}
let num1 = +prompt("enter x:");
let num2 = +prompt("enter y:");

console.log(sum(num1)(num2));
alert(`Sum result: ${sum(num1)(num2)}`);