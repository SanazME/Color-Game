var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');

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
        if ( clickedColor === pickedColor){
            alert("Correct!")
        } else{
            alert("Wrong")
        }
    })
}