(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const f=document.querySelector("#local"),d=document.querySelector(".pick-profession-box__company-adress"),p=document.querySelector("#company-street"),h=document.querySelector("#company-home-number"),S=document.querySelector("#company-city"),C=document.querySelector("#company-code");let a=new Date;const q=new Array("Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"),M=document.querySelector(".hours-container"),O=document.querySelector(".hours-container__info-span"),i=document.querySelectorAll("tbody td"),N=()=>{i.forEach(e=>{e.addEventListener("click",T)})},T=e=>{const o=e.target,t=Number(o.textContent),c=new Date,n=new Date(a.getFullYear(),a.getMonth(),t);if(o.textContent!==""&&n.getDate()==c.getDate()||n>c)O.textContent=n.getDate()+" "+q[a.getMonth()],M.style.display="flex",i.forEach(r=>{r.style.backgroundColor=""}),o.style.backgroundColor="#82f238e6",u(o);else if(n<c&&o.textContent!==""){alert("Ten dzień już minął!");return}},u=e=>{const o=document.querySelector(".fa-times");o==null||o.addEventListener("click",()=>{M.style.display="none",e.style.backgroundColor="",console.log(e)});const t=document.querySelector("#calendar-top");t.textContent=q[a.getMonth()]+" "+a.getFullYear();const c=new Date(a.getFullYear(),a.getMonth(),1),n=new Date(a.getFullYear(),a.getMonth()+1,0);let r=1;for(let s=0;s<i.length;s++)i[s].textContent=s.toString(),s<c.getDay()-1?i[s].innerHTML="":r<=n.getDate()?(i[s].innerHTML=r.toString(),r++):i[s].innerHTML=""},D=e=>{a.setMonth(a.getMonth()-1),a.setDate(1),u(e)},I=e=>{a.setMonth(a.getMonth()+1),a.setDate(1),u(e)};var E;(E=document.querySelector("#prev"))==null||E.addEventListener("click",()=>{const e=document.querySelector("td");e&&D(e)});var k;(k=document.querySelector("#next"))==null||k.addEventListener("click",()=>{const e=document.querySelector("td");e&&I(e)});const v=document.querySelectorAll(".hour-btn"),_=()=>{v.forEach(e=>{e.addEventListener("click",()=>{e.classList.contains("active")?e.classList.remove("active"):(v.forEach(o=>{o.classList.remove("active")}),e.classList.add("active"))})})},g=document.querySelector("#client-home"),w=document.querySelector(".pick-profession-box__client-adress"),x=()=>{g.checked?(w.style.display="flex",d.style.display="none"):f.checked&&(d.style.display="block",w.style.display="none")},b=[g,f];function H(){b.forEach(e=>{e!==this?e.checked=!1:e.checked=!0})}const A=document.querySelector("#calendar-services"),z=document.querySelector("#calendar-city"),P=document.querySelector(".service-provider"),y=document.querySelector(".service-provider__title"),m=[{id:"name-service",name:"name",city:"city"}],l=e=>{const o=document.createElement("div");o.className="service-provider__name";const t=document.createElement("p");t.textContent=e;const c=document.createElement("input");c.type="checkbox",c.id=`${e}-tutor`,c.className="service-provider",o.append(t,c),P.append(o)},L=()=>{P.innerHTML="";const e=A.value,o=z.value;e==="TUTOR"&&(y.textContent="korepetytorzy:",m.forEach(t=>{const c=t.id.includes("tutor");o==="wroclaw"&&t.city==="Wrocław"&&c&&l(t.name),o=="warsaw"&&t.city==="Warszawa"&&c&&l(t.name),o=="cracow"&&t.city==="Kraków"&&c&&l(t.name)})),e==="BARBER"&&(y.textContent="fryzjerzy:",m.forEach(t=>{const c=t.id.includes("barber");o==="wroclaw"&&t.city==="Wrocław"&&c&&l(t.name),o=="warsaw"&&t.city==="Warszawa"&&c&&l(t.name),o=="cracow"&&t.city==="Kraków"&&c&&l(t.name)})),e==="MECHANIC"&&(y.textContent="mechanicy:",m.forEach(t=>{const c=t.id.includes("mechanic");o==="wroclaw"&&t.city==="Wrocław"&&c&&l(t.name),o=="warsaw"&&t.city==="Warszawa"&&c&&l(t.name),o=="cracow"&&t.city==="Kraków"&&c&&l(t.name)}))},B=document.querySelector(".user-name");document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll("td");B.textContent=localStorage.getItem("name"),localStorage.getItem("name"),console.log(localStorage.getItem("selectedOptionText")),localStorage.getItem("selectedOption"),console.log(localStorage.getItem("selectedOption")),localStorage.getItem("companyStreet"),localStorage.getItem("companyHome"),localStorage.getItem("companyCity"),localStorage.getItem("companyCode"),m.forEach(o=>{var n;const t=localStorage.getItem("name"),c=localStorage.getItem("companyCity");t!==null&&c!==null&&(o.name=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),o.id=t.toLowerCase()+"-"+((n=localStorage.getItem("selectedOption"))==null?void 0:n.toLowerCase()),o.city=c)}),p.textContent="Ulica: "+localStorage.getItem("companyStreet"),d.appendChild(p),h.textContent="Nr.Domu: "+localStorage.getItem("companyHome"),d.appendChild(h),S.textContent="Miasto: "+localStorage.getItem("companyCity"),d.appendChild(S),C.textContent="Kod pocztowy: "+localStorage.getItem("companyCode"),d.appendChild(C),I(e[0]),D(e[0]),u(e[0]),_(),N(),b.forEach(o=>{o.addEventListener("click",function(){H.call(this)})}),A.addEventListener("change",L),z.addEventListener("change",L),g.addEventListener("change",x),f.addEventListener("change",x)});export{I as n,D as p};
