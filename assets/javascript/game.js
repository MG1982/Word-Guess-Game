//Letter array
var letter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

//Word array
var words = [
  "NIRVANA",
  "METALLICA",
  "EVERCLEAR",
  "GRINSPOON",
  "SILVERCHAIR",
  "TOOL"
];
document.getElementById("lettersAvailable").innerText = letter;

var win = false;
var worngAnswer;

let guessedLetters = []; // Stores the letters the user guessed
document.getElementById("guessedLetters").innerHTML = guessedLetters;

var remainingGuesses = 13; // How many tries the player has left
document.getElementById("remainingGuesses").innerText = remainingGuesses;

// Show wins on page
var wins = 0;
document.getElementById("totalWins").innerText = wins;

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];

// Hide word with underscores
var hideAnswer = [];
for (var i = 0; i < word.length; i++) {
  hideAnswer[i] = "_";
  document.getElementById("word").innerText = hideAnswer.join(" ");
}

//key function which only allows letters a-z and also shows warning if wrong key is pressed

document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    var userGuess = event.key.toUpperCase();
  } else {
    var warning = "You can only use letters (a - z)";
    document.getElementById("warning").innerText = warning.toUpperCase();
  }

  //userGuess check

  if (word.indexOf(userGuess) > -1) {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === userGuess) {
        hideAnswer[j] = userGuess;
        document.getElementById("word").innerText = hideAnswer.join(" ");
        // vvvvvvvv NOT WORKING CORRECTLY vvvvvvvv
      } else if (word[j] != userGuess);
      guessedLetters[j] = userGuess;
      document.getElementById("guessedLetters").innerText = guessedLetters.join(
        " "
      );
    }
  }

  // *****TEST LOGS*****
  console.log(word);
  console.log(userGuess);
  //console.log(hideAnswer);
  //console.log(letter);
  //console.log(guessedLetters);

  //Win/loss check

  if (hideAnswer.indexOf("_") <= 0) {
    let win = true;
    //console.log(win);
    if (win == true) {
      wins = +1;
    }
    document.getElementById("totalWins").innerText = wins;
  } else if (remainingGuesses <= 0) {
    //console.log(remainingGuesses);
    alert("User Lost!");
    //console.log(remainingGuesses);
  }
};
