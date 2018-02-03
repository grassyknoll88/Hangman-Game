var gameStarted = false;
var answerArray = [];
var letterSelected = [];
var game = {
    wins: 0,
    guessesRemaining: 13,
    currentWord: [
        "dracula",
        "frankenstein",
        "mummy",
        "jekyll",
        "hyde"
    ]
};

var displayWord = game.currentWord[Math.floor(Math.random() * game.currentWord.length)];
var remainingLetters = displayWord.length;
for (var i = 0; i < displayWord.length; i++) {
    answerArray[i] = "_";
};
function resetWord() {
    displayWord = game.currentWord[Math.floor(Math.random() * game.currentWord.length)];
    remainingLetters = displayWord.length;
    game.guessesRemaining = 13;
    letterSelected = [];
    answerArray = [];
    for (var i = 0; i < displayWord.length; i++) {
        answerArray[i] = "_";
    };
    refreshDisplay();
};
function refreshDisplay(){
    document.querySelector("#liveWord").innerHTML = answerArray.join(" ");
    document.querySelector("#lettersAttempted").innerHTML = letterSelected.join(" ");
    document.querySelector("#guesses").innerHTML = game.guessesRemaining;
    document.querySelector("#wins").innerHTML = game.wins;
}
refreshDisplay();

document.onkeyup = function(event) {
    var userGuess = event.key;
    var userGuess = userGuess.toLowerCase();
    if (event.keyCode >= 65 && event.keyCode <= 90){
        if (answerArray.indexOf(userGuess) === -1) {
            for (var j = 0; j < displayWord.length; j++) {
                    if (displayWord[j] === userGuess) {
                        answerArray[j] = userGuess;
                        remainingLetters--;
                    }
            }
        };
        if (answerArray.indexOf(userGuess) === -1 && letterSelected.indexOf(userGuess) === -1) {
            letterSelected.push(userGuess);
            game.guessesRemaining--;
            document.querySelector("#lettersAttempted").innerHTML = letterSelected.join(" ");
        };
        if (remainingLetters === 0 && displayWord === "dracula") {
            game.wins++;
            window.setTimeout(resetWord, 3000);
        } else if (remainingLetters === 0 && displayWord === "frankenstein") {
            game.wins++;
            window.setTimeout(resetWord, 3000);
        } else if (remainingLetters === 0 && displayWord === "mummy") {
            game.wins++;
            window.setTimeout(resetWord, 3000);
        } else if (remainingLetters === 0 && displayWord === "jekyll") {
            game.wins++;
            window.setTimeout(resetWord, 3000);
        } else if (remainingLetters === 0 && displayWord === "hyde") {
            game.wins++;
            window.setTimeout(resetWord, 3000);
        } else if (game.guessesRemaining === 0) {
            window.setTimeout(resetWord, 3000);
        }
        
        refreshDisplay();
    }
}