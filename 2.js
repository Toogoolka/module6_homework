
let inputNum = +prompt("Enter your number:")

function getValidNumber(number){
    if(number === 1 || number === 0){
        console.log("0 and 1 aren't prime numbers")
        return false
    }else if(number > 1000 || number < 0){
        console.log("input number is incorrect")
        return false
    } else {
        return true
    }
}


function getPrimeNumber(number) {
    if (getValidNumber(number) == false){
        return false;
    }else {
        let counterNumber = 0;
        for (let i = 1; i < 1001;i++){
            if(number%i === 0){
                counterNumber++;
            } else {
                continue;
            }
        }
        if(counterNumber === 2){
            return true;
        }else {
            console.log("The number isn't prime")
            return false
        }
    }
}

if (getPrimeNumber(inputNum) == true) {
    console.log("The number is prime")
}

