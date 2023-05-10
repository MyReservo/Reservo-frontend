
import '../sass/main.scss';
import "./nav-elements";
import { dataInputsCreator, companyAdress } from './new-elements';


 export const customerInput = document.querySelector('#user') as HTMLInputElement;
 export const checkCompanyInput = document.querySelector('#company') as HTMLInputElement;

 export const nameInput = document.querySelector('#name') as HTMLInputElement;
 export const surnameInput = document.querySelector('#surname') as HTMLInputElement;
 export const numberInput = document.querySelector('#phone') as HTMLInputElement;
 export const emailCustomerInput = document.querySelector('.email-customer') as HTMLInputElement;

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

const select = document.createElement('select');



const createRegisterSelect = () => {
	
	const services = [
		{ value: 'default', label: 'Wybierz usługę', id: 'default' },
		{ value: 'TUTOR', label: 'Korepetycje', id: 'tutor' },
		{ value: 'BARBER', label: 'Fryzjer', id: 'barber' },
		{ value: 'MECHANIC', label: 'Mechanik', id: 'mechanic' },
	];
	select.id = 'services';
	select.name = 'services';
	select.className = 'input';
	
	const selectElement = select

	const options: HTMLOptionElement[] = [];
	services.forEach(service => {
		const option = document.createElement('option');
		option.value = service.value;
		option.innerText = service.label;
		option.id = service.id;
		select.appendChild(option);
		if (option.value === 'default') {
			option.disabled = true;
		}
		options.push(option);

	});
	
	return [options,selectElement]
}



export const inputsEvents = (event: Event) => {
	const input = event.target as HTMLInputElement;
	if (input instanceof HTMLSelectElement) {
		input.classList.remove('red-input');
	} else if (!/^\d{2}-\d{3}$/.test(input.value)) {
		removeError(input);
		input.value = input.value.replace(/[^\d-]/g, "");
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

const basicInfoContact = document.querySelector('.basic-info-contact') as HTMLElement;
const emailCustomerData = document.querySelector('.email-customer-data') as HTMLElement; 


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
	if (!regExEmail.test(companyEmail.value)) {
		toggleError(companyEmail, true, 'Podaj adres e-mail');
	}
	if (!regExEmail.test(emailCustomerInput.value)){
		toggleError(emailCustomerInput, true, 'Podaj adres e-mail');
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

const companyEmail = document.createElement('input');
const companyEmailLabel = document.createElement('label');
companyEmailLabel.textContent = "E-mail"
const emailCompanyData = document.createElement('div');
emailCompanyData.classList.add('basic-info-data');
emailCompanyData.classList.add('email-company-data');

const inputsArr = [nameInput,surnameInput,numberInput,emailCustomerInput,passwordInput,repeatInput,select,companyInput,companyEmail];

const clearAllErrors = (
	termsBox: HTMLElement,
	termsError: HTMLParagraphElement,
	) => {
		inputsArr.forEach(input => {
			input.classList.remove('red-input');
			input.classList.remove('red-placeholder');
			input.removeAttribute('placeholder');
		});
		if (termsBox.contains(termsError)) {
			termsBox.removeChild(termsError);
		}
	};



	let checkCompanyInputChecked = false;
	const addInputs = () => {

    if (checkCompanyInput.checked && checkCompanyInputChecked === false) {
		checkCompanyInputChecked = true;
		emailCustomerInput.remove();
		emailCustomerData.remove()
		companyEmail.id = "email-company";
		companyEmail.type = "text";
		companyEmail.classList.add("input");

		emailCompanyData.append(companyEmailLabel,companyEmail)
		basicInfoContact.append(emailCompanyData);
        basicInfoData.append(companyNamelabel, companyInput);
        basicInfoData2.append(servicesLabel, select);
        basicInfoCompany.append(basicInfoData, basicInfoData2);
        basicInfo.append(basicInfoCompany, companyAdress);
        clearAllErrors(termsBox, termsError);

    } else if (customerInput.checked) {
		checkCompanyInputChecked = false;
		companyEmail.remove()
		emailCompanyData.remove()
		emailCustomerData.append(emailCustomerInput)
		basicInfoContact.append(emailCustomerData);
		basicInfo.append(basicInfoContact)
        basicInfoCompany.remove();
        companyAdress.remove();
		clearAllErrors(termsBox, termsError);
    }
};


	export type cityInputValue = string;
	
	  const handleEvent = (e: Event) => {
		  const target = e.target as HTMLElement;
		  
		  if (e.type === 'input') {
			  if (target.matches('#name, #surname, #number, #email, #email-company, #company-name, #password, #repeat, #phone, #city,#code,#home,#street')) {
				  
			if (target instanceof HTMLInputElement) {
				removeError(target);
			}
		}
		if (target.matches('#services')) {
			inputsEvents(e);
		}
	} else if (e.type === 'change') {
		if (target.matches('#company, #user')) {
			addInputs();
		}
		else if (target.matches('#terms')) {
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



const inputs = dataInputsCreator(registerBtn!, toggleError,inputsEvents,checkCompanyInput)

const streetInput = inputs.inputs[0];
const homeInput = inputs.inputs[1];
const cityInput = inputs.inputs[2];
const codeInput = inputs.inputs[3];

	document.addEventListener('DOMContentLoaded' , function() {
	document.addEventListener('input', handleEvent);
	document.addEventListener('change', handleEvent);
	document.addEventListener('keypress', handleEvent);

	createRegisterSelect();
	if(registerBtn !== null){
		registerBtn.addEventListener('click', inputsValidation);
		 registerBtn.addEventListener('click', () => {
			 const selectElement= document.getElementById('services') as  HTMLSelectElement; 
	
			 if(selectElement !== null){
				 const selectedOptionValue = selectElement.options[selectElement.selectedIndex].value;
				 localStorage.setItem('selectedOption', selectedOptionValue);
				 const selectedOptionText = selectElement.options[selectElement.selectedIndex].textContent;
				 localStorage.setItem('selectedOptionText', selectedOptionText!);
			 }
			localStorage.setItem('name', nameInput.value);
			localStorage.getItem('selectedOptionText');
			localStorage.setItem('companyStreet', streetInput.value);
			localStorage.setItem('companyHome', homeInput.value);
			localStorage.setItem('companyCity', cityInput.value);
			localStorage.setItem('companyCode', codeInput.value);
			localStorage.setItem('customerEmail', emailCustomerInput.value);
			localStorage.setItem('companyEmail', companyEmail.value);
			localStorage.setItem('registerPassword', passwordInput.value);

		})	
	}

	const adressInputsArr = [streetInput,homeInput,cityInput,codeInput];
	const inputsArrCompany = [nameInput,surnameInput,numberInput,passwordInput,repeatInput,select,companyInput,companyEmail];
	const newInputsArrCompany = inputsArrCompany.concat(adressInputsArr);

	
	function checkInputsAndRedirect() {
		if (checkCompanyInput.checked && newInputsArrCompany.every(input => !input.classList.contains('red-input')) && !companyInput.classList.contains('red-input') && !select.classList.contains('red-input') && termsInput.checked) {
			window.location.assign('./company-panel.html');
		}
		const newInputsArr = inputsArr.slice(0,6);
		if (customerInput.checked && newInputsArr.every(input => !input.classList.contains('red-input')) && termsInput.checked) {
			console.log('przenosze do customer');
		  window.location.assign('./customer-panel.html');
		}
	  }	 
	  registerBtn.addEventListener('click', checkInputsAndRedirect);
	  

	if (customerInput !== null && checkCompanyInput !== null){
		const checkboxesArr = [customerInput, checkCompanyInput];

			function handleCheckboxClick(selectedIndex: number, checkboxes: HTMLInputElement[]) {
			   checkboxes.forEach((checkbox, index) => {;
				   checkbox.checked = (index === selectedIndex);
			   });
			}
			handleCheckboxClick(0, checkboxesArr);
			checkboxesArr.forEach((checkbox, index) => {
				checkbox.addEventListener('click', function () {
				  handleCheckboxClick(index, checkboxesArr);
				});
			  });
	}
})



  

