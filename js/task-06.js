const input = document.querySelector('#validation-input');
console.log(input);


const attribute = Number(input.getAttribute('data-length'));
console.log(attribute);

input.addEventListener('blur', onInputBlur);

function onInputBlur (event) {

// console.log(event.currentTarget.value);
// console.log(event.currentTarget.value.length);

    if(event.currentTarget.value.length !== attribute)
    {
        return(input.classList.add('invalid'))
    }
    return(input.classList.add('valid'))

};

