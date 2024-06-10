import{S as l,A as g,g as o,f as p,a as d,B as b,b as y,L as v,c as $}from"./skeleton-C715KiXB.js";import{N as w}from"./navigation-Fztd8g7X.js";import{P as C}from"./pagination-DfpsdzsY.js";l.use([w,C,g]);const _=o(".summer-sale__swiper-wrapper");class V{swiper;slidesArr;constructor(){this.swiper=new l(".summer-sale__swiper",{slidesPerView:2,autoplay:{delay:1e4},grabCursor:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prew"}}),this.slidesArr=[],this.loadCards()}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"main-swiper"}]}},i=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await p(i,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{this.slidesArr.push(s.document.fields)}),console.log(this.slidesArr),this.renderSlides(),this.swiper.update())}renderSlides(){this.slidesArr.forEach(e=>{_&&_.insertAdjacentHTML("beforeend",`
          <div class="swiper-slide summer-sale__slide">
            <picture>
              <source srcset=${e.imgWebP.stringValue} type="image/webp" />
              <img src=${e.img.stringValue}/>
            </picture>
          </div>
          `)})}}class L{containerSelector;cardSelector;buttonSelector;initialCardsToShow;additionalCardsToShow;constructor(e,r,i,t,s){this.containerSelector=e,this.cardSelector=r,this.buttonSelector=i,this.initialCardsToShow=t,this.additionalCardsToShow=s,this.init()}init(){this.hidden(),this.btnLoad()}hidden(){const e=d(this.cardSelector);for(let r=0;r<e.length;r++)r<this.initialCardsToShow||e[r].classList.add("hidden")}btnLoad(){const e=o(this.buttonSelector);e&&e.addEventListener("click",()=>{const r=d(`${this.cardSelector}.hidden`),i=d(`${this.cardSelector}.hidden`);for(let t=0;t<r.length&&t<this.additionalCardsToShow;t++)r[t].classList.remove("hidden");i.length||e.classList.add("hidden")})}}const f=o(".shop-some__items");class S{shopDb;constructor(){this.shopDb=[],this.loadCards()}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"clothers"}]}},i=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await p(i,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{const a=s.document.name.split("/").pop()||"";this.shopDb.push({id:a,data:s.document.fields})}),console.log(this.shopDb),this.renderCard(),new L(".shop-some__items",".shop-some__card",".shop-some__load",8,8))}renderCard(){this.shopDb.forEach(e=>{f&&(e.data.sale.booleanValue===!1?f.insertAdjacentHTML("afterbegin",`
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
                `))})}}class E{constructor(){this.initEventListeners()}async sendFetchRequest(e){const r={projectId:"crisp-b06bf"},i={structuredQuery:{where:{fieldFilter:{field:{fieldPath:"category"},op:"EQUAL",value:{stringValue:e}}},from:[{collectionId:"clothers"}]}},t=`https://firestore.googleapis.com/v1/projects/${r.projectId}/databases/(default)/documents:runQuery`,s=await p(t,{method:"POST",headers:{"Content-Type":"application/json"},body:i});if(s.error)console.error("Произошла ошибка:",s.error);else if(s.data&&Array.isArray(s.data)&&s.data.length>0){const a=s.data.filter(n=>n.document&&n.document.fields).map(n=>n.document.fields);console.log(a),this.updateContent(a)}else console.error("Ошибка: Данные Firestore пришли в неправильном формате.")}updateContent(e){const r=o(".shop-some__items");if(r){r.innerHTML="",e.forEach(s=>{if(s.sale.booleanValue===!1){const a=`
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
        `;r.innerHTML+=a}else{const a=`
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
        `;r.innerHTML+=a}});const i=d(".shop-some__card");for(let s=0;s<i.length;s++)s<8||i[s].classList.add("hidden");if(e.length>8){const s=document.createElement("button");s.classList.add("btn","shop-some__load"),s.textContent="Load more",r.insertAdjacentElement("beforeend",s)}const t=o(".shop-some__load");t&&t.addEventListener("click",()=>{const s=d(".shop-some__card.hidden");for(let n=0;n<s.length&&n<8;n++)s[n].classList.remove("hidden");d(".shop-some__card.hidden").length===0&&t.classList.add("hidden")})}}initEventListeners(){document.addEventListener("change",e=>{const r=e.target;if(r&&r.type==="radio"&&r.name==="shop-filtr"){const i=r.parentNode?.textContent?.trim();i&&this.sendFetchRequest(i.toUpperCase())}})}}l.use([w,g]);const u=o(".featured-items__swiper-wrapper");class A{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards()}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new l(".featured-items__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.featured-items__swiper-btn-next",prevEl:".swiper-btn-prew.featured-items__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),u&&u.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"clothers"}]}},i=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await p(i,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{const a=s.document.name.split("/").pop()||"";this.slidesArr.push({id:a,data:s.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.loadMore(),this.swiper&&this.swiper.update())}renderSlides(){if(!u){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{u.insertAdjacentHTML("beforeend",`
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
        `)})}loadMore(){this.hidden(),this.btnLoad()}hidden(){const e=d(".featured-items__swiper-slide");for(let r=0;r<e.length;r++)if(window.innerWidth<1023)if(window.innerWidth>576){if(r<6)continue;e[r].classList.add("hidden")}else{if(r<4)continue;e[r].classList.add("hidden")}}btnLoad(){const e=d(".featured-items__swiper-slide"),r=o(".featured-items__swiper");if(e.length>6&&r&&window.innerWidth<=1023){const t=document.createElement("button");t.classList.add("btn","featured-items__load"),t.textContent="See more",r.insertAdjacentElement("beforeend",t)}const i=o(".featured-items__load");i&&i.addEventListener("click",()=>{const t=d(".featured-items__swiper-slide.hidden");for(let a=0;a<t.length&&a<6;a++)t[a].classList.remove("hidden");d(".featured-items__swiper-slide.hidden").length===0&&i.classList.add("hidden")})}}l.use([w,g]);const h=o(".most-popular__swiper-wrapper");class j{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards()}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new l(".most-popular__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.most-popular__swiper-btn-next",prevEl:".swiper-btn-prew.most-popular__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),h&&h.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"clothers"}]}},i=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await p(i,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{const a=s.document.name.split("/").pop()||"";this.slidesArr.push({id:a,data:s.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.hidden(),this.swiper&&this.swiper.update())}renderSlides(){if(!h){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{h.insertAdjacentHTML("beforeend",`
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
        `)})}hidden(){const e=d(".most-popular__swiper-slide");for(let r=0;r<e.length;r++)if(window.innerWidth<1023)if(window.innerWidth>576){if(r<6)continue;e[r].classList.add("hidden")}else{if(r<4)continue;e[r].classList.add("hidden")}}}const m=o(".blog__cards");class I{newsDb;constructor(){this.newsDb=[],this.loadCards()}async loadCards(){const e={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"blog"}]}},i=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,t=await p(i,{method:"POST",body:r});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{if(s.document&&s.document.fields){const a=s.document.name.split("/").pop()||"";this.newsDb.push({id:a,data:s.document.fields})}}),console.log(this.newsDb),this.renderCard())}renderCard(){this.newsDb.forEach(e=>{m&&m.insertAdjacentHTML("afterbegin",`
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
            `)})}}document.addEventListener("DOMContentLoaded",async()=>{new b,new y,new V,new S,new E,new A,new j,new I,v.stop()});new $;
