export{};

const burgerBtn = document.querySelector("#burger-btn") as HTMLButtonElement;

if(burgerBtn){

    burgerBtn!.addEventListener('click', () => {
    
        console.log('kliknieto');
        burgerBtn!.classList.toggle('open');
    
    })
}