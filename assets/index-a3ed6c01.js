(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(c){if(c.ep)return;c.ep=!0;const n=o(c);fetch(c.href,n)}})();const j=[{id:"street",placeholder:"Ulica",name:"street"},{id:"home",placeholder:"Nr.domu",name:"home"},{id:"city",placeholder:"Miasto",name:"city"},{id:"code",placeholder:"Kod pocztowy",name:"code"}],h=document.createElement("div");h.className="company-adress";const q=document.createElement("h2");q.className="company-adress-title";q.innerText="Adres pocztowy firmy";const A=document.createElement("div");A.className="company-adress-place";let v;const H=(e,t,o,i)=>{v={},j.forEach(c=>{const n=document.createElement("div");n.className="company-adress-data";const s=document.createElement("input");s.className="input",s.type="text",s.name=c.name,s.id=c.id,s.placeholder=c.placeholder,v[c.name]={},s.addEventListener("input",l=>{const a=l.target;v[c.name]=s.value,o(a)}),e.addEventListener("click",()=>{let l="";switch(s.id){case"street":l="Podaj nazwę ulicy";break;case"home":l="Podaj numer domu";break;case"city":l="Podaj nazwę miasta";break;case"code":l="Podaj kod pocztowy";break}s.value===""?t(s,!0,l):t(s,!1)}),n.appendChild(s),A.appendChild(n),(s.id==="home"||s.id==="code")&&s.addEventListener("input",i)})};h.append(q,A);const C=document.querySelector("#user"),T=document.querySelector("#company"),E=document.querySelector("#name"),b=document.querySelector("#surname"),g=document.querySelector("#phone"),L=document.querySelector("#email"),p=document.querySelector("#password"),I=document.querySelector("#repeat"),w=document.createElement("label");w.htmlFor="company-name";w.innerText="Nazwa firmy";const d=document.createElement("input");d.className="input";d.id="company-name";d.name="company-name";d.type="text";const F=document.querySelector("#terms"),y=document.querySelector(".register-terms"),m=document.createElement("p");m.classList.add("terms-error");const x=document.querySelector("#register"),u=document.createElement("select");u.id="services";u.name="services";u.className="input";const B=[{value:"default",label:"Wybierz usługę",id:"default"},{value:"TUTOR",label:"Korepetycje",id:"tutor"},{value:"BARBER",label:"Fryzjer",id:"barber"},{value:"MECHANIC",label:"Mechanik",id:"mechanic"}],z=document.createElement("label");z.htmlFor="services";z.innerText="Świadczone usługi";document.querySelector("#street");document.querySelector("#home");document.querySelector("#city");document.querySelector("#code");const R=document.getElementById("form"),K=document.querySelector(".basic-info"),f=document.createElement("div");f.className="basic-info-company";const S=document.createElement("div");S.className="basic-info-data";const k=document.createElement("div");k.className="basic-info-data";const U=[E,b,g,L,p,I,d,u],M=[C,T],$=(e,t,o)=>{const i=document.querySelector("#street"),c=document.querySelector("#city"),n=document.querySelector("#home"),s=document.querySelector("#code");[i,c,n,s].forEach((a,D)=>{a.classList.contains("red-input")&&(a.classList.remove("red-input"),a.classList.remove("red-placeholder"),a.placeholder=e[D].placeholder)}),U.forEach(a=>{a.classList.remove("red-input"),a.classList.remove("red-placeholder"),a.removeAttribute("placeholder")}),t.contains(o)&&t.removeChild(o)};R.addEventListener("submit",function(e){e.preventDefault();const t=Array.from(document.querySelectorAll("#services option:checked")).map(n=>n.getAttribute("value")),o=new URLSearchParams;o.set("services",t.join(","));const i={method:"GET",mode:"cors"},c=`http://srv17.mikr.us:20193/reservo/professions?${o.toString()}`;fetch(c,i).then(n=>n.text()).then(n=>console.log(n)).catch(n=>console.log(n))});const W=()=>{F.checked||(m.innerHTML="Musisz zaakceptować regulamin",y.appendChild(m))};function Z(){M.forEach(e=>{e!==this?e.checked=!1:e.checked=!0})}M.forEach(e=>{e.addEventListener("click",function(){Z.call(this)})});B.forEach(e=>{const t=document.createElement("option");t.value=e.value,t.innerText=e.label,t.id=e.id,u.appendChild(t),t.value==="default"&&(t.disabled=!0)});const O=e=>{const t=e.target;t instanceof HTMLSelectElement?t.classList.remove("red-input"):(N(t),t.value=t.value.replace(/[^\d\W]/g,""))},r=(e,t,o)=>{t?(e.setAttribute("placeholder",o??"Musisz podać jakąś wartość"),e.classList.add("red-input"),e.classList.add("red-placeholder")):(e.removeAttribute("placeholder"),e.classList.remove("red-input"),e.classList.remove("red-placeholder"))},N=e=>{r(e,!1)},G=()=>{T.checked?(S.append(w,d),k.append(z,u),f.append(S,k),K.append(f,h),$(j,y,m)):C.checked&&(f.remove(),h.remove())};H(x,r,N,O);const V=()=>{const e=/^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/,t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;E.value===""&&r(E,!0,"Podaj imię"),b.value===""&&r(b,!0,"Podaj nazwisko"),e.test(g.value)||r(g,!0,"Podaj numer telefonu"),t.test(L.value)||r(L,!0,"Podaj adres e-mail"),p.value.length<8&&r(p,!0,"Hasło musi zawierać min. 8 znaków"),I.value!==p.value&&r(I,!0,"Hasła muszą być takie same"),d.value===""&&r(d,!0,"Podaj nazwę firmy"),u.value==="default"&&u.classList.add("red-input"),W()},P=e=>{const t=e.target;e.type==="input"?(t.matches("#name, #surname, #number, #email, #company-name, #password, #repeat, #phone")&&t instanceof HTMLInputElement&&N(t),t.matches("#services")&&(console.log("jest services2"),O(e))):e.type==="change"?(t.matches("#company, #user")&&G(),t.matches("#terms")&&(console.log("jest terms"),y.contains(m)&&y.removeChild(m))):e.type==="keypress"&&t.matches("#phone")&&isNaN(parseInt(e.key))&&e.preventDefault()};document.addEventListener("input",P);document.addEventListener("change",P);document.addEventListener("keypress",P);x.addEventListener("click",V);
