import{a as d,g as s}from"./stop-preload-DHJuF9fZ.js";class c{containerSelector;cardSelector;buttonSelector;initialCardsToShow;additionalCardsToShow;constructor(i,t,o,e,n){this.containerSelector=i,this.cardSelector=t,this.buttonSelector=o,this.initialCardsToShow=e,this.additionalCardsToShow=n,this.init()}init(){this.hidden(),this.btnLoad()}hidden(){const i=d(this.cardSelector);for(let t=0;t<i.length;t++)t<this.initialCardsToShow||i[t].classList.add("hidden")}btnLoad(){const i=s(this.buttonSelector);i&&i.addEventListener("click",()=>{const t=d(`${this.cardSelector}.hidden`),o=d(`${this.cardSelector}.hidden`);for(let e=0;e<t.length&&e<this.additionalCardsToShow;e++)t[e].classList.remove("hidden");o.length||i.classList.add("hidden")})}}export{c as L};