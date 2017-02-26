console.log('app.js loading...')
var numOfSquares  = 6;
var squares = document.querySelectorAll('.square')
var colors = generateColors(numOfSquares);
var correctColor = pickRandomColor();
var gameHeader = document.querySelector('h1');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#resetButton');
    } else {
      messageDisplay.textContent = "Try Again"
      this.style.background = "#232323";
    }
  })
}


function changeColors(color) {
startGame();
function startGame() {
  document.querySelector('span').textContent = correctColor;

  for (var i = 0; i < squares.length; i++) {
    styleSquare(squares[i], colors[i]);
    squares[i].addEventListener('click', whenSquareIsClicked)
  }
}

function styleSquare(square, color) {
  square.style.background = color;
  square.style.display = 'block';
}

function hideSquare(square) {
  square.style.display = 'none';
}

function whenSquareIsClicked(square){
  var clickedColor = this.style.background;

  if (clickedColor === correctColor) {
    messageDisplay.textContent = "Correct"
    changeColorsToCorrectColor(correctColor)
  } else {
    messageDisplay.textContent = "Try Again"
    this.style.background = '';
  }
}
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }

  document.querySelector('h1').style.background = color;
}

function pickColor() {
  // pick a random color from colors array
  var random = Math.floor(Math.random() * colors.length )
  return colors[random]
}

function generateColors(num) {
  // generate a series of random numbers
  var arr = [];
  // create colors
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 255)
  var green = Math.floor(Math.random() * 255)
  var blue = Math.floor(Math.random() * 255)
  var rbgColorString = `rgb(${red}, ${green}, ${blue})`

  return rbgColorString;
}
