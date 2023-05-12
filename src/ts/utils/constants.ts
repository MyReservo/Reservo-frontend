export {}

export const nameInput = document.querySelector('#name') as HTMLInputElement;
export const surnameInput = document.querySelector('#surname') as HTMLInputElement;
export const numberInput = document.querySelector('#phone') as HTMLInputElement;
export const emailCustomerInput = document.querySelector('.email-customer') as HTMLInputElement;

export const passwordInput = document.querySelector('#password') as HTMLInputElement;
export const repeatInput = document.querySelector('#repeat') as HTMLInputElement;
export const termsInput = document.querySelector('#terms') as HTMLInputElement;
export const termsBox = document.querySelector('.register-terms') as HTMLElement;
export const termsError = document.createElement('p');

export const select = document.createElement('select');
export const companyEmail = document.createElement('input');
export const companyInput = document.createElement('input');

export const inputsArr = [
	nameInput,
	surnameInput,
	numberInput,
	emailCustomerInput,
	passwordInput,
	repeatInput,
	select,
	companyInput,
	companyEmail,
];