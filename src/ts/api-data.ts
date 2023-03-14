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
	.then((response) => response.text())
	.then((data) => console.log(data))
	.catch((error: Error) => console.log(error));

		});

