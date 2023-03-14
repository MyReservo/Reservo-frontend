

export const companyNamelabel = document.createElement('label');
companyNamelabel.htmlFor = 'company-name';
companyNamelabel.innerText = 'Nazwa firmy';


export const companyInput = document.createElement('input');
companyInput.className = 'input';
companyInput.id = 'company-name';
companyInput.name = "company-name";
companyInput.type = 'text';

export const select = document.createElement('select');
select.id = 'services';
select.name = 'services';
select.className = 'input';

export const streetInput = document.querySelector('#street') as HTMLInputElement;
export const homeInput = document.querySelector('#home') as HTMLInputElement;
export const cityInput = document.querySelector('#city') as HTMLInputElement;
export const codeInput = document.querySelector('#code') as HTMLInputElement;
export const form = document.getElementById('form') as HTMLFormElement;

export const customerInput = document.querySelector('#user') as HTMLInputElement;
export const checkCompanyInput = document.querySelector('#company') as HTMLInputElement;

export const nameInput = document.querySelector('#name') as HTMLInputElement;
 export const surnameInput = document.querySelector('#surname') as HTMLInputElement;

 export const numberInput = document.querySelector('#phone') as HTMLInputElement;
export const emailInput = document.querySelector('#email') as HTMLInputElement;

export const passwordInput = document.querySelector('#password') as HTMLInputElement;
export const repeatInput = document.querySelector('#repeat') as HTMLInputElement;

export const inputsArr = [nameInput,surnameInput,numberInput,emailInput,passwordInput,repeatInput,companyInput,select];



