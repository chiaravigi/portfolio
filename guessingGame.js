
let min = 1;
let max = 100;
let numGuesses = 0;

const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

let response = prompt(`I'm thinking of a number between ${min} and ${max}. What do you think it is?`);

while (response !== null) {

  let guess = parseInt(response);

  if (guess === randomNumber) {
    numGuesses++;
    alert(`Congratulations, you guessed the number in ${numGuesses} guesses!`);
    break;
  }

  else if (guess > randomNumber) {
    numGuesses++;
    max = guess - 1;
    response = prompt(`Too high! Guess again between ${min} and ${max}:`);
  }

  else {
    numGuesses++;
    min = guess + 1;
    response = prompt(`Too low! Guess again between ${min} and ${max}:`);
  }
}

if (response === null) {
  alert(`The number was ${randomNumber}. Better luck next time!`);
};