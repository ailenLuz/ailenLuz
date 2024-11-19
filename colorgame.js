let numberOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let resetButton = document.getElementById("reset");
let h1 = document.getElementById("h1");
let easyBtn = document.getElementById("easy");
let hardBtn = document.getElementById("hard");

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    reset();
  });

  hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    reset();
  });
}

function setupSquares() {
  
  for (let i = 0; i < squares.length; i++) {
    
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "¡Correcto!";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
      } else {
        this.style.backgroundColor = getComputedStyle(document.body).backgroundColor;
        messageDisplay.textContent = "Inténtalo nuevamente";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "Nuevos Colores";
  messageDisplay.textContent = "";
  
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block"; 
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none"; 
    }
  }
  h1.style.backgroundColor = "violet";
}

function changeColors(color) {
  squares.forEach(square => {
    square.style.backgroundColor = color;
  });
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
 let r = Math.floor(Math.random() * 256);
 let g = Math.floor(Math.random() * 256);
 let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener("click", reset);

init();