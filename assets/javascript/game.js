//Array of words.
var wordArray = [
  "NIRVANA",
  "METALLICA",
  "EVERCLEAR",
  "GRINSPOON",
  "SILVERCHAIR",
  "TOOL"
];

var word;
var correctGuesses;
var wrongGuesses;
var remainingGuesses;
var message;
var score = 0;

// Id links to index.html
var wordElement = document.getElementById("word");
var letterCountElement = document.getElementById("letterCount");
var lettersGuessedElement = document.getElementById("lettersGuessed");
var messageElement = document.getElementById("message"); //link messages to here
var scoreElement = document.getElementById("totalWins");

// Starts the game, clears arrays for next word and resets the guesses counter
function startGame() {
  word = getRandom(wordArray);
  correctGuesses = [];
  wrongGuesses = [];
  remainingGuesses = word.length + 4;

  // Gets a random word from wordArray
  function getRandom(word) {
    return word[Math.floor(Math.random() * word.length)];
  }

  // Push underscores over random word
  for (var i = 0; i < word.length; i++) {
    correctGuesses.push("_");
  }

  wordElement.innerHTML = correctGuesses.join(" ");
  letterCountElement.innerHTML = remainingGuesses;
}

//If else checking if letter (users guess) is in the word or not & Remaining guesses decrement
function updateGuesses(letter) {
  if (word.indexOf(letter) === -1 && wrongGuesses.indexOf(letter) === -1) {
    wrongGuesses.push(letter);
    lettersGuessedElement.innerHTML = wrongGuesses.join(" ");
    remainingGuesses--;
    letterCountElement.innerHTML = remainingGuesses;
  } else {
    for (var i = 0; i < word.length; i++) {
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
    message = "YOU WON! - NOW PLAYING: " + word;
    messageElement.innerHTML = message;
    startGame();
    score++;
    scoreElement.innerHTML = score;
  } else if (remainingGuesses === 0) {
    message = "YOU FAILED! - TRY AGAIN";
    messageElement.innerHTML = message;
    startGame();
  }
}
// Key event function that only allows keys A to Z inputs
document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    letterGuessed = event.key.toUpperCase();
    updateGuesses(letterGuessed);
    winOrLoss();
  } else {
    message = "YOU CAN ONLY USE LETTERS A - Z";
    messageElement.innerHTML = message;
  }
};

startGame();

// STILL NEED TO DO...
// Setup the press any key to get started function.
// add condition to stop the same letter being selected - with a message tied to it (use same message div for the A - Z warning message)
// music to play on win.
// picture to change on win.
