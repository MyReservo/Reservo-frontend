import"./companyPanel.4887e3f7.js";const e=document.querySelector("#email-login"),t=document.querySelector("#password-login"),l=document.querySelector("#login-btn"),o=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,s=localStorage.getItem("registerPassword");console.log(s);l.addEventListener("click",a=>{a.preventDefault(),o.test(e.value)||(e.placeholder="Podaj adres e-mail",e.classList.add("red-input"),e.classList.add("red-placeholder")),t.value!==s&&(t.placeholder="Hasło jest niepoprawne",t.classList.add("red-input"),t.classList.add("red-placeholder")),o.test(e.value)&&e.classList.remove("red-input"),t.value===s&&t.classList.remove("red-input"),n()});function n(){!e.classList.contains("red-input")&&!t.classList.contains("red-input")&&localStorage.getItem("customerEmail")===e.value?window.location.assign("./customer-panel.html"):!e.classList.contains("red-input")&&!t.classList.contains("red-input")&&localStorage.getItem("companyEmail")===e.value&&window.location.assign("./company-panel.html")}console.log(localStorage.getItem("customerEmail"));