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
    console.log(today.getHours(), today.getMinutes());
    console.log(pickedDate.getDate());
    console.log(today.getDate());

    if (td.textContent !== '' && pickedDate.getDate() == today.getDate() ) {
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



