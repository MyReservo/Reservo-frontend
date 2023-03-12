import   {
    // registerBtn,
    // customerInput,
    // checkCompanyInput,
    // termsInput,
    nameInput,
    surnameInput,
    numberInput,
    emailInput,
    passwordInput,
    repeatInput,
}
    from "./main";



const form = document.querySelector(".form-box");


// const tutorService = document.querySelector('#tutor') as HTMLOptionElement;

// console.log(tutorService.selected);

interface Options {

method: "POST",
body: string,
headers: {
    'Content-Type': 'application/json'
}


}
console.log('dwaaa');

if(form){
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    console.log('trzy');
        const companyNameInput = document.querySelector('#company-name') as HTMLInputElement;
    // const servicesInput = document.querySelector('#services');
    const streetInput = document.querySelector('#street') as HTMLInputElement;
    const homeInput = document.querySelector('#home') as HTMLInputElement;
    const cityInput = document.querySelector('#city') as HTMLInputElement;
    const codeInput = document.querySelector('#code') as HTMLInputElement;
    
    // const tutorService = document.querySelector('#tutor') as HTMLOptionElement;
    // const barberService = document.querySelector('#barber') as HTMLOptionElement;
    // const mechanicService = document.querySelector('#mechanic') as HTMLOptionElement;

        console.log('trzyy');
        
        const selectedServices = Array.from(document.querySelectorAll('#services option:checked')).map(option => option.getAttribute('value') as string);


      
        const data = {
            name: nameInput.value,
            surname: surnameInput.value,
            email: emailInput.value,
            number: numberInput.value,
            companyName: companyNameInput.value,
            services: selectedServices,
            street: streetInput.value,
            home: homeInput.value,
            city: cityInput.value,
            zipCode:  codeInput.value,
            password: passwordInput.value,
            repeatPassword: repeatInput.value,
         };
    
    
    
    
         const options: Options = {
       method: 'POST',
       body:  JSON.stringify(data),
       headers: {
          'Content-Type': 'application/json'
       }
    };
    
        fetch('http://srv17.mikr.us:20193/reservo/professions', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error: Error) => console.log(error));
    
    })
}



