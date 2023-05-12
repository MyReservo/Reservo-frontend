import{t as l}from"./companyPanel.c7188b5d.js";const i=document.querySelector("#local"),b=document.querySelector(".company-adress"),x=document.querySelector("#company-street"),q=document.querySelector("#company-home-number"),E=document.querySelector("#company-city"),L=document.querySelector("#company-code"),p=document.querySelector("#search-providers");document.querySelectorAll("tbody td");const s=document.querySelector("#client-home"),I=document.querySelector(".client-adress"),P=document.querySelector(".footer__current-year"),A=new Date().getFullYear();P&&A&&(P.textContent=A.toString());const B=()=>{s.checked?(I.style.display="flex",b.style.display="none"):i.checked&&(b.style.display="block",I.style.display="none")},k=[s,i];function V(){k.forEach(t=>{t!==this?t.checked=!1:t.checked=!0})}const g=document.querySelector("#select-services"),w=document.querySelector("#select-city"),K=document.querySelector(".available-service-providers-container__first-box"),v=document.querySelector(".available-service-providers-container__title"),z=document.querySelector(".available-service-providers"),C=document.querySelector(".available-service-providers-container__list"),_=document.querySelector("#confirm-provider"),W=document.querySelector(".pick-profession-box"),M=document.querySelector(".header__btn"),H=document.querySelector("#search-btn-link"),N=()=>{window.innerWidth<480?(H.append(p),W&&W.append(H)):M.append(p)};window.addEventListener("resize",N);window.addEventListener("load",N);const h=[{id:"name-service",name:"name",city:"city"}];let r,f;const a=(t,c)=>{const o=document.createElement("div");o.className="service-provider";const e=document.createElement("label");e.textContent=t,e.setAttribute("for","person"),r=document.createElement("input"),r.type="checkbox",r.id=`${c}`,r.className="person-checkbox",o.append(e,r),C.append(o),z.append(C),K.append(z,_),r.addEventListener("change",j),f=C.querySelectorAll("input"),_.addEventListener("click",()=>{const n=document.querySelector("#service-location");f&&(f.forEach(S=>{S.checked&&n&&n.scrollIntoView({behavior:"smooth"})}),Array.from(f).some(S=>S.checked)||alert("Wybierz jedną z dostepnych osób"))})},R=()=>{const t=g.value,c=w.value,o=document.querySelector("#pick-person-and-location-section");g.selectedIndex>0&&w.selectedIndex>0?o&&o.scrollIntoView({behavior:"smooth"}):alert("Wybierz usługę oraz miasto"),t==="TUTOR"&&(v.textContent="Dostępni korepetytorzy:",h.forEach(e=>{const n=e.id.includes("tutor");c==="wroclaw"&&e.city==="Wrocław"&&n&&a(e.name,e.id),c=="warsaw"&&e.city==="Warszawa"&&n&&a(e.name,e.id),c=="cracow"&&e.city==="Kraków"&&n&&a(e.name,e.id)})),t==="BARBER"&&(v.textContent="Dostepni fryzjerzy:",h.forEach(e=>{const n=e.id.includes("barber");c==="wroclaw"&&e.city==="Wrocław"&&n&&a(e.name,e.id),c=="warsaw"&&e.city==="Warszawa"&&n&&a(e.name,e.id),c=="cracow"&&e.city==="Kraków"&&n&&a(e.name,e.id)})),t==="MECHANIC"&&(v.textContent="Dostępni mechnicy:",h.forEach(e=>{const n=e.id.includes("mechanic");c==="wroclaw"&&e.city==="Wrocław"&&n&&a(e.name,e.id),c=="warsaw"&&e.city==="Warszawa"&&n&&a(e.name,e.id),c=="cracow"&&e.city==="Kraków"&&n&&a(e.name,e.id)})),r&&r.addEventListener("change",j)},O=document.querySelector("#send");O!==null&&O.addEventListener("click",()=>{const t=document.querySelector(".hours-container__info-span");t instanceof HTMLSpanElement&&t.textContent!==null&&localStorage.setItem("serviceDay",t.textContent)});let d=null;function j(){this.checked?(d&&d!==this&&(d.checked=!1),d=this):d=null}const T=[s,i];function D(t){const c=t.target;c.checked&&T.forEach(o=>{o!==c&&(o.checked=!1)})}const u=document.querySelector("#client-street"),m=document.querySelector("#client-house"),y=document.querySelector("#client-city"),Y=document.querySelector("#confirm-adress"),U=()=>{if(u.value===""&&l(u,!0,"Podaj ulicę"),m.value===""&&l(m,!0,"Podaj numer domu"),y.value===""?l(y,!0,"Podaj nazwę miasta"):u.value!==""&&l(u,!1),m.value!==""&&l(m,!1),y.value!==""&&l(y,!1),!u.classList.contains("red-input")||!m.classList.contains("red-input")||!y.classList.contains("red-input")){const t=document.querySelector("#calendar-section");t&&t.scrollIntoView({behavior:"smooth"})}};document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".user-name");t&&(t.textContent=localStorage.getItem("name")),localStorage.getItem("name"),localStorage.getItem("selectedOption"),localStorage.getItem("companyStreet"),localStorage.getItem("companyHome"),localStorage.getItem("companyCity"),localStorage.getItem("companyCode"),h.forEach(c=>{var n;const o=localStorage.getItem("name"),e=localStorage.getItem("companyCity");o!==null&&e!==null&&(c.name=o.charAt(0).toUpperCase()+o.slice(1).toLowerCase(),c.id=o.toLowerCase()+"-"+((n=localStorage.getItem("selectedOption"))==null?void 0:n.toLowerCase()),c.city=e)}),x!==null&&(x.textContent=localStorage.getItem("companyStreet")),q!==null&&(q.textContent=localStorage.getItem("companyHome")),E&&(E.textContent=localStorage.getItem("companyCity")),L&&(L.textContent=localStorage.getItem("companyCode")),s!==null&&s.addEventListener("click",D),i!==null&&i.addEventListener("click",D),k!==null&&s!==null&&i==null&&k.forEach(c=>{c.addEventListener("click",function(){V.call(this)})}),g!==null&&w!==null&&(p.addEventListener("click",R),s.addEventListener("change",B),i.addEventListener("change",B),Y.addEventListener("click",U))});
