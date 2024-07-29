import{a as i,g as h,f as u,r}from"./useFetch-CPNCRhkP.js";import{L as f}from"./stop-preload-lHMBXtTV.js";class m{containerSelector;cardSelector;buttonSelector;initialCardsToShow;additionalCardsToShow;constructor(o,e,a,t,s){this.containerSelector=o,this.cardSelector=e,this.buttonSelector=a,this.initialCardsToShow=t,this.additionalCardsToShow=s,this.init()}init(){this.hidden(),this.btnLoad()}hidden(){const o=i(this.cardSelector);for(let e=0;e<o.length;e++)e<this.initialCardsToShow||o[e].classList.add("hidden")}btnLoad(){const o=h(this.buttonSelector);o&&o.addEventListener("click",()=>{const e=i(`${this.cardSelector}.hidden`),a=i(`${this.cardSelector}.hidden`);for(let t=0;t<e.length&&t<this.additionalCardsToShow;t++)e[t].classList.remove("hidden");a.length||o.classList.add("hidden")})}}const c=h(".shop-some__items");class b{shopDb;constructor(){this.shopDb=[],this.loadCards().then(()=>f.stop("shop-some__items"))}async loadCards(){const o={projectId:"crisp-b06bf"},e={structuredQuery:{from:[{collectionId:"clothers"}]}},a=`https://firestore.googleapis.com/v1/projects/${o.projectId}/databases/(default)/documents:runQuery`,t=await u(a,{method:"POST",body:e});if(t.error){console.error("Ошибка при загрузке данных:",t.error);return}t.data&&(t.data.forEach(s=>{const d=s.document.name.split("/").pop()||"";this.shopDb.push({id:d,data:s.document.fields})}),this.renderCard(),new m(".shop-some__items",".shop-some__card",".shop-some__load",8,8))}renderCard(){if(c){this.shopDb.forEach(e=>{const a=r("a",["card","shop-some__card",e.id]);a.href=`one-product.html?id=${e.id}`,e.data.sale.booleanValue===!0&&a.classList.add("sale");const t=r("div","card__img");t.innerHTML+=`
            <picture>
              <source srcset=${e.data.imgWebP.stringValue} type="image/webp" />
              <img src=${e.data.img.stringValue} />
            </picture>
        `,e.data.sale.booleanValue===!0&&(t.innerHTML+=`
            <div class="card__sale">
              <p>-30%</p>
            </div>
          `);const s=r("div","card__info"),d=r("p","card__category");d.innerText=e.data.category.stringValue;const l=r("h3","card__title");l.innerText=e.data.name.stringValue;const n=r("p","card__price");e.data.sale.booleanValue===!1?n.innerText=e.data.cost.stringValue:n.innerHTML=`${e.data.costNew.stringValue} <span>${e.data.cost.stringValue}</span>`,s.appendChild(d),s.appendChild(l),s.appendChild(n),a.appendChild(t),a.appendChild(s),c.appendChild(a)});const o=r("button",["btn","shop-some__load"]);o.textContent="Load more",c.appendChild(o)}}}export{b as S};
