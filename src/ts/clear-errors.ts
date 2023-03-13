export const clearAllErrors = (
	adressFields: { id: string; placeholder: string }[],
	nameInput: HTMLInputElement,
	surnameInput: HTMLInputElement,
	numberInput: HTMLInputElement,
	emailInput: HTMLInputElement,
	passwordInput: HTMLInputElement,
	repeatInput: HTMLInputElement,
	companyInput: HTMLInputElement,
	select: HTMLSelectElement,
	termsBox: HTMLElement,
	termsError: HTMLParagraphElement,
) => {


    const streetInput = document.querySelector('#street') as HTMLInputElement;
    const cityInput = document.querySelector('#city') as HTMLInputElement;
    const homeInput = document.querySelector('#home') as HTMLInputElement;
    const codeInput = document.querySelector('#code') as HTMLInputElement;


const adressInputsArr = [streetInput,cityInput,homeInput,codeInput];


	nameInput.classList.remove('red-input');
	nameInput.classList.remove('red-placeholder');
	nameInput.removeAttribute('placeholder');
	surnameInput.classList.remove('red-input');
	surnameInput.classList.remove('red-placeholder');
	surnameInput.removeAttribute('placeholder');
	numberInput.classList.remove('red-input');
	numberInput.classList.remove('red-placeholder');
	numberInput.removeAttribute('placeholder');
	emailInput.classList.remove('red-input');
	emailInput.classList.remove('red-placeholder');
	emailInput.removeAttribute('placeholder');
	passwordInput.classList.remove('red-input');
	passwordInput.classList.remove('red-placeholder');
	passwordInput.removeAttribute('placeholder');
	repeatInput.classList.remove('red-input');
	repeatInput.classList.remove('red-placeholder');
	repeatInput.removeAttribute('placeholder');
	companyInput.classList.remove('red-input');
	companyInput.classList.remove('red-placeholder');
	companyInput.removeAttribute('placeholder');
	select.classList.remove('red-input');
	select.classList.remove('red-placeholder');
	select.removeAttribute('placeholder');


	if (termsBox.contains(termsError)) {
		termsBox.removeChild(termsError);
	}

	adressInputsArr.forEach((input, index) => {
		if (input.classList.contains('red-input')) {
			input.classList.remove('red-input');
			input.classList.remove('red-placeholder');
         input.placeholder = adressFields[index].placeholder;
    
		}
	});
};
