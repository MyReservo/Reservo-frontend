(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();const m=document.querySelector("#burger-btn"),N=document.querySelector(".mobile-btn"),A=document.querySelector("#mobile-nav"),O=document.querySelectorAll(".nav-shadow-box__user-box-side-nav ul li"),T=document.querySelector("body");m&&[m,N].forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("open"),console.log("nadaje nav--active na navigacje"),A.classList.toggle("nav--active"),T.classList.toggle("body-overflow"),O.forEach(r=>{r.classList.toggle("li--active")})})});const y=document.querySelector(".days"),g=document.querySelector(".current-date"),f=document.querySelectorAll(".icons span");let a=new Date,l=a.getFullYear(),n=a.getMonth();const w=["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],I=()=>{let c=new Date(l,n,1).getDay(),e=new Date(l,n+1,0).getDate(),r=new Date(l,n,e).getDay(),s=new Date(l,n,0).getDate(),o="";for(let t=c;t>0;t--)o+=`<li class="inactive">${s-t+1}</li>`;for(let t=1;t<=e;t++){let i=t===a.getDate()&&n===new Date().getMonth()&&l===new Date().getFullYear()?"active":"";o+=`<li class="${i}">${t}</li>`}for(let t=r;t<6;t++)o+=`<li class="inactive">${t-r+1}</li>`;g&&(g.textContent=`${w[n]} ${l}`),y&&(y.innerHTML=o)};I();const x=()=>{const c=document.querySelectorAll(".days li");c.forEach(e=>{e.addEventListener("click",()=>{c.forEach(r=>{r.classList.remove("active2")}),e.className==="inactive"||e.className==="active"?(console.log("wbijam"),e.classList.remove("active2")):(console.log("dodaje klase"),e.classList.add("active2"))})})};f&&f.forEach(c=>{c.addEventListener("click",()=>{n=c.id==="prev"?n-1:n+1,n<0||n>11?(a=new Date(l,n,new Date().getDate()),l=a.getFullYear(),n=a.getMonth()):a=new Date,I(),x(),console.log("włączam clickevents"),k()})});x();const z=document.querySelector(".hours-cut"),B=document.querySelector(".hours-wrench"),P=document.querySelector(".hours-pencil"),M=[z,B,P],_=document.querySelector(".hours-container"),v=document.querySelector(".hours-container__info-span"),d=document.querySelectorAll(".hour-btn"),j=c=>{const e=c.target,r=Number(e.textContent),s=new Date,o=new Date(a.getFullYear(),a.getMonth(),r);if(e.textContent!==""&&o.getDate()==s.getDate()||o>s)v!==null&&(v.textContent=o.getDate()+" "+w[a.getMonth()],_.style.display="flex",M.forEach(t=>{t.style.display="block"}));else if(o<s){alert("Ten dzień już minął!"),e.classList.remove("active2");return}},u=document.querySelector(".fa-times");u==null||u.addEventListener("click",()=>{_.style.display="none",M.forEach(e=>{e.style.display="none"}),document.querySelectorAll(".days li").forEach(e=>{e.classList.remove("active2")}),d.forEach(e=>{e.classList.remove("active-hour-btn")})});const $=()=>{d.forEach(c=>{c.addEventListener("click",()=>{c.classList.contains("active-hour-btn")?c.classList.remove("active-hour-btn"):(d.forEach(e=>{e.classList.remove("active-hour-btn")}),c.classList.add("active-hour-btn"))})})};$();const k=()=>{document.querySelectorAll(".days li").forEach(e=>{e.addEventListener("click",j)})};k();const h=document.querySelector("#profession-name"),S=document.querySelector(".user-name"),p=document.querySelector(".visit__customers-name p"),L=document.querySelector("#visit__adress-street"),q=document.querySelector("#visit__adress-home-number"),D=document.querySelector("#visit__adress-city"),b=document.querySelector("#visit__adress-code");h&&(h.textContent=localStorage.getItem("selectedOptionText"));S&&(S.textContent=localStorage.getItem("name"));localStorage.getItem("serviceDay");localStorage.getItem("selectedOption");localStorage.getItem("companyStreet");localStorage.getItem("companyHome");localStorage.getItem("companyCity");localStorage.getItem("companyCode");p&&(p.textContent="Imię klienta: "+localStorage.getItem("name"));L&&(L.textContent=localStorage.getItem("companyStreet"));q&&(q.textContent=localStorage.getItem("companyHome"));D&&(D.textContent=localStorage.getItem("companyCity"));b&&(b.textContent=localStorage.getItem("companyCode"));var C;(C=document.querySelector("#prev"))==null||C.addEventListener("click",()=>{document.querySelector("td")});var E;(E=document.querySelector("#next"))==null||E.addEventListener("click",()=>{document.querySelector("td")});document.addEventListener("DOMContentLoaded",()=>{});
