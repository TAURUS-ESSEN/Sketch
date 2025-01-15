const main = document.querySelector("#main__container"); 
const container = document.querySelector("#squaresArea"); 
const btnSize = main.querySelector("#btn__size");
const btnReset = main.querySelector("#btn__reset");
let inputValue = 16;

buildArea (inputValue);

btnSize.addEventListener("click", () => {
        let inputValue = Number(prompt("Enter Size 1-100",''));
        checkInput (inputValue);
      });



function checkInput(inputValue) //Проверяем ввод
    { 
        console.log("проверяемое значение ввода " +inputValue);
        if  (inputValue == '' || inputValue == 0 || isNaN(inputValue) || inputValue>100) 
            {
                alert ("Неверный ввод");
            }
        else { 
            buildArea (inputValue); // если ОК строим Квадрат
             }
    }
function getRandomColor() {
    const r = Math.floor((Math.random() * 128) + 127); // Красный (127–255)
    const g = Math.floor((Math.random() * 128) + 127); // Зеленый (127–255)
    const b = Math.floor((Math.random() * 128) + 127); // Синий (127–255)
    return `rgb(${r}, ${g}, ${b})`;
    }

function buildArea (inputValue)
    { 
        console.log("будем строить из " +inputValue)
        container.innerHTML = ""; 
        for (i = 1; i <= inputValue; i++)
            {  
                let divElement = document.createElement("div");
                divElement.classList.add("myDiv");
                container.appendChild(divElement); 
                for (j = 1; j <= inputValue; j++)
                {
                    let subdivElement = document.createElement("div");
                    subdivElement.classList.add("myDiv1");
                    divElement.appendChild(subdivElement); 
                    subdivElement.textContent = ' ';   
                  }
            }
        const divs = document.querySelectorAll(".myDiv1");
        divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
        console.log("Наведение работает!");
       // div.style.cssText = "color: blue; background: black;";
        div.style.background = getRandomColor(); // Меняем только фон
        div.style.color = "white";     // Для видимого текста
        btnReset.addEventListener("click", () => {
            //  checkInput (inputValue);
            div.style.background = "white";
          });
         });
        });
    }

   