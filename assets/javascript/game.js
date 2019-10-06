//Array of words.
let wordArray = ["EVERCLEAR", "METALLICA", "NIRVANA", "SILVERCHAIR", "TOOL"];

let word;
let correctGuesses;
let wrongGuesses;
let remainingGuesses;
let message;
let warning;
let score = 0;
let musicElement = new Audio();

// Id links to index.html
const wordElement = document.getElementById("word");
const letterCountElement = document.getElementById("letterCount");
const lettersGuessedElement = document.getElementById("lettersGuessed");
const messageElement = document.getElementById("message");
const scoreElement = document.getElementById("totalWins");
const warningElement = document.getElementById("warning");

// Starts/restarts the game, clears arrays for next word and resets the guesses counter
function startGame() {
  wrongGuesses = [];
  word = getRandom(wordArray);
  correctGuesses = [];
  remainingGuesses = word.length + 4;

  // Gets a random word from wordArray
  function getRandom(word) {
    return word[Math.floor(Math.random() * word.length)];
  }

  // Push underscores over random word
  for (let i = 0; i < word.length; i++) {
    correctGuesses.push("_");
  }

  wordElement.innerHTML = correctGuesses.join(" ");
  letterCountElement.innerHTML = remainingGuesses;
}

function duplicateChars(letter) {
  if (correctGuesses.includes(letter) || wrongGuesses.includes(letter)) {
    warning = "YOU ALREADY GUESSED THAT LETTER!";
    warningElement.innerHTML = warning;
  }
}

//If else checking if letter (users guess) is in the word or not & Remaining guesses decrement
function updateGuesses(letter) {
  if (word.indexOf(letter) === -1 && wrongGuesses.indexOf(letter) === -1) {
    wrongGuesses.push(letter);
    lettersGuessedElement.innerHTML = wrongGuesses.join(" ");
    remainingGuesses--;
    letterCountElement.innerHTML = remainingGuesses;
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctGuesses[i] = letter;
      }
    }

    wordElement.innerHTML = correctGuesses.join(" ");
  }
}

// Win/Loss check and Messages/Reset
function winOrLoss() {
  if (correctGuesses.indexOf("_") === -1) {
    musicElement.src = "assets/audio/" + word + ".mp3";
    musicElement.play();
    message = "YOU WON! - NOW PLAYING: " + word;
    messageElement.innerHTML = message;
    document.getElementById("image").src = "assets/images/" + word + ".jpg";
    startGame();
    updateGuesses();
    score++;
    scoreElement.innerHTML = score;
  } else if (remainingGuesses === 0) {
    musicElement.src = "assets/audio/lolCry.mp3";
    musicElement.play();
    document.getElementById("image").src = "assets/images/cry.gif";
    message = "YOU FAILED! - TRY AGAIN";
    messageElement.innerHTML = message;
    startGame();
    updateGuesses();
  }
}

// Key event function that only allows keys A to Z inputs
document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    letterGuessed = event.key.toUpperCase();
    duplicateChars(letterGuessed);
    updateGuesses(letterGuessed);
    winOrLoss();
  } else {
    warning = "YOU CAN ONLY USE LETTERS A - Z";
    warningElement.innerHTML = warning;
  }
};

startGame();
