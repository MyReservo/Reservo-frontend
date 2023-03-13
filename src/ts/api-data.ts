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
    companyNameInput,
    streetInput,
    homeInput,
    cityInput,
    codeInput
} from './constatns-elements';
// import { registerBtn } from './main';


interface Options {
	method: 'POST';
	body: string;
	headers: {
		'Content-Type': 'application/json';
	};
}



console.log('jeden');

	form.addEventListener('submit', function (e) {
		console.log('dwa');
		e.preventDefault();
		const selectedServices = Array.from(document.querySelectorAll('#services option:checked')).map(
			option => option.getAttribute('value') as string
		);
		const data = {
			name: nameInput.value,
			surname: surnameInput.value,
			email: emailInput.value,
			number: numberInput.value,
			companyName: companyNameInput.value,
			services: selectedServices,
			street: streetInput.value,
			home: homeInput.value,
			city: cityInput.value,
			zipCode: codeInput.value,
			password: passwordInput.value,
			repeatPassword: repeatInput.value,
		};
		const options: Options = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		fetch('http://srv17.mikr.us:20193/reservo/professions', options)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch((error: Error) => console.log(error));
	});

