function DiceRoll(){
    return Math.floor(Math.random() * 10 % 6 + 1);
}

let dice1 = DiceRoll();
let dice2 = DiceRoll();
console.log("Dice 1 is ", dice1, ", Dice 2 is ", dice2, ", Addition of 2 dice is ", (dice1 + dice2));