
import '../sass/main.scss'

const customerInput: HTMLInputElement | null = document.querySelector('#user');
const companyInput: HTMLInputElement | null = document.querySelector('#company');


const nameInput: HTMLInputElement = document.querySelector('#name')!;
const surnameInput = document.querySelector('#surname')!;

const numberInput = document.querySelector('#phone')!;

const emailInput = document.querySelector('#email');

const passwordInput = document.querySelector('#password');

const repeatInput = document.querySelector('#repeat');



const termsInput = document.querySelector("#terms");

const registerBtn: HTMLButtonElement| null = document.querySelector(".register");

const nameBox: HTMLElement | null = document.querySelector('.basic-info-data');


const inputsValidation = (e) => void{
    e.preventDefault();
    if(nameInput.value === ''){
        const nameError: HTMLParagraphElement = document.createElement('p');
        nameError.innerHTML = 'Podaj imię';
        nameBox.appendChild(nameError);
    }


}


registerBtn.addEventListener('click',  inputsValidation)
