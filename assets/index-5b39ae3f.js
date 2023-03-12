(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const M=[{id:"street",placeholder:"Ulica"},{id:"home",placeholder:"Nr.domu"},{id:"city",placeholder:"Miasto"},{id:"code",placeholder:"Kod pocztowy"}],h=document.createElement("div");h.className="company-adress";const S=document.createElement("h2");S.className="company-adress-title";S.innerText="Adres pocztowy firmy";const q=document.createElement("div");q.className="company-adress-place";const V=(e,t,o,i)=>{M.forEach(r=>{const a=document.createElement("div");a.className="company-adress-data";const s=document.createElement("input");s.className="input",s.type="text",s.id=r.id,s.placeholder=r.placeholder,e.addEventListener("click",()=>{let c="";switch(s.id){case"street":c="Podaj nazwę ulicy";break;case"home":c="Podaj numer domu";break;case"city":c="Podaj nazwę miasta";break;case"code":c="Podaj kod pocztowy";break}s.value===""?t(s,!0,c):t(s,!1)}),a.appendChild(s),q.appendChild(a),s.addEventListener("input",()=>{o(s)}),(s.id==="home"||s.id==="code")&&s.addEventListener("input",i)})};h.appendChild(S);h.appendChild(q);const G=(e,t,o,i,r,a,s,c,z,x,I)=>{const T=document.querySelector("#street"),W=document.querySelector("#city"),Z=document.querySelector("#home"),$=document.querySelector("#code"),B=[T,W,Z,$];console.log("działam"),t.classList.remove("red-input"),t.classList.remove("red-placeholder"),t.removeAttribute("placeholder"),o.classList.remove("red-input"),o.classList.remove("red-placeholder"),o.removeAttribute("placeholder"),i.classList.remove("red-input"),i.classList.remove("red-placeholder"),i.removeAttribute("placeholder"),r.classList.remove("red-input"),r.classList.remove("red-placeholder"),r.removeAttribute("placeholder"),a.classList.remove("red-input"),a.classList.remove("red-placeholder"),a.removeAttribute("placeholder"),s.classList.remove("red-input"),s.classList.remove("red-placeholder"),s.removeAttribute("placeholder"),c.classList.remove("red-input"),c.classList.remove("red-placeholder"),c.removeAttribute("placeholder"),z.classList.remove("red-input"),z.classList.remove("red-placeholder"),z.removeAttribute("placeholder"),x.contains(I)&&x.removeChild(I),B.forEach((b,U)=>{console.log(T.placeholder),b.classList.contains("red-input")&&(console.log("ok usuwam błędy "),b.classList.remove("red-input"),b.classList.remove("red-placeholder"),b.placeholder=e[U].placeholder)})},w=document.querySelector("#user"),C=document.querySelector("#company"),f=document.querySelector("#name"),y=document.querySelector("#surname"),p=document.querySelector("#phone"),L=document.querySelector("#email"),m=document.querySelector("#password"),E=document.querySelector("#repeat"),O=document.querySelector("#terms"),g=document.querySelector(".register-terms"),D=document.querySelector(".register"),J=document.querySelector(".basic-info"),v=document.createElement("p");v.classList.add("terms-error");const Q=()=>{O.checked||(v.innerHTML="Musisz zaakceptować regulamin",g.appendChild(v))},F=[w,C];function R(){F.forEach(e=>{e!==this?e.checked=!1:e.checked=!0})}F.forEach(e=>{e.addEventListener("click",function(){R.call(this)})});const k=document.createElement("div");k.className="basic-info-company";const A=document.createElement("div");A.className="basic-info-data";const N=document.createElement("div");N.className="basic-info-data";const P=document.createElement("label");P.htmlFor="company-name";P.innerText="Nazwa firmy";const l=document.createElement("input");l.className="input";l.id="company-name";l.type="text";const j=document.createElement("label");j.htmlFor="services";j.innerText="Świadczone usługi";const X=[{value:"default",label:"Wybierz usługę"},{value:"fryzjer",label:"Fryzjer"},{value:"kosmetyczka",label:"Kosmetyczka"},{value:"mechanik",label:"Mechanik"},{value:"hydraulik",label:"Hydraulik"}],u=document.createElement("select");u.id="services";u.className="input";X.forEach(e=>{const t=document.createElement("option");t.value=e.value,t.innerText=e.label,u.appendChild(t),t.value==="default"&&(t.disabled=!0)});const H=e=>{const t=e.target;t instanceof HTMLSelectElement?t.classList.remove("red-input"):(d(t),t.value=t.value.replace(/[^\d\W]/g,""))},n=(e,t,o)=>{t?(e.setAttribute("placeholder",o??"Musisz podać jakąś wartość"),e.classList.add("red-input"),e.classList.add("red-placeholder")):(e.removeAttribute("placeholder"),e.classList.remove("red-input"),e.classList.remove("red-placeholder"))},d=e=>{n(e,!1)},K=()=>{C.checked?(A.append(P,l),N.append(j,u),k.append(A,N),J.append(k,h),G(M,f,y,p,L,m,E,l,u,g,v)):w.checked&&(k.remove(),h.remove())};V(D,n,d,H);const Y=e=>{e.preventDefault();const t=/^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/,o=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;f.value===""&&n(f,!0,"Podaj imię"),y.value===""&&n(y,!0,"Podaj nazwisko"),t.test(p.value)||n(p,!0,"Podaj numer telefonu"),o.test(L.value)||n(L,!0,"Podaj adres e-mail"),m.value.length<8&&n(m,!0,"Hasło musi zawierać min. 8 znaków"),E.value!==m.value&&n(E,!0,"Hasła muszą być takie same"),l.value===""&&n(l,!0,"Podaj nazwę firmy"),u.value==="default"&&u.classList.add("red-input"),Q()};C.addEventListener("change",K);w.addEventListener("change",K);O.addEventListener("change",function(){g.contains(v)&&(console.log("ok usuwam błąd"),g.removeChild(v))});f.addEventListener("input",()=>d(f));y.addEventListener("input",()=>d(y));p.addEventListener("input",()=>d(p));p.addEventListener("keypress",function(e){isNaN(parseInt(e.key))&&e.preventDefault()});L.addEventListener("input",()=>d(L));l.addEventListener("input",()=>d(l));u.addEventListener("input",H);m.addEventListener("input",()=>d(m));E.addEventListener("input",()=>d(E));D.addEventListener("click",Y);
