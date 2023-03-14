
export const customerInput = document.querySelector('#user') as HTMLInputElement;
export const checkCompanyInput = document.querySelector('#company') as HTMLInputElement;

export const nameInput = document.querySelector('#name') as HTMLInputElement;
export const surnameInput = document.querySelector('#surname') as HTMLInputElement;

export const numberInput = document.querySelector('#phone') as HTMLInputElement;
export const emailInput = document.querySelector('#email') as HTMLInputElement;

export const passwordInput = document.querySelector('#password') as HTMLInputElement;
export const repeatInput = document.querySelector('#repeat') as HTMLInputElement;

export const companyNamelabel = document.createElement('label');
companyNamelabel.htmlFor = 'company-name';
companyNamelabel.innerText = 'Nazwa firmy';
export const companyInput = document.createElement('input');
companyInput.className = 'input';
companyInput.id = 'company-name';
companyInput.name = "company-name";
companyInput.type = 'text';

export const termsInput = document.querySelector('#terms') as HTMLInputElement;
export const termsBox = document.querySelector('.register-terms') as HTMLElement;
export const termsError = document.createElement('p');
termsError.classList.add('terms-error');

export const registerBtn = document.querySelector('#register') as HTMLButtonElement;


export const select = document.createElement('select');
select.id = 'services';
select.name = 'services';
select.className = 'input';

export const services = [
    { value: 'default', label: 'Wybierz usługę', id: 'default' },
	{ value: 'TUTOR', label: 'Korepetycje', id: 'tutor' },
	{ value: 'BARBER', label: 'Fryzjer', id: 'barber' },
	{ value: 'MECHANIC', label: 'Mechanik', id: 'mechanic' },
];

export const servicesLabel = document.createElement('label');
servicesLabel.htmlFor = 'services';
servicesLabel.innerText = 'Świadczone usługi';


export const streetInput = document.querySelector('#street') as HTMLInputElement;
export const homeInput = document.querySelector('#home') as HTMLInputElement;
export const cityInput = document.querySelector('#city') as HTMLInputElement;
export const codeInput = document.querySelector('#code') as HTMLInputElement;
export const form = document.getElementById('form') as HTMLFormElement;

export const basicInfo = document.querySelector('.basic-info') as HTMLElement;
export const basicInfoCompany = document.createElement('div');
basicInfoCompany.className = 'basic-info-company';
export const basicInfoData = document.createElement('div');
basicInfoData.className = 'basic-info-data';
export const basicInfoData2 = document.createElement('div');
basicInfoData2.className = 'basic-info-data';


export const inputsArr = [nameInput,surnameInput,numberInput,emailInput,passwordInput,repeatInput,companyInput,select];

export const checkboxesArr = [customerInput, checkCompanyInput];

