export {}

const emailLoginInput = document.querySelector('#email-login') as HTMLInputElement;
console.log(emailLoginInput);

const passwordLoginInput = document.querySelector('#password-login') as HTMLInputElement;

console.log(passwordLoginInput);

 const loginBtn = document.querySelector('#login-btn') as HTMLButtonElement;

 const regExEmail: RegExp =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

     
       const currentPassword =   localStorage.getItem('registerPassword');
     console.log(currentPassword);

        loginBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if (!regExEmail.test(emailLoginInput.value)) {
                console.log('wbijam');
                emailLoginInput.placeholder= 'Podaj adres e-mail';
                emailLoginInput.classList.add('red-input');
                emailLoginInput.classList.add('red-placeholder');
            }
            
            if (passwordLoginInput.value !== currentPassword) {
                console.log('wchodze123');
                passwordLoginInput.placeholder =  'Hasło jest niepoprawne';
                passwordLoginInput.classList.add('red-input');
                passwordLoginInput.classList.add('red-placeholder');
            }
            if(regExEmail.test(emailLoginInput.value)){
                emailLoginInput.classList.remove('red-input');
            }

            if(passwordLoginInput.value === currentPassword){
                passwordLoginInput.classList.remove('red-input');
            }


            checkLoginInputsAndRedirect()
            
        })

        function checkLoginInputsAndRedirect(){
            console.log('funkcja uruchomiona');
            if (!emailLoginInput.classList.contains('red-input') && !passwordLoginInput.classList.contains('red-input'))  {
                console.log('loguje...');
                window.location.assign('./calendar.html');
            }
        }