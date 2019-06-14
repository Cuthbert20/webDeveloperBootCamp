    var numSquares = 6;
    //setting var colors to function generateRandomColor
    var colors = [];
    var pickedColor;
    var squares = document.querySelectorAll(".square");
    var colorDisplay = document.getElementById("colorDisplay");
    var messageDisplay = document.querySelector("#message");
    var h1Display = document.querySelector('h1');
    var resetButton = document.getElementById("reset");
    var modeButtons = document.querySelectorAll(".mode");
    
    init();

    function init(){
        //mode buttons event listeners function
        setUpModeButtons();
        setUpSquares();
        //calling reset function
        reset();
    };
    //looping though modeButtons
    function setUpModeButtons(){
        for(var i = 0; i < modeButtons.length; i++){
            modeButtons[i].addEventListener('click', function(){
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                //if (this) the button that was clicked on, using ternary operator syntax
                this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    
                reset();
            });
        };
    }
    
    function setUpSquares(){
        for(var i = 0; i < squares.length; i++){
            //add click listeners to squares
            squares[i].addEventListener("click", function(){
                //grab color of clicked square
                //this refers to whatever square is clicked on ie squares[i]
                var clickedColor = this.style.backgroundColor;
                //compare color to pickedColor
                if(clickedColor === pickedColor){
                    messageDisplay.textContent = "Correct!";
                    resetButton.textContent = "Play Again?"
                    //calling function changeColors set below
                    changeColors(clickedColor);
                    //changing h1 color to clickedColor when guessed correct
                    h1Display.style.backgroundColor = clickedColor;
                }else{
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again";
                }
            });
    
        }
    }

    function reset(){
        colors = generateRandomColor(numSquares);
        //when button clicked pick a new random color from array
        pickedColor = pickColor();
        //change color display to match picked color
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "New Colors"
        messageDisplay.textContent = "";
        //when button clicked change colors of squares
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            }else {
                squares[i].style.display = 'none';
            }
            
        }
        h1Display.style.backgroundColor = "steelblue";
    };

    // easyBtn.addEventListener("click", function(){
    //     easyBtn.classList.add("selected");
    //     hardBtn.classList.remove("selected");
    //     //calling var numSquares
    //     numSquares = 3;
    //     colors = generateRandomColor(numSquares);
    //     pickedColor = pickColor();
    //     colorDisplay.textContent = pickedColor;
    //     for(var i = 0; i < squares.length; i++){
    //         if(colors[i]){
    //            squares[i].style.backgroundColor = colors[i];
    //         }else{
    //             squares[i].style.display = "none";
    //         }
    //     }
    // });

    // hardBtn.addEventListener("click", function(){
    //     hardBtn.classList.add("selected");
    //     easyBtn.classList.remove("selected");
    //     numSquares = 6;
    //     colors = generateRandomColor(numSquares);
    //     pickedColor = pickColor();
    //     colorDisplay.textContent = pickedColor;
    //     for(var i = 0; i < squares.length; i++){
    //            squares[i].style.backgroundColor = colors[i];
    //             squares[i].style.display = "block";
    //         }
    // });

    resetButton.addEventListener("click", function(){
        //calling reset function
        reset();
    });
    

    function changeColors(color){
        //loop through all squares
        for(var i = 0; i < squares.length; i++){
            //change each color to match given color
            squares[i].style.backgroundColor = color;
        }
        
    }

    function pickColor(){
        //how we pick a random number from array using Math.random() to get Math.random to give us a number 1-6 like our color array
        //...we need to * by the length of the array colors.length. Then we need to use Math.floor so that we don't get a decmial number back from Math.random()
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    };

    function generateRandomColor(num){
        //make an array
        var arr = []
        //add num random colors to array
        for(var i = 0; i < num; i++){
            //calling function randomColor() which gives us a random rgb color and push on to arr
            arr.push(randomColor())
        }
        //return that array
        return arr;
    };

function randomColor(){
    //pick a "red" from 0-255 using Math.random * it by 256 because we are rounding down.
    var r = Math.floor(Math.random() * 256);//you can console.log this in chrome inspect to see what it does
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};