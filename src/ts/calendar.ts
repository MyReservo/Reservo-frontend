export{}

// let date = new Date();
// const monthArr = new Array('Styczeń', 'Luty','Marzec', 'Kwiecień','Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień');

// const hoursContainer: HTMLElement | null = document.querySelector('.hours-container');
// const allTd: NodeListOf<Element>= document.querySelectorAll('tbody td');

// const calendar = () => {
//     const handleClick = (event: MouseEvent) => {
//         const td = event.target as HTMLElement;
//         const pickedDay = Number(td.textContent);
//         console.log('warunek');
//         if (new Date(date.getFullYear(), date.getMonth(), pickedDay) < date) {
//             alert('Ten dzień już minał!');
//             return;
//         }
    
//         console.log("ok, to jest przyszłość");
//         hoursContainer!.style.display = 'block';
//     }
        
//     allTd.forEach(td => {
//         td.addEventListener('click', handleClick);
//     });

//     const exitIcon = document.querySelector('.fa-times');
// exitIcon?.addEventListener('click', () => {
//     hoursContainer!.style.display = "none";
// })

// allTd.forEach(td => {

//     td.removeEventListener('click', handleClick);


// })
    
//     const monthAndYear = document.querySelector('#calendar-top') as HTMLElement;
//     monthAndYear.innerText = monthArr[date.getMonth()] + " " + date.getFullYear();
//     // console.log(monthArr[date.getMonth()] + " " + date.getFullYear() + " " + date.getDate());
    
   
//     const firstDay = new Date(date.getFullYear(),date.getMonth(),1 )
//     const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0 )

//     let day = 1

//    for (let i = 0; i < allTd.length; i++) {
//     allTd[i].textContent = i.toString();

//     if (i <firstDay.getDay() -1) {
//         allTd[i].innerHTML = '';
//     } else if (day <= lastDay.getDate()) {
//         allTd[i].innerHTML= day.toString();
//         day++
//     } else {
//         allTd[i].innerHTML = '';
//     } 
//    }
   
//    allTd.forEach(td => {
//        td.addEventListener('click', ()=> {
//         const pickedDay = Number(td.textContent);
//         console.log('warunek');
//         if (new Date(date.getFullYear(), date.getMonth(), pickedDay) < date) {
//             alert('Ten dzień już minał!');
//             return;
//         } 
         
//             console.log("ok, to jest przyszłość");
//             hoursContainer!.style.display = 'block';
//             // const pickedDay = td.textContent;
//             // console.log(pickedDay);   
        
//     })
//    })
// }






// const prevMonth = () => {
//     date = new Date(date.getFullYear(), date.getMonth()-1,1)
//     calendar()
// }
// const nextMonth = () => {
//     date = new Date(date.getFullYear(), date.getMonth()+1,1)
//     calendar()
// }

// document.querySelector('#prev')?.addEventListener('click', prevMonth);
// document.querySelector('#next')?.addEventListener('click', nextMonth);

// const hourBtns: NodeListOf<Element> = document.querySelectorAll('.hour-btn');

// hourBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         if (btn.classList.contains('active')) {
//             btn.classList.remove('active'); 
//         } else {
//             hourBtns.forEach(btn => {
//                 btn.classList.remove('active');
//             })
//                 btn.classList.add('active'); 
//         }
//         // const pickedHour = btn.textContent
//         // console.log(pickedHour);
//     })
// })

// // const exitIcon = document.querySelector('.fa-times');
// // exitIcon?.addEventListener('click', () => {
// //     hoursContainer!.style.display = "none";
// // })



// calendar()








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

    if (pickedDate < today && td.textContent !== "") {
        alert('Ten dzień już minął!');
        return;
    } else if (td.textContent !== '') {
        hoursContainer!.style.display = 'block';
    }
};


const calendar = () => {
    
   

    const exitIcon = document.querySelector('.fa-times');
    exitIcon?.addEventListener('click', () => {
        hoursContainer!.style.display = "none";
    });

    const monthAndYear = document.querySelector('#calendar-top') as HTMLElement;
    monthAndYear.innerText = monthArr[date.getMonth()] + " " + date.getFullYear();

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
        // const pickedHour = btn.textContent
        // console.log(pickedHour);
    })
})


calendar()



