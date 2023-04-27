export {};

const companyLocalCheckbox = document.querySelector('#local') as HTMLInputElement;
const companyAdress = document.querySelector('.company-adress') as HTMLDivElement;

const companyStreet = document.querySelector('#company-street') as HTMLParagraphElement;
const companyHomeNumber = document.querySelector('#company-home-number') as HTMLParagraphElement;
const companyCity = document.querySelector('#company-city') as HTMLParagraphElement;
const companyCode = document.querySelector('#company-code') as HTMLParagraphElement;

const searchProvidersBtn = document.querySelector('#search-providers') as HTMLButtonElement;

export let date = new Date();



export const allTd: NodeListOf<HTMLTableDataCellElement> = document.querySelectorAll('tbody td');



const customerHomeCheckbox = document.querySelector('#client-home') as HTMLInputElement;
const clientAdressBox = document.querySelector('.client-adress') as HTMLDivElement;

const calendarCheckboxCheck = () => {
	if (customerHomeCheckbox.checked) {
		clientAdressBox!.style.display = 'flex';
		companyAdress.style.display = 'none';
	} else if (companyLocalCheckbox.checked) {
		companyAdress.style.display = 'block';
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

const servicesSelect = document.querySelector('#select-services') as HTMLSelectElement;
const servicesCitySelect = document.querySelector('#select-city') as HTMLSelectElement;

const serviceProviderSmallerBox = document.querySelector('.available-service-providers-container__first-box') as HTMLHeadingElement;
const serviceProvider = document.querySelector('.available-service-providers-container__title') as HTMLHeadingElement;
const availableServiceProviders = document.querySelector('.available-service-providers') as HTMLElement;
const listOfProvidersBox = document.querySelector('.available-service-providers-container__list') as HTMLElement;
const confirmProviderBtn = document.querySelector('#confirm-provider') as HTMLButtonElement;

const calendarServicesProviderObjectArr = [{ id: 'name-service', name: 'name', city: 'city' }];
console.log(calendarServicesProviderObjectArr);

const createServiceProviderElement = (name: string) => {
	const serviceProviderName = document.createElement('div');
	serviceProviderName.className = 'service-provider';
	const serviceProviderText = document.createElement('p');
	serviceProviderText.textContent = name;
	const serviceProviderCheckbox = document.createElement('input');
	serviceProviderCheckbox.type = 'checkbox';
	serviceProviderCheckbox.id = `${name}-tutor`;
	serviceProviderCheckbox.className = 'service-provider';
	serviceProviderName.append(serviceProviderText, serviceProviderCheckbox);
	listOfProvidersBox.append(serviceProviderName)
	availableServiceProviders.append(listOfProvidersBox)
	serviceProviderSmallerBox.append(availableServiceProviders,confirmProviderBtn);

};

const updateServiceProviders = () => {
	const selectedProfession = servicesSelect.value;
	const selectedCity = servicesCitySelect.value;

	if (selectedProfession === 'TUTOR') {
		serviceProvider.textContent = 'korepetytorzy:';

		calendarServicesProviderObjectArr.forEach(provider => {
			const tutorService = provider.id.includes('tutor');
			console.log(tutorService);

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
		serviceProvider.textContent = 'fryzjerzy:';

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
		serviceProvider.textContent = 'Dostępni mechnicy:';

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
const calendarSendBtn = document.querySelector('#send') as HTMLButtonElement;

if (calendarSendBtn !== null) {
	calendarSendBtn.addEventListener('click', () => {
		const hoursBoxInfo = document.querySelector('.hours-container__info-span') as HTMLSpanElement;
		if (hoursBoxInfo instanceof HTMLSpanElement && hoursBoxInfo.textContent !== null) {
			localStorage.setItem('serviceDay', hoursBoxInfo.textContent);
		}
	});
}

const localCheckbox = document.querySelector('#local') as HTMLInputElement;
const homeCheckbox = document.querySelector('#client-home') as HTMLInputElement;

const locationCheckboxArr = [localCheckbox, homeCheckbox];

function checkOneCheckbox(event: Event) {
	const targetCheckbox = event.target as HTMLInputElement;

	if (targetCheckbox.checked) {
		locationCheckboxArr.forEach(checkbox => {
			if (checkbox !== targetCheckbox) {
				checkbox.checked = false;
			}
		});
	}
}



export const monthArr = [
	{ pl: 'Styczeń', en: 'January' },
	{ pl: 'Luty', en: 'February' },
	{ pl: 'Marzec', en: 'March' },
	{ pl: 'Kwiecień', en: 'April' },
	{ pl: 'Maj', en: 'May' },
	{ pl: 'Czerwiec', en: 'June' },
	{ pl: 'Lipiec', en: 'July' },
	{ pl: 'Sierpień', en: 'August' },
	{ pl: 'Wrzesień', en: 'Septemper' },
	{ pl: 'Październik', en: 'October' },
	{ pl: 'Listopad', en: 'November' },
	{ pl: 'Grudzień', en: 'December' },
];




document.addEventListener('DOMContentLoaded', () => {
	// const td = document.querySelectorAll('td')

if(userName){
	userName.textContent = localStorage.getItem('name');

}

	localStorage.getItem('name');

	localStorage.getItem('selectedOption');
	localStorage.getItem('companyStreet');
	localStorage.getItem('companyHome');
	localStorage.getItem('companyCity');
	localStorage.getItem('companyCode');

	calendarServicesProviderObjectArr.forEach(obj => {
		const name = localStorage.getItem('name');
		const city = localStorage.getItem('companyCity');
		if (name !== null && city !== null) {
			obj.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
			obj.id = name.toLowerCase() + '-' + localStorage.getItem('selectedOption')?.toLowerCase();
			obj.city = city;
		}
	});




	if (companyStreet !== null) {
		companyStreet.textContent = localStorage.getItem('companyStreet');
	}
	if (companyHomeNumber !== null) {
		companyHomeNumber.textContent =   localStorage.getItem('companyHome');
	}
	if (companyCity) {
		companyCity.textContent =   localStorage.getItem('companyCity');
	}
	if (companyCode) {
		companyCode.textContent =  localStorage.getItem('companyCode');
	}

	if (localCheckbox !== null) {
		localCheckbox.addEventListener('click', checkOneCheckbox);
	}

	if (homeCheckbox !== null) {
		homeCheckbox.addEventListener('click', checkOneCheckbox);
	}

	if (checkboxesAdressArr !== null && customerHomeCheckbox !== null && companyLocalCheckbox! == null) {
		checkboxesAdressArr.forEach(checkbox => {
			checkbox.addEventListener('click', function () {
				handleCheckboxClick.call(this);
			});
		});
	}

	if (servicesSelect !== null && servicesCitySelect !== null) {
		// servicesSelect.addEventListener('change', updateServiceProviders);

		searchProvidersBtn.addEventListener('click', updateServiceProviders);
		searchProvidersBtn.addEventListener('click', updateServiceProviders);
		customerHomeCheckbox.addEventListener('change', calendarCheckboxCheck);
		companyLocalCheckbox.addEventListener('change', calendarCheckboxCheck);
	}
});
