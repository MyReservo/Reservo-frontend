import{t as d}from"./companyPanel.23846153.js";const i=document.querySelector("#local"),x=document.querySelector(".company-adress"),q=document.querySelector("#company-street"),E=document.querySelector("#company-home-number"),L=document.querySelector("#company-city"),I=document.querySelector("#company-code"),u=document.querySelector("#search-providers");document.querySelectorAll("tbody td");const s=document.querySelector("#client-home"),A=document.querySelector(".client-adress"),P=document.querySelector(".footer__current-year"),B=new Date().getFullYear();P&&B&&(P.textContent=B.toString());const z=()=>{s.checked?(A.style.display="flex",x.style.display="none"):i.checked&&(x.style.display="block",A.style.display="none")},k=[s,i];function j(){k.forEach(t=>{t!==this?t.checked=!1:t.checked=!0})}const p=document.querySelector("#select-services"),w=document.querySelector("#select-city"),V=document.querySelector(".available-service-providers-container__first-box"),g=document.querySelector(".available-service-providers-container__title"),_=document.querySelector(".available-service-providers"),S=document.querySelector(".available-service-providers-container__list"),W=document.querySelector("#confirm-provider"),H=document.querySelector(".pick-profession-box"),O=document.querySelector(".header__btn"),C=[{id:"name-service",name:"name",city:"city"}];let r,v;const a=(t,o)=>{const c=document.createElement("div");c.className="service-provider";const e=document.createElement("label");e.textContent=t,e.setAttribute("for","person"),r=document.createElement("input"),r.type="checkbox",r.id=`${o}`,r.className="person-checkbox",c.append(e,r),S.append(c),_.append(S),V.append(_,W),r.addEventListener("change",b),v=S.querySelectorAll("input"),W.addEventListener("click",()=>{const n=document.querySelector("#service-location");v&&(v.forEach(l=>{l.checked&&n&&n.scrollIntoView({behavior:"smooth"})}),Array.from(v).some(l=>l.checked)||alert("Wybierz jedną z dostepnych osób"))})},K=()=>{const t=p.value,o=w.value,c=document.querySelector("#pick-person-and-location-section");p.selectedIndex>0&&w.selectedIndex>0?c&&c.scrollIntoView({behavior:"smooth"}):alert("Wybierz usługę oraz miasto"),t==="TUTOR"&&(g.textContent="Dostępni korepetytorzy:",C.forEach(e=>{const n=e.id.includes("tutor");o==="wroclaw"&&e.city==="Wrocław"&&n&&a(e.name,e.id),o=="warsaw"&&e.city==="Warszawa"&&n&&a(e.name,e.id),o=="cracow"&&e.city==="Kraków"&&n&&a(e.name,e.id)})),t==="BARBER"&&(g.textContent="Dostepni fryzjerzy:",C.forEach(e=>{const n=e.id.includes("barber");o==="wroclaw"&&e.city==="Wrocław"&&n&&a(e.name,e.id),o=="warsaw"&&e.city==="Warszawa"&&n&&a(e.name,e.id),o=="cracow"&&e.city==="Kraków"&&n&&a(e.name,e.id)})),t==="MECHANIC"&&(g.textContent="Dostępni mechnicy:",C.forEach(e=>{const n=e.id.includes("mechanic");o==="wroclaw"&&e.city==="Wrocław"&&n&&a(e.name,e.id),o=="warsaw"&&e.city==="Warszawa"&&n&&a(e.name,e.id),o=="cracow"&&e.city==="Kraków"&&n&&a(e.name,e.id)})),r&&r.addEventListener("change",b)},D=document.querySelector("#send");D!==null&&D.addEventListener("click",()=>{const t=document.querySelector(".hours-container__info-span");t instanceof HTMLSpanElement&&t.textContent!==null&&localStorage.setItem("serviceDay",t.textContent)});let m=null;function b(){this.checked?(m&&m!==this&&(m.checked=!1),m=this):m=null}const M=[s,i];function N(t){const o=t.target;o.checked&&M.forEach(c=>{c!==o&&(c.checked=!1)})}const y=document.querySelector("#client-street"),f=document.querySelector("#client-house"),h=document.querySelector("#client-city"),R=document.querySelector("#confirm-adress"),T=()=>{if(y.value===""&&d(y,!0,"Podaj ulicę"),f.value===""&&d(f,!0,"Podaj numer domu"),h.value===""?d(h,!0,"Podaj nazwę miasta"):y.value!==""&&d(y,!1),f.value!==""&&d(f,!1),h.value!==""&&d(h,!1),!y.classList.contains("red-input")||!f.classList.contains("red-input")||!h.classList.contains("red-input")){const t=document.querySelector("#calendar-section");t&&t.scrollIntoView({behavior:"smooth"})}};document.addEventListener("DOMContentLoaded",()=>{const t=()=>{window.innerWidth<480?H&&u&&H.append(u):O&&u&&O.append(u)};if(S){const c=S.querySelectorAll(".person-checkbox");console.log(c);for(let e=0;e<c.length;e++)c[e].addEventListener("change",b)}const o=document.querySelector(".user-name");o&&(o.textContent=localStorage.getItem("name")),localStorage.getItem("name"),localStorage.getItem("selectedOption"),localStorage.getItem("companyStreet"),localStorage.getItem("companyHome"),localStorage.getItem("companyCity"),localStorage.getItem("companyCode"),C.forEach(c=>{var l;const e=localStorage.getItem("name"),n=localStorage.getItem("companyCity");e!==null&&n!==null&&(c.name=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),c.id=e.toLowerCase()+"-"+((l=localStorage.getItem("selectedOption"))==null?void 0:l.toLowerCase()),c.city=n)}),q!==null&&(q.textContent=localStorage.getItem("companyStreet")),E!==null&&(E.textContent=localStorage.getItem("companyHome")),L&&(L.textContent=localStorage.getItem("companyCity")),I&&(I.textContent=localStorage.getItem("companyCode")),s!==null&&s.addEventListener("click",N),i!==null&&i.addEventListener("click",N),k!==null&&s!==null&&i==null&&k.forEach(c=>{c.addEventListener("click",function(){j.call(this)})}),p!==null&&w!==null&&(u.addEventListener("click",K),s.addEventListener("change",z),i.addEventListener("change",z),R.addEventListener("click",T)),window.addEventListener("resize",t),window.addEventListener("load",t)});
