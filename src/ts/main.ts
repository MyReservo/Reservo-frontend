
import '../sass/main.scss'


// const customerInput = document.querySelector('#user') as HTMLInputElement ;
const companyInput = document.querySelector('#company') as HTMLInputElement;

const nameInput = document.querySelector('#name') as HTMLInputElement;
const surnameInput = document.querySelector('#surname') as HTMLInputElement;

const numberInput = document.querySelector('#phone') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;

const passwordInput = document.querySelector('#password') as HTMLInputElement;
const repeatInput = document.querySelector('#repeat') as HTMLInputElement;

const termsInput = document.querySelector("#terms") as HTMLInputElement;
const termsBox = document.querySelector(".register-terms") as HTMLElement;

const registerBtn = document.querySelector(".register") as  HTMLButtonElement;

const basicInfo = document.querySelector('.basic-info') as HTMLElement;



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




const termsError = document.createElement('p');
termsError.classList.add('terms-error');

const checkboxCheck = () => {
    if(!termsInput.checked){  
        termsError.innerHTML = "Musisz zaakceptować regulamin";
        termsBox.appendChild(termsError);
         } else if (termsInput.checked && termsBox.contains(termsError)) {
            termsBox.removeChild(termsError);
         }
}

const removeError = (input: HTMLInputElement) => {
    toggleError(input,false)
};




const basicInfoCompany = document.createElement('div');
basicInfoCompany.classList.add('basic-info-company')

const basicInfoData = document.createElement('div');
basicInfoData.classList.add('basic-info-data');

const basicInfoData2 = document.createElement('div');
basicInfoData2.classList.add('basic-info-data');

const label = document.createElement('label');
label.setAttribute('for', "company-name");
label.innerText = "Nazwa firmy";

const inputCompany = document.createElement('input');
inputCompany.classList.add('input');
inputCompany.setAttribute('id','company-name');
inputCompany.setAttribute('type','text');

const label2 = document.createElement('label');
label2.setAttribute('for', "services");
label2.innerText = "Świadczone usługi";

const select = document.createElement('select');
select.setAttribute('id','services');
select.classList.add('input');

const option = document.createElement('option');
option.setAttribute('value', 'default');
option.selected = true;
option.disabled = true;
option.innerText = "Wybierz usługę";

const option2 = document.createElement('option');
option2.setAttribute('value', 'fryzjer');
option2.innerText = "Fryzjer";

const option5 = document.createElement('option');
option5.setAttribute('value', 'kosmetyczka');
option5.innerText = "Kosmetyczka";

const option4 = document.createElement('option');
option4.setAttribute('value', 'mechanik');
option4.innerText = "Mechanik";

const option3 = document.createElement('option');
option3.setAttribute('value', 'hydraulik');
option3.innerText = "Hydraulik";

const companyAdress = document.createElement('div');
companyAdress.classList.add('company-adress');

const companyAdressTitle = document.createElement('h2');
companyAdressTitle.innerText = "Adres pocztowy firmy"
companyAdressTitle.classList.add('company-adress-title')

const companyPlace = document.createElement('div');
companyPlace.classList.add('company-adress-place');

const companyAdressStreet = document.createElement('div');
companyAdressStreet.classList.add('company-adress-data');
const inputStreet = document.createElement('input');
inputStreet.classList.add('input');
inputStreet.setAttribute('type', 'text');
inputStreet.setAttribute('id','street')
inputStreet.setAttribute('placeholder', "Ulica")

const companyAdressHome = document.createElement('div');
companyAdressHome.classList.add('company-adress-data');
const inputHome = document.createElement('input');
inputHome.classList.add('input');
inputHome.setAttribute('type', 'text');
inputHome.setAttribute('id','home')
inputHome.setAttribute('placeholder', "Nr. domu")

const companyCityCode = document.createElement('div');
companyCityCode.classList.add('company-adress-place');

const companyCity = document.createElement('div');
companyCity.classList.add('company-adress-data');
const inputCity = document.createElement('input');
inputCity.classList.add('input');
inputCity.setAttribute('type', 'text');
inputCity.setAttribute('id','city')
inputCity.setAttribute('placeholder', "Miasto")


const companyCode = document.createElement('div');
companyCode.classList.add('company-adress-data');
const inputCode = document.createElement('input');
inputCode.classList.add('input');
inputCode.setAttribute('type', 'text');
inputCode.setAttribute('id','code')
inputCode.setAttribute('placeholder', "Kod pocztowy")


const addInputs = () => {
  if (companyInput.checked) {
    basicInfoData.appendChild(label);
    basicInfoData.appendChild(inputCompany);
    basicInfoData2.appendChild(label2);
    select.appendChild(option);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    basicInfoData2.appendChild(select);

    companyAdressStreet.appendChild(inputStreet);
    companyAdressHome.appendChild(inputHome);
    companyPlace.appendChild(companyAdressStreet);
    companyPlace.appendChild(companyAdressHome);

    companyCity.appendChild(inputCity);
    companyCode.appendChild(inputCode);
    companyCityCode.appendChild(companyCity);
    companyCityCode.appendChild(companyCode);

    companyAdress.appendChild(companyAdressTitle);
    companyAdress.appendChild(companyPlace);
    companyAdress.appendChild(companyCityCode); 
    
        basicInfoCompany.appendChild(basicInfoData);
        basicInfoCompany.appendChild(basicInfoData2);
        basicInfo.appendChild(basicInfoCompany);

    basicInfo.appendChild(companyAdress);
  } else {
    basicInfoCompany.remove();
  }
}



const inputsValidation = (e: Event): void => {
  e.preventDefault();
  const regExPhone: RegExp = /^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/
  const regExEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  if (nameInput.value === '') {
    toggleError(nameInput, true, 'Podaj imię');
  }
  if (surnameInput.value === '') {
    toggleError(surnameInput, true, 'Podaj nazwisko');
  } 
  if (!regExPhone.test(numberInput.value)) {
    toggleError(numberInput, true, 'Podaj numer telefonu');
    } 
    if(!regExEmail.test(emailInput.value)){
        toggleError(emailInput,true, 'Podaj adres e-mail');
    }
    if(passwordInput.value.length < 8){
        toggleError(passwordInput,true, 'Hasło musi zawierać min. 8 znaków');
    }
    if(repeatInput.value !== passwordInput.value){
        toggleError(repeatInput,true, 'Hasła muszą być takie same');
    }
    if (inputCompany.value === '') {
      toggleError(inputCompany,true, 'Podaj nazwę firmy');
    }
    if (select.value === 'default') {
      select.classList.add('red-input');
    } 
    if (inputStreet.value === '') {
      toggleError(inputStreet,true, 'Podaj nazwę ulicy');
    }
    if (inputHome.value === '') {
      toggleError(inputHome,true, 'Podaj numer domu');
    }
    if (inputCity.value === '') {
      toggleError(inputCity,true, 'Podaj nazwę miasta');
    }
    if (inputCode.value === '') {
      toggleError(inputCode,true, 'Podaj kod pocztowy');
    }
    checkboxCheck()
  };
  
  
  const inputsEvents = (event:Event) => {
    const input = event.target as HTMLInputElement;
      if (input instanceof HTMLSelectElement) {
        input.classList.remove('red-input');
        console.log('działam1');
      } else {
        removeError(input);
        input.value = input.value.replace(/[^\d\W]/g,'');
        console.log('działam2');
      }
  }
  
  companyInput.addEventListener('change',addInputs);
  nameInput.addEventListener('input', () => removeError(nameInput));
  surnameInput.addEventListener('input', () => removeError(surnameInput));
  numberInput.addEventListener('input', () => removeError(numberInput));
  numberInput.addEventListener('keypress', function(e){
    if (isNaN(parseInt(e.key))) {
        e.preventDefault();
    }
});
emailInput.addEventListener('input', () => removeError(emailInput));
inputCompany.addEventListener('input', () => removeError(inputCompany));
inputCity.addEventListener('input', () => removeError(inputCity));
inputStreet.addEventListener('input',() => removeError(inputStreet));
 
      inputHome.addEventListener('input', inputsEvents);
      select.addEventListener('input', inputsEvents);
      inputCode.addEventListener('input', inputsEvents);

passwordInput.addEventListener('input', () => removeError(passwordInput));
repeatInput.addEventListener('input', () => removeError(repeatInput));
registerBtn.addEventListener('click', inputsValidation)
