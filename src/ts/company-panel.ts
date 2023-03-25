
export{}

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

const allTd: NodeListOf<Element> = document.querySelectorAll('tbody td');


const calendar = () => {
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
};
const prevMonth = () => {
	date.setMonth(date.getMonth() - 1);
	date.setDate(1);
	calendar();
};

const nextMonth = () => {
	date.setMonth(date.getMonth() + 1);
	date.setDate(1);
	calendar();
};

document.querySelector('#prev')?.addEventListener('click', prevMonth);
document.querySelector('#next')?.addEventListener('click', nextMonth);

document.addEventListener('DOMContentLoaded', () => {
	prevMonth()
	nextMonth()
})