export {};

import { inputsArr } from '../utils/constants';

console.log('2');

export const clearAllErrors = (termsBox: HTMLElement, termsError: HTMLParagraphElement) => {
	inputsArr.forEach(input => {
		input.classList.remove('red-input');
		input.classList.remove('red-placeholder');
		input.removeAttribute('placeholder');
	});
	if (termsBox.contains(termsError)) {
		termsBox.removeChild(termsError);
	}
};
