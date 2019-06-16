var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); // a random color selector function
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

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
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            // to match the color with background and fade it
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

// reset button
resetButton.addEventListener("click", function () {
    // Generate all colors
    colors = generateRandomColors(6);
    // pick a random color
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // change colors of square
    for (var i = 0; i < squares.length; i++) {
        // Use style.backgroundColor instead of 
        // style.background because it's compatible
        // with more browsers
        squares[i].style.backgroundColor = colors[i];
    }
    // change header backround color
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colors"
})


function changeColor(color) {
    // loop through all squares and change their colors
    // to pickedColor
    // it even loops through the square with right color and
    // change it again
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // random number between 0 and 6 (exclusive) removing decimal points
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColors(num) {
    // make an array
    // add num random colors to array
    // return array
    var arr = [];
    for (var i = 0; i < num; i++) {
        // "rgb(255, 0, 0)"
        arr.push(randomColor());
    }
    return arr
}

function randomColor() {
    // Pick red from 0-255
    // pick green form 0-255
    // pick blue from 0-255
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}


