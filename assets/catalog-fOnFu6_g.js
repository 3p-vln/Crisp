import{g as q,a as _e,B as yt,A as Pt}from"./stop-preload-TeSQh7p3.js";import{S as We}from"./shop-some-Blb3ZYtu.js";function At(){const r=q(".shop-some__items"),e=[];let i=0;class o extends We{dropdownBox;arrowSvg;menu;options;sortOptions;selectedText;selectedOrder;sortOrder;sortItems;renderedCards;constructor(h){super(),this.dropdownBox=h.querySelector(".dropdown__box"),this.arrowSvg=h.querySelector(".dropdown__svg-arrow"),this.menu=h.querySelector(".dropdown__menu"),this.options=h.querySelectorAll(".dropdown__menu-item"),this.sortOptions=h.querySelectorAll(".sort-item"),this.selectedText=h.querySelector(".limit"),this.selectedOrder=h.querySelector(".dropdown__text"),this.sortItems=h.querySelectorAll(".sort-item"),this.sortOrder="ascend",this.renderedCards=[],this.dropdownBox?.addEventListener("click",()=>{this.arrowSvg?.classList.toggle("dropdown__svg-arrow_rotate"),this.menu?.classList.toggle("dropdown__menu_open")}),this.options.forEach(d=>{d.addEventListener("click",()=>{this.selectedText instanceof HTMLElement&&d instanceof HTMLElement&&(this.selectedText.innerText=d.innerText,this.menu?.classList.remove("dropdown__menu_open")),this.arrowSvg?.classList.remove("dropdown__svg-arrow_rotate"),this.options.forEach(g=>{g.classList.remove("dropdown__menu-item_active")}),d.classList.add("dropdown__menu-item_active"),this.renderCard()})}),this.sortItems.forEach(d=>{d.addEventListener("click",()=>{console.log(d.innerText==="HIGH",d.innerText),this.selectedOrder instanceof HTMLElement&&d instanceof HTMLElement&&(this.selectedOrder.innerText=d.innerText,this.menu?.classList.remove("dropdown__menu_open")),d.innerText==="HIGH"?this.sortOrder="ascend":d.innerText==="LOW"?this.sortOrder="descend":this.sortOrder="default",this.sortedCards()})})}renderCard=()=>{e.length=0;const h=[];if(this.selectedText){i=Number(this.selectedText?.textContent),console.log(i);const d=this.shopDb.slice(0,i);r&&(r.innerHTML="",d.forEach(g=>{r&&(g.data.sale.booleanValue===!1?r.insertAdjacentHTML("afterbegin",`
            <a class="card shop-some__card ${g.id}" href="one-product.html?id=${g.id}">
              <div class="card__img">
                <picture>
                  <source srcset=${g.data.imgWebP.stringValue} type="image/webp" />
                  <img src=${g.data.img.stringValue} />
                </picture>
              </div>
              <div class="card__info">
                <p class="card__category">${g.data.category.stringValue}</p>
                <h3 class="card__title">${g.data.name.stringValue}</h3>
                <p class="card__price">${g.data.cost.stringValue}</p>
              </div>
            </a>
            `):r.insertAdjacentHTML("afterbegin",`
            <a class="card sale shop-some__card ${g.id}" href="one-product.html?id=${g.id}">
              <div class="card__img">
                <picture>
                  <source srcset=${g.data.imgWebP.stringValue} type="image/webp" />
                  <img src=${g.data.img.stringValue} />
                </picture>
                <div class="card__sale">
                  <p>-30%</p>
                </div>
              </div>
              <div class="card__info">
                <p class="card__category">${g.data.category.stringValue}</p>
                <h3 class="card__title">${g.data.name.stringValue}</h3>
                <p class="card__price">${g.data.costNew.stringValue} <span>${g.data.cost.stringValue}</span></p>
              </div>
            </a>
                `))}),e.push(...h),console.log(e),localStorage.setItem("Cards",JSON.stringify(this.renderedCards)))}};sortedCards=()=>{console.log(i);const h=this.shopDb.slice(0,i);this.sortOrder==="ascend"?h.sort((d,g)=>{const v=Object.values(d.data.cost.stringValue),w=Object.values(g.data.cost.stringValue),P=v.join("").trim().split(" ")[0].replace(",","."),U=w.join("").trim().split(" ")[0].replace(",",".");return Number(P)-Number(U)}):this.sortOrder==="descend"?h.sort((d,g)=>{const v=Object.values(d.data.cost.stringValue),w=Object.values(g.data.cost.stringValue),P=v.join("").trim().split(" ")[0].replace(",","."),U=w.join("").trim().split(" ")[0].replace(",",".");return Number(U)-Number(P)}):h.sort((d,g)=>{const v=d.data.brand.stringValue,w=g.data.brand.stringValue;return v.localeCompare(w)}),r&&(r.innerHTML="",h.forEach(d=>{r&&(d.data.sale.booleanValue===!1?r.insertAdjacentHTML("afterbegin",`
            <a class="card shop-some__card ${d.id}" href="one-product.html?id=${d.id}">
              <div class="card__img">
                <picture>
                  <source srcset=${d.data.imgWebP.stringValue} type="image/webp" />
                  <img src=${d.data.img.stringValue} />
                </picture>
              </div>
              <div class="card__info">
                <p class="card__category">${d.data.category.stringValue}</p>
                <h3 class="card__title">${d.data.name.stringValue}</h3>
                <p class="card__price">${d.data.cost.stringValue}</p>
              </div>
            </a>
            `):r.insertAdjacentHTML("afterbegin",`
            <a class="card sale shop-some__card ${d.id}" href="one-product.html?id=${d.id}">
              <div class="card__img">
                <picture>
                  <source srcset=${d.data.imgWebP.stringValue} type="image/webp" />
                  <img src=${d.data.img.stringValue} />
                </picture>
                <div class="card__sale">
                  <p>-30%</p>
                </div>
              </div>
              <div class="card__info">
                <p class="card__category">${d.data.category.stringValue}</p>
                <h3 class="card__title">${d.data.name.stringValue}</h3>
                <p class="card__price">$${d.data.cost.stringValue} <span>${d.data.costNew.stringValue}</span></p>
              </div>
            </a>
                `))}))}}document.querySelectorAll(".dropdown").forEach(m=>new o(m))}var R;(function(r){r.Range="range",r.Steps="steps",r.Positions="positions",r.Count="count",r.Values="values"})(R||(R={}));var O;(function(r){r[r.None=-1]="None",r[r.NoValue=0]="NoValue",r[r.LargeValue=1]="LargeValue",r[r.SmallValue=2]="SmallValue"})(O||(O={}));function Lt(r){return se(r)&&typeof r.from=="function"}function se(r){return typeof r=="object"&&typeof r.to=="function"}function Te(r){r.parentElement.removeChild(r)}function xe(r){return r!=null}function ze(r){r.preventDefault()}function Dt(r){return r.filter(function(e){return this[e]?!1:this[e]=!0},{})}function kt(r,e){return Math.round(r/e)*e}function Mt(r,e){var i=r.getBoundingClientRect(),o=r.ownerDocument,u=o.documentElement,m=Ke(o);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(m.x=0),e?i.top+m.y-u.clientTop:i.left+m.x-u.clientLeft}function $(r){return typeof r=="number"&&!isNaN(r)&&isFinite(r)}function Re(r,e,i){i>0&&(M(r,e),setTimeout(function(){re(r,e)},i))}function Ne(r){return Math.max(Math.min(r,100),0)}function ae(r){return Array.isArray(r)?r:[r]}function Ot(r){r=String(r);var e=r.split(".");return e.length>1?e[1].length:0}function M(r,e){r.classList&&!/\s/.test(e)?r.classList.add(e):r.className+=" "+e}function re(r,e){r.classList&&!/\s/.test(e)?r.classList.remove(e):r.className=r.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Ht(r,e){return r.classList?r.classList.contains(e):new RegExp("\\b"+e+"\\b").test(r.className)}function Ke(r){var e=window.pageXOffset!==void 0,i=(r.compatMode||"")==="CSS1Compat",o=e?window.pageXOffset:i?r.documentElement.scrollLeft:r.body.scrollLeft,u=e?window.pageYOffset:i?r.documentElement.scrollTop:r.body.scrollTop;return{x:o,y:u}}function Ut(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function $t(){var r=!1;try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,e)}catch{}return r}function jt(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Ce(r,e){return 100/(e-r)}function we(r,e,i){return e*100/(r[i+1]-r[i])}function Ft(r,e){return we(r,r[0]<0?e+Math.abs(r[0]):e-r[0],0)}function Tt(r,e){return e*(r[1]-r[0])/100+r[0]}function Y(r,e){for(var i=1;r>=e[i];)i+=1;return i}function zt(r,e,i){if(i>=r.slice(-1)[0])return 100;var o=Y(i,r),u=r[o-1],m=r[o],h=e[o-1],d=e[o];return h+Ft([u,m],i)/Ce(h,d)}function Rt(r,e,i){if(i>=100)return r.slice(-1)[0];var o=Y(i,e),u=r[o-1],m=r[o],h=e[o-1],d=e[o];return Tt([u,m],(i-h)*Ce(h,d))}function Nt(r,e,i,o){if(o===100)return o;var u=Y(o,r),m=r[u-1],h=r[u];return i?o-m>(h-m)/2?h:m:e[u-1]?r[u-1]+kt(o-r[u-1],e[u-1]):o}var Xe=function(){function r(e,i,o){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[o||!1],this.xNumSteps=[!1],this.snap=i;var u,m=[];for(Object.keys(e).forEach(function(h){m.push([ae(e[h]),h])}),m.sort(function(h,d){return h[0][0]-d[0][0]}),u=0;u<m.length;u++)this.handleEntryPoint(m[u][1],m[u][0]);for(this.xNumSteps=this.xSteps.slice(0),u=0;u<this.xNumSteps.length;u++)this.handleStepPoint(u,this.xNumSteps[u])}return r.prototype.getDistance=function(e){for(var i=[],o=0;o<this.xNumSteps.length-1;o++)i[o]=we(this.xVal,e,o);return i},r.prototype.getAbsoluteDistance=function(e,i,o){var u=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[u+1];)u++;else e===this.xPct[this.xPct.length-1]&&(u=this.xPct.length-2);!o&&e===this.xPct[u+1]&&u++,i===null&&(i=[]);var m,h=1,d=i[u],g=0,v=0,w=0,P=0;for(o?m=(e-this.xPct[u])/(this.xPct[u+1]-this.xPct[u]):m=(this.xPct[u+1]-e)/(this.xPct[u+1]-this.xPct[u]);d>0;)g=this.xPct[u+1+P]-this.xPct[u+P],i[u+P]*h+100-m*100>100?(v=g*m,h=(d-100*m)/i[u+P],m=1):(v=i[u+P]*g/100*h,h=0),o?(w=w-v,this.xPct.length+P>=1&&P--):(w=w+v,this.xPct.length-P>=1&&P++),d=i[u+P]*h;return e+w},r.prototype.toStepping=function(e){return e=zt(this.xVal,this.xPct,e),e},r.prototype.fromStepping=function(e){return Rt(this.xVal,this.xPct,e)},r.prototype.getStep=function(e){return e=Nt(this.xPct,this.xSteps,this.snap,e),e},r.prototype.getDefaultStep=function(e,i,o){var u=Y(e,this.xPct);return(e===100||i&&e===this.xPct[u-1])&&(u=Math.max(u-1,1)),(this.xVal[u]-this.xVal[u-1])/o},r.prototype.getNearbySteps=function(e){var i=Y(e,this.xPct);return{stepBefore:{startValue:this.xVal[i-2],step:this.xNumSteps[i-2],highestStep:this.xHighestCompleteStep[i-2]},thisStep:{startValue:this.xVal[i-1],step:this.xNumSteps[i-1],highestStep:this.xHighestCompleteStep[i-1]},stepAfter:{startValue:this.xVal[i],step:this.xNumSteps[i],highestStep:this.xHighestCompleteStep[i]}}},r.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(Ot);return Math.max.apply(null,e)},r.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},r.prototype.convert=function(e){return this.getStep(this.toStepping(e))},r.prototype.handleEntryPoint=function(e,i){var o;if(e==="min"?o=0:e==="max"?o=100:o=parseFloat(e),!$(o)||!$(i[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(o),this.xVal.push(i[0]);var u=Number(i[1]);o?this.xSteps.push(isNaN(u)?!1:u):isNaN(u)||(this.xSteps[0]=u),this.xHighestCompleteStep.push(0)},r.prototype.handleStepPoint=function(e,i){if(i){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=we([this.xVal[e],this.xVal[e+1]],i,0)/Ce(this.xPct[e],this.xPct[e+1]);var o=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],u=Math.ceil(Number(o.toFixed(3))-1),m=this.xVal[e]+this.xNumSteps[e]*u;this.xHighestCompleteStep[e]=m}},r}(),Be={to:function(r){return r===void 0?"":r.toFixed(2)},from:Number},Ge={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},z={tooltips:".__tooltips",aria:".__aria"};function Bt(r,e){if(!$(e))throw new Error("noUiSlider: 'step' is not numeric.");r.singleStep=e}function It(r,e){if(!$(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");r.keyboardPageMultiplier=e}function qt(r,e){if(!$(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");r.keyboardMultiplier=e}function Wt(r,e){if(!$(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");r.keyboardDefaultStep=e}function Kt(r,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");r.spectrum=new Xe(e,r.snap||!1,r.singleStep)}function Xt(r,e){if(e=ae(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");r.handles=e.length,r.start=e}function Gt(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");r.snap=e}function Yt(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");r.animate=e}function Jt(r,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");r.animationDuration=e}function Ye(r,e){var i=[!1],o;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(o=1;o<r.handles;o++)i.push(e);i.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==r.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");i=e}r.connect=i}function Zt(r,e){switch(e){case"horizontal":r.ort=0;break;case"vertical":r.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Je(r,e){if(!$(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(r.margin=r.spectrum.getDistance(e))}function Qt(r,e){if(!$(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(r.limit=r.spectrum.getDistance(e),!r.limit||r.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function er(r,e){var i;if(!$(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||$(e[0])||$(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),r.padding=[r.spectrum.getDistance(e[0]),r.spectrum.getDistance(e[1])],i=0;i<r.spectrum.xNumSteps.length-1;i++)if(r.padding[0][i]<0||r.padding[1][i]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var o=e[0]+e[1],u=r.spectrum.xVal[0],m=r.spectrum.xVal[r.spectrum.xVal.length-1];if(o/(m-u)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function tr(r,e){switch(e){case"ltr":r.dir=0;break;case"rtl":r.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function rr(r,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var i=e.indexOf("tap")>=0,o=e.indexOf("drag")>=0,u=e.indexOf("fixed")>=0,m=e.indexOf("snap")>=0,h=e.indexOf("hover")>=0,d=e.indexOf("unconstrained")>=0,g=e.indexOf("invert-connects")>=0,v=e.indexOf("drag-all")>=0,w=e.indexOf("smooth-steps")>=0;if(u){if(r.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Je(r,r.start[1]-r.start[0])}if(g&&r.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(d&&(r.margin||r.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");r.events={tap:i||m,drag:o,dragAll:v,smoothSteps:w,fixed:u,snap:m,hover:h,unconstrained:d,invertConnects:g}}function sr(r,e){if(e!==!1)if(e===!0||se(e)){r.tooltips=[];for(var i=0;i<r.handles;i++)r.tooltips.push(e)}else{if(e=ae(e),e.length!==r.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(o){if(typeof o!="boolean"&&!se(o))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),r.tooltips=e}}function ar(r,e){if(e.length!==r.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");r.handleAttributes=e}function ir(r,e){if(!se(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");r.ariaFormat=e}function nr(r,e){if(!Lt(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");r.format=e}function or(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");r.keyboardSupport=e}function lr(r,e){r.documentElement=e}function cr(r,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");r.cssPrefix=e}function ur(r,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof r.cssPrefix=="string"?(r.cssClasses={},Object.keys(e).forEach(function(i){r.cssClasses[i]=r.cssPrefix+e[i]})):r.cssClasses=e}function Ze(r){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Be,format:Be},i={step:{r:!1,t:Bt},keyboardPageMultiplier:{r:!1,t:It},keyboardMultiplier:{r:!1,t:qt},keyboardDefaultStep:{r:!1,t:Wt},start:{r:!0,t:Xt},connect:{r:!0,t:Ye},direction:{r:!0,t:tr},snap:{r:!1,t:Gt},animate:{r:!1,t:Yt},animationDuration:{r:!1,t:Jt},range:{r:!0,t:Kt},orientation:{r:!1,t:Zt},margin:{r:!1,t:Je},limit:{r:!1,t:Qt},padding:{r:!1,t:er},behaviour:{r:!0,t:rr},ariaFormat:{r:!1,t:ir},format:{r:!1,t:nr},tooltips:{r:!1,t:sr},keyboardSupport:{r:!0,t:or},documentElement:{r:!1,t:lr},cssPrefix:{r:!0,t:cr},cssClasses:{r:!0,t:ur},handleAttributes:{r:!1,t:ar}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Ge,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};r.format&&!r.ariaFormat&&(r.ariaFormat=r.format),Object.keys(i).forEach(function(g){if(!xe(r[g])&&o[g]===void 0){if(i[g].r)throw new Error("noUiSlider: '"+g+"' is required.");return}i[g].t(e,xe(r[g])?r[g]:o[g])}),e.pips=r.pips;var u=document.createElement("div"),m=u.style.msTransform!==void 0,h=u.style.transform!==void 0;e.transformRule=h?"transform":m?"msTransform":"webkitTransform";var d=[["left","top"],["right","bottom"]];return e.style=d[e.dir][e.ort],e}function fr(r,e,i){var o=Ut(),u=jt(),m=u&&$t(),h=r,d,g,v,w,P,U,S=e.spectrum,j=[],C=[],H=[],ie=0,F={},W=!1,I=r.ownerDocument,J=e.documentElement||I.documentElement,Z=I.body,Qe=I.dir==="rtl"||e.ort===1?0:100;function T(t,s){var a=I.createElement("div");return s&&M(a,s),t.appendChild(a),a}function et(t,s){var a=T(t,e.cssClasses.origin),n=T(a,e.cssClasses.handle);if(T(n,e.cssClasses.touchArea),n.setAttribute("data-handle",String(s)),e.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(c){return vt(c,s)})),e.handleAttributes!==void 0){var l=e.handleAttributes[s];Object.keys(l).forEach(function(c){n.setAttribute(c,l[c])})}return n.setAttribute("role","slider"),n.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),s===0?M(n,e.cssClasses.handleLower):s===e.handles-1&&M(n,e.cssClasses.handleUpper),a.handle=n,a}function ne(t,s){return s?T(t,e.cssClasses.connect):!1}function tt(t,s){g=T(s,e.cssClasses.connects),v=[],w=[],w.push(ne(g,t[0]));for(var a=0;a<e.handles;a++)v.push(et(s,a)),H[a]=a,w.push(ne(g,t[a+1]))}function rt(t){M(t,e.cssClasses.target),e.dir===0?M(t,e.cssClasses.ltr):M(t,e.cssClasses.rtl),e.ort===0?M(t,e.cssClasses.horizontal):M(t,e.cssClasses.vertical);var s=getComputedStyle(t).direction;return s==="rtl"?M(t,e.cssClasses.textDirectionRtl):M(t,e.cssClasses.textDirectionLtr),T(t,e.cssClasses.base)}function st(t,s){return!e.tooltips||!e.tooltips[s]?!1:T(t.firstChild,e.cssClasses.tooltip)}function Ee(){return h.hasAttribute("disabled")}function oe(t){var s=v[t];return s.hasAttribute("disabled")}function at(t){t!=null?(v[t].setAttribute("disabled",""),v[t].handle.removeAttribute("tabindex")):(h.setAttribute("disabled",""),v.forEach(function(s){s.handle.removeAttribute("tabindex")}))}function it(t){t!=null?(v[t].removeAttribute("disabled"),v[t].handle.setAttribute("tabindex","0")):(h.removeAttribute("disabled"),v.forEach(function(s){s.removeAttribute("disabled"),s.handle.setAttribute("tabindex","0")}))}function le(){U&&(K("update"+z.tooltips),U.forEach(function(t){t&&Te(t)}),U=null)}function Ve(){le(),U=v.map(st),he("update"+z.tooltips,function(t,s,a){if(!(!U||!e.tooltips)&&U[s]!==!1){var n=t[s];e.tooltips[s]!==!0&&(n=e.tooltips[s].to(a[s])),U[s].innerHTML=n}})}function nt(){K("update"+z.aria),he("update"+z.aria,function(t,s,a,n,l){H.forEach(function(c){var p=v[c],f=Q(C,c,0,!0,!0,!0),_=Q(C,c,100,!0,!0,!0),x=l[c],E=String(e.ariaFormat.to(a[c]));f=S.fromStepping(f).toFixed(1),_=S.fromStepping(_).toFixed(1),x=S.fromStepping(x).toFixed(1),p.children[0].setAttribute("aria-valuemin",f),p.children[0].setAttribute("aria-valuemax",_),p.children[0].setAttribute("aria-valuenow",x),p.children[0].setAttribute("aria-valuetext",E)})})}function ot(t){if(t.mode===R.Range||t.mode===R.Steps)return S.xVal;if(t.mode===R.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var s=t.values-1,a=100/s,n=[];s--;)n[s]=s*a;return n.push(100),ye(n,t.stepped)}return t.mode===R.Positions?ye(t.values,t.stepped):t.mode===R.Values?t.stepped?t.values.map(function(l){return S.fromStepping(S.getStep(S.toStepping(l)))}):t.values:[]}function ye(t,s){return t.map(function(a){return S.fromStepping(s?S.getStep(a):a)})}function lt(t){function s(x,E){return Number((x+E).toFixed(7))}var a=ot(t),n={},l=S.xVal[0],c=S.xVal[S.xVal.length-1],p=!1,f=!1,_=0;return a=Dt(a.slice().sort(function(x,E){return x-E})),a[0]!==l&&(a.unshift(l),p=!0),a[a.length-1]!==c&&(a.push(c),f=!0),a.forEach(function(x,E){var V,b,A,k=x,L=a[E+1],D,ve,me,Se,$e,be,je,Fe=t.mode===R.Steps;for(Fe&&(V=S.xNumSteps[E]),V||(V=L-k),L===void 0&&(L=k),V=Math.max(V,1e-7),b=k;b<=L;b=s(b,V)){for(D=S.toStepping(b),ve=D-_,$e=ve/(t.density||1),be=Math.round($e),je=ve/be,A=1;A<=be;A+=1)me=_+A*je,n[me.toFixed(5)]=[S.fromStepping(me),0];Se=a.indexOf(b)>-1?O.LargeValue:Fe?O.SmallValue:O.NoValue,!E&&p&&b!==L&&(Se=0),b===L&&f||(n[D.toFixed(5)]=[b,Se]),_=D}}),n}function ct(t,s,a){var n,l,c=I.createElement("div"),p=(n={},n[O.None]="",n[O.NoValue]=e.cssClasses.valueNormal,n[O.LargeValue]=e.cssClasses.valueLarge,n[O.SmallValue]=e.cssClasses.valueSub,n),f=(l={},l[O.None]="",l[O.NoValue]=e.cssClasses.markerNormal,l[O.LargeValue]=e.cssClasses.markerLarge,l[O.SmallValue]=e.cssClasses.markerSub,l),_=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],x=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];M(c,e.cssClasses.pips),M(c,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function E(b,A){var k=A===e.cssClasses.value,L=k?_:x,D=k?p:f;return A+" "+L[e.ort]+" "+D[b]}function V(b,A,k){if(k=s?s(A,k):k,k!==O.None){var L=T(c,!1);L.className=E(k,e.cssClasses.marker),L.style[e.style]=b+"%",k>O.NoValue&&(L=T(c,!1),L.className=E(k,e.cssClasses.value),L.setAttribute("data-value",String(A)),L.style[e.style]=b+"%",L.innerHTML=String(a.to(A)))}}return Object.keys(t).forEach(function(b){V(b,t[b][0],t[b][1])}),c}function ce(){P&&(Te(P),P=null)}function ue(t){ce();var s=lt(t),a=t.filter,n=t.format||{to:function(l){return String(Math.round(l))}};return P=h.appendChild(ct(s,a,n)),P}function Pe(){var t=d.getBoundingClientRect(),s="offset"+["Width","Height"][e.ort];return e.ort===0?t.width||d[s]:t.height||d[s]}function N(t,s,a,n){var l=function(p){var f=ut(p,n.pageOffset,n.target||s);if(!f||Ee()&&!n.doNotReject||Ht(h,e.cssClasses.tap)&&!n.doNotReject||t===o.start&&f.buttons!==void 0&&f.buttons>1||n.hover&&f.buttons)return!1;m||f.preventDefault(),f.calcPoint=f.points[e.ort],a(f,n)},c=[];return t.split(" ").forEach(function(p){s.addEventListener(p,l,m?{passive:!0}:!1),c.push([p,l])}),c}function ut(t,s,a){var n=t.type.indexOf("touch")===0,l=t.type.indexOf("mouse")===0,c=t.type.indexOf("pointer")===0,p=0,f=0;if(t.type.indexOf("MSPointer")===0&&(c=!0),t.type==="mousedown"&&!t.buttons&&!t.touches)return!1;if(n){var _=function(V){var b=V.target;return b===a||a.contains(b)||t.composed&&t.composedPath().shift()===a};if(t.type==="touchstart"){var x=Array.prototype.filter.call(t.touches,_);if(x.length>1)return!1;p=x[0].pageX,f=x[0].pageY}else{var E=Array.prototype.find.call(t.changedTouches,_);if(!E)return!1;p=E.pageX,f=E.pageY}}return s=s||Ke(I),(l||c)&&(p=t.clientX+s.x,f=t.clientY+s.y),t.pageOffset=s,t.points=[p,f],t.cursor=l||c,t}function Ae(t){var s=t-Mt(d,e.ort),a=s*100/Pe();return a=Ne(a),e.dir?100-a:a}function ft(t){var s=100,a=!1;return v.forEach(function(n,l){if(!oe(l)){var c=C[l],p=Math.abs(c-t),f=p===100&&s===100,_=p<s,x=p<=s&&t>c;(_||x||f)&&(a=l,s=p)}}),a}function dt(t,s){t.type==="mouseout"&&t.target.nodeName==="HTML"&&t.relatedTarget===null&&fe(t,s)}function ht(t,s){if(navigator.appVersion.indexOf("MSIE 9")===-1&&t.buttons===0&&s.buttonsProperty!==0)return fe(t,s);var a=(e.dir?-1:1)*(t.calcPoint-s.startCalcPoint),n=a*100/s.baseSize;De(a>0,n,s.locations,s.handleNumbers,s.connect)}function fe(t,s){s.handle&&(re(s.handle,e.cssClasses.active),ie-=1),s.listeners.forEach(function(a){J.removeEventListener(a[0],a[1])}),ie===0&&(re(h,e.cssClasses.drag),ge(),t.cursor&&(Z.style.cursor="",Z.removeEventListener("selectstart",ze))),e.events.smoothSteps&&(s.handleNumbers.forEach(function(a){B(a,C[a],!0,!0,!1,!1)}),s.handleNumbers.forEach(function(a){y("update",a)})),s.handleNumbers.forEach(function(a){y("change",a),y("set",a),y("end",a)})}function de(t,s){if(!s.handleNumbers.some(oe)){var a;if(s.handleNumbers.length===1){var n=v[s.handleNumbers[0]];a=n.children[0],ie+=1,M(a,e.cssClasses.active)}t.stopPropagation();var l=[],c=N(o.move,J,ht,{target:t.target,handle:a,connect:s.connect,listeners:l,startCalcPoint:t.calcPoint,baseSize:Pe(),pageOffset:t.pageOffset,handleNumbers:s.handleNumbers,buttonsProperty:t.buttons,locations:C.slice()}),p=N(o.end,J,fe,{target:t.target,handle:a,listeners:l,doNotReject:!0,handleNumbers:s.handleNumbers}),f=N("mouseout",J,dt,{target:t.target,handle:a,listeners:l,doNotReject:!0,handleNumbers:s.handleNumbers});l.push.apply(l,c.concat(p,f)),t.cursor&&(Z.style.cursor=getComputedStyle(t.target).cursor,v.length>1&&M(h,e.cssClasses.drag),Z.addEventListener("selectstart",ze,!1)),s.handleNumbers.forEach(function(_){y("start",_)})}}function pt(t){t.stopPropagation();var s=Ae(t.calcPoint),a=ft(s);a!==!1&&(e.events.snap||Re(h,e.cssClasses.tap,e.animationDuration),B(a,s,!0,!0),ge(),y("slide",a,!0),y("update",a,!0),e.events.snap?de(t,{handleNumbers:[a]}):(y("change",a,!0),y("set",a,!0)))}function gt(t){var s=Ae(t.calcPoint),a=S.getStep(s),n=S.fromStepping(a);Object.keys(F).forEach(function(l){l.split(".")[0]==="hover"&&F[l].forEach(function(c){c.call(te,n)})})}function vt(t,s){if(Ee()||oe(s))return!1;var a=["Left","Right"],n=["Down","Up"],l=["PageDown","PageUp"],c=["Home","End"];e.dir&&!e.ort?a.reverse():e.ort&&!e.dir&&(n.reverse(),l.reverse());var p=t.key.replace("Arrow",""),f=p===l[0],_=p===l[1],x=p===n[0]||p===a[0]||f,E=p===n[1]||p===a[1]||_,V=p===c[0],b=p===c[1];if(!x&&!E&&!V&&!b)return!0;t.preventDefault();var A;if(E||x){var k=x?0:1,L=He(s),D=L[k];if(D===null)return!1;D===!1&&(D=S.getDefaultStep(C[s],x,e.keyboardDefaultStep)),_||f?D*=e.keyboardPageMultiplier:D*=e.keyboardMultiplier,D=Math.max(D,1e-7),D=(x?-1:1)*D,A=j[s]+D}else b?A=e.spectrum.xVal[e.spectrum.xVal.length-1]:A=e.spectrum.xVal[0];return B(s,S.toStepping(A),!0,!0),y("slide",s),y("update",s),y("change",s),y("set",s),!1}function Le(t){t.fixed||v.forEach(function(s,a){N(o.start,s.children[0],de,{handleNumbers:[a]})}),t.tap&&N(o.start,d,pt,{}),t.hover&&N(o.move,d,gt,{hover:!0}),t.drag&&w.forEach(function(s,a){if(!(s===!1||a===0||a===w.length-1)){var n=v[a-1],l=v[a],c=[s],p=[n,l],f=[a-1,a];M(s,e.cssClasses.draggable),t.fixed&&(c.push(n.children[0]),c.push(l.children[0])),t.dragAll&&(p=v,f=H),c.forEach(function(_){N(o.start,_,de,{handles:p,handleNumbers:f,connect:s})})}})}function he(t,s){F[t]=F[t]||[],F[t].push(s),t.split(".")[0]==="update"&&v.forEach(function(a,n){y("update",n)})}function mt(t){return t===z.aria||t===z.tooltips}function K(t){var s=t&&t.split(".")[0],a=s?t.substring(s.length):t;Object.keys(F).forEach(function(n){var l=n.split(".")[0],c=n.substring(l.length);(!s||s===l)&&(!a||a===c)&&(!mt(c)||a===c)&&delete F[n]})}function y(t,s,a){Object.keys(F).forEach(function(n){var l=n.split(".")[0];t===l&&F[n].forEach(function(c){c.call(te,j.map(e.format.to),s,j.slice(),a||!1,C.slice(),te)})})}function Q(t,s,a,n,l,c,p){var f;return v.length>1&&!e.events.unconstrained&&(n&&s>0&&(f=S.getAbsoluteDistance(t[s-1],e.margin,!1),a=Math.max(a,f)),l&&s<v.length-1&&(f=S.getAbsoluteDistance(t[s+1],e.margin,!0),a=Math.min(a,f))),v.length>1&&e.limit&&(n&&s>0&&(f=S.getAbsoluteDistance(t[s-1],e.limit,!1),a=Math.min(a,f)),l&&s<v.length-1&&(f=S.getAbsoluteDistance(t[s+1],e.limit,!0),a=Math.max(a,f))),e.padding&&(s===0&&(f=S.getAbsoluteDistance(0,e.padding[0],!1),a=Math.max(a,f)),s===v.length-1&&(f=S.getAbsoluteDistance(100,e.padding[1],!0),a=Math.min(a,f))),p||(a=S.getStep(a)),a=Ne(a),a===t[s]&&!c?!1:a}function pe(t,s){var a=e.ort;return(a?s:t)+", "+(a?t:s)}function De(t,s,a,n,l){var c=a.slice(),p=n[0],f=e.events.smoothSteps,_=[!t,t],x=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach(function(V,b){var A=Q(c,V,c[V]+s,_[b],x[b],!1,f);A===!1?s=0:(s=A-c[V],c[V]=A)}):_=x=[!0];var E=!1;n.forEach(function(V,b){E=B(V,a[V]+s,_[b],x[b],!1,f)||E}),E&&(n.forEach(function(V){y("update",V),y("slide",V)}),l!=null&&y("drag",p))}function ke(t,s){return e.dir?100-t-s:t}function St(t,s){C[t]=s,j[t]=S.fromStepping(s);var a=ke(s,0)-Qe,n="translate("+pe(a+"%","0")+")";if(v[t].style[e.transformRule]=n,e.events.invertConnects&&C.length>1){var l=C.every(function(c,p,f){return p===0||c>=f[p-1]});if(W!==!l){Et();return}}X(t),X(t+1),W&&(X(t-1),X(t+2))}function ge(){H.forEach(function(t){var s=C[t]>50?-1:1,a=3+(v.length+s*t);v[t].style.zIndex=String(a)})}function B(t,s,a,n,l,c){return l||(s=Q(C,t,s,a,n,!1,c)),s===!1?!1:(St(t,s),!0)}function X(t){if(w[t]){var s=C.slice();W&&s.sort(function(f,_){return f-_});var a=0,n=100;t!==0&&(a=s[t-1]),t!==w.length-1&&(n=s[t]);var l=n-a,c="translate("+pe(ke(a,l)+"%","0")+")",p="scale("+pe(l/100,"1")+")";w[t].style[e.transformRule]=c+" "+p}}function Me(t,s){return t===null||t===!1||t===void 0||(typeof t=="number"&&(t=String(t)),t=e.format.from(t),t!==!1&&(t=S.toStepping(t)),t===!1||isNaN(t))?C[s]:t}function ee(t,s,a){var n=ae(t),l=C[0]===void 0;s=s===void 0?!0:s,e.animate&&!l&&Re(h,e.cssClasses.tap,e.animationDuration),H.forEach(function(f){B(f,Me(n[f],f),!0,!1,a)});var c=H.length===1?0:1;if(l&&S.hasNoSize()&&(a=!0,C[0]=0,H.length>1)){var p=100/(H.length-1);H.forEach(function(f){C[f]=f*p})}for(;c<H.length;++c)H.forEach(function(f){B(f,C[f],!0,!0,a)});ge(),H.forEach(function(f){y("update",f),n[f]!==null&&s&&y("set",f)})}function bt(t){ee(e.start,t)}function _t(t,s,a,n){if(t=Number(t),!(t>=0&&t<H.length))throw new Error("noUiSlider: invalid handle number, got: "+t);B(t,Me(s,t),!0,!0,n),y("update",t),a&&y("set",t)}function Oe(t){if(t===void 0&&(t=!1),t)return j.length===1?j[0]:j.slice(0);var s=j.map(e.format.to);return s.length===1?s[0]:s}function xt(){for(K(z.aria),K(z.tooltips),Object.keys(e.cssClasses).forEach(function(t){re(h,e.cssClasses[t])});h.firstChild;)h.removeChild(h.firstChild);delete h.noUiSlider}function He(t){var s=C[t],a=S.getNearbySteps(s),n=j[t],l=a.thisStep.step,c=null;if(e.snap)return[n-a.stepBefore.startValue||null,a.stepAfter.startValue-n||null];l!==!1&&n+l>a.stepAfter.startValue&&(l=a.stepAfter.startValue-n),n>a.thisStep.startValue?c=a.thisStep.step:a.stepBefore.step===!1?c=!1:c=n-a.stepBefore.highestStep,s===100?l=null:s===0&&(c=null);var p=S.countStepDecimals();return l!==null&&l!==!1&&(l=Number(l.toFixed(p))),c!==null&&c!==!1&&(c=Number(c.toFixed(p))),[c,l]}function wt(){return H.map(He)}function Ct(t,s){var a=Oe(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];n.forEach(function(c){t[c]!==void 0&&(i[c]=t[c])});var l=Ze(i);n.forEach(function(c){t[c]!==void 0&&(e[c]=l[c])}),S=l.spectrum,e.margin=l.margin,e.limit=l.limit,e.padding=l.padding,e.pips?ue(e.pips):ce(),e.tooltips?Ve():le(),C=[],ee(xe(t.start)?t.start:a,s),t.connect&&Ue()}function Ue(){for(;g.firstChild;)g.removeChild(g.firstChild);for(var t=0;t<=e.handles;t++)w[t]=ne(g,e.connect[t]),X(t);Le({drag:e.events.drag,fixed:!0})}function Et(){W=!W,Ye(e,e.connect.map(function(t){return!t})),Ue()}function Vt(){d=rt(h),tt(e.connect,d),Le(e.events),ee(e.start),e.pips&&ue(e.pips),e.tooltips&&Ve(),nt()}Vt();var te={destroy:xt,steps:wt,on:he,off:K,get:Oe,set:ee,setHandle:_t,reset:bt,disable:at,enable:it,__moveHandles:function(t,s,a){De(t,s,C,a)},options:i,updateOptions:Ct,target:h,removePips:ce,removeTooltips:le,getPositions:function(){return C.slice()},getTooltips:function(){return U},getOrigins:function(){return v},pips:ue};return te}function dr(r,e){if(!r||!r.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+r);if(r.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var i=Ze(e),o=fr(r,i,e);return r.noUiSlider=o,o}const hr={__spectrum:Xe,cssClasses:Ge,create:dr},G=q(".shop-some__items"),Ie=q(".catalog__shop"),qe=q(".nothing");class pr extends We{accordeonButtons;lengthLabels;labels;brand;length;minPrice;maxPrice;rangeSlider;inputs;inputFirst;inputSecond;filteredCards;constructor(){super(),this.accordeonButtons=_e(".accordeon__button"),this.labels=_e(".brand-item"),this.lengthLabels=_e(".length-item"),this.minPrice=null,this.maxPrice=null,this.brand=null,this.length=null,this.rangeSlider=document.getElementById("range-slider"),this.inputFirst=q(".range__input_first"),this.inputSecond=q(".range__input_second"),this.inputs=[this.inputFirst,this.inputSecond],this.filteredCards=[...this.shopDb],this.labels.forEach(e=>{e.addEventListener("click",()=>{this.brand=e.textContent,this.applyFilters()})}),this.accordeonButtons.forEach(e=>{e.addEventListener("click",()=>{const i=e,o=i.nextElementSibling,u=i.children[1].children[1];this.toggleFunc(o,u)})}),this.lengthLabels.forEach(e=>{e.addEventListener("click",()=>{this.length=e.textContent,this.applyFilters()})}),this.rangeSlider&&(this.initializeSlider(),this.changeInputs())}toggleFunc(e,i){e.classList.contains("accordeon__list_active")?(e.classList.remove("accordeon__list_active"),e.style.maxHeight="0",i.style.opacity="1"):(e.classList.add("accordeon__list_active"),e.style.maxHeight=e.scrollHeight+"px",i.style.opacity="0")}applyFilters(){this.filteredCards=[...this.shopDb],this.brand&&(this.filteredCards=this.filteredCards.filter(e=>e.data.brand.stringValue.toLocaleLowerCase()===this.brand.trim())),this.length&&(this.filteredCards=this.filteredCards.filter(e=>e.data.length.stringValue===this.length.trim())),this.minPrice!==null&&this.maxPrice!==null&&(this.filteredCards=this.filteredCards.filter(e=>{const i=parseFloat(e.data.cost.stringValue);return i>=this.minPrice&&i<=this.maxPrice})),this.filteredCards.length===0?(Ie?.classList.add("catalog__shop_no-cards"),qe?.classList.add("nothing_active")):(Ie?.classList.remove("catalog__shop_no-cards"),qe?.classList.remove("nothing_active")),this.renderCards()}renderCards(){G&&(G.innerHTML="",this.filteredCards.forEach(e=>{G&&(e.data.sale.booleanValue===!1?G.insertAdjacentHTML("afterbegin",`
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
              `):G.insertAdjacentHTML("afterbegin",`
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
              `))}))}initializeSlider(){hr.create(this.rangeSlider,{start:[50,1e3],step:1,connect:!0,range:{min:50,max:1e3}}),this.rangeSlider.noUiSlider.on("update",(e,i)=>{const o=this.inputs[i];o&&(o.value=String(Math.round(e[i])),i===0?this.minPrice=Math.round(e[i]):this.maxPrice=Math.round(e[i]),this.applyFilters())})}setRangeSlider(e,i){const o=[null,null];o[e]=i,this.rangeSlider.noUiSlider.set(o)}changeInputs(){this.inputs.forEach((e,i)=>{e?.addEventListener("change",o=>{const u=o.currentTarget;u&&(this.setRangeSlider(i,parseFloat(u.value)),this.applyFilters())})})}}document.addEventListener("DOMContentLoaded",async()=>{new yt,new Pt,new pr,At()});