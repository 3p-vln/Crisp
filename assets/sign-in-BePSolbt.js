import{g as s,B as u,A as m,S as g}from"./skeleton-CAl9e_ab.js";import{g as w,c as f,d as h,s as p,a as E,J as A}from"./firebase-BUfslSB_.js";class v{constructor(){this.init()}async init(){const r=s("#email"),o=s("#password");if(!r||!o){console.error("Email or Password input element not found",{emailElement:r,passwordElement:o});return}const c=r.value,d=o.value;try{const a=await w(f(h,"users")),n=[];a.forEach(e=>{const t=e.data();n.push({id:e.id,uid:t.uid})});try{const e=await p(E,c,d),t=e.user.uid;n.find(l=>l.uid===t)?(document.cookie=`UID=${e.user.uid}`,console.log("User signed in and cookie set")):console.log("User not found in database")}catch(e){console.error("There was an error signing in:",e)}}catch(a){console.error("There was an error fetching user data:",a)}}}class y{form;constructor(){this.form=s(".form"),this.form&&this.init()}init(){const r=new A(this.form,{errorLabelStyle:{color:"#1D1F21"}});r.addField(s("#email"),[{rule:"required",errorMessage:"Enter your email"},{rule:"customRegexp",value:/^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,errorMessage:"Write correct email"}]).addField(s("#password"),[{rule:"required",errorMessage:"Enter your password"},{rule:"customRegexp",value:/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,errorMessage:"Incorrect password format"}]),r.onSuccess(()=>{console.log("Form is valid"),new v})}}document.addEventListener("DOMContentLoaded",async()=>{new u,new m,new y});new g;