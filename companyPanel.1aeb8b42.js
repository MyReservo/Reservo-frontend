(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function n(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerPolicy&&(r.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?r.credentials="include":c.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(c){if(c.ep)return;c.ep=!0;const r=n(c);fetch(c.href,r)}})();const E=document.querySelector("#burger-btn"),fe=document.querySelector("#mobile-nav"),he=document.querySelectorAll(".nav-shadow-box__user-box-side-nav ul li"),ge=document.querySelector("body"),B=document.querySelectorAll(".section");E&&E.addEventListener("click",()=>{E.classList.toggle("open"),fe.classList.toggle("nav--active"),ge.classList.toggle("body-overflow"),he.forEach(e=>{e.classList.toggle("li--active")})});const w=document.querySelectorAll("#burger-btn span"),T=document.querySelector(".calendar-section"),Se=()=>{const e=window.scrollY;B.forEach(t=>{!t.classList.contains("white-section")&&t instanceof HTMLElement&&t.offsetTop<=e+100&&w.forEach(n=>{n.style.backgroundColor="white"})}),B.forEach(t=>{t.classList.contains("white-section")&&t instanceof HTMLElement&&t.offsetTop<=e+100&&w.forEach(n=>{n.style.backgroundColor="black"})}),T.offsetTop<=e+100&&w.forEach(t=>{t.style.backgroundColor="white"}),window.innerWidth<=576&&T.offsetTop<=window.scrollY&&(console.log("szerokość 567"),w.forEach(t=>{t.style.backgroundColor="black"}))};window.addEventListener("scroll",Se);const y=(e,t,n)=>{t?(e.setAttribute("placeholder",n??"Musisz podać jakąś wartość"),e.classList.add("red-input"),e.classList.add("red-placeholder")):e.id==="street"||e.id==="home"||e.id==="code"||e.id==="city"?(e.setAttribute("placeholder",n??"Musisz podać wartość"),e.classList.remove("red-input"),e.classList.remove("red-placeholder")):(e.removeAttribute("placeholder"),e.classList.remove("red-input"),e.classList.remove("red-placeholder"))},N=document.querySelector(".days"),H=document.querySelector(".current-date"),W=document.querySelectorAll(".icons i");let a=new Date,i=a.getFullYear(),s=a.getMonth();const ae=["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],le=()=>{let e=new Date(i,s,1).getDay(),t=new Date(i,s+1,0).getDate(),n=new Date(i,s,t).getDay(),o=new Date(i,s,0).getDate(),c="";for(let r=e;r>0;r--)c+=`<li class="inactive">${o-r+1}</li>`;for(let r=1;r<=t;r++){let h=r===a.getDate()&&s===new Date().getMonth()&&i===new Date().getFullYear()?"active":"";c+=`<li class="${h}">${r}</li>`}for(let r=n;r<6;r++)c+=`<li class="inactive">${r-n+1}</li>`;H&&(H.textContent=`${ae[s]} ${i}`),N&&(N.innerHTML=c)};le();const ie=()=>{const e=document.querySelectorAll(".days li");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>{n.classList.remove("active2")}),t.className==="inactive"||t.className==="active"?(console.log("wbijam"),t.classList.remove("active2")):(console.log("dodaje klase"),t.classList.add("active2"))})})};W&&W.forEach(e=>{e.addEventListener("click",()=>{s=e.id==="prev"?s-1:s+1,s<0||s>11?(a=new Date(i,s,new Date().getDate()),i=a.getFullYear(),s=a.getMonth()):a=new Date,le(),ie(),me()})});ie();const pe=document.querySelector(".hours-cut"),ve=document.querySelector(".hours-wrench"),be=document.querySelector(".hours-pencil"),de=[pe,ve,be],ue=document.querySelector(".hours-container"),Y=document.querySelector(".hours-container__info-span"),D=document.querySelectorAll(".hour-btn"),we=e=>{const t=e.target,n=Number(t.textContent),o=new Date,c=new Date(a.getFullYear(),a.getMonth(),n);if(t.textContent!==""&&c.getDate()==o.getDate()||c>o)Y!==null&&(Y.textContent=c.getDate()+" "+ae[a.getMonth()],ue.style.display="flex",de.forEach(r=>{r.style.display="block"}));else if(c<o){alert("Ten dzień już minął!"),t.classList.remove("active2");return}},I=document.querySelector(".fa-times");I==null||I.addEventListener("click",()=>{ue.style.display="none",de.forEach(t=>{t.style.display="none"}),document.querySelectorAll(".days li").forEach(t=>{t.classList.remove("active2")}),D.forEach(t=>{t.classList.remove("active-hour-btn")})});const Le=()=>{D.forEach(e=>{e.addEventListener("click",()=>{e.classList.contains("active-hour-btn")?e.classList.remove("active-hour-btn"):(D.forEach(t=>{t.classList.remove("active-hour-btn")}),e.classList.add("active-hour-btn"))})})};Le();const me=()=>{document.querySelectorAll(".days li").forEach(t=>{t.addEventListener("click",we)})};me();const u=document.querySelector("#local"),$=document.querySelector(".company-adress"),j=document.querySelector("#company-street"),F=document.querySelector("#company-home-number"),R=document.querySelector("#company-city"),K=document.querySelector("#company-code"),A=document.querySelector("#search-providers");document.querySelectorAll("tbody td");const m=document.querySelector("#client-home"),V=document.querySelector(".client-adress"),q=document.querySelector(".footer__current-year"),_=new Date().getFullYear();q&&_&&(q.textContent=_.toString());const U=()=>{m.checked?(V.style.display="flex",$.style.display="none"):u.checked&&($.style.display="block",V.style.display="none")},P=[m,u];function Ce(){P.forEach(e=>{e!==this?e.checked=!1:e.checked=!0})}const z=document.querySelector("#select-services"),M=document.querySelector("#select-city"),qe=document.querySelector(".available-service-providers-container__first-box"),x=document.querySelector(".available-service-providers-container__title"),G=document.querySelector(".available-service-providers"),b=document.querySelector(".available-service-providers-container__list"),J=document.querySelector("#confirm-provider"),ke=document.querySelector(".pick-profession-box"),Ee=document.querySelector(".header__btn"),Q=document.querySelector("#search-btn-link"),ye=()=>{window.innerWidth<480?(Q.append(A),ke.append(Q)):Ee.append(A)};window.addEventListener("resize",ye);window.addEventListener("load",ye);const C=[{id:"name-service",name:"name",city:"city"}];let d,L;const l=(e,t)=>{const n=document.createElement("div");n.className="service-provider";const o=document.createElement("label");o.textContent=e,o.setAttribute("for","person"),d=document.createElement("input"),d.type="checkbox",d.id=`${t}`,d.className="person-checkbox",n.append(o,d),b.append(n),G.append(b),qe.append(G,J),d.addEventListener("change",O),L=b.querySelectorAll("input"),J.addEventListener("click",()=>{const c=document.querySelector("#service-location");L&&(L.forEach(r=>{r.checked&&c&&c.scrollIntoView({behavior:"smooth"})}),Array.from(L).some(r=>r.checked)||alert("Wybierz jedną z dostepnych osób"))})},Ie=()=>{const e=z.value,t=M.value,n=document.querySelector("#pick-person-and-location-section");z.selectedIndex>0&&M.selectedIndex>0?n&&n.scrollIntoView({behavior:"smooth"}):alert("Wybierz usługę oraz miasto"),e==="TUTOR"&&(x.textContent="Dostępni korepetytorzy:",C.forEach(o=>{const c=o.id.includes("tutor");t==="wroclaw"&&o.city==="Wrocław"&&c&&l(o.name,o.id),t=="warsaw"&&o.city==="Warszawa"&&c&&l(o.name,o.id),t=="cracow"&&o.city==="Kraków"&&c&&l(o.name,o.id)})),e==="BARBER"&&(x.textContent="Dostepni fryzjerzy:",C.forEach(o=>{const c=o.id.includes("barber");t==="wroclaw"&&o.city==="Wrocław"&&c&&l(o.name,o.id),t=="warsaw"&&o.city==="Warszawa"&&c&&l(o.name,o.id),t=="cracow"&&o.city==="Kraków"&&c&&l(o.name,o.id)})),e==="MECHANIC"&&(x.textContent="Dostępni mechnicy:",C.forEach(o=>{const c=o.id.includes("mechanic");t==="wroclaw"&&o.city==="Wrocław"&&c&&l(o.name,o.id),t=="warsaw"&&o.city==="Warszawa"&&c&&l(o.name,o.id),t=="cracow"&&o.city==="Kraków"&&c&&l(o.name,o.id)})),d&&d.addEventListener("change",O)},X=document.querySelector("#send");X!==null&&X.addEventListener("click",()=>{const e=document.querySelector(".hours-container__info-span");e instanceof HTMLSpanElement&&e.textContent!==null&&localStorage.setItem("serviceDay",e.textContent)});let k;k=b.querySelectorAll(".person-checkbox");for(let e=0;e<k.length;e++)k[e].addEventListener("change",O);let g=null;function O(){k=b.querySelectorAll(".person-checkbox"),this.checked?(g&&g!==this&&(g.checked=!1),g=this):g=null}const xe=[m,u];function Z(e){const t=e.target;t.checked&&xe.forEach(n=>{n!==t&&(n.checked=!1)})}const S=document.querySelector("#client-street"),p=document.querySelector("#client-house"),v=document.querySelector("#client-city"),De=document.querySelector("#confirm-adress"),Ae=()=>{if(S.value===""&&y(S,!0,"Podaj ulicę"),p.value===""&&y(p,!0,"Podaj numer domu"),v.value===""?y(v,!0,"Podaj nazwę miasta"):S.value!==""&&y(S,!1),p.value!==""&&y(p,!1),v.value!==""&&y(v,!1),!S.classList.contains("red-input")||!p.classList.contains("red-input")||!v.classList.contains("red-input")){const e=document.querySelector("#calendar-section");e&&e.scrollIntoView({behavior:"smooth"})}};document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".user-name");e&&(e.textContent=localStorage.getItem("name")),localStorage.getItem("name"),localStorage.getItem("selectedOption"),localStorage.getItem("companyStreet"),localStorage.getItem("companyHome"),localStorage.getItem("companyCity"),localStorage.getItem("companyCode"),C.forEach(t=>{var c;const n=localStorage.getItem("name"),o=localStorage.getItem("companyCity");n!==null&&o!==null&&(t.name=n.charAt(0).toUpperCase()+n.slice(1).toLowerCase(),t.id=n.toLowerCase()+"-"+((c=localStorage.getItem("selectedOption"))==null?void 0:c.toLowerCase()),t.city=o)}),j!==null&&(j.textContent=localStorage.getItem("companyStreet")),F!==null&&(F.textContent=localStorage.getItem("companyHome")),R&&(R.textContent=localStorage.getItem("companyCity")),K&&(K.textContent=localStorage.getItem("companyCode")),m!==null&&m.addEventListener("click",Z),u!==null&&u.addEventListener("click",Z),P!==null&&m!==null&&u==null&&P.forEach(t=>{t.addEventListener("click",function(){Ce.call(this)})}),z!==null&&M!==null&&(A.addEventListener("click",Ie),m.addEventListener("change",U),u.addEventListener("change",U),De.addEventListener("click",Ae))});const ee=document.querySelector("#profession-name"),te=document.querySelector(".user-name"),oe=document.querySelector(".visit__customers-name p"),ce=document.querySelector("#visit__adress-street"),ne=document.querySelector("#visit__adress-home-number"),re=document.querySelector("#visit__adress-city"),se=document.querySelector("#visit__adress-code"),f=document.querySelector(".hero-img");q&&(q.textContent=_.toString());ee&&(ee.textContent=localStorage.getItem("selectedOptionText"));te&&(te.textContent=localStorage.getItem("name"));localStorage.getItem("serviceDay");localStorage.getItem("selectedOption");console.log(localStorage.getItem("selectedOption"));localStorage.getItem("companyStreet");localStorage.getItem("companyHome");localStorage.getItem("companyCity");localStorage.getItem("companyCode");oe&&(oe.textContent="Imię klienta: "+localStorage.getItem("name"));ce&&(ce.textContent=localStorage.getItem("companyStreet"));ne&&(ne.textContent=localStorage.getItem("companyHome"));re&&(re.textContent=localStorage.getItem("companyCity"));se&&(se.textContent=localStorage.getItem("companyCode"));const _e=document.querySelector(".comb"),Pe=document.querySelector(".clipper"),ze=document.querySelector(".scissors-company"),Me=[_e,Pe,ze],Oe=document.querySelector(".screwdriver"),Be=document.querySelector(".gear"),Te=document.querySelector(".gear-two"),Ne=document.querySelector(".wrench-company"),He=[Oe,Be,Te,Ne],We=document.querySelector(".book"),Ye=document.querySelector(".graduation"),$e=document.querySelector(".pencil-company"),je=[We,Ye,$e];localStorage.getItem("selectedOption")==="TUTOR"&&(f&&f.classList.add("tutor-img"),je.forEach(e=>{e&&(e.style.display="block")}));localStorage.getItem("selectedOption")==="MECHANIC"&&(f&&f.classList.add("mechanic-img"),He.forEach(e=>{e&&(e.style.display="block")}));localStorage.getItem("selectedOption")==="BARBER"&&(f&&f.classList.add("barber-img"),Me.forEach(e=>{e&&(e.style.display="block")}));export{_ as c,q as f,y as t};
