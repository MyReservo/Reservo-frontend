export{}


let date = new Date();
const monthArr = new Array('Styczeń', 'Luty','Marzec', 'Kwiecień','Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień');

const hoursContainer: HTMLElement | null = document.querySelector('.hours-container');
const allTd: NodeListOf<Element>= document.querySelectorAll('tbody td');

const addClickEvents = () => {
    allTd.forEach(td => {
        td.addEventListener('click', handleClick);
    });
};


const handleClick = (event:Event) => {
    const td = event.target as HTMLElement;
    const pickedDay = Number(td.textContent);

    const today = new Date();
    const pickedDate = new Date(date.getFullYear(), date.getMonth(), pickedDay);

    if (td.textContent !== '' && pickedDate.getDate() == today.getDate() || pickedDate > today ) {
        hoursContainer!.style.display = 'block';
    } else if  (pickedDate < today && td.textContent !== "") {
        alert('Ten dzień już minął!');
        return;
    } 
};


const calendar = () => {
    
    
    const exitIcon = document.querySelector('.fa-times');
    exitIcon?.addEventListener('click', () => {
        hoursContainer!.style.display = "none";
    });    
    const monthAndYear = document.querySelector('#calendar-top') as HTMLElement;
    console.log(monthAndYear.textContent);
    monthAndYear.textContent = monthArr[date.getMonth()] + " " + date.getFullYear();
    console.log(monthAndYear.textContent);
    
    const firstDay = new Date(date.getFullYear(),date.getMonth(),1 )
    const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0 )
    
    let day = 1
    
    for (let i = 0; i < allTd.length; i++) {
        allTd[i].textContent = i.toString();
        
        if (i <firstDay.getDay() -1) {
            allTd[i].innerHTML = '';
        } else if (day <= lastDay.getDate()) {
            allTd[i].innerHTML= day.toString();
            day++
        } else {
            allTd[i].innerHTML = '';
        } 
    }
    addClickEvents();
    

};


const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    date.setDate(1);
    calendar();
};

const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    console.log(date);
    date.setDate(1);
    calendar();
};


document.querySelector('#prev')?.addEventListener('click', prevMonth);
document.querySelector('#next')?.addEventListener('click', nextMonth);

const hourBtns: NodeListOf<Element> = document.querySelectorAll('.hour-btn');

hourBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active'); 
        } else {
            hourBtns.forEach(btn => {
                btn.classList.remove('active');
            })
                btn.classList.add('active'); 
        }
    })
})
calendar()


const customerHomeCheckbox = document.querySelector('#client-home') as HTMLInputElement;
const companyLocalCheckbox = document.querySelector('#local') as HTMLInputElement;

const clientAdressBox = document.querySelector('.pick-profession-box__client-adress') as HTMLDivElement;
const companyAdressBox = document.querySelector('.pick-profession-box__company-adress') as HTMLDivElement;
const clientStreetInput = document.querySelector('#client-street') as HTMLInputElement;;
const clientHouseInput = document.querySelector('#client-house') as HTMLInputElement;;
const clientCityInput = document.querySelector('#client-city') as HTMLInputElement;;


const calendarCheckboxCheck = () => {
    if(customerHomeCheckbox.checked){
        clientAdressBox!.style.display = "flex";
        companyAdressBox.style.display = "none";
    }else if (companyLocalCheckbox.checked){
        companyAdressBox.style.display = "block";
        clientAdressBox!.style.display = "none";
    }
}

customerHomeCheckbox.addEventListener('change',calendarCheckboxCheck );
companyLocalCheckbox.addEventListener('change',calendarCheckboxCheck );


const calendarcheckboxesArr = [customerHomeCheckbox, companyLocalCheckbox];

function handleCheckboxClick(this: HTMLInputElement) {
	calendarcheckboxesArr.forEach(checkbox => {
		if (checkbox !== this) {
			checkbox.checked = false;
		} else {
			checkbox.checked = true;
		}
	});
}

calendarcheckboxesArr.forEach(checkbox => {
	checkbox.addEventListener('click', function () {
		handleCheckboxClick.call(this);
	});
});