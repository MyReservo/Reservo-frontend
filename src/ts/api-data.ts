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

 const streetInput = document.querySelector('#street') as HTMLInputElement;
 const homeInput = document.querySelector('#home') as HTMLInputElement;
 const cityInput = document.querySelector('#city') as HTMLInputElement;
 const codeInput = document.querySelector('#code') as HTMLInputElement;
 const form = document.getElementById('form') as HTMLFormElement;
 const nameInput = document.querySelector('#name') as HTMLInputElement;
 const surnameInput = document.querySelector('#surname') as HTMLInputElement;
 const numberInput = document.querySelector('#phone') as HTMLInputElement;
 const emailInput = document.querySelector('#email') as HTMLInputElement;
 const passwordInput = document.querySelector('#password') as HTMLInputElement;
 const repeatInput = document.querySelector('#repeat') as HTMLInputElement;
//  const registerBtn = document.querySelector('#register') as HTMLButtonElement;
 const select = document.createElement('select');
 const companyInput = document.createElement('input');

//  const termsInput = document.querySelector('#terms') as HTMLInputElement;
console.log('dwa');

 const inputs = [nameInput,surnameInput,numberInput,emailInput,passwordInput,repeatInput,companyInput,select,streetInput,cityInput,homeInput,codeInput];

 console.log(inputs);




//  registerBtn.addEventListener("click", (event) => {
// 	 event.preventDefault();
	 
// 	//  const inputs = [inputsArr,adressInputsArr];

// 	 let allInputsFilled = true;
// 	 inputs.forEach((input) => {
// 		 if (input.value.trim() === "") {
// 			 allInputsFilled = false;
// 		 }
// 	 });

// 	 if (allInputsFilled) {
// 		 // Przejdź do strony calendar.html
// 		 window.location.href = "calendar.html";
// 	 } else {
// 		 alert("Proszę w")
// 	 }
// })


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
console.log('ok');
	const selectedServices = Array.from(document.querySelectorAll('#services option:checked')).map(
		option => option.getAttribute('value') as string
	);

	// const data = {
	// 	name: nameInput.value,
	// 	surname: surnameInput.value,
	// 	email: emailInput.value,
	// 	number: numberInput.value,
	// 	services: selectedServices,
	// 	companyName: companyInput.value,
	// 	adress: addressData,
	// 	password: passwordInput.value,
	// 	repeatPassword: repeatInput.value,
	// };

	// 		const options: Options = {
	// 			method: 'GET',
	// 			mode: 'no-cors',
	// 			// body: JSON.stringify(data),
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		};

	// 		const queryParams = new URLSearchParams(data);
	// fetch(`http://srv17.mikr.us:20193/reservo/professions?${queryParams}`)

	// 			.then((response) => response.text())
	// 			.then((data) => console.log(data))
	// 			.catch((error: Error) => console.log(error));

	const query = new URLSearchParams();
	// query.set('name', nameInput.value);
	// query.set('surname', surnameInput.value);
	// query.set('email', emailInput.value);
	// query.set('number', numberInput.value);
	query.set('services', selectedServices.join(','));
	// query.set('companyName', companyInput.value);
	// query.set('adress', JSON.stringify(addressData));
	// query.set('password', passwordInput.value);
	// query.set('repeatPassword', repeatInput.value);
	// console.log(query);
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
