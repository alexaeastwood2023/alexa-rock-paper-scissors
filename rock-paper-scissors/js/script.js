
/*a.  User makes a choice
 Start by first asking the user which option they want to pick.
 Three "keyup" listeners have been coded for you below.
 Declare the user's choice as a variable here below this line: */

console.log("Let's play Rock, Paper, Scissors!"); // this is the greeting
console.log("Press R, P, or S"); // instructions on how to proceed and play


//  Define the name of the user's variable where indicated inside function where indicated
let usersChoice; // our choice
let won = 0; // define won
let lost = 0; // define lost
let tied = 0; // define tied


// UsersChoice here 
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 82) {
    // Define user's variable here = "rock";
    usersChoice = "rock";
    scores()
  }
  else if (event.keyCode === 80) {
    // Define user's variable here = "paper";
    usersChoice = "paper";
    scores()
  }
  else if (event.keyCode === 83) {
    // Define user's variable here = "scissors";
    usersChoice = "scissors";
    scores()
  }
  else {
    // Define user's variable here = "Please press r, p, or s";
    console.log('You pressed an invaild key, please press R, P, or S to play');
  }


});

// this function is for the scores for compChoice and usersChoice and modularized my code
function scores() {
  let compPick = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * compPick.length); // Math.random will give you any random number and which this we have only 3 numbers to pick from.
  let compChoice = compPick[random]
  if (usersChoice === compChoice) { // this is for ALL the ties
    console.log(`You chose ${usersChoice} and Computer chose ${compChoice}, Its a Tie!`);
    tied++;
  }

  if (usersChoice === "rock" && compChoice === "scissors" || usersChoice === "paper" && compChoice === "rock" || usersChoice === "scissors" && compChoice === "paper") {
    console.log(`You chose ${usersChoice}, you won! Computer chose ${compChoice}!`);   // this is ALL the times you can win!
    won++;
  }

  if (usersChoice === "rock" && compChoice === "paper" || usersChoice === "paper" && compChoice === "scissors" || usersChoice === "scissors" && compChoice === "rock") {
    console.log(`You chose ${usersChoice}, Computer chose ${compChoice}, you lost!`);  // this is ALL the times that you can lose!
    lost++;
  }

  console.log(`You've won: ${won} game${won === 1 ? "" : "s"}. You've lost: ${lost} game${lost === 1 ? "" : "s"}. You've tied: ${tied} game${tied === 1 ? "" : "s"}.`); // this is concatenation of all the winning, losing, and tied games and making it plural when they have won/lost/tied 
  console.log("Press the same keys to play again!") // instructions to play the game again


}




