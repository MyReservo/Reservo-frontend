import"./companyPanel.3ff69498.js";const g=document.createElement("div");g.className="company-adress-login";const D=document.createElement("h2");D.className="company-adress-title";D.innerText="Adres pocztowy firmy";const H=document.createElement("div");H.className="company-adress-place";const J=[{id:"street",placeholder:"Ulica",name:"street"},{id:"home",placeholder:"Nr.domu",name:"home"},{id:"city",placeholder:"Miasto",name:"city"},{id:"code",placeholder:"Kod pocztowy",name:"code"}],Q=(e,t,s,r)=>{const n=[];return J.forEach(c=>{const m=document.createElement("div");let a=document.createElement("input");m.className="company-adress-data",a.className="input",a.type="text",a.name=c.name,a.id=c.id,a.placeholder=c.placeholder,a.setAttribute("required","");let k=!1;r!==null&&r.addEventListener("change",()=>{r.checked&&k==!1?(a.classList.remove("red-input"),a.classList.remove("red-placeholder"),a.removeAttribute("placeholder"),a!==void 0&&t(a,!1,c.placeholder)):r.checked&&k==!0}),e.addEventListener("click",A=>{A.preventDefault();let f="";if(a!==void 0)switch(a.id){case"street":f="Podaj nazwę ulicy";break;case"home":f="Podaj numer domu";break;case"city":f="Podaj nazwę miasta";break;case"code":f="Podaj kod pocztowy";break}a!==void 0&&(a.value===""?t(a,!0,f):t(a,!1)),!/^\d{2}-\d{3}$/.test(a.value)&&a.id==="code"&&t(a,!0,"Podaj kod pocztowy")}),m.appendChild(a),H.appendChild(m),(a.id==="home"||a.id==="code")&&a.addEventListener("input",s),n.push(a)}),{inputs:n}};g.append(D,H);const b=document.querySelector("#user"),y=document.querySelector("#company"),E=document.querySelector("#name"),S=document.querySelector("#surname"),w=document.querySelector("#phone"),v=document.querySelector(".email-customer"),p=document.querySelector("#password"),C=document.querySelector("#repeat"),h=document.querySelector("#register"),j=document.querySelector("#terms"),I=document.querySelector(".register-terms"),u=document.createElement("p");u.classList.add("terms-error");const X=()=>{j.checked||(u.innerHTML="Musisz zaakceptować regulamin",I.appendChild(u))},o=document.createElement("select"),Y=()=>{const e=[{value:"default",label:"Wybierz usługę",id:"default"},{value:"TUTOR",label:"Korepetycje",id:"tutor"},{value:"BARBER",label:"Fryzjer",id:"barber"},{value:"MECHANIC",label:"Mechanik",id:"mechanic"}];o.id="services",o.name="services",o.className="input";const t=o,s=[];return e.forEach(r=>{const n=document.createElement("option");n.value=r.value,n.innerText=r.label,n.id=r.id,o.appendChild(n),n.value==="default"&&(n.disabled=!0),s.push(n)}),[s,t]},Z=e=>{const t=e.target;t instanceof HTMLSelectElement?t.classList.remove("red-input"):/^\d{2}-\d{3}$/.test(t.value)?(P(t),t.value=t.value.replace(/[^\d\W]/g,"")):(P(t),t.value=t.value.replace(/[^\d-]/g,""))},l=(e,t,s)=>{t?(e.setAttribute("placeholder",s??"Musisz podać jakąś wartość"),e.classList.add("red-input"),e.classList.add("red-placeholder")):e.id==="street"||e.id==="home"||e.id==="code"||e.id==="city"?(e.setAttribute("placeholder",s??"Musisz podać wartość"),e.classList.remove("red-input"),e.classList.remove("red-placeholder")):(e.removeAttribute("placeholder"),e.classList.remove("red-input"),e.classList.remove("red-placeholder"))},P=e=>{l(e,!1)},B=document.querySelector(".basic-info"),L=document.createElement("div");L.className="basic-info-company";const T=document.createElement("div");T.className="basic-info-data";const M=document.createElement("div");M.className="basic-info-data";const x=document.querySelector(".basic-info-contact"),F=document.querySelector(".email-customer-data"),O=document.createElement("label");O.htmlFor="company-name";O.innerText="Nazwa firmy";const d=document.createElement("input");d.className="input";d.id="company-name";d.name="company-name";d.type="text";const R=document.createElement("label");R.htmlFor="services";R.innerText="Świadczone usługi";const _=()=>{const e=/^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/,t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;E.value===""&&l(E,!0,"Podaj imię"),S.value===""&&l(S,!0,"Podaj nazwisko"),e.test(w.value)||l(w,!0,"Podaj numer telefonu"),t.test(i.value)||l(i,!0,"Podaj adres e-mail"),t.test(v.value)||l(v,!0,"Podaj adres e-mail"),p.value.length<8&&l(p,!0,"Hasło musi zawierać min. 8 znaków"),C.value!==p.value&&l(C,!0,"Hasła muszą być takie same"),d.value===""&&l(d,!0,"Podaj nazwę firmy"),o.value==="default"&&o.classList.add("red-input"),X()},i=document.createElement("input"),G=[E,S,w,v,p,C,o,d,i],$=(e,t)=>{G.forEach(s=>{s.classList.remove("red-input"),s.classList.remove("red-placeholder"),s.removeAttribute("placeholder")}),e.contains(t)&&e.removeChild(t)};let N=!1;const ee=()=>{y.checked&&N===!1?(N=!0,v.remove(),i.id="email-company",i.type="text",i.classList.add("input"),x.append(i),T.append(O,d),M.append(R,o),L.append(T,M),B.append(L,g),$(I,u)):b.checked&&(N=!1,i.remove(),F.append(v),x.append(F),B.append(x),L.remove(),g.remove(),$(I,u))},q=e=>{const t=e.target;e.type==="input"?(t.matches("#name, #surname, #number, #email, #email-company, #company-name, #password, #repeat, #phone, #city,#code,#home,#street")&&t instanceof HTMLInputElement&&P(t),t.matches("#services")&&Z(e)):e.type==="change"?t.matches("#company, #user")?ee():t.matches("#terms")&&I.contains(u)&&I.removeChild(u):e.type==="keypress"&&t.matches("#phone")&&isNaN(parseInt(e.key))&&e.preventDefault()},z=Q(h,l,Z,y),K=z.inputs[0],U=z.inputs[1],V=z.inputs[2],W=z.inputs[3];document.addEventListener("DOMContentLoaded",function(){document.addEventListener("input",q),document.addEventListener("change",q),document.addEventListener("keypress",q),Y(),h!==null&&(h.addEventListener("click",_),h.addEventListener("click",()=>{const n=document.getElementById("services");if(n!==null){const c=n.options[n.selectedIndex].value;localStorage.setItem("selectedOption",c);const m=n.options[n.selectedIndex].textContent;localStorage.setItem("selectedOptionText",m)}localStorage.setItem("name",E.value),localStorage.getItem("selectedOptionText"),localStorage.setItem("companyStreet",K.value),localStorage.setItem("companyHome",U.value),localStorage.setItem("companyCity",V.value),localStorage.setItem("companyCode",W.value),localStorage.setItem("customerEmail",v.value),localStorage.setItem("companyEmail",i.value),localStorage.setItem("registerPassword",p.value)}));const e=[K,U,V,W],s=[E,S,w,p,C,o,d,i].concat(e);function r(){y.checked&&s.every(c=>!c.classList.contains("red-input"))&&!d.classList.contains("red-input")&&!o.classList.contains("red-input")&&j.checked&&window.location.assign("./company-panel.html");const n=G.slice(0,6);b.checked&&n.every(c=>!c.classList.contains("red-input"))&&j.checked&&(console.log("przenosze do customer"),window.location.assign("./customer-panel.html"))}if(h.addEventListener("click",r),b!==null&&y!==null){let n=function(m,a){a.forEach((k,A)=>{k.checked=A===m})};const c=[b,y];n(0,c),c.forEach((m,a)=>{m.addEventListener("click",function(){n(a,c)})})}});
