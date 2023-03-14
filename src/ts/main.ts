import '../sass/main.scss';
import './new-elements';
import { dataInputsCreator, companyAdress, adressFields } from './new-elements';
import { clearAllErrors } from './clear-all-errors';
import './api-data';
import {
	customerInput,
	checkCompanyInput,
	nameInput,surnameInput,
	numberInput,emailInput,
	passwordInput,repeatInput,
	companyNamelabel,companyInput,
	select,servicesLabel,services,
	termsInput,termsBox,
	registerBtn,
	basicInfo,basicInfoCompany,basicInfoData,basicInfoData2,
	termsError,checkboxesArr
} from './constants-elements';



const termsCheckboxCheck = () => {
	if (!termsInput.checked) {
		termsError.innerHTML = 'Musisz zaakceptować regulamin';
		termsBox.appendChild(termsError);
	}
};

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
	} else {
		input.removeAttribute('placeholder');
		input.classList.remove('red-input');
		input.classList.remove('red-placeholder');
	}
};

export const removeError = (input: HTMLInputElement) => {
	toggleError(input, false);
};

const addInputs = () => {
	if (checkCompanyInput.checked) {
		basicInfoData.append(companyNamelabel, companyInput);
		basicInfoData2.append(servicesLabel, select);
		basicInfoCompany.append(basicInfoData, basicInfoData2);
		basicInfo.append(basicInfoCompany, companyAdress);
		clearAllErrors(adressFields, termsBox, termsError);
	} else if (customerInput.checked) {
		basicInfoCompany.remove();
		companyAdress.remove();
	}
};

dataInputsCreator(registerBtn, toggleError, removeError, inputsEvents);

const inputsValidation = () => {
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


checkCompanyInput.addEventListener('change', addInputs);
customerInput.addEventListener('change', addInputs);

termsInput.addEventListener('change', function () {
	if (termsBox.contains(termsError)) {
		termsBox.removeChild(termsError);
	}
});

nameInput.addEventListener('input', () => removeError(nameInput));
surnameInput.addEventListener('input', () => removeError(surnameInput));
numberInput.addEventListener('input', () => removeError(numberInput));
numberInput.addEventListener('keypress', function (e) {
	if (isNaN(parseInt(e.key))) {
		e.preventDefault();
	}
});
emailInput.addEventListener('input', () => removeError(emailInput));
companyInput.addEventListener('input', () => removeError(companyInput));
select.addEventListener('input', inputsEvents);
passwordInput.addEventListener('input', () => removeError(passwordInput));
repeatInput.addEventListener('input', () => removeError(repeatInput));
registerBtn.addEventListener('click', inputsValidation);
