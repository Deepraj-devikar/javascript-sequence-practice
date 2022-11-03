function DiceRoll(){
    return Math.floor(Math.random() * 10 % 6 + 1);
}

console.log("Dice roll and got ", DiceRoll());