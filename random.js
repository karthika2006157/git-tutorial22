let computerMove;
let randomValue=Math.random();
console.log(randomValue);
if(randomValue >= 0 && randomValue < 1/3){
    
    computerMove="Rock";

}else if(randomValue >= 1/3 && randomValue < 2/3){
    computerMove="papers";
}
else{
    computerMove='Scissors';
}
console.log(computerMove);