import{g as o,f,s as g,b as p,B as h,A as w}from"./useFetch-DucEEeGt.js";import{A as E,S as b}from"./add-to-bag-D9VxPnbD.js";import{J as y}from"./just-validate.es-C73wyOde.js";class A{user;constructor(){this.user=[],this.init()}async init(){const r=o("#email"),t=o("#password");if(!r||!t){console.error("Email or Password input element not found",{emailElement:r,passwordElement:t});return}const c=r.value,d=t.value;try{const a={projectId:"crisp-b06bf"},u={structuredQuery:{from:[{collectionId:"users"}]}},l=`https://firestore.googleapis.com/v1/projects/${a.projectId}/databases/(default)/documents:runQuery`,s=await f(l,{method:"POST",body:u});if(s.error){console.error("Error fetching data:",s.error);return}if(s.data){s.data.forEach(e=>{if(e.document&&e.document.fields){const n=e.document.name.split("/").pop()||"";this.user.push({id:n,data:e.document.fields})}}),console.log(this.user);try{const e=await g(p,c,d),n=e.user.uid;this.user.find(m=>m.data.uid.stringValue===n)?(document.cookie=`UID=${e.user.uid}`,window.location.href="/Crisp/cabinet.html#account-dashboard",console.log("User signed in and cookie set")):console.log("User not found in database")}catch(e){console.error("Error signing in:",e)}}}catch(a){console.error("Error fetching user data:",a)}}}class v{form;constructor(){this.form=o(".form"),this.form&&this.init()}init(){const r=new y(this.form,{errorLabelStyle:{color:"#1D1F21"}});r.addField(o("#email"),[{rule:"required",errorMessage:"Enter your email"},{rule:"customRegexp",value:/^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,errorMessage:"Write correct email"}]).addField(o("#password"),[{rule:"required",errorMessage:"Enter your password"},{rule:"customRegexp",value:/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,errorMessage:"Incorrect password format"}]),r.onSuccess(()=>{console.log("Form is valid"),new A})}}document.addEventListener("DOMContentLoaded",async()=>{new h,new E,new w,new v});new b;
