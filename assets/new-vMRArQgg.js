import{g as a,f as d,c as u,S as w,A as g,a as h,B as m,b,L as _}from"./skeleton-C715KiXB.js";import{N as I}from"./navigation-Fztd8g7X.js";class y{constructor(){this.initBaner()}async initBaner(){const e=a(".new-baner h2"),s=a(".new-baner__content"),i=this.getDocumentIdFromURL(),n=`https://firestore.googleapis.com/v1/projects/${{projectId:"crisp-b06bf"}.projectId}/databases/(default)/documents/blog/${i}`,r=await d(n);if(r.error){console.error("Ошибка при получении документа:",r.error.message);return}if(r.data){const p=r.data.fields.title.stringValue,f=r.data.fields.banerImg.stringValue;console.log(p),e&&s&&(e.textContent=p,s.style.backgroundImage=`url(${f})`)}}getDocumentIdFromURL(){return new URLSearchParams(window.location.search).get("id")}}const c=a(".new-info");class ${newInfo;constructor(){this.newInfo=null,this.initInfo()}async initInfo(){const e=this.getDocumentIdFromURL(),i=`https://firestore.googleapis.com/v1/projects/${{projectId:"crisp-b06bf"}.projectId}/databases/(default)/documents/blog/${e}`,t=await d(i);if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(this.newInfo=t.data.fields,this.renderNew(),new u)}getDocumentIdFromURL(){return new URLSearchParams(window.location.search).get("id")}renderNew(){c&&this.newInfo!=null&&(c.innerHTML="",c.insertAdjacentHTML("beforeend",`
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
        `))}}w.use([I,g]);const o=a(".you-may-also-like__swiper-wrapper");class L{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards()}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new w(".you-may-also-like__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.you-may-also-like__swiper-btn-next",prevEl:".swiper-btn-prew.you-may-also-like__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),o&&o.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e={projectId:"crisp-b06bf"},s={structuredQuery:{from:[{collectionId:"clothers"}]}},i=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await d(i,{method:"POST",body:s});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(n=>{const r=n.document.name.split("/").pop()||"";this.slidesArr.push({id:r,data:n.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.hidden(),this.swiper&&this.swiper.update())}renderSlides(){if(!o){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{o.insertAdjacentHTML("beforeend",`
        <div class="you-may-also-like__swiper-slide swiper-slide">
          <a class="card you-may-also-like__card ${e.id}" href="one-product.html?id=${e.id}">
            <div class="card__img">
              <picture>
                <source srcset=${e.data.imgWebP.stringValue} type="image/webp" />
                <img src=${e.data.img.stringValue} />
              </picture>
            </div>
            <div class="card__info">
              <p class="card__category">${e.data.category.stringValue}</p>
              <h3 class="card__title">${e.data.name.stringValue}</h3>
              <p class="card__price">${e.data.cost.stringValue}</p>
            </div>
          </a>
        </div>
        `)})}hidden(){const e=h(".you-may-also-like__swiper-slide");for(let s=0;s<e.length;s++)if(window.innerWidth<1023)if(window.innerWidth>576){if(s<6)continue;e[s].classList.add("hidden")}else{if(s<4)continue;e[s].classList.add("hidden")}}}document.addEventListener("DOMContentLoaded",async()=>{new m,new b,new L,new y,new $,_.stop()});
