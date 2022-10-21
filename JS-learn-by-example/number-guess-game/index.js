const answer = Math.floor(Math.random() * 10 + 1); // random number with 10 inclusive
let guesses = 0;

document.getElementById("submitButton").onclick = function (){

  let guess = document.getElementById("guessField").value
  guesses+=1; //keeps track of guess time trial
  
  if(guess == answer){
    alert(`${answer} is the #. It took you ${guesses} guesses`); //pop up
  }
  else if(guess < answer){
    alert("Too small!");
  }
  else{
    alert("Too large!");
  }
}