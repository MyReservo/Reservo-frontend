// export{};

const burgerBtn = document.querySelector("#burger-btn") as HTMLButtonElement;

burgerBtn!.addEventListener('click', () => {

    console.log('kliknieto');
    burgerBtn!.classList.toggle('open');

})