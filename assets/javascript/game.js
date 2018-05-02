
//Variables

var availableLetters = "abcdefghijklmnopqrstuvwxyz";
//var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var lives = 13;
var words = ["wookie", "droid", "speeder", "starship"];
var currentWord = [];
var guessed= "already guessed, please try again...";
var wrongLetter= "Please enter a letter from A-Z";
var gameOver = true;

function gameReset(){
    lives = 13;
//var guessedLetters = [];
};

var wordChosen = words[Math.floor(Math.random() * words.length)];    
console.log(wordChosen); console.log(wordChosen.length);
for(var j = 0; j < wordChosen.length; j++){
    currentWord.push(" + ");
    document.getElementById("currentWord").innerHTML = currentWord;}

    //Choose Random Word....Setup this function to by activated by onkeyup but only if gameover=true
document.onkeyup = function(event){
   
    
   
    
    
    if(wordChosen.length > 0);{
     userGuess = event.key.toLowerCase();
    //console.log(userGuess);

}
    //Generate blanks based on length of chosen word

    //var gameStart = gameSetup;

    
    




//Guessing Begins and correct letters replace blanks
//document.onkeyup = function(event) {
   // if(userGuess.indexOf(guessedLetters) < 0);{    
     //   guessedLetters.push(userGuess);
    //availableLetters.splice(availableLetters.indexOf(userGuess),1); console.log(guessedLetters);
//console.log(availableLetters);}
    

 
   

//Takes from the array of available letters and pushes the Guessed letter into the Guest Letters Array.
    //if(guessedLetters.indexOf(userGuess) < 0);{    
     //   guessedLetters.push(userGuess);
    //availableLetters.splice(availableLetters.indexOf(userGuess),1); console.log(guessedLetters);
//console.log(availableLetters);} 



    


   
    document.getElementById("guessedWords").innerHtml = guessedLetters;
    


//compares user pressed key and replaces a blank if it's correct




    
//else if(wordChosen.indexOf(userGuess) > 0);{
    
//function wordCheck(){
    //while (wordChosen.indexOf(userGuess) < 0);{ 
        
//else {userGuess = correctLetter;}



switch (wordChosen.indexOf(userGuess)>= 0){ 
   case false: lifeLose(); 
       
        console.log(userGuess);
        
//matches the index of the Selected word against player pressed key and checks for multiple instances and places the letter in their accurate spots
 



case true: 

    for(var i = 0; i < wordChosen.length; i++){
        if(wordChosen[i] === userGuess){
        currentWord[i] = userGuess;
        console.log(currentWord);
        document.querySelector("#currentWord").innerHTML = currentWord.join("");
        }}
    
          
      }
    if(lives > 0 && currentWord.indexOf(" + ") <0 ) {
gameWin();
    }
    if(lives <= 0){ gameLose();}
    
    }
    
  
    
    
        
     
        
        //(guessedLetters.indexOf(userGuess) > 0) 
        
        
        
        //(wordChosen.indexOf(userGuess) < 0); lives -= 1;
        //console.log(lives);
            
        

   
    


   

    
    function lifeLose(){
        lives -= 1;
        console.log(lives);
            }

    function verify() {}               
               

            //if(validLetter !== wordChosen.includes(userGuess));{
              //  var wrongGuess = validLetter;
                //guessedLetters.push(wrongGuess);
                //console.log(guessedLetters);
   
        //if(wordChosen.indexOf(userGuess) < 0);{
            //life--;
    
    
   // if(availableLetters.indexOf(userGuess) == 0); {
     //   alert(guessed);
      //  console.log(availableLetters.indexOf(userGuess))
    


                                        
  



  
    console.log(availableLetters);

    function gameWin(){
        gameOver = true;
        alert("You win!");
        gameReset();
    }

    function gameLose() {
        gameOver = true;
        alert("Game over! " + wordChosen.toUpperCase() + " is the Correct Word!");
        gameReset();
        document.querySelector("#currentWord").innerHTML = wordChosen.join("");
    }
    

   
  


//var guess = wordChosen.match(userGuess);
//console.log(guess)







//document.getElementById("currentWord").innerHTML = wordChosen;

//Is Guess found in The Chosen Word-Needs a For loop to check for various instances of the same letter



//(mainStr.split(",").length - 1)





















    
