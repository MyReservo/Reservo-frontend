export {};

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
	console.log(date);
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
const companyLocalCheckbox = document.querySelector('#local') as HTMLInputElement;

const clientAdressBox = document.querySelector('.pick-profession-box__client-adress') as HTMLDivElement;
const companyAdressBox = document.querySelector('.pick-profession-box__company-adress') as HTMLDivElement;

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
// const checkboxesServiceProviderArr = [];

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

const companyStreet = document.querySelector('#company-street') as HTMLParagraphElement;
const companyHomeNumber = document.querySelector('#company-home-number') as HTMLParagraphElement;
const companyCity = document.querySelector('#company-city') as HTMLParagraphElement;
const companyCode = document.querySelector('#company-code') as HTMLParagraphElement;

const companyAdressesCreator = () => {
	servicesSelect.addEventListener('change', () => {
		const selectedService = servicesSelect.options[servicesSelect.selectedIndex];
		if (selectedService.value === 'TUTOR') {
			companyStreet.textContent = 'Ulica: Skarbowców';
			companyHomeNumber.textContent = 'Nr.domu: 11/6';
			companyCity.textContent = 'Miasto: Wrocław';
			companyCode.textContent = 'Kod pocztowy: 51-002';
		} else if (selectedService.value === 'BARBER') {
			companyStreet.textContent = 'Ulica: Sezamkowa';
			companyHomeNumber.textContent = 'Nr.domu: 2';
			companyCity.textContent = 'Miasto: Wrocław';
			companyCode.textContent = 'Kod pocztowy: 60-013';
		} else if (selectedService.value === 'MECHANIC') {
			companyStreet.textContent = 'Ulica: Niepodległości';
			companyHomeNumber.textContent = 'Nr.domu: 150/23';
			companyCity.textContent = 'Miasto: Wrocław';
			companyCode.textContent = 'Kod pocztowy: 72-113';
		}
	});
};











const serviceProviderBox = document.querySelector('.service-provider') as HTMLDivElement;
const serviceProviderSpan = document.querySelector('.service-provider__title') as HTMLHeadingElement;

const calendarServicesProviderObjectArr = [
    { id: 'kasia-tutor', name: 'Katarzyna', age: 26, city: 'Wrocław', profession: 'TUTOR' },
    { id: 'michał-tutor', name: 'Michał', age: 30, city: 'Kraków', profession: 'TUTOR' },
    { id: 'grzegorz-tutor', name: 'Grzegorz', age: 35, city: 'Warszawa', profession: 'TUTOR' },
]

const createServiceProviderElement = (name:string, age:number) => {
    const serviceProviderName = document.createElement('div');
    serviceProviderName.className = "service-provider__name";
    const serviceProviderText = document.createElement('p');
    serviceProviderText.textContent = name +  ' wiek:' + `${ age}`;
    const serviceProviderCheckbox = document.createElement('input');
    serviceProviderCheckbox.type = "checkbox";
    serviceProviderCheckbox.id = `${name}-tutor`;
    serviceProviderCheckbox.className = "service-provider";
    serviceProviderName.append(serviceProviderText, serviceProviderCheckbox);
    serviceProviderBox.append(serviceProviderName);
}

const updateServiceProviders = () => {
    const selectedProfession = servicesSelect.value;
    const selectedCity = servicesCitySelect.value;
    if (selectedProfession === 'TUTOR') {
        serviceProviderSpan.textContent = "Korepetytorzy:";
		// serviceProviderBox.innerHTML = ''; 
		calendarServicesProviderObjectArr.forEach(provider => {
			if(selectedCity === "wroclaw" && provider.city === "Wrocław" ){
				createServiceProviderElement(provider.name, provider.age)
			}
			if(selectedCity == "warsaw" && provider.city === "Warszawa"){
				createServiceProviderElement(provider.name, provider.age)
			}
			if(selectedCity == "cracow" && provider.city === "Kraków"){
				createServiceProviderElement(provider.name, provider.age)
			}
		})
		


    } 

}

servicesSelect.addEventListener('change', updateServiceProviders);
servicesCitySelect.addEventListener('change', updateServiceProviders);









// const serviceProviderBox = document.querySelector('.service-provider')
// const serviceProviderSpan = document.querySelector('.service-provider__title');

// const serviceProviderName = document.createElement('div');
// serviceProviderName.className = "service-provider__name";

// const serviceProviderText = document.createElement('p');

// const serviceProviderCheckbox = document.createElement('input');
// serviceProviderCheckbox.type = "checkbox";
// serviceProviderCheckbox.id = "kasia-tutor";
// serviceProviderCheckbox.className = "service-provider";
// console.log(serviceProviderCheckbox);


// const calendarServicesProviderObjectArr = [
	
// {id: 'kasia-tutor'},
// {id: 'michał-tutor'},
// {id: 'grzegorz-tutor'},


// ]


// const serviceProviderCreator = () => {
// 	console.log('wchodzę');
// 	servicesSelect.addEventListener('change', () => {
// 		if (servicesSelect.value === 'TUTOR') {
// 			serviceProviderSpan!.textContent = "Korepetytorzy:"
// 			servicesCitySelect.addEventListener('change', () => {
// 				if (servicesCitySelect.value === 'wroclaw') {
// 					console.log('działam:)');
// 					serviceProviderText.textContent = 'p.Katatzyna wiek:35';
// 					serviceProviderName.append(serviceProviderText, serviceProviderCheckbox);
// 					serviceProviderBox!.append(serviceProviderName);

// 				}
// 			});
// 		}
// 	});
// };


document.addEventListener('DOMContentLoaded', function () {
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
	// serviceProviderCreator()
	customerHomeCheckbox.addEventListener('change', calendarCheckboxCheck);
	companyLocalCheckbox.addEventListener('change', calendarCheckboxCheck);
});
