
import '../sass/main.scss'


// const customerInput = document.querySelector('#user') as HTMLInputElement ;
// const companyInput = document.querySelector('#company') as HTMLInputElement;

const nameInput = document.querySelector('#name') as HTMLInputElement;
const surnameInput = document.querySelector('#surname') as HTMLInputElement;

const numberInput = document.querySelector('#phone') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;

const passwordInput = document.querySelector('#password') as HTMLInputElement;
const repeatInput = document.querySelector('#repeat') as HTMLInputElement;

const termsInput = document.querySelector("#terms") as HTMLInputElement;
const termsBox = document.querySelector(".register-terms") as HTMLElement;

const registerBtn = document.querySelector(".register") as  HTMLButtonElement;

// const nameBox = document.querySelector('.basic-info-data') as HTMLElement;



const toggleError = (input: HTMLInputElement, isError: boolean, placeholderText?: string): void => {
  if (isError) {
    input.setAttribute('placeholder', placeholderText ?? "Musisz podać jakąś wartość");
    input.classList.add('red-input');
    input.classList.add('red-placeholder');
  } else {
    input.removeAttribute('placeholder');
    input.classList.remove('red-input');
    input.classList.remove('red-placeholder');
  }
};

const inputsValidation = (e: Event): void => {
  e.preventDefault();
  const regExPhone: RegExp = /^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/
  const regExEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  if (nameInput.value === '') {
    toggleError(nameInput, true, 'Musisz podać imię');
  }
  if (surnameInput.value === '') {
    toggleError(surnameInput, true, 'Musisz podać nazwisko');
  } 
  if (!regExPhone.test(numberInput.value)) {
    toggleError(numberInput, true, 'Musisz podać numer telefonu');
    } 
    if(!regExEmail.test(emailInput.value)){
        toggleError(emailInput,true, 'Musisz podać adres e-mail');
    }
    if(passwordInput.value.length < 8){
        toggleError(passwordInput,true, 'Hasło musi zawierać min. 8 znaków');
    }
    if(repeatInput.value !== passwordInput.value){
        toggleError(repeatInput,true, 'Hasła muszą być takie same');
    }
    checkboxCheck()
};



const termsError = document.createElement('p');
termsError.classList.add('terms-error');
const checkboxCheck = () => {
    
    if(!termsInput.checked){  
        termsError.innerHTML = "Musisz zaakceptować regulamin";
        termsBox.appendChild(termsError);
         console.log('object');
         } else if (termsInput.checked && termsBox.contains(termsError)) {
            termsBox.removeChild(termsError);
           console.log('oks');
         }
}

const removeError = (input: HTMLInputElement) => {
    toggleError(input,false)
};

nameInput.addEventListener('input', () => removeError(nameInput));
surnameInput.addEventListener('input', () => removeError(surnameInput));
numberInput.addEventListener('input', () => removeError(numberInput));
emailInput.addEventListener('input', () => removeError(emailInput));
passwordInput.addEventListener('input', () => removeError(passwordInput));
repeatInput.addEventListener('input', () => removeError(repeatInput));
registerBtn.addEventListener('click', inputsValidation)