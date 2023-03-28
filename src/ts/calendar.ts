export {};

// import {removeError,checkCompanyInput} from "./main";
// import {handleCityInput} from './new-elements';
// import { adressInput } from "./new-elements";
// import { dataInputsCreator } from "./new-elements";

const companyLocalCheckbox = document.querySelector('#local') as HTMLInputElement;
const companyAdressBox = document.querySelector('.pick-profession-box__company-adress') as HTMLDivElement;

const companyStreet = document.querySelector('#company-street') as HTMLParagraphElement;
const companyHomeNumber = document.querySelector('#company-home-number') as HTMLParagraphElement;
const companyCity = document.querySelector('#company-city') as HTMLParagraphElement;
const companyCode = document.querySelector('#company-code') as HTMLParagraphElement;



localStorage.getItem('companyStreet');
localStorage.getItem("companyHome");
localStorage.getItem("companyCity");
localStorage.getItem("companyCode");
console.log(localStorage.getItem('companyStreet'));
console.log(localStorage.getItem("companyHome"));
console.log(localStorage.getItem("companyCity"));
console.log(localStorage.getItem("companyCode"));

// console.log(localStorage.getItem('companyStreet'));


companyStreet.textContent = "Ulica: " + localStorage.getItem('companyStreet');
companyAdressBox.appendChild(companyStreet);

companyHomeNumber.textContent = "Nr.Domu: " + localStorage.getItem('companyHome');
companyAdressBox.appendChild(companyHomeNumber);

companyCity.textContent = "Miasto: " + localStorage.getItem('companyCity');
companyAdressBox.appendChild(companyCity);

companyCode.textContent = "Kod pocztowy: " + localStorage.getItem('companyCode');
companyAdressBox.appendChild(companyCode);



let date = new Date();
const monthArr = new Array(
	'Styczeń',
	'Luty',
	'Marzec',
	'Kwiecień',
	'Maj',
	'Czerwiec',
	'Lipiec',
	'Sierpień',
	'Wrzesień',
	'Październik',
	'Listopad',
	'Grudzień'
);

const hoursContainer: HTMLElement | null = document.querySelector('.hours-container');
const allTd: NodeListOf<Element> = document.querySelectorAll('tbody td');

const addClickEvents = () => {
	allTd.forEach(td => {
		td.addEventListener('click', handleClick);
	});
};

const handleClick = (event: Event) => {
	const td = event.target as HTMLElement;
	const pickedDay = Number(td.textContent);

	const today = new Date();
	const pickedDate = new Date(date.getFullYear(), date.getMonth(), pickedDay);

	if ((td.textContent !== '' && pickedDate.getDate() == today.getDate()) || pickedDate > today) {
		hoursContainer!.style.display = 'block';
	} else if (pickedDate < today && td.textContent !== '') {
		alert('Ten dzień już minął!');
		return;
	}
};

const calendar = () => {
	const exitIcon = document.querySelector('.fa-times');
	exitIcon?.addEventListener('click', () => {
		hoursContainer!.style.display = 'none';
	});
	const monthAndYear = document.querySelector('#calendar-top') as HTMLElement;
	monthAndYear.textContent = monthArr[date.getMonth()] + ' ' + date.getFullYear();

	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	let day = 1;

	for (let i = 0; i < allTd.length; i++) {
		allTd[i].textContent = i.toString();

		if (i < firstDay.getDay() - 1) {
			allTd[i].innerHTML = '';
		} else if (day <= lastDay.getDate()) {
			allTd[i].innerHTML = day.toString();
			day++;
		} else {
			allTd[i].innerHTML = '';
		}
	}
	addClickEvents();
};

const prevMonth = () => {
	date.setMonth(date.getMonth() - 1);
	date.setDate(1);
	calendar();
};

const nextMonth = () => {
	date.setMonth(date.getMonth() + 1);
	date.setDate(1);
	calendar();
};

document.querySelector('#prev')?.addEventListener('click', prevMonth);
document.querySelector('#next')?.addEventListener('click', nextMonth);

const hourBtns: NodeListOf<Element> = document.querySelectorAll('.hour-btn');

const activeClassToggler = () => {
	hourBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('active')) {
				btn.classList.remove('active');
			} else {
				hourBtns.forEach(btn => {
					btn.classList.remove('active');
				});
				btn.classList.add('active');
			}
		});
	});
};

const customerHomeCheckbox = document.querySelector('#client-home') as HTMLInputElement;

const clientAdressBox = document.querySelector('.pick-profession-box__client-adress') as HTMLDivElement;

const calendarCheckboxCheck = () => {
	if (customerHomeCheckbox.checked) {
		clientAdressBox!.style.display = 'flex';
		companyAdressBox.style.display = 'none';
	} else if (companyLocalCheckbox.checked) {
		companyAdressBox.style.display = 'block';
		clientAdressBox!.style.display = 'none';
	}
};

const checkboxesAdressArr = [customerHomeCheckbox, companyLocalCheckbox];

function handleCheckboxClick(this: HTMLInputElement) {
	checkboxesAdressArr.forEach(checkbox => {
		if (checkbox !== this) {
			checkbox.checked = false;
		} else {
			checkbox.checked = true;
		}
	});
}

const servicesSelect = document.querySelector('#calendar-services') as HTMLSelectElement;
const servicesCitySelect = document.querySelector('#calendar-city') as HTMLSelectElement;

const companyAdressesCreator = () => {
	servicesSelect.addEventListener('change', () => {
		const selectedService = servicesSelect.options[servicesSelect.selectedIndex];
		if (selectedService.value === 'TUTOR') {
			companyStreet.textContent = 'Ulica: ';
			companyHomeNumber.textContent = 'Nr.domu: ';
			companyCity.textContent = 'Miasto: ';
			companyCode.textContent = 'Kod pocztowy: ';
		} else if (selectedService.value === 'BARBER') {
			companyStreet.textContent = 'Ulica: ';
			companyHomeNumber.textContent = 'Nr.domu: ';
			companyCity.textContent = 'Miasto: ';
			companyCode.textContent = 'Kod pocztowy: ';
		} else if (selectedService.value === 'MECHANIC') {
			companyStreet.textContent = 'Ulica: ';
			companyHomeNumber.textContent = 'Nr.domu: ';
			companyCity.textContent = 'Miasto: ';
			companyCode.textContent = 'Kod pocztowy: ';
		}
	});
};

// definicja tablicy przechowującej zarejestrowane firmy
// const calendarServicesProviderObjectArr: {name:string, service:string, city:string}[]= [];

// funkcja rejestracji dla firm
// function registerProvider() {
//   // pobierz wartości z formularza
//   const name = document.getElementById('name').value;
//   const service = document.getElementById('service').value;
//   const city = document.getElementById('city').value;

//   // stwórz nowy obiekt calendarServicesProviderObject na podstawie zebranych danych
//   const provider = {
//     name: name,
//     service: service,
//     city: city
//   };

//   // dodaj nowy obiekt do tablicy calendarServicesProviderObjectArr []
//   calendarServicesProviderObjectArr.push(provider);

//   // zresetuj wartości formularza po dodaniu nowego obiektu do tablicy
//   document.getElementById('name').value = '';
//   document.getElementById('service').value = '';
//   document.getElementById('city').value = '';
// }

const serviceProviderBox = document.querySelector('.service-provider') as HTMLDivElement;
const serviceProviderSpan = document.querySelector('.service-provider__title') as HTMLHeadingElement;

const calendarServicesProviderObjectArr = [
	{ id: 'kasia-tutor', name: 'Katarzyna', age: 26, city: 'Wrocław' },
	{ id: 'pawel-tutor', name: 'Paweł', age: 31, city: 'Wrocław' },
	{ id: 'barbara-tutor', name: 'Barbara', age: 40, city: 'Wrocław' },
	{ id: 'michał-tutor', name: 'Michał', age: 30, city: 'Kraków' },
	{ id: 'grzegorz-tutor', name: 'Grzegorz', age: 45, city: 'Warszawa' },
	{ id: 'paulina-tutor', name: 'Paulina', age: 25, city: 'Warszawa' },

	{ id: 'ania-barber', name: 'Joanna', age: 23, city: 'Wrocław' },
	{ id: 'piotr-barber', name: 'Piotr', age: 29, city: 'Kraków' },
	{ id: 'zbigniew-barber', name: 'Zbigniew', age: 50, city: 'Kraków' },
	{ id: 'andrzej-barber', name: 'Andrzej', age: 40, city: 'Warszawa' },
	{ id: 'henryk-barber', name: 'Henryk', age: 27, city: 'Warszawa' },

	{ id: 'stanislaw-mechanic', name: 'Stanisław', age: 23, city: 'Wrocław' },
	{ id: 'artur-mechanic', name: 'Artur', age: 33, city: 'Wrocław' },
	{ id: 'piotr-mechanic', name: 'Piotr', age: 39, city: 'Kraków' },
	{ id: 'andrzej-mechanic', name: 'Andrzej', age: 50, city: 'Kraków' },
	{ id: 'kajetan-mechanic', name: 'Kajetan', age: 40, city: 'Warszawa' },
	{ id: 'wlodzimierz-mechanic', name: 'Włodzimierz', age: 47, city: 'Warszawa' },
];

const createServiceProviderElement = (name: string, age: number) => {
	const serviceProviderName = document.createElement('div');
	serviceProviderName.className = 'service-provider__name';
	const serviceProviderText = document.createElement('p');
	serviceProviderText.textContent = name + ' wiek:' + `${age}`;
	const serviceProviderCheckbox = document.createElement('input');
	serviceProviderCheckbox.type = 'checkbox';
	serviceProviderCheckbox.id = `${name}-tutor`;
	serviceProviderCheckbox.className = 'service-provider';
	serviceProviderName.append(serviceProviderText, serviceProviderCheckbox);
	serviceProviderBox.append(serviceProviderName);
};

const updateServiceProviders = () => {
	serviceProviderBox.innerHTML = '';
	const selectedProfession = servicesSelect.value;
	const selectedCity = servicesCitySelect.value;

	if (selectedProfession === 'TUTOR') {
		serviceProviderSpan.textContent = 'korepetytorzy:';

		calendarServicesProviderObjectArr.forEach(provider => {
			const tutorService = provider.id.includes('tutor');

			if (selectedCity === 'wroclaw' && provider.city === 'Wrocław' && tutorService) {
				createServiceProviderElement(provider.name, provider.age);
			}
			if (selectedCity == 'warsaw' && provider.city === 'Warszawa' && tutorService) {
				createServiceProviderElement(provider.name, provider.age);
			}
			if (selectedCity == 'cracow' && provider.city === 'Kraków' && tutorService) {
				createServiceProviderElement(provider.name, provider.age);
			}
		});
	}

	if (selectedProfession === 'BARBER') {
		serviceProviderSpan.textContent = 'fryzjerzy:';

		calendarServicesProviderObjectArr.forEach(provider => {
			const tutorService = provider.id.includes('barber');

			if (selectedCity === 'wroclaw' && provider.city === 'Wrocław' && tutorService) {
				createServiceProviderElement(provider.name, provider.age);
			}
			if (selectedCity == 'warsaw' && provider.city === 'Warszawa' && tutorService) {
				createServiceProviderElement(provider.name, provider.age);
			}
			if (selectedCity == 'cracow' && provider.city === 'Kraków' && tutorService) {
				createServiceProviderElement(provider.name, provider.age);
			}
		});
	}

	if (selectedProfession === 'MECHANIC') {
		serviceProviderSpan.textContent = 'mechanicy:';

		calendarServicesProviderObjectArr.forEach(provider => {
			const tutorService = provider.id.includes('mechanic');

			if (selectedCity === 'wroclaw' && provider.city === 'Wrocław' && tutorService) {
				createServiceProviderElement(provider.name, provider.age);
			}
			if (selectedCity == 'warsaw' && provider.city === 'Warszawa' && tutorService) {
				createServiceProviderElement(provider.name, provider.age);
			}
			if (selectedCity == 'cracow' && provider.city === 'Kraków' && tutorService) {
				createServiceProviderElement(provider.name, provider.age);
			}
		});
	}
};

nextMonth();
prevMonth();
calendar();
companyAdressesCreator();
activeClassToggler();
checkboxesAdressArr.forEach(checkbox => {
	checkbox.addEventListener('click', function () {
		handleCheckboxClick.call(this);
	});
});
servicesSelect.addEventListener('change', updateServiceProviders);
servicesCitySelect.addEventListener('change', updateServiceProviders);
customerHomeCheckbox.addEventListener('change', calendarCheckboxCheck);
companyLocalCheckbox.addEventListener('change', calendarCheckboxCheck);
