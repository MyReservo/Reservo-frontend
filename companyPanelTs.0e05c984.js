import{o,q as d}from"./companyPanel.28019534.js";const c=document.querySelector("#profession-name"),r=document.querySelector(".user-provider-name"),n=document.querySelector(".user-provider-mobile-name"),s=document.querySelector(".your-visits-visit-box__customers-name p"),a=document.querySelector("#your-visits__street"),i=document.querySelector("#your-visits__home-number"),l=document.querySelector("#your-visits__city"),m=document.querySelector("#your-visits__date-day"),u=document.querySelector("#your-visits__date-hour"),t=document.querySelector(".hero-img");o&&(o.textContent=d.toString());c&&(c.textContent=localStorage.getItem("selectedOptionText"));r&&(r.textContent=localStorage.getItem("providerName"));n&&(n.textContent=localStorage.getItem("providerName"));localStorage.getItem("selectedOption");localStorage.getItem("companyStreet");localStorage.getItem("companyHome");localStorage.getItem("companyCity");localStorage.getItem("companyCode");s&&(s.textContent="Imię klienta: "+localStorage.getItem("customerName"));a&&(a.textContent="Ulica: "+localStorage.getItem("adressStreet"));i&&(i.textContent="Nr.Domu: "+localStorage.getItem("adressHouse"));l&&(l.textContent="Miasto:"+localStorage.getItem("adressCity"));m&&(m.textContent=localStorage.getItem("serviceDay"));u&&(u.textContent=localStorage.getItem("serviceHour"));const g=document.querySelector(".comb"),y=document.querySelector(".clipper"),S=document.querySelector(".scissors-company"),I=[g,y,S],p=document.querySelector(".screwdriver"),f=document.querySelector(".gear"),q=document.querySelector(".gear-two"),v=document.querySelector(".wrench-company"),C=[p,f,q,v],b=document.querySelector(".book"),h=document.querySelector(".graduation"),x=document.querySelector(".pencil-company"),_=[b,h,x];localStorage.getItem("selectedOption")==="TUTOR"&&(t&&t.classList.add("tutor-img"),_.forEach(e=>{e&&(e.style.display="block")}));localStorage.getItem("selectedOption")==="MECHANIC"&&(t&&t.classList.add("mechanic-img"),C.forEach(e=>{e&&(e.style.display="block")}));localStorage.getItem("selectedOption")==="BARBER"&&(t&&t.classList.add("barber-img"),I.forEach(e=>{e&&(e.style.display="block")}));
