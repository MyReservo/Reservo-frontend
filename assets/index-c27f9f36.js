(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))b(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&b(h)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function b(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const I=document.querySelector("#company"),m=document.querySelector("#name"),p=document.querySelector("#surname"),u=document.querySelector("#phone"),f=document.querySelector("#email"),d=document.querySelector("#password"),y=document.querySelector("#repeat"),g=document.querySelector("#terms"),v=document.querySelector(".register-terms"),q=document.querySelector(".register"),S=document.querySelector(".basic-info"),s=(t,r,c)=>{r?(t.setAttribute("placeholder",c??"Musisz podać jakąś wartość"),t.classList.add("red-input"),t.classList.add("red-placeholder")):(t.removeAttribute("placeholder"),t.classList.remove("red-input"),t.classList.remove("red-placeholder"))},w=t=>{t.preventDefault();const r=/^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/,c=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;m.value===""&&s(m,!0,"Musisz podać imię"),p.value===""&&s(p,!0,"Musisz podać nazwisko"),r.test(u.value)||s(u,!0,"Musisz podać numer telefonu"),c.test(f.value)||s(f,!0,"Musisz podać adres e-mail"),d.value.length<8&&s(d,!0,"Hasło musi zawierać min. 8 znaków"),y.value!==d.value&&s(y,!0,"Hasła muszą być takie same"),C()},i=document.createElement("p");i.classList.add("terms-error");const C=()=>{g.checked?g.checked&&v.contains(i)&&v.removeChild(i):(i.innerHTML="Musisz zaakceptować regulamin",v.appendChild(i))},a=t=>{s(t,!1)},l=document.createElement("div");l.classList.add("basic-info-company");const o=document.createElement("div"),L=document.createElement("label"),E=document.createElement("label"),z=document.createElement("input"),M=document.createElement("input"),A=()=>{l.classList.add("basic-info-company"),o.classList.add("basic-info-data"),L.setAttribute("for","company-name"),E.setAttribute("for","company-name"),L.innerHTML="Nazwa firmy",E.innerHTML="Świadczone usługi",z.setAttribute("id","company-name"),o.appendChild(z),o.appendChild(M),o.appendChild(L),o.appendChild(E),l.appendChild(o),S.appendChild(l)};I.addEventListener("change",A);m.addEventListener("input",()=>a(m));p.addEventListener("input",()=>a(p));u.addEventListener("input",()=>a(u));u.addEventListener("keypress",function(t){isNaN(parseInt(t.key))&&t.preventDefault()});f.addEventListener("input",()=>a(f));d.addEventListener("input",()=>a(d));y.addEventListener("input",()=>a(y));q.addEventListener("click",w);
