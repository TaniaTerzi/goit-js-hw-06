
const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    // console.log('form submit');

const formElements = event.currentTarget.elements;
// console.log(formElements);

const mail = formElements.email.value;


const password = formElements.password.value;
// console.log(mail, password);


if (mail === '' || password === '') {
   
  return  alert('потрібно заповнити всі поля')
}

const formData = {
    mail,
    password,
};
console.log(formData);

form.reset()

}