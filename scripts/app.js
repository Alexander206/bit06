'use strict';

let form = document.getElementById('form');
let response = document.getElementById('response');

const user = 'Jeisson';
const pass = 117;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.user.value === user && Number(form.password.value) === pass
        ? location.assign('./pages/main.html')
        : (response.innerHTML = 'Upss... Datos incorrectos');
});
