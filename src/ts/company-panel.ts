export {};
// import {prevMonth,nextMonth} from "./customer-panel";

const yourProfessionTitle = document.querySelector('#profession-name') as HTMLSpanElement;
const userNameNav = document.querySelector('.user-name') as HTMLParagraphElement;
// const userName = document.querySelector('.customers-name') as HTMLSpanElement;
const userName = document.querySelector('.visit__customers-name p') as HTMLParagraphElement;
const street = document.querySelector('#visit__adress-street') as HTMLParagraphElement;
const house = document.querySelector('#visit__adress-home-number') as HTMLParagraphElement;
const city = document.querySelector('#visit__adress-city') as HTMLParagraphElement;
const code = document.querySelector('#visit__adress-code') as HTMLParagraphElement;

const heroCompanyImg = document.querySelector('.hero-img') as HTMLParagraphElement;

if (yourProfessionTitle) {
	yourProfessionTitle.textContent = localStorage.getItem('selectedOptionText');
}

if (userNameNav) {
	userNameNav.textContent = localStorage.getItem('name');
}

localStorage.getItem('serviceDay');
localStorage.getItem('selectedOption');
console.log(localStorage.getItem('selectedOption'));
localStorage.getItem('companyStreet');
localStorage.getItem('companyHome');
localStorage.getItem('companyCity');
localStorage.getItem('companyCode');

if (userName) {
	userName.textContent = 'Imię klienta: ' + localStorage.getItem('name');
}
if (street) {
	street.textContent = localStorage.getItem('companyStreet');
}
if (house) {
	house.textContent = localStorage.getItem('companyHome');
}
if (city) {
	city.textContent = localStorage.getItem('companyCity');
}
if (code) {
	code.textContent = localStorage.getItem('companyCode');
}

const combIcon = document.querySelector('.comb') as HTMLElement;
const clipperIcon = document.querySelector('.clipper') as HTMLElement;
const scissorsIcon = document.querySelector('.scissors-company') as HTMLElement;
const barberIcons = [combIcon, clipperIcon, scissorsIcon];

const scredriverIcon = document.querySelector('.screwdriver') as HTMLElement;
const gearIcon = document.querySelector('.gear') as HTMLElement;
const wrenchIcon = document.querySelector('.wrench-company') as HTMLElement;
const mechanicIcons = [scredriverIcon, gearIcon, wrenchIcon];

const bookIcon = document.querySelector('.book') as HTMLElement;
const graduationIcon = document.querySelector('.graduation') as HTMLElement;
const pencilIcon = document.querySelector('.pencil-company') as HTMLElement;
const tutorIcons = [bookIcon, graduationIcon, pencilIcon];

if (localStorage.getItem('selectedOption') === 'BARBER') {
	if (heroCompanyImg) {
		heroCompanyImg.style.backgroundImage = "url('./src/img/barber-large.jpg')";
	}
	barberIcons.forEach(icon => {
		if(icon){
			icon.style.display = 'block';
		}
	});
}

if (localStorage.getItem('selectedOption') === 'TUTOR') {
	if (heroCompanyImg) {
		heroCompanyImg.style.backgroundImage = "url('../src/img/tutor-big.jpg')";
	}
	tutorIcons.forEach(icon => {
		if(icon){
			icon.style.display = 'block';
		}
	});
}
if (localStorage.getItem('selectedOption') === 'MECHANIC') {
	if (heroCompanyImg) {
		heroCompanyImg.style.backgroundImage = "url('/src/img/mechanic-big.jpg')";
	}
	mechanicIcons.forEach(icon => {
		if(icon){
			icon.style.display = 'block';
		}
	});
}
