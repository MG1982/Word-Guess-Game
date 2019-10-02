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

// Id links to index.html
var wordElement = document.getElementById("word");
var letterCountElement = document.getElementById("letterCount");
var lettersGuessedElement = document.getElementById("lettersGuessed");
var messageElement = document.getElementById("message"); //link messages to here

// Starts the game, clears arrays for next word and resets the guesses counter
function startGame() {
  word = getRandom(wordArray);
  correctGuesses = [];
  wrongGuesses = [];
  remainingGuesses = 13;

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

//Remaining guesses counter function
function updateGuesses(letter) {
  remainingGuesses--;
  letterCountElement.innerHTML = remainingGuesses;

  //If else checking if letter (users guess) is in the word or not
  if (word.indexOf(letter) === -1) {
    wrongGuesses.push(letter);
    lettersGuessedElement.innerHTML = wrongGuesses.join(" ");
  } else {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctGuesses[i] = letter;
      }
    }

    wordElement.innerHTML = correctGuesses.join(" ");
  }
}

function winOrLoss() {
  if (correctGuesses.indexOf("_") === -1) {
    alert("You Won!"); //Temp win alert
    startGame();
  } else if (remainingGuesses === 0) {
    alert("You Lost!"); //Temp loss alert
    startGame();
  }
}

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
  updateGuesses(letterGuessed);
  winOrLoss();
};

startGame();

// STILL NEED
// Setup the press any key to get started function.
// Win counter needs to be finished.
// Win message added to message Id link.
// add conditions to stop the same letter being selected - with a message tied to it.
// add conditions to only allow chars a - z to be used.
// setup remaingingGuesses to be word.length * 3
// music to play on win.
// picture to change on win.
// startGame function is not clearing the wrongGuesses array until first guess of the next game...
