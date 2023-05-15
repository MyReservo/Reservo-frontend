import{n as q,t as i,p as I,s as k,a as M,c as d,e as L,b as E,r as H,d as m,f as l,g as O,h as u,i as g,j as ee,k as F,l as ne}from"./companyPanel.8fccd94d.js";const x=document.createElement("div");x.className="company-adress-login";const B=document.createElement("h2");B.className="company-adress-title";B.innerText="Adres pocztowy firmy";const K=document.createElement("div");K.className="company-adress-place";const se=[{id:"street",placeholder:"Ulica",name:"street"},{id:"home",placeholder:"Nr.domu",name:"home"},{id:"city",placeholder:"Miasto",name:"city"},{id:"code",placeholder:"Kod pocztowy",name:"code"}],ce=(a,e,c,o)=>{const n=[];return se.forEach(s=>{const r=document.createElement("div");let t=document.createElement("input");r.className="company-adress-data",t.className="input",t.type="text",t.name=s.name,t.id=s.id,t.placeholder=s.placeholder,t.setAttribute("required","");let C=!1;o!==null&&o.addEventListener("change",()=>{o.checked&&C==!1?(t.classList.remove("red-input"),t.classList.remove("red-placeholder"),t.removeAttribute("placeholder"),t!==void 0&&e(t,!1,s.placeholder)):o.checked&&C==!0}),a&&a.addEventListener("click",z=>{z.preventDefault();let f="";if(t!==void 0)switch(t.id){case"street":f="Podaj nazwę ulicy";break;case"home":f="Podaj numer domu";break;case"city":f="Podaj nazwę miasta";break;case"code":f="Podaj kod pocztowy";break}t!==void 0&&(t.value===""?e(t,!0,f):e(t,!1)),!/^\d{2}-\d{3}$/.test(t.value)&&t.id==="code"&&e(t,!0,"Podaj kod pocztowy")}),r.appendChild(t),K.appendChild(r),(t.id==="home"||t.id==="code")&&t.addEventListener("input",c),n.push(t)}),{inputs:n}};x.append(B,K);const oe=()=>{const a=/^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/,e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;q.value===""&&i(q,!0,"Podaj imię"),I.value===""&&i(I,!0,"Podaj imię"),k.value===""&&i(k,!0,"Podaj nazwisko"),a.test(M.value)||i(M,!0,"Podaj numer telefonu"),e.test(d.value)||i(d,!0,"Podaj adres e-mail"),e.test(L.value)||i(L,!0,"Podaj adres e-mail"),E.value.length<8&&i(E,!0,"Hasło musi zawierać min. 8 znaków"),H.value!==E.value&&i(H,!0,"Hasła muszą być takie same"),m.value===""&&i(m,!0,"Podaj nazwę firmy"),l.value==="default"&&l.classList.add("red-input"),ie()},ie=()=>{O.checked||(u.innerHTML="Musisz zaakceptować regulamin",g.appendChild(u))},Z=(a,e)=>{ee.forEach(c=>{c.classList.remove("red-input"),c.classList.remove("red-placeholder"),c.removeAttribute("placeholder")}),a.contains(e)&&a.removeChild(e)},h=document.querySelector("#user"),v=document.querySelector("#company"),p=document.querySelector("#register");u.classList.add("terms-error");const le=()=>{const a=[{value:"default",label:"Wybierz usługę",id:"default"},{value:"TUTOR",label:"Korepetycje",id:"tutor"},{value:"BARBER",label:"Fryzjer",id:"barber"},{value:"MECHANIC",label:"Mechanik",id:"mechanic"}];l.id="services",l.name="services",l.className="input";const e=l,c=[];return a.forEach(o=>{const n=document.createElement("option");n.value=o.value,n.innerText=o.label,n.id=o.id,l.appendChild(n),n.value==="default"&&(n.disabled=!0),c.push(n)}),[c,e]},te=a=>{const e=a.target;e instanceof HTMLSelectElement?e.classList.remove("red-input"):/^\d{2}-\d{3}$/.test(e.value)?(F(e),e.value=e.value.replace(/[^\d\W]/g,"")):(F(e),e.value=e.value.replace(/[^\d-]/g,""))},G=document.querySelector(".basic-info"),j=document.querySelector(".basic-info-names"),w=document.createElement("div");w.className="basic-info-company";const R=document.createElement("div");R.className="basic-info-data";const $=document.createElement("div");$.className="basic-info-data";const N=document.createElement("div");N.className="basic-info-data";const y=document.querySelector(".surname-data");y.className="basic-info-data";const S=document.querySelector(".basic-info-contact"),P=document.querySelector(".email-customer-data"),J=document.querySelector(".name-customer-data"),U=document.createElement("label");U.htmlFor="provider-name";U.innerText="Imię";const V=document.createElement("label");V.htmlFor="company-name";V.innerText="Nazwa firmy";m.className="input";m.id="company-name";m.name="company-name";m.type="text";const W=document.createElement("label");W.htmlFor="services";W.innerText="Świadczone usługi";const ae=document.createElement("label");ae.textContent="E-mail";const b=document.createElement("div");b.classList.add("basic-info-data");b.classList.add("email-company-data");let T=!1;const re=()=>{v.checked&&T===!1?(T=!0,L.remove(),P.remove(),J.remove(),d.id="email-company",d.type="text",d.classList.add("input"),N.append(U,I),y.append(k),j.append(N,y),b.append(ae,d),S.append(b),R.append(V,m),$.append(W,l),w.append(R,$),G.append(j,S,w,x),Z(g,u)):h.checked&&(T=!1,d.remove(),b.remove(),N.remove(),y.append(ne,k),j.append(J,y),P.append(L),S.append(P),G.append(S),w.remove(),x.remove(),Z(g,u))},D=a=>{const e=a.target;a.type==="input"?(e.matches("#name, #provider-name, #surname, #number, #email, #email-company, #company-name, #password, #repeat, #phone, #city,#code,#home,#street")&&e instanceof HTMLInputElement&&F(e),e.matches("#services")&&te(a)):a.type==="change"?e.matches("#company, #user")?re():e.matches("#terms")&&g.contains(u)&&g.removeChild(u):a.type==="keypress"&&e.matches("#phone")&&isNaN(parseInt(a.key))&&a.preventDefault()},A=ce(p,i,te,v),Q=A.inputs[0],X=A.inputs[1],Y=A.inputs[2],_=A.inputs[3];document.addEventListener("DOMContentLoaded",function(){document.addEventListener("input",D),document.addEventListener("change",D),document.addEventListener("keypress",D),le(),p!==null&&(p.addEventListener("click",oe),p.addEventListener("click",()=>{const n=document.getElementById("services");if(n!==null){const s=n.options[n.selectedIndex].value;localStorage.setItem("selectedOption",s);const r=n.options[n.selectedIndex].textContent;localStorage.setItem("selectedOptionText",r)}localStorage.getItem("selectedOptionText"),h.checked&&localStorage.setItem("customerName",q.value),v.checked&&(localStorage.setItem("providerName",I.value),localStorage.setItem("companyCity",Y.value),localStorage.setItem("companyStreet",Q.value),localStorage.setItem("companyHome",X.value),localStorage.setItem("companyCode",_.value),localStorage.setItem("companyEmail",d.value)),localStorage.setItem("customerEmail",L.value),localStorage.setItem("registerPassword",E.value)}));const a=[Q,X,Y,_],c=[k,M,E,H,l,m,d,I].concat(a);function o(){v.checked&&c.every(s=>!s.classList.contains("red-input"))&&!m.classList.contains("red-input")&&!l.classList.contains("red-input")&&O.checked&&window.location.assign("./company-panel.html");const n=ee.slice(0,6);h.checked&&n.every(s=>!s.classList.contains("red-input"))&&O.checked&&window.location.assign("./customer-panel.html")}if(p&&p.addEventListener("click",o),h!==null&&v!==null){let n=function(r,t){t.forEach((C,z)=>{C.checked=z===r})};const s=[h,v];n(0,s),s.forEach((r,t)=>{r.addEventListener("click",function(){n(t,s)})})}});
