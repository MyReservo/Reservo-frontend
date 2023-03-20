import { inputsArr } from './main';

export const clearAllErrors = (
	adressFields: { id: string; placeholder: string }[],
	termsBox: HTMLElement,
	termsError: HTMLParagraphElement
) => {
	const streetInput = document.querySelector('#street') as HTMLInputElement;
	const cityInput = document.querySelector('#city') as HTMLInputElement;
	const homeInput = document.querySelector('#home') as HTMLInputElement;
	const codeInput = document.querySelector('#code') as HTMLInputElement;

	const adressInputsArr = [streetInput, cityInput, homeInput, codeInput];

	adressInputsArr.forEach((input, index) => {
		if (input.classList.contains('red-input')) {
			input.classList.remove('red-input');
			input.classList.remove('red-placeholder');
			input.placeholder = adressFields[index].placeholder;
		}
	});

	inputsArr.forEach(input => {
		input.classList.remove('red-input');
		input.classList.remove('red-placeholder');
		input.removeAttribute('placeholder');
	});

	if (termsBox.contains(termsError)) {
		termsBox.removeChild(termsError);
	}
};
