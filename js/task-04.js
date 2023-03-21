
let counterValue = 0;

let value = document.querySelector('#value');

let decrementButton = document.querySelector('button[data-action="decrement"]');
let incrementButton = document.querySelector('button[data-action="increment"]');
console.log(value, decrementButton, incrementButton);


incrementButton.addEventListener("click", () => {
    console.log('this is click by increment Button!')
    counterValue ++;
    updateValue()
});

decrementButton.addEventListener("click", () => {
    console.log('this is click by decrement Button!')
    counterValue --;
    updateValue()
});


function updateValue(){
    value.innerHTML = counterValue;
};

