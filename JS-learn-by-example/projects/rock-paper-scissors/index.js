
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;     //players choice
let computer;   //computers choice
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent; // assigns texts content of button clicked to player
    computerTurn();
    playerText.textContent = `Player played: ${player}`;
    computerText.textContent = `Computer played: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1; // random number btwn 1 and 3

    switch(randNum){    // matching random number as computer choices
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}