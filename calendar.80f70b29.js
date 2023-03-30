(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const f=document.querySelector("#local"),d=document.querySelector(".pick-profession-box__company-adress"),p=document.querySelector("#company-street"),S=document.querySelector("#company-home-number"),C=document.querySelector("#company-city"),v=document.querySelector("#company-code");let a=new Date;const A=new Array("Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"),P=document.querySelector(".hours-container"),u=document.querySelector(".hours-container__info-span"),i=document.querySelectorAll("tbody td"),B=()=>{i.forEach(o=>{o.addEventListener("click",W)})},W=o=>{const e=o.target;console.log(e);const t=Number(e.textContent),c=new Date,n=new Date(a.getFullYear(),a.getMonth(),t);if(e.textContent!==""&&n.getDate()==c.getDate()||n>c)u!==null&&(u.textContent=n.getDate()+" "+A[a.getMonth()],P.style.display="flex"),i.forEach(r=>{r.style.backgroundColor=""}),e.style.backgroundColor="#82f238e6",g(e);else if(n<c&&e.textContent!==""){alert("Ten dzień już minął!");return}},g=o=>{const e=document.querySelector(".fa-times");e==null||e.addEventListener("click",()=>{P.style.display="none",o.style.backgroundColor="",L.forEach(s=>{s.classList.remove("active")})});const t=document.querySelector("#calendar-top");t.textContent=A[a.getMonth()]+" "+a.getFullYear();const c=new Date(a.getFullYear(),a.getMonth(),1),n=new Date(a.getFullYear(),a.getMonth()+1,0);let r=1;for(let s=0;s<i.length;s++)i[s].textContent=s.toString(),s<c.getDay()-1?i[s].innerHTML="":r<=n.getDate()?(i[s].innerHTML=r.toString(),r++):i[s].innerHTML=""},O=o=>{a.setMonth(a.getMonth()-1),a.setDate(1),g(o)},N=o=>{a.setMonth(a.getMonth()+1),a.setDate(1),g(o)};var z;(z=document.querySelector("#prev"))==null||z.addEventListener("click",()=>{const o=document.querySelector("td");o&&O(o)});var I;(I=document.querySelector("#next"))==null||I.addEventListener("click",()=>{const o=document.querySelector("td");o&&N(o)});const L=document.querySelectorAll(".hour-btn"),K=()=>{L.forEach(o=>{o.addEventListener("click",()=>{o.classList.contains("active")?o.classList.remove("active"):(L.forEach(e=>{e.classList.remove("active")}),o.classList.add("active"))})})},h=document.querySelector("#client-home"),E=document.querySelector(".pick-profession-box__client-adress"),q=()=>{h.checked?(E.style.display="flex",d.style.display="none"):f.checked&&(d.style.display="block",E.style.display="none")},m=[h,f];function F(){m.forEach(o=>{o!==this?o.checked=!1:o.checked=!0})}const k=document.querySelector("#calendar-services"),x=document.querySelector("#calendar-city"),T=document.querySelector(".service-provider"),w=document.querySelector(".service-provider__title"),y=[{id:"name-service",name:"name",city:"city"}],l=o=>{const e=document.createElement("div");e.className="service-provider__name";const t=document.createElement("p");t.textContent=o;const c=document.createElement("input");c.type="checkbox",c.id=`${o}-tutor`,c.className="service-provider",e.append(t,c),T.append(e)},M=()=>{T.innerHTML="";const o=k.value,e=x.value;o==="TUTOR"&&(w.textContent="korepetytorzy:",y.forEach(t=>{const c=t.id.includes("tutor");e==="wroclaw"&&t.city==="Wrocław"&&c&&l(t.name),e=="warsaw"&&t.city==="Warszawa"&&c&&l(t.name),e=="cracow"&&t.city==="Kraków"&&c&&l(t.name)})),o==="BARBER"&&(w.textContent="fryzjerzy:",y.forEach(t=>{const c=t.id.includes("barber");e==="wroclaw"&&t.city==="Wrocław"&&c&&l(t.name),e=="warsaw"&&t.city==="Warszawa"&&c&&l(t.name),e=="cracow"&&t.city==="Kraków"&&c&&l(t.name)})),o==="MECHANIC"&&(w.textContent="mechanicy:",y.forEach(t=>{const c=t.id.includes("mechanic");e==="wroclaw"&&t.city==="Wrocław"&&c&&l(t.name),e=="warsaw"&&t.city==="Warszawa"&&c&&l(t.name),e=="cracow"&&t.city==="Kraków"&&c&&l(t.name)}))},Y=document.querySelector(".user-name"),b=document.querySelector("#send");b!==null&&b.addEventListener("click",()=>{u instanceof HTMLSpanElement&&u.textContent!==null&&localStorage.setItem("serviceDay",u.textContent)});const _=document.querySelector("#local"),H=document.querySelector("#client-home"),R=[_,H];function D(o){const e=o.target;e.checked&&(console.log("zaznaczony input"),R.forEach(t=>{t!==e&&(t.checked=!1)}))}document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("td");Y.textContent=localStorage.getItem("name"),localStorage.getItem("name"),localStorage.getItem("selectedOption"),localStorage.getItem("companyStreet"),localStorage.getItem("companyHome"),localStorage.getItem("companyCity"),localStorage.getItem("companyCode"),y.forEach(e=>{var n;const t=localStorage.getItem("name"),c=localStorage.getItem("companyCity");t!==null&&c!==null&&(e.name=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),e.id=t.toLowerCase()+"-"+((n=localStorage.getItem("selectedOption"))==null?void 0:n.toLowerCase()),e.city=c)}),p!==null&&(p.textContent="Ulica: "+localStorage.getItem("companyStreet"),d.appendChild(p)),S!==null&&(S.textContent="Nr.Domu: "+localStorage.getItem("companyHome"),d.appendChild(S)),C&&(C.textContent="Miasto: "+localStorage.getItem("companyCity"),d.appendChild(C)),v&&(v.textContent="Kod pocztowy: "+localStorage.getItem("companyCode"),d.appendChild(v)),N(o[0]),O(o[0]),g(o[0]),K(),B(),_.addEventListener("click",D),H.addEventListener("click",D),m!==null&&h!==null&&f==null&&m.forEach(e=>{console.log(m),console.log(e),e.addEventListener("click",function(){F.call(this)})}),k!==null&&x!==null&&(k.addEventListener("change",M),x.addEventListener("change",M),h.addEventListener("change",q),f.addEventListener("change",q))});export{N as n,O as p};
