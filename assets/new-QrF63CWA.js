import{L as d,g as c,f as w,r as i,B as m,A as h}from"./stop-preload-TeSQh7p3.js";import{b as f,a as u}from"./add-to-bag-BWkjw7YT.js";import{L as I}from"./you-may-also-like-CKyx27_T.js";class b{constructor(){this.initBaner().then(()=>d.stop("new-baner"))}async initBaner(){const e=c(".new-baner h2"),o=c(".new-baner__content"),s=this.getDocumentIdFromURL(),a=`https://firestore.googleapis.com/v1/projects/${{projectId:"crisp-b06bf"}.projectId}/databases/(default)/documents/blog/${s}`,r=await w(a);if(r.error){console.error("Ошибка при получении документа:",r.error.message);return}if(r.data){const l=r.data.fields.title.stringValue,g=r.data.fields.banerImg.stringValue;console.log(l),e&&o&&(e.textContent=l,o.style.backgroundImage=`url(${g})`)}}getDocumentIdFromURL(){return new URLSearchParams(window.location.search).get("id")}}const t=c(".new-info");class C{newInfo;constructor(){this.newInfo=null,this.initInfo().then(()=>d.stop("new-info"))}async initInfo(){const e=this.getDocumentIdFromURL(),s=`https://firestore.googleapis.com/v1/projects/${{projectId:"crisp-b06bf"}.projectId}/databases/(default)/documents/blog/${e}`,n=await w(s);if(n.error){console.error("Ошибка при загрузке данных:",n.error);return}n.data&&(this.newInfo=n.data.fields,this.renderNew(),new f)}getDocumentIdFromURL(){return new URLSearchParams(window.location.search).get("id")}renderNew(){if(t&&this.newInfo!=null){t.innerHTML="";const e=i("h3","new-info__title");e.textContent=this.newInfo.textTitle.stringValue;const o=i("p","new-info__text");o.textContent=this.newInfo.textFirst.stringValue;const s=i("div","new-info__img");s.innerHTML=`
        <picture>
          <source srcset="${this.newInfo.newImgWebP.stringValue}" type="image/webp" />
          <img src="${this.newInfo.newImg.stringValue}"/>
        </picture>
      `;const n=i("h3","new-info__title");n.textContent=this.newInfo.textTitle.stringValue;const a=i("p","new-info__text");a.textContent=this.newInfo.textSecond.stringValue,t.appendChild(e),t.appendChild(o),t.appendChild(s),t.appendChild(n),t.appendChild(a)}}}document.addEventListener("DOMContentLoaded",async()=>{new m,new h,new u,new I,new b,new C,d.stop("adds")});new f;
