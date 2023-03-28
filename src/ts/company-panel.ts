
export{}
import {prevMonth,nextMonth} from "./calendar";


const yourProfessionTitle = document.querySelector('#profession-name') as HTMLSpanElement;
const userName = document.querySelector('.user-name') as HTMLParagraphElement;


 yourProfessionTitle.textContent = localStorage.getItem('selectedOptionText');
   userName.textContent = localStorage.getItem('name');



document.querySelector('#prev')?.addEventListener('click', prevMonth);
document.querySelector('#next')?.addEventListener('click', nextMonth);

document.addEventListener('DOMContentLoaded', () => {
	prevMonth()
	nextMonth()
})