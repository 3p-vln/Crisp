import{g as o,L as p,f as u,r as a,a as l,B as E,A as S}from"./stop-preload-TeSQh7p3.js";import{S as h,N as b,A as C,a as A,b as T}from"./add-to-bag-BWkjw7YT.js";import{P as x}from"./pagination-Ex4kQTRT.js";import{S as $}from"./shop-some-Blb3ZYtu.js";h.use([b,x,C]);const L=o(".summer-sale__swiper-wrapper");class I{swiper;slidesArr;constructor(){this.swiper=new h(".summer-sale__swiper",{slidesPerView:2,autoplay:{delay:1e4},grabCursor:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prew"}}),this.slidesArr=[],this.loadCards().then(()=>{p.stop("summer-sale")})}async loadCards(){const e={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"main-swiper"}]}},r=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,s=await u(r,{method:"POST",body:t});if(s.error){console.error("Ошибка при загрузке данных:",s.error);return}s.data&&(s.data.forEach(i=>{this.slidesArr.push(i.document.fields)}),console.log(this.slidesArr),this.renderSlides(),this.swiper.update())}renderSlides(){this.slidesArr.forEach(e=>{if(L){const t=a("div",["swiper-slide","summer-sale__slide"]);t.innerHTML=`
            <picture>
              <source srcset=${e.imgWebP.stringValue} type="image/webp" />
              <img src=${e.img.stringValue}/>
            </picture>
        `,L.appendChild(t)}})}}const f=o(".shop-some__items");class P{shopDb;constructor(){this.shopDb=[],this.initEventListeners()}async sendFetchRequest(e){document.getElementsByClassName("shop-some__items")[0].classList.add("skeleton");const t={projectId:"crisp-b06bf"},r={structuredQuery:{where:{fieldFilter:{field:{fieldPath:"category"},op:"EQUAL",value:{stringValue:e}}},from:[{collectionId:"clothers"}]}},s=`https://firestore.googleapis.com/v1/projects/${t.projectId}/databases/(default)/documents:runQuery`,i=await u(s,{method:"POST",body:r});if(i.error)console.error("Произошла ошибка:",i.error);else if(i.data&&Array.isArray(i.data)&&i.data.length>0){const n=i.data.filter(d=>d.document&&d.document.fields).map(d=>({id:d.document.name.split("/").pop(),data:d.document.fields})).filter(d=>!!d.id);console.log(n),this.updateContent(n)}else console.error("Ошибка: Данные Firestore пришли в неправильном формате.")}updateContent(e){if(f){f.innerHTML="",e.forEach(s=>{const i=a("a",["card","shop-some__card",s.id]);i.href=`one-product.html?id=${s.id}`,s.data.sale.booleanValue===!0&&i.classList.add("sale");const n=a("div","card__img");n.innerHTML+=`
            <picture>
              <source srcset=${s.data.imgWebP.stringValue} type="image/webp" />
              <img src=${s.data.img.stringValue} />
            </picture>
        `,s.data.sale.booleanValue===!0&&(n.innerHTML+=`
            <div class="card__sale">
              <p>-30%</p>
            </div>
          `);const d=a("div","card__info"),c=a("p","card__category");c.innerText=s.data.category.stringValue;const y=a("h3","card__title");y.innerText=s.data.name.stringValue;const m=a("p","card__price");s.data.sale.booleanValue===!1?m.innerText=s.data.cost.stringValue:m.innerHTML=`${s.data.costNew.stringValue} <span>${s.data.cost.stringValue}</span>`,d.appendChild(c),d.appendChild(y),d.appendChild(m),i.appendChild(n),i.appendChild(d),f.appendChild(i)});const t=l(".shop-some__card");for(let s=0;s<t.length;s++)s<8||t[s].classList.add("hidden");if(e.length>8){const s=document.createElement("button");s.classList.add("btn","shop-some__load"),s.textContent="Load more",f.insertAdjacentElement("beforeend",s)}const r=o(".shop-some__load");r&&r.addEventListener("click",()=>{const s=l(".shop-some__card.hidden");for(let n=0;n<s.length&&n<8;n++)s[n].classList.remove("hidden");l(".shop-some__card.hidden").length===0&&r.classList.add("hidden")})}}initEventListeners(){document.addEventListener("change",e=>{const t=e.target;if(t&&t.type==="radio"&&t.name==="shop-filtr"){const r=t.parentNode?.textContent?.trim();r&&this.sendFetchRequest(r.toUpperCase()).then(()=>{p.stop("shop-some__items")})}})}}h.use([b,C]);const w=o(".featured-items__swiper-wrapper");class W{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards().then(()=>{console.log("being called "),p.stop("featured-items__swiper")})}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new h(".featured-items__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.featured-items__swiper-btn-next",prevEl:".swiper-btn-prew.featured-items__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),w&&w.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"clothers"}]}},r=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,s=await u(r,{method:"POST",body:t});if(s.error){console.error("Ошибка при загрузке данных:",s.error);return}s.data&&(s.data.forEach(i=>{const n=i.document.name.split("/").pop()||"";this.slidesArr.push({id:n,data:i.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.loadMore(),this.swiper&&this.swiper.update())}renderSlides(){if(!w){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{const t=a("div",["featured-items__swiper-slide","swiper-slide"]),r=a("a",["card","featured-items__card",e.id]);r.href=`one-product.html?id=${e.id}`,t.appendChild(r);const s=a("div","card__img");s.innerHTML+=`
            <picture>
              <source srcset=${e.data.imgWebP.stringValue} type="image/webp" />
              <img src=${e.data.img.stringValue} />
            </picture>
      `;const i=a("div","card__info"),n=a("p","card__category");n.innerText=e.data.category.stringValue;const d=a("h3","card__title");d.innerText=e.data.name.stringValue;const c=a("p","card__price");c.innerText=e.data.cost.stringValue,i.appendChild(n),i.appendChild(d),i.appendChild(c),r.appendChild(s),r.appendChild(i),w.appendChild(t)})}loadMore(){this.hidden(),this.btnLoad()}hidden(){const e=l(".featured-items__swiper-slide");for(let t=0;t<e.length;t++)if(window.innerWidth<1023)if(window.innerWidth>576){if(t<6)continue;e[t].classList.add("hidden")}else{if(t<4)continue;e[t].classList.add("hidden")}}btnLoad(){const e=l(".featured-items__swiper-slide"),t=o(".featured-items__swiper");if(e.length>6&&t&&window.innerWidth<=1023){const s=document.createElement("button");s.classList.add("btn","featured-items__load"),s.textContent="See more",t.insertAdjacentElement("beforeend",s)}const r=o(".featured-items__load");r&&r.addEventListener("click",()=>{const s=l(".featured-items__swiper-slide.hidden");for(let n=0;n<s.length&&n<6;n++)s[n].classList.remove("hidden");l(".featured-items__swiper-slide.hidden").length===0&&r.classList.add("hidden")})}}h.use([b,C]);const _=o(".most-popular__swiper-wrapper");class j{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards().then(()=>p.stop("most-popular__swiper"))}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new h(".most-popular__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next.most-popular__swiper-btn-next",prevEl:".swiper-btn-prew.most-popular__swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),_&&_.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"clothers"}]}},r=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,s=await u(r,{method:"POST",body:t});if(s.error){console.error("Ошибка при загрузке данных:",s.error);return}s.data&&(s.data.forEach(i=>{const n=i.document.name.split("/").pop()||"";this.slidesArr.push({id:n,data:i.document.fields})}),console.log(this.slidesArr),this.renderSlides(),this.hidden(),this.swiper&&this.swiper.update())}renderSlides(){if(!_){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{const t=a("div",["most-popular__swiper-slide","swiper-slide"]),r=a("a",["card","most-popular__card",e.id]);r.href=`one-product.html?id=${e.id}`,t.appendChild(r);const s=a("div","card__img");s.innerHTML+=`
            <picture>
              <source srcset=${e.data.imgWebP.stringValue} type="image/webp" />
              <img src=${e.data.img.stringValue} />
            </picture>
      `;const i=a("div","card__info"),n=a("p","card__category");n.innerText=e.data.category.stringValue;const d=a("h3","card__title");d.innerText=e.data.name.stringValue;const c=a("p","card__price");c.innerText=e.data.cost.stringValue,i.appendChild(n),i.appendChild(d),i.appendChild(c),r.appendChild(s),r.appendChild(i),_.appendChild(t)})}hidden(){const e=l(".most-popular__swiper-slide");for(let t=0;t<e.length;t++)if(window.innerWidth<1023)if(window.innerWidth>576){if(t<6)continue;e[t].classList.add("hidden")}else{if(t<4)continue;e[t].classList.add("hidden")}}}const v=o(".blog__cards");class B{newsDb;constructor(){this.newsDb=[],this.loadCards().then(()=>p.stop("blog__cards"))}async loadCards(){const e={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"blog"}]}},r=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,s=await u(r,{method:"POST",body:t});if(s.error){console.error("Ошибка при загрузке данных:",s.error);return}s.data&&(s.data.forEach(i=>{if(i.document&&i.document.fields){const n=i.document.name.split("/").pop()||"";this.newsDb.push({id:n,data:i.document.fields})}}),console.log(this.newsDb),this.renderCard())}renderCard(){this.newsDb.forEach(e=>{if(v){const t=a("a",["blog__card","new",e.id]);t.href=`new.html?id=${e.id}`;const r=a("p","new__category");r.innerText=e.data.type?.stringValue;const s=a("p","new__title");s.innerText=e.data.title?.stringValue;const i=a("p","new__info");i.innerText=e.data.shortInfo?.stringValue;const n=a("p","new__date-and-auth");n.innerHTML=`
          <span class="date">${e.data.date?.stringValue}</span>
          by
          <span class="author">${e.data.author?.stringValue}</span>`,t.appendChild(r),t.appendChild(s),t.appendChild(i),t.appendChild(n),v.appendChild(t)}})}}const V=l(".search");class M{prodArr;constructor(){this.prodArr=[],this.init()}init(){this.openSearch()}openSearch(){V.forEach(e=>{window.innerWidth<1024&&e.classList.contains("mob")?e.querySelector("svg")?.addEventListener("click",()=>{e.classList.toggle("active"),console.log("click"),o(".burger-btn")?.classList.toggle("hidden"),o(".header__logo")?.classList.toggle("hidden"),o(".buy__bag")?.classList.toggle("hidden"),this.addPopUp(e),this.getData(),this.getFilteredItems(),e.querySelector("::before")?.addEventListener("click",()=>{e.classList.remove("active"),o(".burger-btn")?.classList.remove("hidden"),o(".header__logo")?.classList.remove("hidden"),o(".buy__bag")?.classList.remove("hidden")})}):e.classList.contains("mob")||e.addEventListener("click",()=>{e.classList.toggle("active"),this.addPopUp(e),this.getData(),this.getFilteredItems()})})}async getData(){const e={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"clothers"}]}},r=`https://firestore.googleapis.com/v1/projects/${e.projectId}/databases/(default)/documents:runQuery`,s=await u(r,{method:"POST",body:t});if(s.error){console.error("Ошибка при загрузке данных:",s.error);return}if(s.data){s.data.forEach(n=>{const d=n.document.name.split("/").pop()||"";this.prodArr.push({id:d,data:n.document.fields})}),console.log(this.prodArr);const i=o(".search__popup.pop-up");i&&this.renderCards(i)}}addPopUp(e){const t=o(".search__popup.pop-up");if(!t){const r=a("div",["search__popup","pop-up","active"]);e.appendChild(r)}t?.classList.toggle("active")}renderCards(e){this.prodArr.forEach(t=>{const r=a("a",["card",t.id]);r.href=`one-product.html?id=${t.id}`;const s=a("div","card__img");s.innerHTML+=`
            <picture>
              <source srcset=${t.data.imgWebP.stringValue} type="image/webp" />
              <img src=${t.data.img.stringValue} />
            </picture>
      `;const i=a("div","card__info"),n=a("h3","card__title");n.innerText=t.data.name.stringValue;const d=a("p","card__price");d.innerText=t.data.cost.stringValue,i.appendChild(n),i.appendChild(d),r.appendChild(s),r.appendChild(i),e.appendChild(r)})}filter(e,t){return t.filter(r=>{const s=new RegExp(e,"gi");return r.data.name.stringValue.match(s)})}getFilteredItems(){V.forEach(e=>{if(e.classList.contains("active")){const t=e.querySelector("input");console.log(t),t?.addEventListener("input",()=>{const r=this.filter(t.value,this.prodArr),s=o(".search__popup.pop-up");s&&(this.clearContainer(s),this.renderFilteredCards(s,r))})}})}clearContainer(e){for(;e.firstChild;)e.removeChild(e.firstChild)}renderFilteredCards(e,t){t.forEach(r=>{const s=a("a",["card",r.id]);s.href=`one-product.html?id=${r.id}`;const i=a("div","card__img");i.innerHTML+=`
            <picture>
              <source srcset=${r.data.imgWebP.stringValue} type="image/webp" />
              <img src=${r.data.img.stringValue} />
            </picture>
      `;const n=a("div","card__info"),d=a("h3","card__title");d.innerText=r.data.name.stringValue;const c=a("p","card__price");c.innerText=r.data.cost.stringValue,n.appendChild(d),n.appendChild(c),s.appendChild(i),s.appendChild(n),e.appendChild(s)})}}document.addEventListener("DOMContentLoaded",async()=>{new E,new M,new A,new S,new I,new $,new P,new W,new j,new B,p.stop("brands__item"),p.stop("sales"),p.stop("limits"),p.stop("explore__content")});new T;
