arrayRandom = [1,2,3,"filter", null, 6,0,8,"!"];
let countEven = 0;
let countOdd = 0;

function getEvenOdd(arr, even, odd){
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == "number") {
            if (arr[i] === 0) {
                console.log(arr[i]);
            }else if (arr[i] % 2 === 0){
                even++;
            }else if(arr[i] % 2 !==0){
                odd++;
            }
        }
    }
    console.log(`Четные: ${even}, Нечентные: ${odd}`);
}
getEvenOdd(arrayRandom, countEven, countOdd)