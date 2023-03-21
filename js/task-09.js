
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const conteiner = document.querySelector('.widget');
const nameOfColor = conteiner.querySelector('.color');
const buttonChange = conteiner.querySelector('.change-color');

buttonChange.addEventListener('click', onClickButton)

function onClickButton (event) {

conteiner.style.backgroundColor = getRandomHexColor();
nameOfColor.textContent = conteiner.style.backgroundColor;

};

