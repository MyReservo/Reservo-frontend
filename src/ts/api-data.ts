// import {
// 	nameInput,
// 	registerBtn,
// 	termsInput,
// 	surnameInput,
// 	numberInput,
// 	emailInput,
// 	passwordInput,
// 	repeatInput,
// 	companyInput,
// 	select,
// 	inputsArr,
// } from './main';
export{}
// import{streetInput,cityInput,homeInput,codeInput} from './clear-all-errors';

//  const streetInput = document.querySelector('#street') as HTMLInputElement;
//  const homeInput = document.querySelector('#home') as HTMLInputElement;
//  const cityInput = document.querySelector('#city') as HTMLInputElement;
//  const codeInput = document.querySelector('#code') as HTMLInputElement;
 const form = document.getElementById('form') as HTMLFormElement;
//  const nameInput = document.querySelector('#name') as HTMLInputElement;
//  const surnameInput = document.querySelector('#surname') as HTMLInputElement;
//  const numberInput = document.querySelector('#phone') as HTMLInputElement;
//  const emailInput = document.querySelector('#email') as HTMLInputElement;
//  const passwordInput = document.querySelector('#password') as HTMLInputElement;
//  const repeatInput = document.querySelector('#repeat') as HTMLInputElement;
//  const registerBtn = document.querySelector('#register') as HTMLButtonElement;
//  const select = document.createElement('select');
//  const companyInput = document.createElement('input');
//  const termsInput = document.querySelector('#terms') as HTMLInputElement;

//  const inputs = [nameInput,surnameInput,numberInput,emailInput,passwordInput,repeatInput,companyInput,select,streetInput,cityInput,homeInput,codeInput];

// import { addressData } from './new-elements';

// interface Options {
// 	method: 'GET';
// 	mode: RequestMode | undefined;
// 	// body: string;
// 	headers: {
// 		'Content-Type': 'application/json';
// 	};
// }

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const selectedServices = Array.from(document.querySelectorAll('#services option:checked')).map(
		option => option.getAttribute('value') as string
	);


	const query = new URLSearchParams();
	query.set('services', selectedServices.join(','));
	const options: RequestInit = {
		method: 'GET',
		mode: 'cors',
	};
	const url = `http://srv17.mikr.us:20193/reservo/professions?${query.toString()}`;
	fetch(url, options)
		.then(response => response.text())
		.then(data => console.log(data))
		.catch((error: Error) => console.log(error));
});

// fetch('http://srv17.mikr.us:20193/reservo/professions')
// 	.then(res => res.json())
// 	.then(data => console.log(data));
