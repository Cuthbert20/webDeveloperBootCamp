var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score ++;
        if(p1Score === winningScore){
            //adding class winner when/if p1 reaches winningScore
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }  
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score ++;
        if(p2Score === winningScore){
            //adding class winner when/if p2 reaches winningScore
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    //reseting p1Score to 0
    p1Score = 0;
    //reseting p2Score to 0
    p2Score = 0;
    //reseting p1Display to 0 or we could set it to p1Score which is now 0
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    //removing class winner so that the number isn't green anymore
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    //setting gameOver to false so that the players can play again.
    gameOver = false;
};
//"click" is not the best event to use, instead we will use change
numInput.addEventListener("change", function(){
    //update Playing to: value
                                //rplaced numInput with this. this refers to whatever the addEventListener is one which is numInput
    winningScoreDisplay.textContent = this.value;
    //Change winningScore
    winningScore = Number(numInput.value);
    reset();
});