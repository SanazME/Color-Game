var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); // a random color selector function
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');

for (var i = 0; i < squares.length; i++) {
    // Use style.backgroundColor instead of 
    // style.background because it's compatible
    // with more browsers
    squares[i].style.backgroundColor = colors[i];
}

// update the color display
colorDisplay.textContent = pickedColor;

// add event when each square is clicked get its color and
// against the pickedColor RGB:

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        // grab color of clicked square and compare against
        // pickedColor
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
        } else {
            // to match the color with background and fade it
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColor(color) {
    // loop through all squares and change their colors
    // to pickedColor
    // it even loops through the square with right color and
    // change it again
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // random number between 0 and 6 (exclusive) removing decimal points
   var random = Math.floor(Math.random()* colors.length); 
   return colors[random]
}