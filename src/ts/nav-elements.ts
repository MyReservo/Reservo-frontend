export {};

const burgerBtn = document.querySelector('#burger-btn') as HTMLButtonElement;
const burgerBtnMobile = document.querySelector('.mobile-btn') as HTMLButtonElement;
const nav = document.querySelector('#mobile-nav');
const allNavLi = document.querySelectorAll('.nav-shadow-box__user-box-side-nav ul li');
const body = document.querySelector('body');

if (burgerBtn) {
	const burgerBtns = [burgerBtn, burgerBtnMobile];

	burgerBtns.forEach(btn => {
		if(btn){
			btn!.addEventListener('click', () => {
				btn!.classList.toggle('open');
				console.log('nadaje nav--active na navigacje');
				nav!.classList.toggle("nav--active");
				body!.classList.toggle('body-overflow');
		
				allNavLi.forEach(li => {
					li!.classList.toggle('li--active');
				})
			});
		}
	});


}





