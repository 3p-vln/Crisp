import{S as a,N as n,A as l}from"./skeleton-IR_OxhDj.js";import{g as p,f as c,a as w}from"./stop-preload-CWe_wQxZ.js";a.use([n,l]);const r=p(".you-may-also-like__swiper-wrapper");class g{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards()}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new a(".you-may-also-like__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.you-may-also-like__swiper-btn-next",prevEl:".swiper-btn-prew.you-may-also-like__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),r&&r.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e={projectId:"crisp-b06bf"},s={structuredQuery:{from:[{collectionId:"clothers"}]}},d=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,i=await c(d,{method:"POST",body:s});if(i.error){console.error("Ошибка при загрузке данных:",i.error);return}i.data&&(i.data.forEach(t=>{const o=t.document.name.split("/").pop()||"";this.slidesArr.push({id:o,data:t.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.hidden(),this.swiper&&this.swiper.update())}renderSlides(){if(!r){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{r.insertAdjacentHTML("beforeend",`
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
        `)})}hidden(){const e=w(".you-may-also-like__swiper-slide");for(let s=0;s<e.length;s++)if(window.innerWidth<1023)if(window.innerWidth>576){if(s<6)continue;e[s].classList.add("hidden")}else{if(s<4)continue;e[s].classList.add("hidden")}}}export{g as L};
