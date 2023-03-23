
import '../sass/main.scss';
import { dataInputsCreator, companyAdress } from './new-elements';
// import './calendar';
import './api-data';

 const customerInput = document.querySelector('#user') as HTMLInputElement;
 const checkCompanyInput = document.querySelector('#company') as HTMLInputElement;

 export const nameInput = document.querySelector('#name') as HTMLInputElement;
 export const surnameInput = document.querySelector('#surname') as HTMLInputElement;

 export const numberInput = document.querySelector('#phone') as HTMLInputElement;
 export const emailInput = document.querySelector('#email') as HTMLInputElement;

 export const passwordInput = document.querySelector('#password') as HTMLInputElement;
 export const repeatInput = document.querySelector('#repeat') as HTMLInputElement;

 export const registerBtn = document.querySelector('#register') as HTMLButtonElement;
 

 export const termsInput = document.querySelector('#terms') as HTMLInputElement;
 const termsBox = document.querySelector('.register-terms') as HTMLElement;
 const termsError = document.createElement('p');
 termsError.classList.add('terms-error');

 const termsCheckboxCheck = () => {
	if (!termsInput.checked) {
		termsError.innerHTML = 'Musisz zaakceptować regulamin';
		termsBox.appendChild(termsError);
	}
};

 const checkboxesArr = [customerInput, checkCompanyInput];

function handleCheckboxClick(this: HTMLInputElement) {
	checkboxesArr.forEach(checkbox => {
		if (checkbox !== this) {
			checkbox.checked = false;
		} else {
			checkbox.checked = true;
		}
	});
}

checkboxesArr.forEach(checkbox => {
	checkbox.addEventListener('click', function () {
		handleCheckboxClick.call(this);
	});
});

 const services = [
    { value: 'default', label: 'Wybierz usługę', id: 'default' },
	{ value: 'TUTOR', label: 'Korepetycje', id: 'tutor' },
	{ value: 'BARBER', label: 'Fryzjer', id: 'barber' },
	{ value: 'MECHANIC', label: 'Mechanik', id: 'mechanic' },
];
 export const select = document.createElement('select');
select.id = 'services';
select.name = 'services';
select.className = 'input';

services.forEach(service => {
	const option = document.createElement('option');
	option.value = service.value;
	option.innerText = service.label;
	option.id = service.id;
	select.appendChild(option);
	if (option.value === 'default') {
		option.disabled = true;
	}
});

export const inputsEvents = (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (input instanceof HTMLSelectElement) {
		input.classList.remove('red-input');
	} else {
		removeError(input);
		input.value = input.value.replace(/[^\d\W]/g, '');
	}
};


export const toggleError = (input: HTMLInputElement, isError: boolean, placeholderText?: string) => {
	if (isError) {
		input.setAttribute('placeholder', placeholderText ?? 'Musisz podać jakąś wartość');
		input.classList.add('red-input');
		input.classList.add('red-placeholder');
		
	}
	else if (input.id === "street" || input.id === "home" || input.id === "code" || input.id === "city") {
		input.setAttribute('placeholder', placeholderText ?? "Musisz podać wartość")
		input.classList.remove('red-input');
		input.classList.remove('red-placeholder');
	}

	else {
		input.removeAttribute('placeholder');
		input.classList.remove('red-input');
		input.classList.remove('red-placeholder');

	}
};

export const removeError = (input: HTMLInputElement) => {
	toggleError(input, false);
};


export const basicInfo = document.querySelector('.basic-info') as HTMLElement;
export const basicInfoCompany = document.createElement('div');
basicInfoCompany.className = 'basic-info-company';
export const basicInfoData = document.createElement('div');
basicInfoData.className = 'basic-info-data';
export const basicInfoData2 = document.createElement('div');
basicInfoData2.className = 'basic-info-data';

export const companyNamelabel = document.createElement('label');
companyNamelabel.htmlFor = 'company-name';
companyNamelabel.innerText = 'Nazwa firmy';
export const companyInput = document.createElement('input');
companyInput.className = 'input';
companyInput.id = 'company-name';
companyInput.name = "company-name";
companyInput.type = 'text';

 const servicesLabel = document.createElement('label');
servicesLabel.htmlFor = 'services';
servicesLabel.innerText = 'Świadczone usługi';

const inputsValidation = () => {
	// e.preventDefault();
	const regExPhone: RegExp = /^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/;
	const regExEmail: RegExp =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	if (nameInput.value === '') {
		toggleError(nameInput, true, 'Podaj imię');
	}
	if (surnameInput.value === '') {
		toggleError(surnameInput, true, 'Podaj nazwisko');
	}
	if (!regExPhone.test(numberInput.value)) {
		toggleError(numberInput, true, 'Podaj numer telefonu');
	}
	if (!regExEmail.test(emailInput.value)) {
		toggleError(emailInput, true, 'Podaj adres e-mail');
	}
	if (passwordInput.value.length < 8) {
		toggleError(passwordInput, true, 'Hasło musi zawierać min. 8 znaków');
	}
	if (repeatInput.value !== passwordInput.value) {
		toggleError(repeatInput, true, 'Hasła muszą być takie same');
	}
	if (companyInput.value === '') {
		toggleError(companyInput, true, 'Podaj nazwę firmy');
	}
	if (select.value === 'default') {
		select.classList.add('red-input');
	}
	termsCheckboxCheck();
};








dataInputsCreator(registerBtn, toggleError, inputsEvents,checkCompanyInput);
const inputsArr = [nameInput,surnameInput,numberInput,emailInput,passwordInput,repeatInput,companyInput,select];

// let adressInputsArr = [streetInput, cityInput, homeInput, codeInput];

const clearAllErrors = (
	// adressFields: { id: string; placeholder: string }[],
	termsBox: HTMLElement,
	termsError: HTMLParagraphElement,
	// adressInput:HTMLInputElement,
	// cityInput: HTMLInputElement,
	// homeInput: HTMLInputElement,
	// codeInput: HTMLInputElement
	) => {

		// adressInputsArr = [streetInput, cityInput, homeInput, codeInput];

// if(adressInput.className = 'red-input'){
// 	console.log('im in');
// 	adressInput.classList.remove('red-input');

// }


		// adressInputsArr.forEach((input, index) => {
		// 	console.log('jestem');
		// 	const currentInput = input;
		// 	console.log(currentInput);
		// 	if (currentInput.className === 'red-input') {
		// 		console.log('ok usuwam błedy');
		// 		currentInput.classList.remove('red-input');
		// 		currentInput.classList.remove('red-placeholder');
		// 		currentInput.placeholder = adressFields[index].placeholder;
		// 	}
		// });
	
		inputsArr.forEach(input => {
			input.classList.remove('red-input');
			input.classList.remove('red-placeholder');
			input.removeAttribute('placeholder');
		});
	
		if (termsBox.contains(termsError)) {
			termsBox.removeChild(termsError);
		}
	};


	const addInputs = () => {
		if (checkCompanyInput.checked) {
			
			basicInfoData.append(companyNamelabel, companyInput);
			basicInfoData2.append(servicesLabel, select);
			basicInfoCompany.append(basicInfoData, basicInfoData2);
			basicInfo.append(basicInfoCompany, companyAdress);
			// checkCompanyInput.addEventListener('change', addInputs);

			clearAllErrors( termsBox, termsError);
			
		} else if (customerInput.checked) {
			basicInfoCompany.remove();
			companyAdress.remove();
		}
	};



const handleEvent = (e: Event) => {
	const target = e.target as HTMLElement;
	
	if (e.type === 'input') {
		if (target.matches('#name, #surname, #number, #email, #company-name, #password, #repeat, #phone, #city,#code,#home,#street')) {
			if (target instanceof HTMLInputElement) {
				removeError(target);
			}
		}
		if (target.matches('#services')) {
			console.log('jest services2');
			inputsEvents(e);
		}
	} else if (e.type === 'change') {
		if (target.matches('#company, #user')) {
			addInputs();
		}
		else if (target.matches('#terms')) {
			console.log('jest terms');
			if (termsBox.contains(termsError)) {
				termsBox.removeChild(termsError);
			}
		}
	} else if (e.type === 'keypress') {
		if (target.matches('#phone')) {
			const keyEvent = e as KeyboardEvent;
			if (isNaN(parseInt(keyEvent.key))) {
				e.preventDefault();
			}
		}
	}
};


document.addEventListener('input', handleEvent);
document.addEventListener('change', handleEvent);
document.addEventListener('keypress', handleEvent);
registerBtn.addEventListener('click', inputsValidation);


  

