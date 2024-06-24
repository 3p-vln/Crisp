import{g as u,f as g,a as _,B as h,A as m,L as f}from"./stop-preload-BrAlZGVA.js";import{L as v,S as b}from"./shop-some-5EqBhl--.js";function $(){const c=u(".shop-some__items");class t{shopDb;constructor(){this.shopDb=[],this.loadCards()}async loadCards(){const s={projectId:"crisp-b06bf"},r={structuredQuery:{from:[{collectionId:"clothers"}]}},d=`https://firestore.googleapis.com/v1/projects/${s.projectId}/databases/(default)/documents:runQuery`,a=await g(d,{method:"POST",body:r});if(a.error){console.error("Ошибка при загрузке данных:",a.error);return}a.data&&(a.data.forEach(i=>{const n=i.document.name.split("/").pop()||"";this.shopDb.push({id:n,data:i.document.fields})}),this.renderCard(),new v(".shop-some__items",".shop-some__card",".shop-some__load",8,8))}renderCard(){this.shopDb.forEach(s=>{c&&(s.data.sale.booleanValue===!1?c.insertAdjacentHTML("afterbegin",`
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
            `):c.insertAdjacentHTML("afterbegin",`
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
                `))})}}class e extends t{dropdownBox;arrowSvg;menu;options;sortOptions;selectedText;selectedOrder;sortOrder;sortItems;limitCardsAll;renderedCards;constructor(s){super(),this.dropdownBox=s.querySelector(".dropdown__box"),this.arrowSvg=s.querySelector(".dropdown__svg-arrow"),this.menu=s.querySelector(".dropdown__menu"),this.options=s.querySelectorAll(".dropdown__menu-item"),this.sortOptions=s.querySelectorAll(".sort-item"),this.selectedText=s.querySelector(".limit"),this.selectedOrder=s.querySelector(".dropdown__text"),this.sortItems=s.querySelectorAll(".sort-item"),this.sortOrder="ascend",this.limitCardsAll=0,this.renderedCards=[],this.dropdownBox?.addEventListener("click",()=>{this.arrowSvg?.classList.toggle("dropdown__svg-arrow_rotate"),this.menu?.classList.toggle("dropdown__menu_open")}),this.options.forEach(r=>{r.addEventListener("click",()=>{this.selectedText instanceof HTMLElement&&r instanceof HTMLElement&&(this.selectedText.innerText=r.innerText,this.menu?.classList.remove("dropdown__menu_open")),this.arrowSvg?.classList.remove("dropdown__svg-arrow_rotate"),this.options.forEach(d=>{d.classList.remove("dropdown__menu-item_active")}),r.classList.add("dropdown__menu-item_active"),this.renderCard()})}),this.sortItems.forEach(r=>{r.addEventListener("click",()=>{console.log(r.innerText==="HIGH",r.innerText),this.selectedOrder instanceof HTMLElement&&r instanceof HTMLElement&&(this.selectedOrder.innerText=r.innerText,this.menu?.classList.remove("dropdown__menu_open")),r.innerText==="HIGH"?this.sortOrder="ascend":this.sortOrder="descend",console.log(this.sortOrder),this.sortedCards()})})}renderCard(){const s=[];if(this.selectedText){const r=Number(this.selectedText?.textContent);console.log(this.limitCardsAll);const d=this.shopDb.slice(0,r);c&&(c.innerHTML="",d.forEach(a=>{c&&(a.data.sale.booleanValue===!1?c.insertAdjacentHTML("afterbegin",`
            <a class="card shop-some__card ${a.id}" href="one-product.html?id=${a.id}">
              <div class="card__img">
                <picture>
                  <source srcset=${a.data.imgWebP.stringValue} type="image/webp" />
                  <img src=${a.data.img.stringValue} />
                </picture>
              </div>
              <div class="card__info">
                <p class="card__category">${a.data.category.stringValue}</p>
                <h3 class="card__title">${a.data.name.stringValue}</h3>
                <p class="card__price">${a.data.cost.stringValue}</p>
              </div>
            </a>
            `):c.insertAdjacentHTML("afterbegin",`
            <a class="card sale shop-some__card ${a.id}" href="one-product.html?id=${a.id}">
              <div class="card__img">
                <picture>
                  <source srcset=${a.data.imgWebP.stringValue} type="image/webp" />
                  <img src=${a.data.img.stringValue} />
                </picture>
                <div class="card__sale">
                  <p>-30%</p>
                </div>
              </div>
              <div class="card__info">
                <p class="card__category">${a.data.category.stringValue}</p>
                <h3 class="card__title">${a.data.name.stringValue}</h3>
                <p class="card__price">${a.data.costNew.stringValue} <span>${a.data.cost.stringValue}</span></p>
              </div>
            </a>
                `)),s.push(a),console.log(a)}),this.renderedCards=s,localStorage.setItem("Cards",JSON.stringify(this.renderedCards)))}}sortedCards(){this.sortOrder==="ascend"?this.shopDb.sort((s,r)=>{const d=Object.values(s.data.cost.stringValue),a=Object.values(r.data.cost.stringValue),i=d.join("").trim().split(" ")[0].replace(",","."),n=a.join("").trim().split(" ")[0].replace(",",".");return Number(i)-Number(n)}):this.shopDb.sort((s,r)=>{const d=Object.values(s.data.cost.stringValue),a=Object.values(r.data.cost.stringValue),i=d.join("").trim().split(" ")[0].replace(",","."),n=a.join("").trim().split(" ")[0].replace(",",".");return Number(n)-Number(i)}),c&&(c.innerHTML="",this.shopDb.forEach(s=>{c&&(s.data.sale.booleanValue===!1?c.insertAdjacentHTML("afterbegin",`
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
            `):c.insertAdjacentHTML("afterbegin",`
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
                `))}))}}document.querySelectorAll(".dropdown").forEach(o=>new e(o))}const p=u(".shop-some__items");class V extends b{accordeonButtons;labels;brand;constructor(){super(),this.accordeonButtons=_(".accordeon__button"),this.labels=_(".accordeon__item");let t,e,l;this.brand="",this.labels.forEach(o=>{o.addEventListener("click",()=>{this.brand=o.textContent,this.filterCards()})}),this.accordeonButtons.forEach(o=>{o.addEventListener("click",()=>{t=o,e=t.nextElementSibling,l=t.children[1].children[1],this.toggleFunc(e,l)})})}toggleFunc(t,e){t.classList.contains("accordeon__list_active")?(t.classList.remove("accordeon__list_active"),t.style.maxHeight="0",e.style.opacity="1"):(t.classList.add("accordeon__list_active"),t.style.maxHeight=t.scrollHeight+"px",e.style.opacity="0")}filterCards(){const t=this.shopDb;console.log(this.brand),this.brand&&(console.log(t),t.filter(e=>(console.log(this.brand?.trim()),console.log(e.data.brand.stringValue,this.brand.trim()),e.data.name.stringValue===this.brand.trim())),console.log(t),t.forEach(e=>{p&&(e.data.sale.booleanValue===!1?p.insertAdjacentHTML("afterbegin",`
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
            `):p.insertAdjacentHTML("afterbegin",`
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
                `))}))}}document.addEventListener("DOMContentLoaded",async()=>{new h,new m,f.stop(),new V,$()});
