import{p as n,n as c}from"./calendar.5f976316.js";const a=document.querySelector("#profession-name"),m=document.querySelector(".user-name"),r=document.querySelector(".visit__customers-name p"),l=document.querySelector("#visit__adress-street"),s=document.querySelector("#visit__adress-home-number"),d=document.querySelector("#visit__adress-city"),u=document.querySelector("#visit__adress-code");console.log(r);a.textContent=localStorage.getItem("selectedOptionText");m.textContent=localStorage.getItem("name");localStorage.getItem("serviceDay");localStorage.getItem("selectedOption");localStorage.getItem("companyStreet");localStorage.getItem("companyHome");localStorage.getItem("companyCity");localStorage.getItem("companyCode");r.textContent="Imię klienta: "+localStorage.getItem("name");l.textContent=localStorage.getItem("companyStreet");s.textContent=localStorage.getItem("companyHome");d.textContent=localStorage.getItem("companyCity");u.textContent=localStorage.getItem("companyCode");var t;(t=document.querySelector("#prev"))==null||t.addEventListener("click",()=>{const e=document.querySelector("td");e&&n(e)});var o;(o=document.querySelector("#next"))==null||o.addEventListener("click",()=>{const e=document.querySelector("td");e&&c(e)});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll("td");n(e[0]),c(e[0])});
