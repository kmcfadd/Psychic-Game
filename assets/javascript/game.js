// an array that holds all the choices for the computer
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
         'n','o','p','q','r','s','t','u','v','w','x','y','z'];

// variables for our results to populate the text fields
var wins = 0;
var losses = 0;
var guesses = 9;
var guessed = [""];

// variables to hold the text that gets displayed on the web page
var winsText = document.getElementById("win-text");
var lossesText = document.getElementById("loss-text");
var guessesText = document.getElementById("guesses-text");
var guessedText = document.getElementById("guessed-text");

// run this function when the user presses a key
document.onkeyup = function(event) {

    // determines the key pressed
    var userGuess = event.key.toLowerCase();

    // the computer chooses a random letter from the array
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    // determines the outcome of the game
    if(userGuess === computerChoice){
        wins++;
    } else { 
        guesses--;
    } if(guesses = 0) {
        losses++
    }

    // updates the game results as the user plays and makes guesses, wins and loses
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses remaining: " + guesses;
    guessedText.textContent = "Guessed so far: " + guessed;
  
};