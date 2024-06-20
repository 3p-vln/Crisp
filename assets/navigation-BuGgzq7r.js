import{m as l,c as k}from"./skeleton-Dh5pJeyX.js";function L(b){let{swiper:a,extendParams:x,on:r,emit:p}=b;x({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};function m(n){let i;return n&&typeof n=="string"&&a.isElement&&(i=a.el.querySelector(n),i)?i:(n&&(typeof n=="string"&&(i=[...document.querySelectorAll(n)]),a.params.uniqueNavElements&&typeof n=="string"&&i&&i.length>1&&a.el.querySelectorAll(n).length===1?i=a.el.querySelector(n):i&&i.length===1&&(i=i[0])),n&&!i?n:i)}function d(n,i){const t=a.params.navigation;n=l(n),n.forEach(e=>{e&&(e.classList[i?"add":"remove"](...t.disabledClass.split(" ")),e.tagName==="BUTTON"&&(e.disabled=i),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](t.lockClass))})}function o(){const{nextEl:n,prevEl:i}=a.navigation;if(a.params.loop){d(i,!1),d(n,!1);return}d(i,a.isBeginning&&!a.params.rewind),d(n,a.isEnd&&!a.params.rewind)}function u(n){n.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),p("navigationPrev"))}function E(n){n.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),p("navigationNext"))}function g(){const n=a.params.navigation;if(a.params.navigation=k(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let i=m(n.nextEl),t=m(n.prevEl);Object.assign(a.navigation,{nextEl:i,prevEl:t}),i=l(i),t=l(t);const e=(s,c)=>{s&&s.addEventListener("click",c==="next"?E:u),!a.enabled&&s&&s.classList.add(...n.lockClass.split(" "))};i.forEach(s=>e(s,"next")),t.forEach(s=>e(s,"prev"))}function v(){let{nextEl:n,prevEl:i}=a.navigation;n=l(n),i=l(i);const t=(e,s)=>{e.removeEventListener("click",s==="next"?E:u),e.classList.remove(...a.params.navigation.disabledClass.split(" "))};n.forEach(e=>t(e,"next")),i.forEach(e=>t(e,"prev"))}r("init",()=>{a.params.navigation.enabled===!1?h():(g(),o())}),r("toEdge fromEdge lock unlock",()=>{o()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{nextEl:n,prevEl:i}=a.navigation;if(n=l(n),i=l(i),a.enabled){o();return}[...n,...i].filter(t=>!!t).forEach(t=>t.classList.add(a.params.navigation.lockClass))}),r("click",(n,i)=>{let{nextEl:t,prevEl:e}=a.navigation;t=l(t),e=l(e);const s=i.target;if(a.params.navigation.hideOnClick&&!e.includes(s)&&!t.includes(s)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===s||a.pagination.el.contains(s)))return;let c;t.length?c=t[0].classList.contains(a.params.navigation.hiddenClass):e.length&&(c=e[0].classList.contains(a.params.navigation.hiddenClass)),p(c===!0?"navigationShow":"navigationHide"),[...t,...e].filter(f=>!!f).forEach(f=>f.classList.toggle(a.params.navigation.hiddenClass))}});const C=()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),g(),o()},h=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),v()};Object.assign(a.navigation,{enable:C,disable:h,update:o,init:g,destroy:v})}export{L as N};
