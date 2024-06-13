import{a as p,g as _,f as g,B as u,A as h,L as m}from"./stop-preload-CWe_wQxZ.js";import{L as f}from"./btnLoad-BcE4c27Q.js";class v{accordeonButtons;constructor(){this.accordeonButtons=p(".accordeon__button"),this.accordeonButtons.forEach(c=>{c.addEventListener("click",this.toggleClass.bind(this))})}toggleClass(c){const d=c.target,r=d.nextElementSibling,o=d.children[1].children[1];console.log(o),r.classList.contains("accordeon__list_active")?(r.classList.remove("accordeon__list_active"),r.style.maxHeight="0",o.style.opacity="1"):(r.classList.add("accordeon__list_active"),r.style.maxHeight=r.scrollHeight+"px",o.style.opacity="0")}}const b=function(){const a=_(".shop-some__items");class c{shopDb;constructor(){this.shopDb=[],this.loadCards()}async loadCards(){const s={projectId:"crisp-b06bf"},t={structuredQuery:{from:[{collectionId:"clothers"}]}},e=`https://firestore.googleapis.com/v1/projects/${s.projectId}/databases/(default)/documents:runQuery`,n=await g(e,{method:"POST",body:t});if(n.error){console.error("Ошибка при загрузке данных:",n.error);return}n.data&&(n.data.forEach(i=>{const l=i.document.name.split("/").pop()||"";this.shopDb.push({id:l,data:i.document.fields})}),console.log(this.shopDb),this.renderCard(),new f(".shop-some__items",".shop-some__card",".shop-some__load",8,8))}renderCard(){this.shopDb.forEach(s=>{a&&(s.data.sale.booleanValue===!1?a.insertAdjacentHTML("afterbegin",`
            <a class="card shop-some__card ${s.id}" href="one-product.html?id=${s.id}">
              <div class="card__img">
                <picture>
                  <source srcset=${s.data.imgWebP.stringValue} type="image/webp" />
                  <img src=${s.data.img.stringValue} />
                </picture>
              </div>
              <div class="card__info">
                <p class="card__category">${s.data.category.stringValue}</p>
                <h3 class="card__title">${s.data.name.stringValue}</h3>
                <p class="card__price">${s.data.cost.stringValue}</p>
              </div>
            </a>
            `):a.insertAdjacentHTML("afterbegin",`
            <a class="card sale shop-some__card ${s.id}" href="one-product.html?id=${s.id}">
              <div class="card__img">
                <picture>
                  <source srcset=${s.data.imgWebP.stringValue} type="image/webp" />
                  <img src=${s.data.img.stringValue} />
                </picture>
                <div class="card__sale">
                  <p>-30%</p>
                </div>
              </div>
              <div class="card__info">
                <p class="card__category">${s.data.category.stringValue}</p>
                <h3 class="card__title">${s.data.name.stringValue}</h3>
                <p class="card__price">${s.data.costNew.stringValue} <span>${s.data.cost.stringValue}</span></p>
              </div>
            </a>
                `))})}}class d extends c{dropdownBox;arrowSvg;menu;options;selectedText;constructor(s){super(),console.log(this.shopDb),this.dropdownBox=s.querySelector(".dropdown__box"),this.arrowSvg=s.querySelector(".dropdown__svg-arrow"),this.menu=s.querySelector(".dropdown__menu"),this.options=s.querySelectorAll(".dropdown__menu-item"),this.selectedText=s.querySelector(".dropdown__text"),this.dropdownBox?.addEventListener("click",()=>{this.arrowSvg?.classList.toggle("dropdown__svg-arrow_rotate"),this.menu?.classList.toggle("dropdown__menu_open")}),this.options.forEach(t=>{t.addEventListener("click",()=>{this.selectedText instanceof HTMLElement&&t instanceof HTMLElement&&(this.selectedText.innerText=t.innerText,this.menu?.classList.remove("dropdown__menu_open"),console.log(this.selectedText.innerText)),this.arrowSvg?.classList.remove("dropdown__svg-arrow_rotate"),this.options.forEach(e=>{e.classList.remove("dropdown__menu-item_active")}),t.classList.add("dropdown__menu-item_active"),this.renderCard()})})}renderCard(){let s=Number(this.selectedText?.innerText);const t=this.shopDb.slice(0,s);console.log(s),a&&(a.innerHTML="",t.forEach(e=>{a&&(e.data.sale.booleanValue===!1?a.insertAdjacentHTML("afterbegin",`
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
            `):a.insertAdjacentHTML("afterbegin",`
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
            
                `))}))}}document.querySelectorAll(".dropdown").forEach(o=>new d(o))};document.addEventListener("DOMContentLoaded",async()=>{new u,new h,m.stop(),new v,b()});
