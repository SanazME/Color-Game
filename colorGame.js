var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// when we referesh the page
init();

function init() {
    // mode button event listeners
    setupModeButtons();
    // square listeners
    setupSquares();
    // reset
    reset();
}

function reset() {
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick a new color
    pickedColor = pickColor();
    // change colorDisplay to match changeColor
    colorDisplay.textContent = pickedColor;
    // change header backround color
    h1.style.backgroundColor = "steelblue";
    // Rename reset button to New Colors
    resetButton.textContent = "New Colors"
    // Remove the text Correct! from message id
    messageDisplay.textContent = "";
    // change colors in numSquare squares and hide the rest
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}


function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // Ternary operator
            this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add click listeners to each square
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
}

// reset button
resetButton.addEventListener("click", function () {
    reset();
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


