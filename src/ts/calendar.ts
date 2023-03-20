export{}

const date = new Date();
const monthArr = new Array('Styczeń', 'Luty','Marzec', 'Kwiecień','Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień');


const calendar = () => {
    const monthAndYer = document.querySelector('#calendar-top') as HTMLElement;
    monthAndYer.innerText = monthArr[date.getMonth()] + " " + date.getFullYear();
    
    const allTd: NodeListOf<Element>= document.querySelectorAll('tbody td');
   for (let i = 0; i < allTd.length; i++) {
    allTd[i].textContent = i.toString();
   }

}

calendar()

