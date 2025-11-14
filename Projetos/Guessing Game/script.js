let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 10;

function checkGuess() {
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = inputElement.value;
  const restart = document.getElementById("restart");
  while(attempts > 0) {
    attempts--;

    if(guess === randomNumber) {
      feedbackElement.innerHTML = "You guessed correctly " + attempts + " attempts left.";
      feedbackElement.style.color = "green";
      attempts = 0;
      break;
    } else if(guess < randomNumber) {
      feedbackElement.innerHTML = "Too low! Try again. " + attempts + " attempts left.";
      break;
    } else {
      feedbackElement.innerHTML = "Too high! Try again. " + attempts + " attempts left.";
      break;
    }
  }

  if(attempts === 0 && guess !== randomNumber) {
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = "Correct number: " + attempts + ". Game over!";
    restart.style.display = "block";
  }
}

function restart() {
  const restart = document.getElementById("restart");
  const feedbackElement = document.getElementById("feedback");
  attempts = 10;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  feedbackElement.innerHTML = "";
  restart.style.display = "none";
}