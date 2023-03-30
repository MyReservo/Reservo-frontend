
export{}
import {prevMonth,nextMonth} from "./calendar";


const yourProfessionTitle = document.querySelector('#profession-name') as HTMLSpanElement;
const userName = document.querySelector('.user-name') as HTMLParagraphElement;













 yourProfessionTitle.textContent = localStorage.getItem('selectedOptionText');
   userName.textContent = localStorage.getItem('name');









   localStorage.getItem('serviceDay')
   console.log(localStorage.getItem('serviceDay'));











document.querySelector('#prev')?.addEventListener('click',() => {
	const td = document.querySelector('td');
	if (td) {
	  prevMonth(td);
	}
} );

document.querySelector('#next')?.addEventListener('click',() => {
	const td = document.querySelector('td');
	if (td) {
	  nextMonth(td);
	}
} );

document.addEventListener('DOMContentLoaded', () => {
	const td = document.querySelectorAll('td')
	prevMonth(td[0])
	nextMonth(td[0])

})
