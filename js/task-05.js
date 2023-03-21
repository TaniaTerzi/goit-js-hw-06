
const input = document.querySelector('#name-input');
console.log(input);

const text = document.querySelector('#name-output');
console.log(text);

const nameText = text.textContent;
console.log(nameText);

input.addEventListener('input', onInputChange);

function onInputChange(event){
    if ( input.value.length === 0) {
     return  text.textContent = nameText;
    }

    text.textContent = event.currentTarget.value;
};
