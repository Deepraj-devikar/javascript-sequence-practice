function twoDigitValue(){
    return Math.floor(Math.random() * 100 % 90 + 10);
}

let array = [];
for(let i = 0; i < 5; i++){
    array[i] = twoDigitValue();
}
sum = array.reduce((total, element) => {
    return total += element;
})
console.log("Five random values are ", array);
console.log("Sum of these five values is ", sum);
console.log("Average of these five values is ", sum/5);