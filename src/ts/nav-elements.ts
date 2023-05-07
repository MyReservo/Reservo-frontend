export {};

const burgerBtn = document.querySelector('.burger-btn-tablets') as HTMLButtonElement;
const burgerBtnMobile = document.querySelector('.mobile-btn') as HTMLButtonElement;
const nav = document.querySelector('#mobile-nav');
const allNavLi = document.querySelectorAll('.nav-shadow-box__user-box-side-nav ul li');
const body = document.querySelector('body');
const sections = document.querySelectorAll('.section');

if (burgerBtn || burgerBtnMobile) {
	const burgerBtns = [burgerBtn, burgerBtnMobile];
	
	burgerBtns.forEach(btn => {
		if (btn) {
			btn.addEventListener('click', () => {
				btn.classList.toggle('open');
				console.log('nadaje nav--active na navigacje');
				nav!.classList.toggle('nav--active');
				body!.classList.toggle('body-overflow');
				allNavLi.forEach(li => {
					li!.classList.toggle('li--active');
				});
			});
		}
	});
}

export const burgerBtnSpans = document.querySelectorAll('.burger-btn-tablets span') as NodeListOf<HTMLElement>;
export const burgerBtnMobileSpans = document.querySelectorAll('.mobile-btn span') as NodeListOf<HTMLElement>;
const calendarSection = document.querySelector('.calendar-section') as HTMLElement;
const headerMobile = document.querySelector('#header-mobile') as HTMLElement;

const handleObserver = () => {
	const currentSection = window.scrollY;

	sections.forEach(section => {
		 if (!section.classList.contains('white-section') && section instanceof HTMLElement && section.offsetTop <= currentSection + 100 ) {
			burgerBtnSpans.forEach(span => {
				span.style.backgroundColor = 'white';
			});
			burgerBtnMobileSpans.forEach(span => {
				span.style.backgroundColor = 'white';
			});
		}
	});

	sections.forEach(section => {
		if (section.classList.contains('white-section') && section instanceof HTMLElement && section.offsetTop <= currentSection + 100 ) {
			burgerBtnSpans.forEach(span => {
				console.log('jest white-section, więc btn black');
				span.style.backgroundColor = 'black';
			});
			burgerBtnMobileSpans.forEach(span => {
				span.style.backgroundColor = 'black';
			});
		}	
	})

	if(calendarSection.offsetTop <= currentSection + 100){
		burgerBtnSpans.forEach(span => {
			span.style.backgroundColor = 'white';
		});
		burgerBtnMobileSpans.forEach(span => {
			span.style.backgroundColor = 'white';
		});
	}

	if(currentSection >= headerMobile.offsetTop && currentSection < headerMobile.offsetTop + headerMobile.offsetHeight){
		burgerBtnMobileSpans.forEach(span => {
			console.log('jestem na header-mobile, więc btn white');
			span.style.backgroundColor = 'white';
		});
	} 

	if(window.innerWidth <= 576 && calendarSection.offsetTop <= window.scrollY ) {
		console.log('szerokość 567');
		burgerBtnSpans.forEach(span => {
			span.style.backgroundColor = 'black';
		});
		burgerBtnMobileSpans.forEach(span => {
			span.style.backgroundColor = 'black';
		});
	}
};

window.addEventListener('scroll', handleObserver);

