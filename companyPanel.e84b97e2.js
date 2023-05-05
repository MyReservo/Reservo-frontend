(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const I=document.querySelector("#burger-btn"),ce=document.querySelector(".mobile-btn"),ne=document.querySelector("#mobile-nav"),re=document.querySelectorAll(".nav-shadow-box__user-box-side-nav ul li"),ae=document.querySelector("body");I&&[I,ce].forEach(e=>{e&&e.addEventListener("click",()=>{e.classList.toggle("open"),console.log("nadaje nav--active na navigacje"),ne.classList.toggle("nav--active"),ae.classList.toggle("body-overflow"),re.forEach(o=>{o.classList.toggle("li--active")})})});const b=document.querySelector(".days"),w=document.querySelector(".current-date"),L=document.querySelectorAll(".icons span");let s=new Date,i=s.getFullYear(),a=s.getMonth();const G=["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],J=()=>{let t=new Date(i,a,1).getDay(),e=new Date(i,a+1,0).getDate(),o=new Date(i,a,e).getDay(),c=new Date(i,a,0).getDate(),r="";for(let n=t;n>0;n--)r+=`<li class="inactive">${c-n+1}</li>`;for(let n=1;n<=e;n++){let d=n===s.getDate()&&a===new Date().getMonth()&&i===new Date().getFullYear()?"active":"";r+=`<li class="${d}">${n}</li>`}for(let n=o;n<6;n++)r+=`<li class="inactive">${n-o+1}</li>`;w&&(w.textContent=`${G[a]} ${i}`),b&&(b.innerHTML=r)};J();const Q=()=>{const t=document.querySelectorAll(".days li");t.forEach(e=>{e.addEventListener("click",()=>{t.forEach(o=>{o.classList.remove("active2")}),e.className==="inactive"||e.className==="active"?(console.log("wbijam"),e.classList.remove("active2")):(console.log("dodaje klase"),e.classList.add("active2"))})})};L&&L.forEach(t=>{t.addEventListener("click",()=>{a=t.id==="prev"?a-1:a+1,a<0||a>11?(s=new Date(i,a,new Date().getDate()),i=s.getFullYear(),a=s.getMonth()):s=new Date,J(),Q(),console.log("włączam clickevents"),Z()})});Q();const se=document.querySelector(".hours-cut"),le=document.querySelector(".hours-wrench"),ie=document.querySelector(".hours-pencil"),V=[se,le,ie],X=document.querySelector(".hours-container"),E=document.querySelector(".hours-container__info-span"),h=document.querySelectorAll(".hour-btn"),ue=t=>{const e=t.target,o=Number(e.textContent),c=new Date,r=new Date(s.getFullYear(),s.getMonth(),o);if(e.textContent!==""&&r.getDate()==c.getDate()||r>c)E!==null&&(E.textContent=r.getDate()+" "+G[s.getMonth()],X.style.display="flex",V.forEach(n=>{n.style.display="block"}));else if(r<c){alert("Ten dzień już minął!"),e.classList.remove("active2");return}},g=document.querySelector(".fa-times");g==null||g.addEventListener("click",()=>{X.style.display="none",V.forEach(e=>{e.style.display="none"}),document.querySelectorAll(".days li").forEach(e=>{e.classList.remove("active2")}),h.forEach(e=>{e.classList.remove("active-hour-btn")})});const de=()=>{h.forEach(t=>{t.addEventListener("click",()=>{t.classList.contains("active-hour-btn")?t.classList.remove("active-hour-btn"):(h.forEach(e=>{e.classList.remove("active-hour-btn")}),t.classList.add("active-hour-btn"))})})};de();const Z=()=>{document.querySelectorAll(".days li").forEach(e=>{e.addEventListener("click",ue)})};Z();const y=document.querySelector("#local"),x=document.querySelector(".company-adress"),k=document.querySelector("#company-street"),D=document.querySelector("#company-home-number"),_=document.querySelector("#company-city"),A=document.querySelector("#company-code"),O=document.querySelector("#search-providers");document.querySelectorAll("tbody td");const f=document.querySelector("#client-home"),P=document.querySelector(".client-adress"),v=document.querySelector(".footer__current-year"),ee=new Date().getFullYear();v&&(v.textContent=ee.toString());const M=()=>{f.checked?(P.style.display="flex",x.style.display="none"):y.checked&&(x.style.display="block",P.style.display="none")},p=[f,y];function me(){p.forEach(t=>{t!==this?t.checked=!1:t.checked=!0})}const te=document.querySelector("#select-services"),oe=document.querySelector("#select-city"),ye=document.querySelector(".available-service-providers-container__first-box"),S=document.querySelector(".available-service-providers-container__title"),B=document.querySelector(".available-service-providers"),N=document.querySelector(".available-service-providers-container__list"),fe=document.querySelector("#confirm-provider"),m=[{id:"name-service",name:"name",city:"city"}];console.log(m);const l=t=>{const e=document.createElement("div");e.className="service-provider";const o=document.createElement("p");o.textContent=t;const c=document.createElement("input");c.type="checkbox",c.id=`${t}-tutor`,c.className="service-provider",e.append(o,c),N.append(e),B.append(N),ye.append(B,fe)},T=()=>{const t=te.value,e=oe.value;t==="TUTOR"&&(S.textContent="korepetytorzy:",m.forEach(o=>{const c=o.id.includes("tutor");console.log(c),e==="wroclaw"&&o.city==="Wrocław"&&c&&l(o.name),e=="warsaw"&&o.city==="Warszawa"&&c&&l(o.name),e=="cracow"&&o.city==="Kraków"&&c&&l(o.name)})),t==="BARBER"&&(S.textContent="fryzjerzy:",m.forEach(o=>{const c=o.id.includes("barber");e==="wroclaw"&&o.city==="Wrocław"&&c&&l(o.name),e=="warsaw"&&o.city==="Warszawa"&&c&&l(o.name),e=="cracow"&&o.city==="Kraków"&&c&&l(o.name)})),t==="MECHANIC"&&(S.textContent="Dostępni mechnicy:",m.forEach(o=>{const c=o.id.includes("mechanic");e==="wroclaw"&&o.city==="Wrocław"&&c&&l(o.name),e=="warsaw"&&o.city==="Warszawa"&&c&&l(o.name),e=="cracow"&&o.city==="Kraków"&&c&&l(o.name)}))},z=document.querySelector(".user-name"),$=document.querySelector("#send");$!==null&&$.addEventListener("click",()=>{const t=document.querySelector(".hours-container__info-span");t instanceof HTMLSpanElement&&t.textContent!==null&&localStorage.setItem("serviceDay",t.textContent)});const C=document.querySelector("#local"),q=document.querySelector("#client-home"),ge=[C,q];function H(t){const e=t.target;e.checked&&ge.forEach(o=>{o!==e&&(o.checked=!1)})}document.addEventListener("DOMContentLoaded",()=>{z&&(z.textContent=localStorage.getItem("name")),localStorage.getItem("name"),localStorage.getItem("selectedOption"),localStorage.getItem("companyStreet"),localStorage.getItem("companyHome"),localStorage.getItem("companyCity"),localStorage.getItem("companyCode"),m.forEach(t=>{var c;const e=localStorage.getItem("name"),o=localStorage.getItem("companyCity");e!==null&&o!==null&&(t.name=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),t.id=e.toLowerCase()+"-"+((c=localStorage.getItem("selectedOption"))==null?void 0:c.toLowerCase()),t.city=o)}),k!==null&&(k.textContent=localStorage.getItem("companyStreet")),D!==null&&(D.textContent=localStorage.getItem("companyHome")),_&&(_.textContent=localStorage.getItem("companyCity")),A&&(A.textContent=localStorage.getItem("companyCode")),C!==null&&C.addEventListener("click",H),q!==null&&q.addEventListener("click",H),p!==null&&f!==null&&y==null&&p.forEach(t=>{t.addEventListener("click",function(){me.call(this)})}),te!==null&&oe!==null&&(O.addEventListener("click",T),O.addEventListener("click",T),f.addEventListener("change",M),y.addEventListener("change",M))});const Y=document.querySelector("#profession-name"),W=document.querySelector(".user-name"),j=document.querySelector(".visit__customers-name p"),F=document.querySelector("#visit__adress-street"),R=document.querySelector("#visit__adress-home-number"),K=document.querySelector("#visit__adress-city"),U=document.querySelector("#visit__adress-code"),u=document.querySelector(".hero-img");v.textContent=ee.toString();Y&&(Y.textContent=localStorage.getItem("selectedOptionText"));W&&(W.textContent=localStorage.getItem("name"));localStorage.getItem("serviceDay");localStorage.getItem("selectedOption");console.log(localStorage.getItem("selectedOption"));localStorage.getItem("companyStreet");localStorage.getItem("companyHome");localStorage.getItem("companyCity");localStorage.getItem("companyCode");j&&(j.textContent="Imię klienta: "+localStorage.getItem("name"));F&&(F.textContent=localStorage.getItem("companyStreet"));R&&(R.textContent=localStorage.getItem("companyHome"));K&&(K.textContent=localStorage.getItem("companyCity"));U&&(U.textContent=localStorage.getItem("companyCode"));const Se=document.querySelector(".comb"),he=document.querySelector(".clipper"),ve=document.querySelector(".scissors-company"),pe=[Se,he,ve],Ce=document.querySelector(".screwdriver"),qe=document.querySelector(".gear"),Ie=document.querySelector(".gear-two"),be=document.querySelector(".wrench-company"),we=[Ce,qe,Ie,be],Le=document.querySelector(".book"),Ee=document.querySelector(".graduation"),xe=document.querySelector(".pencil-company"),ke=[Le,Ee,xe];localStorage.getItem("selectedOption")==="TUTOR"&&(u&&u.classList.add("tutor-img"),ke.forEach(t=>{t&&(t.style.display="block")}));localStorage.getItem("selectedOption")==="MECHANIC"&&(u&&u.classList.add("mechanic-img"),we.forEach(t=>{t&&(t.style.display="block")}));localStorage.getItem("selectedOption")==="BARBER"&&(u&&u.classList.add("barber-img"),pe.forEach(t=>{t&&(t.style.display="block")}));export{ee as c,v as f};
