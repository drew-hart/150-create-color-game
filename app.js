console.log('app.js loading...')

var colors = generateColors(6);
var correctColor = pickColor();
var messageDisplay = document.querySelector('#message')

document.querySelector('span').textContent = correctColor;

var squares = document.querySelectorAll('.square')
for (var i = 0; i < squares.length; i++) {
  // change background color
  squares[i].style.background = colors[i];
  // add click listner
  squares[i].addEventListener('click', function(square){
    var clickedColor = this.style.background;

    if (clickedColor === correctColor) {
      messageDisplay.textContent = "Correct"
      changeColors(correctColor)
    } else {
      messageDisplay.textContent = "Try Again"
      this.style.background = "#232323";
    }
  })
}


function changeColors(color) {
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

  // return string
}
