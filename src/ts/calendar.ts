export{}


const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
// storing full name of all months in array
const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec",
              "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    if(currentDate){
        currentDate!.textContent = `${months[currMonth]} ${currYear}`; 
    }

    if(daysTag){
        daysTag!.innerHTML = liTag;
    }
}
renderCalendar();



const dayAcitveClassToggler = () => {
    const allLi = document.querySelectorAll('.days li');

    allLi.forEach(li => {
		li.addEventListener('click', () => {

            allLi.forEach(li => {
                li.classList.remove('active2');
        });

            if(li.className === 'inactive' || li.className === 'active'){
                console.log('wbijam');
                 li.classList.remove('active2');
             } else{
                console.log('dodaje klase');
                 li.classList.add('active2');
               }


		});
	});
}


if(prevNextIcon){
    prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => { 
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
            if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear(); // updating current year with new date year
                currMonth = date.getMonth(); // updating current month with new date month
            } else {
                date = new Date(); // pass the current date as date value
            }
            renderCalendar(); // calling renderCalendar function
            dayAcitveClassToggler()
            console.log('włączam clickevents');
            addClickEvents()
        });
    });
}



dayAcitveClassToggler()


const hoursContainer: HTMLElement | null = document.querySelector('.hours-container');
const hoursBoxInfo = document.querySelector('.hours-container__info-span') as HTMLSpanElement;
const hourBtns: NodeListOf<Element> = document.querySelectorAll('.hour-btn');

const handleClick = (e:Event) => {
	const li = e.target as HTMLElement;
	const pickedDay = Number(li.textContent);
	const today = new Date();
	const pickedDate = new Date(date.getFullYear(), date.getMonth(), pickedDay);
    console.log(pickedDate);
    console.log(pickedDay);
	if ((li.textContent !== '' && pickedDate.getDate() == today.getDate()) || pickedDate > today) {
		if(hoursBoxInfo !== null){
			hoursBoxInfo.textContent = pickedDate.getDate() + " " + months[date.getMonth()]
			hoursContainer!.style.display = 'flex';
		}

	} else if (pickedDate < today ) {
		alert('Ten dzień już minął!');
        li.classList.remove('active2');
		return;
	}
};


	const exitIcon = document.querySelector('.fa-times');
	exitIcon?.addEventListener('click', () => {
		hoursContainer!.style.display = 'none';
        const allLi = document.querySelectorAll('.days li');
        allLi.forEach(li => {
            li.classList.remove('active2');
        })
		hourBtns.forEach(btn => {
			btn.classList.remove('active-hour-btn');
		})
	});

    const activeClassButtonToggler = () => {
        hourBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active-hour-btn')) {
                    btn.classList.remove('active-hour-btn');
                } else {
                    hourBtns.forEach(btn => {
                        btn.classList.remove('active-hour-btn');
                    });
                    btn.classList.add('active-hour-btn');
                }
            });
        });
    };
    
activeClassButtonToggler()

const addClickEvents = () => {
    const allLi = document.querySelectorAll('.days li');
	allLi.forEach(li => {
		li.addEventListener('click', handleClick);

	});
};

addClickEvents()