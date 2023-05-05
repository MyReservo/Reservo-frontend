(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const b=document.querySelector("#burger-btn"),ce=document.querySelector(".mobile-btn"),ne=document.querySelector("#mobile-nav"),re=document.querySelectorAll(".nav-shadow-box__user-box-side-nav ul li"),ae=document.querySelector("body");b&&[b,ce].forEach(e=>{e&&e.addEventListener("click",()=>{e.classList.toggle("open"),console.log("nadaje nav--active na navigacje"),ne.classList.toggle("nav--active"),ae.classList.toggle("body-overflow"),re.forEach(o=>{o.classList.toggle("li--active")})})});const w=document.querySelector(".days"),L=document.querySelector(".current-date"),E=document.querySelectorAll(".icons span");let s=new Date,i=s.getFullYear(),a=s.getMonth();const J=["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],Q=()=>{let t=new Date(i,a,1).getDay(),e=new Date(i,a+1,0).getDate(),o=new Date(i,a,e).getDay(),c=new Date(i,a,0).getDate(),r="";for(let n=t;n>0;n--)r+=`<li class="inactive">${c-n+1}</li>`;for(let n=1;n<=e;n++){let d=n===s.getDate()&&a===new Date().getMonth()&&i===new Date().getFullYear()?"active":"";r+=`<li class="${d}">${n}</li>`}for(let n=o;n<6;n++)r+=`<li class="inactive">${n-o+1}</li>`;L&&(L.textContent=`${J[a]} ${i}`),w&&(w.innerHTML=r)};Q();const V=()=>{const t=document.querySelectorAll(".days li");t.forEach(e=>{e.addEventListener("click",()=>{t.forEach(o=>{o.classList.remove("active2")}),e.className==="inactive"||e.className==="active"?(console.log("wbijam"),e.classList.remove("active2")):(console.log("dodaje klase"),e.classList.add("active2"))})})};E&&E.forEach(t=>{t.addEventListener("click",()=>{a=t.id==="prev"?a-1:a+1,a<0||a>11?(s=new Date(i,a,new Date().getDate()),i=s.getFullYear(),a=s.getMonth()):s=new Date,Q(),V(),console.log("włączam clickevents"),ee()})});V();const se=document.querySelector(".hours-cut"),le=document.querySelector(".hours-wrench"),ie=document.querySelector(".hours-pencil"),X=[se,le,ie],Z=document.querySelector(".hours-container"),x=document.querySelector(".hours-container__info-span"),h=document.querySelectorAll(".hour-btn"),ue=t=>{const e=t.target,o=Number(e.textContent),c=new Date,r=new Date(s.getFullYear(),s.getMonth(),o);if(e.textContent!==""&&r.getDate()==c.getDate()||r>c)x!==null&&(x.textContent=r.getDate()+" "+J[s.getMonth()],Z.style.display="flex",X.forEach(n=>{n.style.display="block"}));else if(r<c){alert("Ten dzień już minął!"),e.classList.remove("active2");return}},g=document.querySelector(".fa-times");g==null||g.addEventListener("click",()=>{Z.style.display="none",X.forEach(e=>{e.style.display="none"}),document.querySelectorAll(".days li").forEach(e=>{e.classList.remove("active2")}),h.forEach(e=>{e.classList.remove("active-hour-btn")})});const de=()=>{h.forEach(t=>{t.addEventListener("click",()=>{t.classList.contains("active-hour-btn")?t.classList.remove("active-hour-btn"):(h.forEach(e=>{e.classList.remove("active-hour-btn")}),t.classList.add("active-hour-btn"))})})};de();const ee=()=>{document.querySelectorAll(".days li").forEach(e=>{e.addEventListener("click",ue)})};ee();const y=document.querySelector("#local"),k=document.querySelector(".company-adress"),D=document.querySelector("#company-street"),_=document.querySelector("#company-home-number"),A=document.querySelector("#company-city"),O=document.querySelector("#company-code"),P=document.querySelector("#search-providers");document.querySelectorAll("tbody td");const f=document.querySelector("#client-home"),M=document.querySelector(".client-adress"),v=document.querySelector(".footer__current-year"),p=new Date().getFullYear();v&&p&&(v.textContent=p.toString());const B=()=>{f.checked?(M.style.display="flex",k.style.display="none"):y.checked&&(k.style.display="block",M.style.display="none")},C=[f,y];function me(){C.forEach(t=>{t!==this?t.checked=!1:t.checked=!0})}const te=document.querySelector("#select-services"),oe=document.querySelector("#select-city"),ye=document.querySelector(".available-service-providers-container__first-box"),S=document.querySelector(".available-service-providers-container__title"),N=document.querySelector(".available-service-providers"),T=document.querySelector(".available-service-providers-container__list"),fe=document.querySelector("#confirm-provider"),m=[{id:"name-service",name:"name",city:"city"}];console.log(m);const l=t=>{const e=document.createElement("div");e.className="service-provider";const o=document.createElement("p");o.textContent=t;const c=document.createElement("input");c.type="checkbox",c.id=`${t}-tutor`,c.className="service-provider",e.append(o,c),T.append(e),N.append(T),ye.append(N,fe)},z=()=>{const t=te.value,e=oe.value;t==="TUTOR"&&(S.textContent="korepetytorzy:",m.forEach(o=>{const c=o.id.includes("tutor");console.log(c),e==="wroclaw"&&o.city==="Wrocław"&&c&&l(o.name),e=="warsaw"&&o.city==="Warszawa"&&c&&l(o.name),e=="cracow"&&o.city==="Kraków"&&c&&l(o.name)})),t==="BARBER"&&(S.textContent="fryzjerzy:",m.forEach(o=>{const c=o.id.includes("barber");e==="wroclaw"&&o.city==="Wrocław"&&c&&l(o.name),e=="warsaw"&&o.city==="Warszawa"&&c&&l(o.name),e=="cracow"&&o.city==="Kraków"&&c&&l(o.name)})),t==="MECHANIC"&&(S.textContent="Dostępni mechnicy:",m.forEach(o=>{const c=o.id.includes("mechanic");e==="wroclaw"&&o.city==="Wrocław"&&c&&l(o.name),e=="warsaw"&&o.city==="Warszawa"&&c&&l(o.name),e=="cracow"&&o.city==="Kraków"&&c&&l(o.name)}))},$=document.querySelector(".user-name"),H=document.querySelector("#send");H!==null&&H.addEventListener("click",()=>{const t=document.querySelector(".hours-container__info-span");t instanceof HTMLSpanElement&&t.textContent!==null&&localStorage.setItem("serviceDay",t.textContent)});const q=document.querySelector("#local"),I=document.querySelector("#client-home"),ge=[q,I];function Y(t){const e=t.target;e.checked&&ge.forEach(o=>{o!==e&&(o.checked=!1)})}document.addEventListener("DOMContentLoaded",()=>{$&&($.textContent=localStorage.getItem("name")),localStorage.getItem("name"),localStorage.getItem("selectedOption"),localStorage.getItem("companyStreet"),localStorage.getItem("companyHome"),localStorage.getItem("companyCity"),localStorage.getItem("companyCode"),m.forEach(t=>{var c;const e=localStorage.getItem("name"),o=localStorage.getItem("companyCity");e!==null&&o!==null&&(t.name=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),t.id=e.toLowerCase()+"-"+((c=localStorage.getItem("selectedOption"))==null?void 0:c.toLowerCase()),t.city=o)}),D!==null&&(D.textContent=localStorage.getItem("companyStreet")),_!==null&&(_.textContent=localStorage.getItem("companyHome")),A&&(A.textContent=localStorage.getItem("companyCity")),O&&(O.textContent=localStorage.getItem("companyCode")),q!==null&&q.addEventListener("click",Y),I!==null&&I.addEventListener("click",Y),C!==null&&f!==null&&y==null&&C.forEach(t=>{t.addEventListener("click",function(){me.call(this)})}),te!==null&&oe!==null&&(P.addEventListener("click",z),P.addEventListener("click",z),f.addEventListener("change",B),y.addEventListener("change",B))});const W=document.querySelector("#profession-name"),j=document.querySelector(".user-name"),F=document.querySelector(".visit__customers-name p"),R=document.querySelector("#visit__adress-street"),K=document.querySelector("#visit__adress-home-number"),U=document.querySelector("#visit__adress-city"),G=document.querySelector("#visit__adress-code"),u=document.querySelector(".hero-img");v.textContent=p.toString();W&&(W.textContent=localStorage.getItem("selectedOptionText"));j&&(j.textContent=localStorage.getItem("name"));localStorage.getItem("serviceDay");localStorage.getItem("selectedOption");console.log(localStorage.getItem("selectedOption"));localStorage.getItem("companyStreet");localStorage.getItem("companyHome");localStorage.getItem("companyCity");localStorage.getItem("companyCode");F&&(F.textContent="Imię klienta: "+localStorage.getItem("name"));R&&(R.textContent=localStorage.getItem("companyStreet"));K&&(K.textContent=localStorage.getItem("companyHome"));U&&(U.textContent=localStorage.getItem("companyCity"));G&&(G.textContent=localStorage.getItem("companyCode"));const Se=document.querySelector(".comb"),he=document.querySelector(".clipper"),ve=document.querySelector(".scissors-company"),pe=[Se,he,ve],Ce=document.querySelector(".screwdriver"),qe=document.querySelector(".gear"),Ie=document.querySelector(".gear-two"),be=document.querySelector(".wrench-company"),we=[Ce,qe,Ie,be],Le=document.querySelector(".book"),Ee=document.querySelector(".graduation"),xe=document.querySelector(".pencil-company"),ke=[Le,Ee,xe];localStorage.getItem("selectedOption")==="TUTOR"&&(u&&u.classList.add("tutor-img"),ke.forEach(t=>{t&&(t.style.display="block")}));localStorage.getItem("selectedOption")==="MECHANIC"&&(u&&u.classList.add("mechanic-img"),we.forEach(t=>{t&&(t.style.display="block")}));localStorage.getItem("selectedOption")==="BARBER"&&(u&&u.classList.add("barber-img"),pe.forEach(t=>{t&&(t.style.display="block")}));export{p as c,v as f};
