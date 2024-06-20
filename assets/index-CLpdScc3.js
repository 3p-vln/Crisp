import{g as n,L as d,f as l,a as c,B as y,A as v}from"./stop-preload-DHJuF9fZ.js";import{S as p,A as g,a as $}from"./skeleton-Dh5pJeyX.js";import{N as w}from"./navigation-BuGgzq7r.js";import{P as V}from"./pagination-Cv7PLYkr.js";import{L as C}from"./btnLoad-CNiEjtOP.js";p.use([w,V,g]);const m=n(".summer-sale__swiper-wrapper");class L{swiper;slidesArr;constructor(){this.swiper=new p(".summer-sale__swiper",{slidesPerView:2,autoplay:{delay:1e4},grabCursor:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prew"}}),this.slidesArr=[],this.loadCards().then(()=>{d.stop("summer-sale")})}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"main-swiper"}]}},a=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await l(a,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{this.slidesArr.push(s.document.fields)}),console.log(this.slidesArr),this.renderSlides(),this.swiper.update())}renderSlides(){this.slidesArr.forEach(e=>{m&&m.insertAdjacentHTML("beforeend",`
          <div class="swiper-slide summer-sale__slide">
            <picture>
              <source srcset=${e.imgWebP.stringValue} type="image/webp" />
              <img src=${e.img.stringValue}/>
            </picture>
          </div>
          `)})}}const f=n(".shop-some__items");class E{shopDb;constructor(){this.shopDb=[],this.loadCards().then(()=>d.stop("shop-some__items"))}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"clothers"}]}},a=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await l(a,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{const i=s.document.name.split("/").pop()||"";this.shopDb.push({id:i,data:s.document.fields})}),console.log(this.shopDb),this.renderCard(),new C(".shop-some__items",".shop-some__card",".shop-some__load",8,8))}renderCard(){this.shopDb.forEach(e=>{f&&(e.data.sale.booleanValue===!1?f.insertAdjacentHTML("afterbegin",`
            <a class="card shop-some__card ${e.id}" href="one-product.html?id=${e.id}">
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
            `):f.insertAdjacentHTML("afterbegin",`
            <a class="card sale shop-some__card ${e.id}" href="one-product.html?id=${e.id}">
              <div class="card__img">
                <picture>
                  <source srcset=${e.data.imgWebP.stringValue} type="image/webp" />
                  <img src=${e.data.img.stringValue} />
                </picture>
                <div class="card__sale">
                  <p>-30%</p>
                </div>
              </div>
              <div class="card__info">
                <p class="card__category">${e.data.category.stringValue}</p>
                <h3 class="card__title">${e.data.name.stringValue}</h3>
                <p class="card__price">${e.data.costNew.stringValue} <span>${e.data.cost.stringValue}</span></p>
              </div>
            </a>
                `))})}}class A{constructor(){this.initEventListeners()}async sendFetchRequest(e){const r={projectId:"crisp-b06bf"},a={structuredQuery:{where:{fieldFilter:{field:{fieldPath:"category"},op:"EQUAL",value:{stringValue:e}}},from:[{collectionId:"clothers"}]}},t=`https://firestore.googleapis.com/v1/projects/${r.projectId}/databases/(default)/documents:runQuery`,s=await l(t,{method:"POST",headers:{"Content-Type":"application/json"},body:a});if(s.error)console.error("Произошла ошибка:",s.error);else if(s.data&&Array.isArray(s.data)&&s.data.length>0){const i=s.data.filter(o=>o.document&&o.document.fields).map(o=>o.document.fields);console.log(i),this.updateContent(i)}else console.error("Ошибка: Данные Firestore пришли в неправильном формате.")}updateContent(e){const r=n(".shop-some__items");if(r){r.innerHTML="",e.forEach(s=>{if(s.sale.booleanValue===!1){const i=`
          <a class="card shop-some__card" href="#">
            <div class="card__img">
              <picture>
                <source srcset=${s.imgWebP.stringValue} type="image/webp" />
                <img src=${s.img.stringValue} />
              </picture>
            </div>
            <div class="card__info">
              <p class="card__category">${s.category.stringValue}</p>
              <h3 class="card__title">${s.name.stringValue}</h3>
              <p class="card__price">${s.cost.stringValue}</p>
            </div>
          </a>
        `;r.innerHTML+=i}else{const i=`
          <a class="card sale shop-some__card" href="#">
            <div class="card__img">
              <picture>
                <source srcset=${s.imgWebP.stringValue} type="image/webp" />
                <img src=${s.img.stringValue} />
              </picture>
              <div class="card__sale">
                <p>-30%</p>
              </div>
            </div>
            <div class="card__info">
              <p class="card__category">${s.category.stringValue}</p>
              <h3 class="card__title">${s.name.stringValue}</h3>
              <p class="card__price">${s.costNew.stringValue} <span>${s.cost.stringValue}</span></p>
            </div>
          </a>
        `;r.innerHTML+=i}});const a=c(".shop-some__card");for(let s=0;s<a.length;s++)s<8||a[s].classList.add("hidden");if(e.length>8){const s=document.createElement("button");s.classList.add("btn","shop-some__load"),s.textContent="Load more",r.insertAdjacentElement("beforeend",s)}const t=n(".shop-some__load");t&&t.addEventListener("click",()=>{const s=c(".shop-some__card.hidden");for(let o=0;o<s.length&&o<8;o++)s[o].classList.remove("hidden");c(".shop-some__card.hidden").length===0&&t.classList.add("hidden")})}}initEventListeners(){document.addEventListener("change",e=>{const r=e.target;if(r&&r.type==="radio"&&r.name==="shop-filtr"){const a=r.parentNode?.textContent?.trim();a&&this.sendFetchRequest(a.toUpperCase())}})}}p.use([w,g]);const h=n(".featured-items__swiper-wrapper");class S{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards().then(()=>{console.log("being called "),d.stop("featured-items__swiper")})}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new p(".featured-items__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.featured-items__swiper-btn-next",prevEl:".swiper-btn-prew.featured-items__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),h&&h.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"clothers"}]}},a=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await l(a,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{const i=s.document.name.split("/").pop()||"";this.slidesArr.push({id:i,data:s.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.loadMore(),this.swiper&&this.swiper.update())}renderSlides(){if(!h){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{h.insertAdjacentHTML("beforeend",`
          <div class="featured-items__swiper-slide swiper-slide">
            <a class="card featured-items__card ${e.id}" href="one-product.html?id=${e.id}">
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
        `)})}loadMore(){this.hidden(),this.btnLoad()}hidden(){const e=c(".featured-items__swiper-slide");for(let r=0;r<e.length;r++)if(window.innerWidth<1023)if(window.innerWidth>576){if(r<6)continue;e[r].classList.add("hidden")}else{if(r<4)continue;e[r].classList.add("hidden")}}btnLoad(){const e=c(".featured-items__swiper-slide"),r=n(".featured-items__swiper");if(e.length>6&&r&&window.innerWidth<=1023){const t=document.createElement("button");t.classList.add("btn","featured-items__load"),t.textContent="See more",r.insertAdjacentElement("beforeend",t)}const a=n(".featured-items__load");a&&a.addEventListener("click",()=>{const t=c(".featured-items__swiper-slide.hidden");for(let i=0;i<t.length&&i<6;i++)t[i].classList.remove("hidden");c(".featured-items__swiper-slide.hidden").length===0&&a.classList.add("hidden")})}}p.use([w,g]);const _=n(".most-popular__swiper-wrapper");class j{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards().then(()=>d.stop("most-popular__swiper"))}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new p(".most-popular__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.most-popular__swiper-btn-next",prevEl:".swiper-btn-prew.most-popular__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),_&&_.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"clothers"}]}},a=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await l(a,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{const i=s.document.name.split("/").pop()||"";this.slidesArr.push({id:i,data:s.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.hidden(),this.swiper&&this.swiper.update())}renderSlides(){if(!_){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{_.insertAdjacentHTML("beforeend",`
        <div class="most-popular__swiper-slide swiper-slide">
          <a class="card most-popular__card ${e.id}" href="one-product.html?id=${e.id}">
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
        `)})}hidden(){const e=c(".most-popular__swiper-slide");for(let r=0;r<e.length;r++)if(window.innerWidth<1023)if(window.innerWidth>576){if(r<6)continue;e[r].classList.add("hidden")}else{if(r<4)continue;e[r].classList.add("hidden")}}}const b=n(".blog__cards");class I{newsDb;constructor(){this.newsDb=[],this.loadCards().then(()=>d.stop("blog__cards"))}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"blog"}]}},a=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await l(a,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{if(s.document&&s.document.fields){const i=s.document.name.split("/").pop()||"";this.newsDb.push({id:i,data:s.document.fields})}}),console.log(this.newsDb),this.renderCard())}renderCard(){this.newsDb.forEach(e=>{b&&b.insertAdjacentHTML("afterbegin",`
            <a class="blog__card new ${e.id}" href="new.html?id=${e.id}">
                <p class="new__category">${e.data.type?.stringValue}</p>
                <p class="new__title">${e.data.title?.stringValue}</p>
                <p class="new__info">${e.data.shortInfo?.stringValue}</p>
                <div class="new__date-and-auth">
                <p class="date">${e.data.date?.stringValue}</p>
                by
                <p class="author">${e.data.author?.stringValue}</p>
                </div>
            </a>
            `)})}}document.addEventListener("DOMContentLoaded",async()=>{new y,new v,new L,new E,new A,new S,new j,new I,d.stop("brands__item"),d.stop("sales"),d.stop("limits"),d.stop("explore__content")});new $;
