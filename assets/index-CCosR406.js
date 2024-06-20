import{g as o,L as l,f as u,r as a,a as p,B as E,A as V}from"./stop-preload-BrAlZGVA.js";import{S as h,N as b,A as C,a as S}from"./skeleton-Bgp_YBdT.js";import{P as A}from"./pagination-uIYRzJNe.js";import{S as T}from"./shop-some-5EqBhl--.js";h.use([b,A,C]);const L=o(".summer-sale__swiper-wrapper");class x{swiper;slidesArr;constructor(){this.swiper=new h(".summer-sale__swiper",{slidesPerView:2,autoplay:{delay:1e4},grabCursor:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prew"}}),this.slidesArr=[],this.loadCards().then(()=>{l.stop("summer-sale")})}async loadCards(){const s={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"main-swiper"}]}},i=`https://firestore.googleapis.com/v1/projects/${s.projectId}/databases/(default)/documents:runQuery`,e=await u(i,{method:"POST",body:t});if(e.error){console.error("Ошибка при загрузке данных:",e.error);return}e.data&&(e.data.forEach(r=>{this.slidesArr.push(r.document.fields)}),console.log(this.slidesArr),this.renderSlides(),this.swiper.update())}renderSlides(){this.slidesArr.forEach(s=>{if(L){const t=a("div",["swiper-slide","summer-sale__slide"]);t.innerHTML=`
            <picture>
              <source srcset=${s.imgWebP.stringValue} type="image/webp" />
              <img src=${s.img.stringValue}/>
            </picture>
        `,L.appendChild(t)}})}}const w=o(".shop-some__items");class ${shopDb;constructor(){this.shopDb=[],this.initEventListeners()}async sendFetchRequest(s){document.getElementsByClassName("shop-some__items")[0].classList.add("skeleton");const t={projectId:"crisp-b06bf"},i={structuredQuery:{where:{fieldFilter:{field:{fieldPath:"category"},op:"EQUAL",value:{stringValue:s}}},from:[{collectionId:"clothers"}]}},e=`https://firestore.googleapis.com/v1/projects/${t.projectId}/databases/(default)/documents:runQuery`,r=await u(e,{method:"POST",body:i});if(r.error)console.error("Произошла ошибка:",r.error);else if(r.data&&Array.isArray(r.data)&&r.data.length>0){const n=r.data.filter(d=>d.document&&d.document.fields).map(d=>({id:d.document.name.split("/").pop(),data:d.document.fields})).filter(d=>!!d.id);console.log(n),this.updateContent(n)}else console.error("Ошибка: Данные Firestore пришли в неправильном формате.")}updateContent(s){if(w){w.innerHTML="",s.forEach(e=>{const r=a("a",["card","shop-some__card",e.id]);r.href=`one-product.html?id=${e.id}`,e.data.sale.booleanValue===!0&&r.classList.add("sale");const n=a("div","card__img");n.innerHTML+=`
            <picture>
              <source srcset=${e.data.imgWebP.stringValue} type="image/webp" />
              <img src=${e.data.img.stringValue} />
            </picture>
        `,e.data.sale.booleanValue===!0&&(n.innerHTML+=`
            <div class="card__sale">
              <p>-30%</p>
            </div>
          `);const d=a("div","card__info"),c=a("p","card__category");c.innerText=e.data.category.stringValue;const y=a("h3","card__title");y.innerText=e.data.name.stringValue;const m=a("p","card__price");e.data.sale.booleanValue===!1?m.innerText=e.data.cost.stringValue:m.innerHTML=`${e.data.costNew.stringValue} <span>${e.data.cost.stringValue}</span>`,d.appendChild(c),d.appendChild(y),d.appendChild(m),r.appendChild(n),r.appendChild(d),w.appendChild(r)});const t=p(".shop-some__card");for(let e=0;e<t.length;e++)e<8||t[e].classList.add("hidden");if(s.length>8){const e=document.createElement("button");e.classList.add("btn","shop-some__load"),e.textContent="Load more",w.insertAdjacentElement("beforeend",e)}const i=o(".shop-some__load");i&&i.addEventListener("click",()=>{const e=p(".shop-some__card.hidden");for(let n=0;n<e.length&&n<8;n++)e[n].classList.remove("hidden");p(".shop-some__card.hidden").length===0&&i.classList.add("hidden")})}}initEventListeners(){document.addEventListener("change",s=>{const t=s.target;if(t&&t.type==="radio"&&t.name==="shop-filtr"){const i=t.parentNode?.textContent?.trim();i&&this.sendFetchRequest(i.toUpperCase()).then(()=>{l.stop("shop-some__items")})}})}}h.use([b,C]);const g=o(".featured-items__swiper-wrapper");class I{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards().then(()=>{console.log("being called "),l.stop("featured-items__swiper")})}initSwiper(){const s=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new h(".featured-items__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.featured-items__swiper-btn-next",prevEl:".swiper-btn-prew.featured-items__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),g&&g.classList.add("swiper-disabled"))};window.addEventListener("resize",s),s()}async loadCards(){const s={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"clothers"}]}},i=`https://firestore.googleapis.com/v1/projects/${s.projectId}/databases/(default)/documents:runQuery`,e=await u(i,{method:"POST",body:t});if(e.error){console.error("Ошибка при загрузке данных:",e.error);return}e.data&&(e.data.forEach(r=>{const n=r.document.name.split("/").pop()||"";this.slidesArr.push({id:n,data:r.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.loadMore(),this.swiper&&this.swiper.update())}renderSlides(){if(!g){console.error("swiperWrapper is null");return}this.slidesArr.forEach(s=>{const t=a("div",["featured-items__swiper-slide","swiper-slide"]),i=a("a",["card","featured-items__card",s.id]);i.href=`one-product.html?id=${s.id}`,t.appendChild(i);const e=a("div","card__img");e.innerHTML+=`
            <picture>
              <source srcset=${s.data.imgWebP.stringValue} type="image/webp" />
              <img src=${s.data.img.stringValue} />
            </picture>
      `;const r=a("div","card__info"),n=a("p","card__category");n.innerText=s.data.category.stringValue;const d=a("h3","card__title");d.innerText=s.data.name.stringValue;const c=a("p","card__price");c.innerText=s.data.cost.stringValue,r.appendChild(n),r.appendChild(d),r.appendChild(c),i.appendChild(e),i.appendChild(r),g.appendChild(t)})}loadMore(){this.hidden(),this.btnLoad()}hidden(){const s=p(".featured-items__swiper-slide");for(let t=0;t<s.length;t++)if(window.innerWidth<1023)if(window.innerWidth>576){if(t<6)continue;s[t].classList.add("hidden")}else{if(t<4)continue;s[t].classList.add("hidden")}}btnLoad(){const s=p(".featured-items__swiper-slide"),t=o(".featured-items__swiper");if(s.length>6&&t&&window.innerWidth<=1023){const e=document.createElement("button");e.classList.add("btn","featured-items__load"),e.textContent="See more",t.insertAdjacentElement("beforeend",e)}const i=o(".featured-items__load");i&&i.addEventListener("click",()=>{const e=p(".featured-items__swiper-slide.hidden");for(let n=0;n<e.length&&n<6;n++)e[n].classList.remove("hidden");p(".featured-items__swiper-slide.hidden").length===0&&i.classList.add("hidden")})}}h.use([b,C]);const _=o(".most-popular__swiper-wrapper");class P{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards().then(()=>l.stop("most-popular__swiper"))}initSwiper(){const s=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new h(".most-popular__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.most-popular__swiper-btn-next",prevEl:".swiper-btn-prew.most-popular__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),_&&_.classList.add("swiper-disabled"))};window.addEventListener("resize",s),s()}async loadCards(){const s={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"clothers"}]}},i=`https://firestore.googleapis.com/v1/projects/${s.projectId}/databases/(default)/documents:runQuery`,e=await u(i,{method:"POST",body:t});if(e.error){console.error("Ошибка при загрузке данных:",e.error);return}e.data&&(e.data.forEach(r=>{const n=r.document.name.split("/").pop()||"";this.slidesArr.push({id:n,data:r.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.hidden(),this.swiper&&this.swiper.update())}renderSlides(){if(!_){console.error("swiperWrapper is null");return}this.slidesArr.forEach(s=>{const t=a("div",["most-popular__swiper-slide","swiper-slide"]),i=a("a",["card","most-popular__card",s.id]);i.href=`one-product.html?id=${s.id}`,t.appendChild(i);const e=a("div","card__img");e.innerHTML+=`
            <picture>
              <source srcset=${s.data.imgWebP.stringValue} type="image/webp" />
              <img src=${s.data.img.stringValue} />
            </picture>
      `;const r=a("div","card__info"),n=a("p","card__category");n.innerText=s.data.category.stringValue;const d=a("h3","card__title");d.innerText=s.data.name.stringValue;const c=a("p","card__price");c.innerText=s.data.cost.stringValue,r.appendChild(n),r.appendChild(d),r.appendChild(c),i.appendChild(e),i.appendChild(r),_.appendChild(t)})}hidden(){const s=p(".most-popular__swiper-slide");for(let t=0;t<s.length;t++)if(window.innerWidth<1023)if(window.innerWidth>576){if(t<6)continue;s[t].classList.add("hidden")}else{if(t<4)continue;s[t].classList.add("hidden")}}}const v=o(".blog__cards");class j{newsDb;constructor(){this.newsDb=[],this.loadCards().then(()=>l.stop("blog__cards"))}async loadCards(){const s={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"blog"}]}},i=`https://firestore.googleapis.com/v1/projects/${s.projectId}/databases/(default)/documents:runQuery`,e=await u(i,{method:"POST",body:t});if(e.error){console.error("Ошибка при загрузке данных:",e.error);return}e.data&&(e.data.forEach(r=>{if(r.document&&r.document.fields){const n=r.document.name.split("/").pop()||"";this.newsDb.push({id:n,data:r.document.fields})}}),console.log(this.newsDb),this.renderCard())}renderCard(){this.newsDb.forEach(s=>{if(v){const t=a("a",["blog__card","new",s.id]);t.href=`new.html?id=${s.id}`;const i=a("p","new__category");i.innerText=s.data.type?.stringValue;const e=a("p","new__title");e.innerText=s.data.title?.stringValue;const r=a("p","new__info");r.innerText=s.data.shortInfo?.stringValue;const n=a("p","new__date-and-auth");n.innerHTML=`
          <span class="date">${s.data.date?.stringValue}</span>
          by
          <span class="author">${s.data.author?.stringValue}</span>`,t.appendChild(i),t.appendChild(e),t.appendChild(r),t.appendChild(n),v.appendChild(t)}})}}const W=p(".search");class B{prodArr;constructor(){this.prodArr=[],this.init()}init(){this.openSearch(),this.getData(),this.filter()}openSearch(){W.forEach(s=>{window.innerWidth<1024&&s.classList.contains("mob")?s.querySelector("svg")?.addEventListener("click",()=>{s.classList.toggle("active"),o(".burger-btn")?.classList.toggle("hidden"),o(".header__logo")?.classList.toggle("hidden"),o(".header__search-and-bag .buy__bag")?.classList.toggle("hidden")}):s.classList.contains("mob")||s.addEventListener("click",()=>{s.classList.toggle("active")})})}async getData(){const s={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"clothers"}]}},i=`https://firestore.googleapis.com/v1/projects/${s.projectId}/databases/(default)/documents:runQuery`,e=await u(i,{method:"POST",body:t});if(e.error){console.error("Ошибка при загрузке данных:",e.error);return}e.data&&(e.data.forEach(r=>{const n=r.document.name.split("/").pop()||"";this.prodArr.push({id:n,data:r.document.fields})}),console.log(this.prodArr))}filter(){}}document.addEventListener("DOMContentLoaded",async()=>{new E,new B,new V,new x,new T,new $,new I,new P,new j,l.stop("brands__item"),l.stop("sales"),l.stop("limits"),l.stop("explore__content")});new S;
