const input = document.querySelector('#font-size-control');
console.log(input);



const text = document.querySelector('#text');
console.log(text);

input.addEventListener('input', onInputChange);

function onInputChange(event){
    const value = event.currentTarget.value;
 
    text.style.fontSize = `${value}` + 'px';
   
};

