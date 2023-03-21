function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// встановлюємо зв’язок з елементами HTML
const form = document.querySelector('#controls');
console.log(form);

const buttonCreate = form.querySelector('[data-create]');
console.log(buttonCreate);

const buttonDestroy = form.querySelector('[data-destroy]');
console.log(buttonDestroy);

const input = form.querySelector('input');
console.log(input);

const conteiner = document.getElementById("boxes");
console.log(conteiner);

//додаємо сллухача подій на кнопки та інпут
buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', resetElement);
input.addEventListener('input', myFunction);

// пишемо функцію, яка додає елемент по кліку на клавішу
function createBoxes(amount) {  

  for(let i = 0; i < input.valueAsNumber; i++) {
    // створюємо елемент
    const newDiv = document.createElement("div");
    // додаємо стилі
    newDiv.style = `width:${30 + i * 10}px; height:${30 + i * 10}px; background-color:${getRandomHexColor()}`;
    // додаємо елемент в ДОМ
    conteiner.append(newDiv);  
  };
};
// пишемо функцію, яка видаляє елемент по кліку на кнопку
function resetElement (event) {
  console.log('reset function');
  conteiner.remove();
};
// функція, яка витягує значення з інпута
function myFunction () {
  // console.log(input.valueAsNumber);
};
