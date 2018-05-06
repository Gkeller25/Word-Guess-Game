
//Variables


var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var lives = 10;
var words = ["wookie", "droid", "speeder", "starship", "starfighter","planet", "shuttle", "walker", "trooper", "transport", "astromech", "squadron", "blaster", "pilot", ];
var currentWord = [];
var wrongLetter= "Only keys A-Z are valid to enter as guesses";
var gameOver = true;
var win = 0;
var mySound;
var loseSound;
var myMusic;
var invalidSong;

//loads music and choses first word for the game with approriate number of spaces, upon the loading of the page
window.onload = function() {
  myMusic = new sound("star-wars-cantina-song.mp3");
  
wordChosen = words[Math.floor(Math.random() * words.length)];    
console.log(wordChosen); console.log(wordChosen.length);
for(var j = 0; j < wordChosen.length; j++){
    currentWord.push(" + ");
    document.getElementById("currentWord").innerHTML = currentWord.join("");}
    document.querySelector("#gameStats").innerHTML = "Guesses left: " + lives;
    document.querySelector("#totalWins").innerHTML = "Words Guessed Correctly: " + win;
}

    
//begins preparation for next game by increasing total wins and refreshing game arrays 
function gameReset(){
  if(gameOver = true){
    lives = 10;
guessedLetters = [];
 gameOver = false;
 currentWord = [];
 document.querySelector("#totalWins").innerHTML = "Words Guessed Correctly: " + win;
 wordChosen =("");
 availableLetters = [];      
 gameStart();
 console.log(guessedLetters);
 console.log(availableLetters);
 console.log(wordChosen);
 console.log(currentWord);
}}

//clears last game status message signalling the game is now ready for the next round
function messageClear() {setTimeout(function(){ 
  document.getElementById("gameOutcome").style.display = "none";
}, 500);
}

//Chooses new word and matches spaces for it. After this the word is ready to be guessed after message is cleared
function gameStart(){
wordChosen = words[Math.floor(Math.random() * words.length)];    
console.log(wordChosen); console.log(wordChosen.length);
for(var j = 0; j < wordChosen.length; j++){
    currentWord.push(" + ");
    document.getElementById("currentWord").innerHTML = currentWord.join("");}
    document.querySelector("#gameStats").innerHTML = "Guesses left: " + lives;
    document.querySelector("#guessedWords").innerHTML = guessedLetters;
    availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(currentWord);
    console.log(availableLetters);
    messageClear();
}


    //Choose Random Word, Hide Instructions, begin BGM Music
document.onkeyup = function(event){
  myMusic.loop = true;
  myMusic.play(); 
  document.getElementById("instructions").style.display = "none";  
  
    //Players Guess
     userGuess = event.key.toLowerCase();
    
//Validates that key press is a letter and that the pressed key is also in the availableLetters Array
switch (event.keyCode >= 65 && event.keyCode <= 90&& availableLetters.indexOf(userGuess) >= 0) {
   case true:   validLetter = userGuess; 
  
  //if valid letter matches available letter array run the splice command
       if(availableLetters.indexOf(validLetter) >= 0){
     
      availableLetters.splice(availableLetters.indexOf(validLetter),1);
   console.log(availableLetters);
  console.log(validLetter);} 
  
switch (wordChosen.indexOf(validLetter)>= 0){ 
   case false: lifeLose(); 
   guessedLetters.push(userGuess);
   guessedLetters.sort();
   
   console.log(guessedLetters);
   
   
   document.querySelector("#guessedWords").innerHTML = guessedLetters.join(" ");
   document.querySelector("#gameStats").innerHTML = "Guesses left: " + lives;
        console.log(validLetter);
        
//matches the index of the Selected word against player pressed key and checks for multiple instances and places the letter in their accurate spots

case true: 

    for(var i = 0; i < wordChosen.length; i++){
        if(wordChosen[i] === validLetter){
        currentWord[i] = validLetter;
        console.log(currentWord);
        document.querySelector("#currentWord").innerHTML = currentWord.join("");
        }} 
      }
      
    if(lives > 0 && currentWord.indexOf(" + ") <0 ) { gameWin();
    }
    if(lives <= 0){ 
    gameLose();}
        }
        
        if(event.keyCode < 65 || event.keyCode > 90){
          invalidSong = new sound("swluke01.mp3");
          invalidSong.play();
          invalid();
        }
      }
    
    function lifeLose(){
        lives -= 1;
        console.log(lives);
            }

    function gameWin(){
        gameOver = true;
        document.getElementById("gameOutcome").style.display = "block";
        document.querySelector("#gameOutcome").innerHTML = "You Win!";
        win += 1;
        myMusic.stop();
        mySound = new sound("forcestrong.mp3");
        mySound.play();
        document.getElementById("gameOutcome").style.display = "block";
        document.querySelector("#gameOutcome").innerHTML = "You Win! \n Game Resetting";
        answer();
    }

  function answer() {
    setTimeout(function(){ gameReset(); }, 5000);
}

    function gameLose() {
        gameOver = true;
        myMusic.stop();        
        loseSound = new sound("laughfuzzball.mp3");
        loseSound.play();
        document.getElementById("gameOutcome").style.display = "block";
    document.querySelector("#gameOutcome").innerHTML = "You Lose! \n Game Resetting";        
        document.querySelector("#currentWord").innerHTML = wordChosen.valueOf();
        answer();
    }
    //function to load sound and create a controller in html and hide it from view
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }    
}

function invalid() {
  setTimeout(function(){alert(wrongLetter);
  }, 500);
}


















    
