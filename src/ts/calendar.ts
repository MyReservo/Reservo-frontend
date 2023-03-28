export {};

const companyLocalCheckbox = document.querySelector('#local') as HTMLInputElement;
const companyAdressBox = document.querySelector('.pick-profession-box__company-adress') as HTMLDivElement;

const companyStreet = document.querySelector('#company-street') as HTMLParagraphElement;
const companyHomeNumber = document.querySelector('#company-home-number') as HTMLParagraphElement;
const companyCity = document.querySelector('#company-city') as HTMLParagraphElement;
const companyCode = document.querySelector('#company-code') as HTMLParagraphElement;

export let date = new Date();
export const monthArr = new Array(
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
export const allTd: NodeListOf<Element> = document.querySelectorAll('tbody td');

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
		hoursContainer!.style.display = 'flex';
	} else if (pickedDate < today && td.textContent !== '') {
		alert('Ten dzień już minął!');
		return;
	}
};

export const calendar = () => {
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

export const prevMonth = () => {
	date.setMonth(date.getMonth() - 1);
	date.setDate(1);
	calendar();
};

export const nextMonth = () => {
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

const serviceProviderBox = document.querySelector('.service-provider') as HTMLDivElement;
const serviceProviderSpan = document.querySelector('.service-provider__title') as HTMLHeadingElement;

const calendarServicesProviderObjectArr = [
	{ id: 'name-service', name: 'name', city: 'city' },
];

const createServiceProviderElement = (name: string) => {
	const serviceProviderName = document.createElement('div');
	serviceProviderName.className = 'service-provider__name';
	const serviceProviderText = document.createElement('p');
	serviceProviderText.textContent = name ;
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
				createServiceProviderElement(provider.name);
			}
			if (selectedCity == 'warsaw' && provider.city === 'Warszawa' && tutorService) {
				createServiceProviderElement(provider.name);
			}
			if (selectedCity == 'cracow' && provider.city === 'Kraków' && tutorService) {
				createServiceProviderElement(provider.name);
			}
		});
	}

	if (selectedProfession === 'BARBER') {
		serviceProviderSpan.textContent = 'fryzjerzy:';

		calendarServicesProviderObjectArr.forEach(provider => {
			const tutorService = provider.id.includes('barber');

			if (selectedCity === 'wroclaw' && provider.city === 'Wrocław' && tutorService) {
				createServiceProviderElement(provider.name);
			}
			if (selectedCity == 'warsaw' && provider.city === 'Warszawa' && tutorService) {
				createServiceProviderElement(provider.name);
			}
			if (selectedCity == 'cracow' && provider.city === 'Kraków' && tutorService) {
				createServiceProviderElement(provider.name);
			}
		});
	}

	if (selectedProfession === 'MECHANIC') {
		serviceProviderSpan.textContent = 'mechanicy:';

		calendarServicesProviderObjectArr.forEach(provider => {
			const tutorService = provider.id.includes('mechanic');

			if (selectedCity === 'wroclaw' && provider.city === 'Wrocław' && tutorService) {
				createServiceProviderElement(provider.name);
			}
			if (selectedCity == 'warsaw' && provider.city === 'Warszawa' && tutorService) {
				createServiceProviderElement(provider.name);
			}
			if (selectedCity == 'cracow' && provider.city === 'Kraków' && tutorService) {
				createServiceProviderElement(provider.name);
			}
		});
	}
};

const userName = document.querySelector('.user-name') as HTMLParagraphElement;
console.log(userName);


document.addEventListener('DOMContentLoaded', () => {

	userName.textContent = localStorage.getItem('name');

	localStorage.getItem("name");

	console.log(localStorage.getItem('selectedOptionText'));



	localStorage.getItem("selectedOption");
	console.log(localStorage.getItem("selectedOption"));
	localStorage.getItem('companyStreet');
	localStorage.getItem("companyHome");
	localStorage.getItem("companyCity");
	localStorage.getItem("companyCode");


	calendarServicesProviderObjectArr.forEach((obj) => {
		const name = localStorage.getItem("name");
		const city = localStorage.getItem("companyCity");
		if (name !== null && city !== null) {
		  obj.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
		  obj.id = name.toLowerCase() + "-" + localStorage.getItem("selectedOption")?.toLowerCase();
		  obj.city = city
		} 
	  });
	  
	
	companyStreet.textContent = "Ulica: " + localStorage.getItem('companyStreet');
	companyAdressBox.appendChild(companyStreet);
	
	companyHomeNumber.textContent = "Nr.Domu: " + localStorage.getItem('companyHome');
	companyAdressBox.appendChild(companyHomeNumber);
	
	companyCity.textContent = "Miasto: " + localStorage.getItem('companyCity');
	companyAdressBox.appendChild(companyCity);
	
	companyCode.textContent = "Kod pocztowy: " + localStorage.getItem('companyCode');
	companyAdressBox.appendChild(companyCode);


	nextMonth();
	prevMonth();
	calendar();
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
})

