(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();class i{burgerBtn;menuAdapt;search;searchBtn;constructor(){this.burgerBtn=document.querySelector(".burger-btn"),this.menuAdapt=document.querySelector(".header__menu_adapt"),this.search=document.querySelector(".header__search-and-bag .search"),this.searchBtn=document.querySelector(".header__search-and-bag .search svg"),this.burger(),this.searchFunc()}burger(){const r=this;this.burgerBtn.addEventListener("click",function(){r.burgerBtn.classList.toggle("active"),r.menuAdapt.classList.toggle("active")})}searchFunc(){const r=this;this.searchBtn.addEventListener("click",function(){r.search.classList.toggle("active")})}}document.addEventListener("DOMContentLoaded",async function(){new i});
