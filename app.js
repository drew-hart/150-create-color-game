console.log('app.js loading...')

var colors = [
  "rgb(255, 0, 0)", // red
  "rgb(255, 255, 0)", // yellow
  "rgb(0, 255, 0)", // green
  "rgb(0, 255, 255)", // cyan
  "rgb(255, 0, 255)", // magenta
  "rgb(0, 0, 255)" // blue
]
var correctColor = pickColor();
var messageDisplay = document.querySelector('#message')

document.querySelector('span').textContent = correctColor;

var squares = document.querySelectorAll('.square')
for (var i = 0; i < squares.length; i++) {
  // change backgroun color
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
  var random = Math.floor(Math.random() * colors.length )
  return colors[random]
}
