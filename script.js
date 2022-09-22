let btn = document.querySelector(".btn");
console.log(btn);

function generateRandomColor() {
  let randomChar = "0123456789abcdef";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor = randomColor + randomChar[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

function changeColor() {
  let resultColor = document.querySelector(".main-div");
  resultColor.style.backgroundColor = generateRandomColor();
}

btn.addEventListener("click", changeColor);
