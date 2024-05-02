const Hangman = function (word, numberGuessesAllowed, guessedLetter) {
  this.word = word.toLowerCase().split("");
  this.numberGuessesAllowed = numberGuessesAllowed;
  this.guessedLetter = [];
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.forEach((element) => {
    this.guessedLetter.includes(element) || element === " "
      ? (puzzle += element)
      : (puzzle += "*");
  });
  return puzzle;
};

Hangman.prototype.setGuess = function (letters) {
  this.guessedLetter.push(letters);
  console.log(this.guessedLetter);
};

const match1 = new Hangman("Serar", 2);
const match2 = new Hangman("super classico", 5, ["s", "r"]);
match1.setGuess(["s", "r"]);
console.log(match1.getPuzzle());
