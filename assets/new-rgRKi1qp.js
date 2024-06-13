import{g as i,f as c,B as w,A as g,L as m}from"./stop-preload-CWe_wQxZ.js";import{a as p}from"./skeleton-IR_OxhDj.js";import{L as u}from"./you-may-also-like-79-Nvqbk.js";class I{constructor(){this.initBaner()}async initBaner(){const e=i(".new-baner h2"),o=i(".new-baner__content"),s=this.getDocumentIdFromURL(),l=`https://firestore.googleapis.com/v1/projects/${{projectId:"crisp-b06bf"}.projectId}/databases/(default)/documents/blog/${s}`,n=await c(l);if(n.error){console.error("Ошибка при получении документа:",n.error.message);return}if(n.data){const a=n.data.fields.title.stringValue,d=n.data.fields.banerImg.stringValue;console.log(a),e&&o&&(e.textContent=a,o.style.backgroundImage=`url(${d})`)}}getDocumentIdFromURL(){return new URLSearchParams(window.location.search).get("id")}}const r=i(".new-info");class h{newInfo;constructor(){this.newInfo=null,this.initInfo()}async initInfo(){const e=this.getDocumentIdFromURL(),s=`https://firestore.googleapis.com/v1/projects/${{projectId:"crisp-b06bf"}.projectId}/databases/(default)/documents/blog/${e}`,t=await c(s);if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(this.newInfo=t.data.fields,this.renderNew(),new p)}getDocumentIdFromURL(){return new URLSearchParams(window.location.search).get("id")}renderNew(){r&&this.newInfo!=null&&(r.innerHTML="",r.insertAdjacentHTML("beforeend",`
        <h3 class="new-info__title">${this.newInfo.textTitle.stringValue}</h3>
        <p class="new-info__text">
            ${this.newInfo.textFirst.stringValue}
        </p>
        <div class="new-info__img">
            <picture>
                <source srcset="${this.newInfo.newImgWebP.stringValue}" type="image/webp" />
                <img src="${this.newInfo.newImg.stringValue}"/>
            </picture>
        </div>
        <h3 class="new-info__title">${this.newInfo.textTitle.stringValue}</h3>
        <p class="new-info__text">
            ${this.newInfo.textSecond.stringValue}
        </p>              
        `))}}document.addEventListener("DOMContentLoaded",async()=>{new w,new g,new u,new I,new h,m.stop()});
