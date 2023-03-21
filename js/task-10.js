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
// console.log(input.valueAsNumber);

const conteiner = document.getElementById("boxes");
console.log(conteiner);


//додаємо сллухача подій на кнопки та інпут
buttonCreate.addEventListener('click', addElement);
buttonDestroy.addEventListener('click', resetElement);
input.addEventListener('input', myFunction);


// document.body.onload = addElement;

// пишемо функцію, яка додає елемент по кліку на клавішу
function addElement(event) {  
  // створюємо елемент
  const newLi = document.createElement("li");

  // додаєм контент
  const newContent = document.createTextNode("Hi!");

  // додаєм контент до елемннту li
  newLi.append(newContent);

  // додаємо елемент в ДОМ
  conteiner.append(newLi);
  console.log(conteiner);

}
// пишемо функцію, яка видаляє елемент по кліку на кнопку
function resetElement (event) {
  console.log('reset function');
  conteiner.remove();
}

// функція, яка витягує значення з інпута
function myFunction () {
  console.log(input.valueAsNumber);
}
