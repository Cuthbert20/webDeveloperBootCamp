//Create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("guess a number"));
alert(guess)
//check if guess is right
//I could have used Number(guess) on line below instead of on prompt
//but then I would have to do it every time I need to compare
//guess to secretNumber
if(guess === secretNumber){
    alert("you got it right");
}
//otherwise, check if higher
else if(guess > secretNumber){
    alert("try a lower number");
}
//otherwise, check if lower
else {
    alert("try a higher number");
}
//another more defined way of setting guess to a number is like this
//var stringGuess = prompt("Guess a number");
//var guess = Number(stringGuess);