(()=>{"use strict";var e={791:(e,t,r)=>{r.d(t,{gz:()=>J,sS:()=>V,rC:()=>K,DH:()=>X,HT:()=>G,m1:()=>U,LK:()=>Q,E5:()=>R});const o=document.querySelector(".pomoBox"),c=document.querySelector(".restart"),a=document.querySelector(".pause"),s=document.querySelector(".resume"),n=document.querySelector(".start"),l=document.querySelector(".reset"),d=document.querySelector(".fa-adjust"),u=document.querySelector("body"),i=document.querySelector(".squareBox"),y=document.querySelector(".sessionBtns"),m=document.querySelector(".score"),f=document.querySelector(".settingsBtn"),b=document.querySelector(".settingsPage"),E=document.querySelector(".dracula"),g=document.querySelector(".nord"),v=document.querySelector(".gruvHard"),k=document.querySelector(".defaultDark"),p=document.querySelector(".defaultLight"),S=document.querySelector(".tomato"),q=document.querySelector(".brandLogo"),D=document.querySelector(".aboutPage"),L=document.querySelector(".aboutBtn");document.querySelector(".menulink-toggle");let h=0;const C=e=>{R=e,localStorage.savedTheme=e},x=(e,t)=>{u.style.backgroundColor=t,u.style.color=e},I=e=>i.style.backgroundColor=e,T=(e,t,r)=>{o.style.color=e,o.style.backgroundColor=t,o.style.border=r},B=e=>{y.style.backgroundColor=e},A=(e,t,r)=>{[c,n,a,s].forEach((o=>{o.style.backgroundColor=t,o.style.color=e,o.addEventListener("mouseover",(()=>{o.style.backgroundColor=r,o.style.color=t})),o.addEventListener("mouseout",(()=>{o.style.backgroundColor=t,o.style.color=e}))}))},F=(e,t,r)=>{l.style.backgroundColor=t,l.addEventListener("mouseover",(()=>{l.style.backgroundColor=r,l.style.color=e})),l.addEventListener("mouseout",(()=>{l.style.backgroundColor=t}))},$=()=>{C("gruvHard"),x("#c8ccd4","#1D2021"),I("#242829"),T("c8ccd4","#242829","6px solid #83a598"),A("#c8ccd4","#1D2021","#83a598"),F("#242829","#83a598","#c8ccd4"),B("#2E3233")},H=()=>{C("dark"),x("#f9fcfb","#222831"),I("#2C323B"),T("#f9fcfb","#2C323B","6px solid #a7c5eb"),B("#40464F"),A("#f9fcfb","#2C323B","#a7c5eb"),F("#2C323B","#a7c5eb","#f9fcfb")},w=()=>{C("light"),x("#36404c","#fafafa"),I("#a7c5eb"),T("#f9fcfb","#36404c","0px solid #36404c"),B("#f9fcfb"),A("#f9fcfb","#36404c","#a7c5eb"),F("#36404c","#a7c5eb","#f9fcfb")},P=()=>{C("nord"),x("#D8DEE9","#2E3440"),I("#323846"),T("#D8DEE9","#323846","6px solid #81A1C1"),B("#424854"),A("#D8DEE9","#2E3440","#81A1C1"),F("#2E3440","#81A1C1","#D8DEE9")},j=()=>{C("dracula"),x("#D8DEE9","#282a36"),I("#323440"),T("#D8DEE9","#323440","6px solid #bd93f9"),B("#464854"),A("#D8DEE9","#282a36","#bd93f9"),F("#282a36","#bd93f9","#D8DEE9")},O=()=>{C("tomato"),x("#623A3F","#e5707e"),I("#F98492"),T("#954952","#F98492","6px solid #D36774"),B("#D36774"),A("#954952","#FF8E9C","#a7c5eb"),F("#222831","#D36774","#f9fcfb")};p.addEventListener("click",w),k.addEventListener("click",H),g.addEventListener("click",P),E.addEventListener("click",j),v.addEventListener("click",$),S.addEventListener("click",O);const M=(e,t)=>{o.innerText=e<10?`0${e} : ${t}`:t<10?`${e} : 0${t}`:`${e} : ${t}`},N=()=>{o.style.backgroundImage="url('https://media1.tenor.com/images/5fe35bec1c80a880bf59ae32a9716ace/tenor.gif?itemid=8953038')",o.innerText=">:("},z=(e,t,r)=>{const o=document.querySelector("."+e);o.setAttribute("title",t);const c=document.createElement("i");c.classList.add("fas",r,"fa-lg"),o.appendChild(c)};[c,n,l].forEach((e=>{e.addEventListener("click",(()=>{o.style.animation=" none",o.style.backgroundImage="none","reset"===e.className?(J="reset",clearInterval(G),V=60*U,M(25,0)):(new Audio("./assets/sounds/tick.mp3").play(),J="start"===e.className?"start":"restart",clearInterval(G),X())}))})),a.addEventListener("click",(()=>{V!==60*U&&0!==V||N(),J="pause",K=V,clearInterval(G);const e=Math.floor(K/60);M(e,K%60)})),s.addEventListener("click",(()=>{V===60*U||0===V?N():"pause"==J&&V>0&&X(),J="resume"})),f.addEventListener("mouseover",(()=>{f.style.textDecoration="underline"})),f.addEventListener("mouseout",(()=>{f.style.textDecoration="none"})),f.addEventListener("click",(()=>{[i,o,y,l].forEach((e=>{e.style.display="none"})),b.style.display="grid"})),q.addEventListener("click",(()=>{[i,o,y,l].forEach((e=>{e.style.display=""})),b.style.display="none"})),L.addEventListener("click",(()=>{[i,o,y,l,b].forEach((e=>{e.style.display="none"})),D.style.display="block"}));let K,G,J,Q=0,R="lightTheme";(()=>{if(localStorage.length>0)switch(Q=localStorage.getItem("savedScore"),R=localStorage.getItem("savedTheme"),m.innerText="Score : "+Q,R){case"dark":H();break;case"light":w();break;case"dracula":j();break;case"nord":P();break;case"gruvHard":$();break;case"tomato":O()}})(),z("start","start","fa-rocket"),z("restart","restart","fa-redo"),z("pause","pause","fa-stop"),z("resume","resume","fa-play"),o.innerText="25 : 00";let U=25,V=60*U;const W=()=>{var e;e=G,0==V&&(clearInterval(e),new Audio("./assets/sounds/siren.mp3").play(),Q=parseInt(Q),Q+=100,m.innerText="Score : "+Q,localStorage.setItem("savedScore",Q),localStorage.setItem("savedTheme",R));const t=Math.floor(V/60);let r=V%60;0!==V?(M(t,r),V--):M(t,r)},X=()=>{o.style.animation="shake 4s",V="pause"==J?K:60*U,G=setInterval(W,1e3)};d.addEventListener("click",(()=>{h++,h%2!=0?H():w()}))}},t={};function r(o){if(t[o])return t[o].exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(791)})();