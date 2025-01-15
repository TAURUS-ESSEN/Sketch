const main = document.querySelector("#main__container");
const container = document.querySelector("#main__squaresarea");
const btnSize = main.querySelector("#btn__size");
const btnReset = main.querySelector("#btn__reset");
let inputValue = 16;

if (!main || !container || !btnSize || !btnReset) {
    console.error("One or more elements were not found in the DOM.");
  }

buildArea(inputValue);

btnSize.addEventListener("click", () => {
  let inputValue = Number(prompt("Enter Size 1-100", ""));
  checkInput(inputValue);
});

function checkInput(inputValue) {
    const isInvalid =
      !inputValue || isNaN(inputValue) || inputValue <= 0 || inputValue > 100;
    if (isInvalid) {
      alert("Wrong input. Please enter a number between 1 and 100.");
      return; 
    }
    buildArea(inputValue);
  }

function getRandomColor() {
  const r = Math.floor(Math.random() * 128 + 127);
  const g = Math.floor(Math.random() * 128 + 127);
  const b = Math.floor(Math.random() * 128 + 127);
  return `rgb(${r}, ${g}, ${b})`;
}

function buildArea(inputValue) {
  console.log("будем строить из " + inputValue);
  container.innerHTML = "";
  for (let i = 1; i <= inputValue; i++) {
    let divElement = document.createElement("div");
    divElement.classList.add("mydiv");
    container.appendChild(divElement);
    
    for (let j = 1; j <= inputValue; j++) {
      let subdivElement = document.createElement("div");
      subdivElement.classList.add("mydiv1");
      divElement.appendChild(subdivElement);
    }
  }
  const divs = document.querySelectorAll(".mydiv1");
  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.background = getRandomColor();
    });
  });
}

btnReset.addEventListener("click", () => {
    const divs = document.querySelectorAll(".mydiv1");
    divs.forEach((div) => {
        div.style.background = "white";
    });
});