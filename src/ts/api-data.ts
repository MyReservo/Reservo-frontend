import {
	// registerBtn,
	// customerInput,
	// checkCompanyInput,
	// termsInput,
	nameInput,
	surnameInput,
	numberInput,
	emailInput,
	passwordInput,
	repeatInput,
    form,
    companyInput,
} from './constatns-elements';

import {addressData} from "./new-elements";


interface Options {
	method: 'POST';
	body: string;
	headers: {
		'Content-Type': 'application/json';
	};
}


	form.addEventListener('submit', function (e) {
		e.preventDefault();

		const selectedServices = Array.from(document.querySelectorAll('#services option:checked')).map(
			option => option.getAttribute('value') as string
		);


		console.log(addressData);
		console.log('jeden');

		const data = {
            name: nameInput.value,
			surname: surnameInput.value,
			email: emailInput.value,
			number: numberInput.value,
			services: selectedServices,
			companyName: companyInput.value,
			adress: addressData,
			password: passwordInput.value,
			repeatPassword: repeatInput.value,
		};
		console.log('dwa');

		const options: Options = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		console.log('trzy');

		fetch('http://srv17.mikr.us:20193/reservo/professions', options)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch((error: Error) => console.log(error));
		console.log('cztery');

		});

