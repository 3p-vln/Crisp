(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ts(n,e=document){return e.querySelectorAll(n)}function Lt(n,e=document){return e.querySelector(n)}class Th{burgerBtn;menuAdapt;search;searchBtn;constructor(){this.burgerBtn=Lt(".burger-btn"),this.menuAdapt=Lt(".header__menu_adapt"),this.search=Lt(".header__search-and-bag .search"),this.searchBtn=Lt(".header__search-and-bag .search svg"),this.burger(),this.searchFunc()}burger(){const e=this;this.burgerBtn.addEventListener("click",function(){e.burgerBtn.classList.toggle("active"),e.menuAdapt.classList.toggle("active")})}searchFunc(){const e=this;this.searchBtn.addEventListener("click",function(){e.search.classList.toggle("active")})}}class Eh{accordionTitle;accordionContent;constructor(){this.accordionTitle=ts(".accordion__item"),this.accordionContent=ts(".accordion__info"),this.initAccordion()}initAccordion(){this.accordionTitle.forEach((e,t)=>{e.addEventListener("click",()=>{this.toggleAccordion(t)})})}toggleAccordion(e){const t=this.accordionContent[e].classList.toggle("active");this.accordionTitle[e].classList.toggle("active"),t&&this.closeOtherAccordions(e),this.accordionContent.forEach((i,r)=>{r!==e&&(i.style.maxHeight="0",i.classList.remove("active"))}),t?this.accordionContent[e].style.maxHeight=`${this.accordionContent[e].scrollHeight}px`:this.accordionContent[e].style.maxHeight="0"}closeOtherAccordions(e){this.accordionContent.forEach((t,i)=>{i!==e&&t.classList.contains("active")&&t.classList.remove("active")}),this.accordionTitle.forEach((t,i)=>{i!==e&&t.classList.contains("active")&&t.classList.remove("active")})}}function qo(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Fs(n,e){n===void 0&&(n={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof n[t]>"u"?n[t]=e[t]:qo(e[t])&&qo(n[t])&&Object.keys(e[t]).length>0&&Fs(n[t],e[t])})}const El={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function We(){const n=typeof document<"u"?document:{};return Fs(n,El),n}const wh={document:El,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function Se(){const n=typeof window<"u"?window:{};return Fs(n,wh),n}function Ih(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function Ah(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function ns(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function Si(){return Date.now()}function Sh(n){const e=Se();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function Ch(n,e){e===void 0&&(e="x");const t=Se();let i,r,s;const o=Sh(n);return t.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function ni(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function Rh(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Ie(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!Rh(i)){const r=Object.keys(Object(i)).filter(s=>e.indexOf(s)<0);for(let s=0,o=r.length;s<o;s+=1){const a=r[s],l=Object.getOwnPropertyDescriptor(i,a);l!==void 0&&l.enumerable&&(ni(n[a])&&ni(i[a])?i[a].__swiper__?n[a]=i[a]:Ie(n[a],i[a]):!ni(n[a])&&ni(i[a])?(n[a]={},i[a].__swiper__?n[a]=i[a]:Ie(n[a],i[a])):n[a]=i[a])}}}return n}function ii(n,e,t){n.style.setProperty(e,t)}function wl(n){let{swiper:e,targetPosition:t,side:i}=n;const r=Se(),s=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(f,p)=>c==="next"&&f>=p||c==="prev"&&f<=p,h=()=>{a=new Date().getTime(),o===null&&(o=a);const f=Math.max(Math.min((a-o)/l,1),0),p=.5-Math.cos(f*Math.PI)/2;let m=s+p*(t-s);if(u(m,t)&&(m=t),e.wrapperEl.scrollTo({[i]:m}),u(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(h)};h()}function Oe(n,e){return e===void 0&&(e=""),[...n.children].filter(t=>t.matches(e))}function Ci(n){try{console.warn(n);return}catch{}}function Ri(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:Ih(e)),t}function bh(n,e){const t=[];for(;n.previousElementSibling;){const i=n.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function Ph(n,e){const t=[];for(;n.nextElementSibling;){const i=n.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function rt(n,e){return Se().getComputedStyle(n,null).getPropertyValue(e)}function bi(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Il(n,e){const t=[];let i=n.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function is(n,e,t){const i=Se();return t?n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):n.offsetWidth}function ie(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}let Rr;function kh(){const n=Se(),e=We();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function Al(){return Rr||(Rr=kh()),Rr}let br;function Dh(n){let{userAgent:e}=n===void 0?{}:n;const t=Al(),i=Se(),r=i.navigator.platform,s=e||i.navigator.userAgent,o={ios:!1,android:!1},a=i.screen.width,l=i.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let u=s.match(/(iPad).*OS\s([\d_]+)/);const h=s.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=r==="Win32";let m=r==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&m&&t.touch&&y.indexOf(`${a}x${l}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),m=!1),c&&!p&&(o.os="android",o.android=!0),(u||f||h)&&(o.os="ios",o.ios=!0),o}function Sl(n){return n===void 0&&(n={}),br||(br=Dh(n)),br}let Pr;function xh(){const n=Se(),e=Sl();let t=!1;function i(){const a=n.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(i()){const a=String(n.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=i(),o=s||r&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:o,isWebView:r}}function Oh(){return Pr||(Pr=xh()),Pr}function Mh(n){let{swiper:e,on:t,emit:i}=n;const r=Se();let s=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(h=>{o=r.requestAnimationFrame(()=>{const{width:f,height:p}=e;let m=f,y=p;h.forEach(v=>{let{contentBoxSize:d,contentRect:g,target:_}=v;_&&_!==e.el||(m=g?g.width:(d[0]||d).inlineSize,y=g?g.height:(d[0]||d).blockSize)}),(m!==f||y!==p)&&a()})}),s.observe(e.el))},c=()=>{o&&r.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},u=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function Nh(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;const s=[],o=Se(),a=function(u,h){h===void 0&&(h={});const f=o.MutationObserver||o.WebkitMutationObserver,p=new f(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const y=function(){r("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});p.observe(u,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:typeof h.childList>"u"?!0:h.childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),s.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=Il(e.hostEl);for(let h=0;h<u.length;h+=1)a(u[h])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(u=>{u.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",c)}var Lh={on(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=t?"unshift":"push";return n.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][r](e)}),i},once(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(n,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(i,o)}return r.__emitterProxy=e,i.on(n,r,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[i](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[i].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,i;for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),i=n):(e=s[0].events,t=s[0].data,i=s[0].context||n),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(c=>{c.apply(i,[l,...t])}),n.eventsListeners&&n.eventsListeners[l]&&n.eventsListeners[l].forEach(c=>{c.apply(i,t)})}),n}};function Vh(){const n=this;let e,t;const i=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=i.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=i.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(rt(i,"padding-left")||0,10)-parseInt(rt(i,"padding-right")||0,10),t=t-parseInt(rt(i,"padding-top")||0,10)-parseInt(rt(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function Fh(){const n=this;function e(w,D){return parseFloat(w.getPropertyValue(n.getDirectionLabel(D))||0)}const t=n.params,{wrapperEl:i,slidesEl:r,size:s,rtlTranslate:o,wrongRTL:a}=n,l=n.virtual&&t.virtual.enabled,c=l?n.virtual.slides.length:n.slides.length,u=Oe(r,`.${n.params.slideClass}, swiper-slide`),h=l?n.virtual.slides.length:u.length;let f=[];const p=[],m=[];let y=t.slidesOffsetBefore;typeof y=="function"&&(y=t.slidesOffsetBefore.call(n));let v=t.slidesOffsetAfter;typeof v=="function"&&(v=t.slidesOffsetAfter.call(n));const d=n.snapGrid.length,g=n.slidesGrid.length;let _=t.spaceBetween,T=-y,I=0,R=0;if(typeof s>"u")return;typeof _=="string"&&_.indexOf("%")>=0?_=parseFloat(_.replace("%",""))/100*s:typeof _=="string"&&(_=parseFloat(_)),n.virtualSize=-_,u.forEach(w=>{o?w.style.marginLeft="":w.style.marginRight="",w.style.marginBottom="",w.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(ii(i,"--swiper-centered-offset-before",""),ii(i,"--swiper-centered-offset-after",""));const Q=t.grid&&t.grid.rows>1&&n.grid;Q?n.grid.initSlides(u):n.grid&&n.grid.unsetSlides();let P;const q=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(w=>typeof t.breakpoints[w].slidesPerView<"u").length>0;for(let w=0;w<h;w+=1){P=0;let D;if(u[w]&&(D=u[w]),Q&&n.grid.updateSlide(w,D,u),!(u[w]&&rt(D,"display")==="none")){if(t.slidesPerView==="auto"){q&&(u[w].style[n.getDirectionLabel("width")]="");const k=getComputedStyle(D),C=D.style.transform,F=D.style.webkitTransform;if(C&&(D.style.transform="none"),F&&(D.style.webkitTransform="none"),t.roundLengths)P=n.isHorizontal()?is(D,"width",!0):is(D,"height",!0);else{const K=e(k,"width"),ke=e(k,"padding-left"),Cr=e(k,"padding-right"),H=e(k,"margin-left"),Ce=e(k,"margin-right"),ye=k.getPropertyValue("box-sizing");if(ye&&ye==="border-box")P=K+H+Ce;else{const{clientWidth:gt,offsetWidth:ti}=D;P=K+ke+Cr+H+Ce+(ti-gt)}}C&&(D.style.transform=C),F&&(D.style.webkitTransform=F),t.roundLengths&&(P=Math.floor(P))}else P=(s-(t.slidesPerView-1)*_)/t.slidesPerView,t.roundLengths&&(P=Math.floor(P)),u[w]&&(u[w].style[n.getDirectionLabel("width")]=`${P}px`);u[w]&&(u[w].swiperSlideSize=P),m.push(P),t.centeredSlides?(T=T+P/2+I/2+_,I===0&&w!==0&&(T=T-s/2-_),w===0&&(T=T-s/2-_),Math.abs(T)<1/1e3&&(T=0),t.roundLengths&&(T=Math.floor(T)),R%t.slidesPerGroup===0&&f.push(T),p.push(T)):(t.roundLengths&&(T=Math.floor(T)),(R-Math.min(n.params.slidesPerGroupSkip,R))%n.params.slidesPerGroup===0&&f.push(T),p.push(T),T=T+P+_),n.virtualSize+=P+_,I=P,R+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+v,o&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${n.virtualSize+_}px`),t.setWrapperSize&&(i.style[n.getDirectionLabel("width")]=`${n.virtualSize+_}px`),Q&&n.grid.updateWrapperSize(P,f),!t.centeredSlides){const w=[];for(let D=0;D<f.length;D+=1){let k=f[D];t.roundLengths&&(k=Math.floor(k)),f[D]<=n.virtualSize-s&&w.push(k)}f=w,Math.floor(n.virtualSize-s)-Math.floor(f[f.length-1])>1&&f.push(n.virtualSize-s)}if(l&&t.loop){const w=m[0]+_;if(t.slidesPerGroup>1){const D=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),k=w*t.slidesPerGroup;for(let C=0;C<D;C+=1)f.push(f[f.length-1]+k)}for(let D=0;D<n.virtual.slidesBefore+n.virtual.slidesAfter;D+=1)t.slidesPerGroup===1&&f.push(f[f.length-1]+w),p.push(p[p.length-1]+w),n.virtualSize+=w}if(f.length===0&&(f=[0]),_!==0){const w=n.isHorizontal()&&o?"marginLeft":n.getDirectionLabel("marginRight");u.filter((D,k)=>!t.cssMode||t.loop?!0:k!==u.length-1).forEach(D=>{D.style[w]=`${_}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let w=0;m.forEach(k=>{w+=k+(_||0)}),w-=_;const D=w-s;f=f.map(k=>k<=0?-y:k>D?D+v:k)}if(t.centerInsufficientSlides){let w=0;if(m.forEach(D=>{w+=D+(_||0)}),w-=_,w<s){const D=(s-w)/2;f.forEach((k,C)=>{f[C]=k-D}),p.forEach((k,C)=>{p[C]=k+D})}}if(Object.assign(n,{slides:u,snapGrid:f,slidesGrid:p,slidesSizesGrid:m}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){ii(i,"--swiper-centered-offset-before",`${-f[0]}px`),ii(i,"--swiper-centered-offset-after",`${n.size/2-m[m.length-1]/2}px`);const w=-n.snapGrid[0],D=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(k=>k+w),n.slidesGrid=n.slidesGrid.map(k=>k+D)}if(h!==c&&n.emit("slidesLengthChange"),f.length!==d&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),p.length!==g&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const w=`${t.containerModifierClass}backface-hidden`,D=n.el.classList.contains(w);h<=t.maxBackfaceHiddenSlides?D||n.el.classList.add(w):D&&n.el.classList.remove(w)}}function Uh(n){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const o=a=>i?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!i)break;t.push(o(a))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const a=t[s].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function Bh(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(n.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-n.cssOverflowAdjustment()}function $h(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:r,snapGrid:s}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-n;r&&(o=n),i.forEach(l=>{l.classList.remove(t.slideVisibleClass,t.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<i.length;l+=1){const c=i[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);const h=(o+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),f=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),p=-(o-u),m=p+e.slidesSizesGrid[l],y=p>=0&&p<=e.size-e.slidesSizesGrid[l];(p>=0&&p<e.size-1||m>1&&m<=e.size||p<=0&&m>=e.size)&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l),i[l].classList.add(t.slideVisibleClass)),y&&i[l].classList.add(t.slideFullyVisibleClass),c.progress=r?-h:h,c.originalProgress=r?-f:f}}function zh(n){const e=this;if(typeof n>"u"){const u=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*u||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,c=o;if(i===0)r=0,s=!0,o=!0;else{r=(n-e.minTranslate())/i;const u=Math.abs(n-e.minTranslate())<1,h=Math.abs(n-e.maxTranslate())<1;s=u||r<=0,o=h||r>=1,u&&(r=0),h&&(r=1)}if(t.loop){const u=e.getSlideIndexByData(0),h=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[u],p=e.slidesGrid[h],m=e.slidesGrid[e.slidesGrid.length-1],y=Math.abs(n);y>=f?a=(y-f)/m:a=(y+m-p)/m,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}const kr=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function qh(){const n=this,{slides:e,params:t,slidesEl:i,activeIndex:r}=n,s=n.virtual&&t.virtual.enabled,o=n.grid&&t.grid&&t.grid.rows>1,a=h=>Oe(i,`.${t.slideClass}${h}, swiper-slide${h}`)[0];let l,c,u;if(s)if(t.loop){let h=r-n.virtual.slidesBefore;h<0&&(h=n.virtual.slides.length+h),h>=n.virtual.slides.length&&(h-=n.virtual.slides.length),l=a(`[data-swiper-slide-index="${h}"]`)}else l=a(`[data-swiper-slide-index="${r}"]`);else o?(l=e.filter(h=>h.column===r)[0],u=e.filter(h=>h.column===r+1)[0],c=e.filter(h=>h.column===r-1)[0]):l=e[r];l&&(o||(u=Ph(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=bh(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(h=>{kr(h,h===l,t.slideActiveClass),kr(h,h===u,t.slideNextClass),kr(h,h===c,t.slidePrevClass)}),n.emitSlidesClasses()}const _i=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,i=e.closest(t());if(i){let r=i.querySelector(`.${n.params.lazyPreloaderClass}`);!r&&n.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},Dr=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},rs=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),r=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const o=r,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+i+c)),n.slides.forEach((l,c)=>{a.includes(l.column)&&Dr(n,c)});return}const s=r+i-1;if(n.params.rewind||n.params.loop)for(let o=r-e;o<=s+e;o+=1){const a=(o%t+t)%t;(a<r||a>s)&&Dr(n,a)}else for(let o=Math.max(r-e,0);o<=Math.min(s+e,t-1);o+=1)o!==r&&(o>s||o<r)&&Dr(n,o)};function jh(n){const{slidesGrid:e,params:t}=n,i=n.rtlTranslate?n.translate:-n.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?i>=e[s]&&i<e[s+1]-(e[s+1]-e[s])/2?r=s:i>=e[s]&&i<e[s+1]&&(r=s+1):i>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Hh(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=n,c;const u=p=>{let m=p-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=jh(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const p=Math.min(r.slidesPerGroupSkip,l);c=p+Math.floor((l-p)/r.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===s&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const h=e.grid&&r.grid&&r.grid.rows>1;let f;if(e.virtual&&r.virtual.enabled&&r.loop)f=u(l);else if(h){const p=e.slides.filter(y=>y.column===l)[0];let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(p),0)),f=Math.floor(m/r.grid.rows)}else if(e.slides[l]){const p=e.slides[l].getAttribute("data-swiper-slide-index");p?f=parseInt(p,10):f=l}else f=l;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:f,previousIndex:s,activeIndex:l}),e.initialized&&rs(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==f&&e.emit("realIndexChange"),e.emit("slideChange"))}function Gh(n,e){const t=this,i=t.params;let r=n.closest(`.${i.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(a=>{!r&&a.matches&&a.matches(`.${i.slideClass}, swiper-slide`)&&(r=a)});let s=!1,o;if(r){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===r){s=!0,o=a;break}}if(r&&s)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Wh={updateSize:Vh,updateSlides:Fh,updateAutoHeight:Uh,updateSlidesOffset:Bh,updateSlidesProgress:$h,updateProgress:zh,updateSlidesClasses:qh,updateActiveIndex:Hh,updateClickedSlide:Gh};function Kh(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return i?-r:r;if(t.cssMode)return r;let o=Ch(s,n);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function Qh(n,e){const t=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:o}=t;let a=0,l=0;const c=0;t.isHorizontal()?a=i?-n:n:l=n,r.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:r.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const h=t.maxTranslate()-t.minTranslate();h===0?u=0:u=(n-t.minTranslate())/h,u!==o&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function Xh(){return-this.snapGrid[0]}function Yh(){return-this.snapGrid[this.snapGrid.length-1]}function Jh(n,e,t,i,r){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(i&&n>l?u=l:i&&n<c?u=c:u=n,s.updateProgress(u),o.cssMode){const h=s.isHorizontal();if(e===0)a[h?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return wl({swiper:s,targetPosition:-u,side:h?"left":"top"}),!0;a.scrollTo({[h?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(f){!s||s.destroyed||f.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Zh={getTranslate:Kh,setTranslate:Qh,minTranslate:Xh,maxTranslate:Yh,translateTo:Jh};function ed(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function Cl(n){let{swiper:e,runCallbacks:t,direction:i,step:r}=n;const{activeIndex:s,previousIndex:o}=e;let a=i;if(a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&s!==o){if(a==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function td(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Cl({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function nd(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Cl({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var id={setTransition:ed,transitionStart:td,transitionEnd:nd};function rd(n,e,t,i,r){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let o=n;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:f,wrapperEl:p,enabled:m}=s;if(!m&&!i&&!r||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const y=Math.min(s.params.slidesPerGroupSkip,o);let v=y+Math.floor((o-y)/s.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const d=-l[v];if(a.normalizeSlideIndex)for(let _=0;_<c.length;_+=1){const T=-Math.floor(d*100),I=Math.floor(c[_]*100),R=Math.floor(c[_+1]*100);typeof c[_+1]<"u"?T>=I&&T<R-(R-I)/2?o=_:T>=I&&T<R&&(o=_+1):T>=I&&(o=_)}if(s.initialized&&o!==h&&(!s.allowSlideNext&&(f?d>s.translate&&d>s.minTranslate():d<s.translate&&d<s.minTranslate())||!s.allowSlidePrev&&d>s.translate&&d>s.maxTranslate()&&(h||0)!==o))return!1;o!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(d);let g;if(o>h?g="next":o<h?g="prev":g="reset",f&&-d===s.translate||!f&&d===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(d),g!=="reset"&&(s.transitionStart(t,g),s.transitionEnd(t,g)),!1;if(a.cssMode){const _=s.isHorizontal(),T=f?d:-d;if(e===0){const I=s.virtual&&s.params.virtual.enabled;I&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),I&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[_?"scrollLeft":"scrollTop"]=T})):p[_?"scrollLeft":"scrollTop"]=T,I&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return wl({swiper:s,targetPosition:T,side:_?"left":"top"}),!0;p.scrollTo({[_?"left":"top"]:T,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(d),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,i),s.transitionStart(t,g),e===0?s.transitionEnd(t,g):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(T){!s||s.destroyed||T.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,g))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function sd(n,e,t,i){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=n;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let a;if(s){const f=o*r.params.grid.rows;a=r.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===f)[0].column}else a=r.getSlideIndexByData(o);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c}=r.params;let u=r.params.slidesPerView;u==="auto"?u=r.slidesPerViewDynamic():(u=Math.ceil(parseFloat(r.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let h=l-a<u;if(c&&(h=h||a<Math.ceil(u/2)),i&&c&&r.params.slidesPerView!=="auto"&&!s&&(h=!1),h){const f=c?a<r.activeIndex?"prev":"next":a-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?a+1:a-l+1,slideRealIndex:f==="next"?r.realIndex:void 0})}if(s){const f=o*r.params.grid.rows;o=r.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===f)[0].column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,e,t,i)}),r}function od(n,e,t){e===void 0&&(e=!0);const i=this,{enabled:r,params:s,animating:o}=i;if(!r||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:a,c=i.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,n,e,t)}),!0}return s.rewind&&i.isEnd?i.slideTo(0,n,e,t):i.slideTo(i.activeIndex+l,n,e,t)}function ad(n,e,t){e===void 0&&(e=!0);const i=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);const u=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!u&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const h=a?i.translate:-i.translate;function f(d){return d<0?-Math.floor(Math.abs(d)):Math.floor(d)}const p=f(h),m=s.map(d=>f(d));let y=s[m.indexOf(p)-1];if(typeof y>"u"&&r.cssMode){let d;s.forEach((g,_)=>{p>=g&&(d=_)}),typeof d<"u"&&(y=s[d>0?d-1:d])}let v=0;if(typeof y<"u"&&(v=o.indexOf(y),v<0&&(v=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(v=v-i.slidesPerViewDynamic("previous",!0)+1,v=Math.max(v,0))),r.rewind&&i.isBeginning){const d=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(d,n,e,t)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(v,n,e,t)}),!0;return i.slideTo(v,n,e,t)}function ld(n,e,t){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof n>"u"&&(n=i.params.speed),i.slideTo(i.activeIndex,n,e,t)}function cd(n,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;typeof n>"u"&&(n=r.params.speed);let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const c=r.snapGrid[a],u=r.snapGrid[a+1];l-c>(u-c)*i&&(s+=r.params.slidesPerGroup)}else{const c=r.snapGrid[a-1],u=r.snapGrid[a];l-c<=(u-c)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,n,e,t)}function ud(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,i=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let r=n.clickedIndex,s;const o=n.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<n.loopedSlides-i/2||r>n.slides.length-n.loopedSlides+i/2?(n.loopFix(),r=n.getSlideIndex(Oe(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),ns(()=>{n.slideTo(r)})):n.slideTo(r):r>n.slides.length-i?(n.loopFix(),r=n.getSlideIndex(Oe(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),ns(()=>{n.slideTo(r)})):n.slideTo(r)}else n.slideTo(r)}var hd={slideTo:rd,slideToLoop:sd,slideNext:od,slidePrev:ad,slideReset:ld,slideToClosest:cd,slideToClickedSlide:ud};function dd(n){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{Oe(i,`.${t.slideClass}, swiper-slide`).forEach((h,f)=>{h.setAttribute("data-swiper-slide-index",f)})},s=e.grid&&t.grid&&t.grid.rows>1,o=t.slidesPerGroup*(s?t.grid.rows:1),a=e.slides.length%o!==0,l=s&&e.slides.length%t.grid.rows!==0,c=u=>{for(let h=0;h<u;h+=1){const f=e.isElement?Ri("swiper-slide",[t.slideBlankClass]):Ri("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(f)}};if(a){if(t.loopAddBlankSlides){const u=o-e.slides.length%o;c(u),e.recalcSlides(),e.updateSlides()}else Ci("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(t.loopAddBlankSlides){const u=t.grid.rows-e.slides.length%t.grid.rows;c(u),e.recalcSlides(),e.updateSlides()}else Ci("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:n,direction:t.centeredSlides?void 0:"next"})}function fd(n){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:r,activeSlideIndex:s,byController:o,byMousewheel:a}=n===void 0?{}:n;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:h,slidesEl:f,params:p}=l,{centeredSlides:m}=p;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled){t&&(!p.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):p.centeredSlides&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=h,l.emit("loopFix");return}let y=p.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(p.slidesPerView,10)),m&&y%2===0&&(y=y+1));const v=p.slidesPerGroupAuto?y:p.slidesPerGroup;let d=v;d%v!==0&&(d+=v-d%v),d+=p.loopAdditionalSlides,l.loopedSlides=d;const g=l.grid&&p.grid&&p.grid.rows>1;c.length<y+d?Ci("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):g&&p.grid.fill==="row"&&Ci("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],T=[];let I=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.filter(C=>C.classList.contains(p.slideActiveClass))[0]):I=s;const R=i==="next"||!i,Q=i==="prev"||!i;let P=0,q=0;const w=g?Math.ceil(c.length/p.grid.rows):c.length,k=(g?c[s].column:s)+(m&&typeof r>"u"?-y/2+.5:0);if(k<d){P=Math.max(d-k,v);for(let C=0;C<d-k;C+=1){const F=C-Math.floor(C/w)*w;if(g){const K=w-F-1;for(let ke=c.length-1;ke>=0;ke-=1)c[ke].column===K&&_.push(ke)}else _.push(w-F-1)}}else if(k+y>w-d){q=Math.max(k-(w-d*2),v);for(let C=0;C<q;C+=1){const F=C-Math.floor(C/w)*w;g?c.forEach((K,ke)=>{K.column===F&&T.push(ke)}):T.push(F)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),Q&&_.forEach(C=>{c[C].swiperLoopMoveDOM=!0,f.prepend(c[C]),c[C].swiperLoopMoveDOM=!1}),R&&T.forEach(C=>{c[C].swiperLoopMoveDOM=!0,f.append(c[C]),c[C].swiperLoopMoveDOM=!1}),l.recalcSlides(),p.slidesPerView==="auto"?l.updateSlides():g&&(_.length>0&&Q||T.length>0&&R)&&l.slides.forEach((C,F)=>{l.grid.updateSlide(F,C,l.slides)}),p.watchSlidesProgress&&l.updateSlidesOffset(),t){if(_.length>0&&Q){if(typeof e>"u"){const C=l.slidesGrid[I],K=l.slidesGrid[I+P]-C;a?l.setTranslate(l.translate-K):(l.slideTo(I+Math.ceil(P),0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-K,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-K))}else if(r){const C=g?_.length/p.grid.rows:_.length;l.slideTo(l.activeIndex+C,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(T.length>0&&R)if(typeof e>"u"){const C=l.slidesGrid[I],K=l.slidesGrid[I-q]-C;a?l.setTranslate(l.translate-K):(l.slideTo(I-q,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-K,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-K))}else{const C=g?T.length/p.grid.rows:T.length;l.slideTo(l.activeIndex-C,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=h,l.controller&&l.controller.control&&!o){const C={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(F=>{!F.destroyed&&F.params.loop&&F.loopFix({...C,slideTo:F.params.slidesPerView===p.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...C,slideTo:l.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}l.emit("loopFix")}function pd(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const i=[];n.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[s]=r}),n.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{t.append(r)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var md={loopCreate:dd,loopFix:fd,loopDestroy:pd};function gd(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function _d(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var yd={setGrabCursor:gd,unsetGrabCursor:_d};function vd(n,e){e===void 0&&(e=this);function t(i){if(!i||i===We()||i===Se())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(n);return!r&&!i.getRootNode?null:r||t(i.getRootNode().host)}return t(e)}function jo(n,e,t){const i=Se(),{params:r}=n,s=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return s&&(t<=o||t>=i.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function Td(n){const e=this,t=We();let i=n;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){jo(e,i,i.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=i.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&u&&(l=u[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,f=!!(i.target&&i.target.shadowRoot);if(s.noSwiping&&(f?vd(h,l):l.closest(h))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const p=o.currentX,m=o.currentY;if(!jo(e,i,p))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,r.touchStartTime=Si(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let y=!0;l.matches(r.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l&&t.activeElement.blur();const v=y&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||v)&&!l.isContentEditable&&i.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Ed(n){const e=We(),t=this,i=t.touchEventsData,{params:r,touches:s,rtlTranslate:o,enabled:a}=t;if(!a||!r.simulateTouch&&n.pointerType==="mouse")return;let l=n;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(R=>R.identifier===i.touchId)[0],!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,h=c.pageY;if(l.preventedByNestedSwiper){s.startX=u,s.startY=h;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:u,startY:h,currentX:u,currentY:h}),i.touchStartTime=Si());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(h<s.startY&&t.translate<=t.maxTranslate()||h>s.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(u<s.startX&&t.translate<=t.maxTranslate()||u>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=u,s.currentY=h;const f=s.currentX-s.startX,p=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(f**2+p**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let R;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:f*f+p*p>=25&&(R=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,i.isScrolling=t.isHorizontal()?R>r.touchAngle:90-R>r.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let m=t.isHorizontal()?f:p,y=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),s.diff=m,m*=r.touchRatio,o&&(m=-m,y=-y);const v=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=y>0?"prev":"next";const d=t.params.loop&&!r.cssMode,g=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(d&&g&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const R=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(R)}i.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let _;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&v!==t.touchesDirection&&d&&g&&Math.abs(m)>=1){Object.assign(s,{startX:u,startY:h,currentX:u,currentY:h,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let T=!0,I=r.resistanceRatio;if(r.touchReleaseOnEdges&&(I=0),m>0?(d&&g&&!_&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(T=!1,r.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+m)**I))):m<0&&(d&&g&&!_&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(T=!1,r.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-m)**I))),T&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(m)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function wd(n){const e=this,t=e.touchEventsData;let i=n;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].filter(I=>I.identifier===t.touchId)[0],!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!o.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const h=Si(),f=h-t.touchStartTime;if(e.allowClick){const I=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(I&&I[0]||i.target,I),e.emit("tap click",i),f<300&&h-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Si(),ns(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(o.followFinger?p=l?e.translate:-e.translate:p=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-e.maxTranslate()&&!e.params.loop;let y=0,v=e.slidesSizesGrid[0];for(let I=0;I<c.length;I+=I<o.slidesPerGroupSkip?1:o.slidesPerGroup){const R=I<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[I+R]<"u"?(m||p>=c[I]&&p<c[I+R])&&(y=I,v=c[I+R]-c[I]):(m||p>=c[I])&&(y=I,v=c[c.length-1]-c[c.length-2])}let d=null,g=null;o.rewind&&(e.isBeginning?g=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(d=0));const _=(p-c[y])/v,T=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(f>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(_>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?d:y+T):e.slideTo(y)),e.swipeDirection==="prev"&&(_>1-o.longSwipesRatio?e.slideTo(y+T):g!==null&&_<0&&Math.abs(_)>o.longSwipesRatio?e.slideTo(g):e.slideTo(y))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(y+T):e.slideTo(y):(e.swipeDirection==="next"&&e.slideTo(d!==null?d:y+T),e.swipeDirection==="prev"&&e.slideTo(g!==null?g:y))}}function Ho(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=n,o=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!a?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!o?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=r,n.allowSlideNext=i,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function Id(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function Ad(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=n;if(!i)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let r;const s=n.maxTranslate()-n.minTranslate();s===0?r=0:r=(n.translate-n.minTranslate())/s,r!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function Sd(n){const e=this;_i(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Cd(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const Rl=(n,e)=>{const t=We(),{params:i,el:r,wrapperEl:s,device:o}=n,a=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;t[l]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:a}),r[l]("touchstart",n.onTouchStart,{passive:!1}),r[l]("pointerdown",n.onTouchStart,{passive:!1}),t[l]("touchmove",n.onTouchMove,{passive:!1,capture:a}),t[l]("pointermove",n.onTouchMove,{passive:!1,capture:a}),t[l]("touchend",n.onTouchEnd,{passive:!0}),t[l]("pointerup",n.onTouchEnd,{passive:!0}),t[l]("pointercancel",n.onTouchEnd,{passive:!0}),t[l]("touchcancel",n.onTouchEnd,{passive:!0}),t[l]("pointerout",n.onTouchEnd,{passive:!0}),t[l]("pointerleave",n.onTouchEnd,{passive:!0}),t[l]("contextmenu",n.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",n.onClick,!0),i.cssMode&&s[l]("scroll",n.onScroll),i.updateOnWindowResize?n[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ho,!0):n[c]("observerUpdate",Ho,!0),r[l]("load",n.onLoad,{capture:!0})};function Rd(){const n=this,{params:e}=n;n.onTouchStart=Td.bind(n),n.onTouchMove=Ed.bind(n),n.onTouchEnd=wd.bind(n),n.onDocumentTouchStart=Cd.bind(n),e.cssMode&&(n.onScroll=Ad.bind(n)),n.onClick=Id.bind(n),n.onLoad=Sd.bind(n),Rl(n,"on")}function bd(){Rl(this,"off")}var Pd={attachEvents:Rd,detachEvents:bd};const Go=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function kd(){const n=this,{realIndex:e,initialized:t,params:i,el:r}=n,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=n.getBreakpoint(s,n.params.breakpointsBase,n.el);if(!o||n.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||n.originalParams,c=Go(n,i),u=Go(n,l),h=n.params.grabCursor,f=l.grabCursor,p=i.enabled;c&&!u?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),n.emitContainerClasses()):!c&&u&&(r.classList.add(`${i.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),n.emitContainerClasses()),h&&!f?n.unsetGrabCursor():!h&&f&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(_=>{if(typeof l[_]>"u")return;const T=i[_]&&i[_].enabled,I=l[_]&&l[_].enabled;T&&!I&&n[_].disable(),!T&&I&&n[_].enable()});const m=l.direction&&l.direction!==i.direction,y=i.loop&&(l.slidesPerView!==i.slidesPerView||m),v=i.loop;m&&t&&n.changeDirection(),Ie(n.params,l);const d=n.params.enabled,g=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),p&&!d?n.disable():!p&&d&&n.enable(),n.currentBreakpoint=o,n.emit("_beforeBreakpoint",l),t&&(y?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!v&&g?(n.loopCreate(e),n.updateSlides()):v&&!g&&n.loopDestroy()),n.emit("breakpoint",l)}function Dd(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let i=!1;const r=Se(),s=e==="window"?r.innerHeight:t.clientHeight,o=Object.keys(n).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var xd={setBreakpoint:kd,getBreakpoint:Dd};function Od(n,e){const t=[];return n.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&t.push(e+r)}):typeof i=="string"&&t.push(e+i)}),t}function Md(){const n=this,{classNames:e,params:t,rtl:i,el:r,device:s}=n,o=Od(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),r.classList.add(...e),n.emitContainerClasses()}function Nd(){const n=this,{el:e,classNames:t}=n;e.classList.remove(...t),n.emitContainerClasses()}var Ld={addClasses:Md,removeClasses:Nd};function Vd(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:i}=t;if(i){const r=n.slides.length-1,s=n.slidesGrid[r]+n.slidesSizesGrid[r]+i*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var Fd={checkOverflow:Vd},Wo={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Ud(n,e){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],s=i[r];if(typeof s!="object"||s===null){Ie(e,i);return}if(n[r]===!0&&(n[r]={enabled:!0}),r==="navigation"&&n[r]&&n[r].enabled&&!n[r].prevEl&&!n[r].nextEl&&(n[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&n[r]&&n[r].enabled&&!n[r].el&&(n[r].auto=!0),!(r in n&&"enabled"in s)){Ie(e,i);return}typeof n[r]=="object"&&!("enabled"in n[r])&&(n[r].enabled=!0),n[r]||(n[r]={enabled:!1}),Ie(e,i)}}const xr={eventsEmitter:Lh,update:Wh,translate:Zh,transition:id,slide:hd,loop:md,grabCursor:yd,events:Pd,breakpoints:xd,checkOverflow:Fd,classes:Ld},Or={};class we{constructor(){let e,t;for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=Ie({},t),e&&!t.el&&(t.el=e);const o=We();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const u=[];return o.querySelectorAll(t.el).forEach(h=>{const f=Ie({},t,{el:h});u.push(new we(f))}),u}const a=this;a.__swiper__=!0,a.support=Al(),a.device=Sl({userAgent:t.userAgent}),a.browser=Oh(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const l={};a.modules.forEach(u=>{u({params:t,swiper:a,extendParams:Ud(t,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=Ie({},Wo,l);return a.params=Ie({},c,Or,t),a.originalParams=Ie({},a.params),a.passedParams=Ie({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,r=Oe(t,`.${i.slideClass}, swiper-slide`),s=bi(r[0]);return bi(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=Oe(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),o=(i.maxTranslate()-r)*e+r;i.translateTo(o,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);t.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:r,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=i;let u=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let h=s[c]?Math.ceil(s[c].swiperSlideSize):0,f;for(let p=c+1;p<s.length;p+=1)s[p]&&!f&&(h+=Math.ceil(s[p].swiperSlideSize),u+=1,h>l&&(f=!0));for(let p=c-1;p>=0;p-=1)s[p]&&!f&&(h+=s[p].swiperSlideSize,u+=1,h>l&&(f=!0))}else if(e==="current")for(let h=c+1;h<s.length;h+=1)(t?o[h]+a[h]-o[c]<l:o[h]-o[c]<l)&&(u+=1);else for(let h=c-1;h>=0;h-=1)o[c]-o[h]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&_i(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):Oe(i,r())[0];return!o&&t.params.createElements&&(o=Ri("div",t.params.wrapperClass),i.append(o),Oe(i,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:i,wrapperEl:o,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||rt(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||rt(i,"direction")==="rtl"),wrongRTL:rt(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?_i(t,s):s.addEventListener("load",o=>{_i(t,o.target)})}),rs(t),t.initialized=!0,rs(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:r,el:s,wrapperEl:o,slides:a}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),t&&(i.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el.swiper=null,Ah(i)),i.destroyed=!0),null}static extendDefaults(e){Ie(Or,e)}static get extendedDefaults(){return Or}static get defaults(){return Wo}static installModule(e){we.prototype.__modules__||(we.prototype.__modules__=[]);const t=we.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>we.installModule(t)),we):(we.installModule(e),we)}}Object.keys(xr).forEach(n=>{Object.keys(xr[n]).forEach(e=>{we.prototype[e]=xr[n][e]})});we.use([Mh,Nh]);function bl(n,e,t,i){return n.params.createElements&&Object.keys(i).forEach(r=>{if(!t[r]&&t.auto===!0){let s=Oe(n.el,`.${i[r]}`)[0];s||(s=Ri("div",i[r]),s.className=i[r],n.el.append(s)),t[r]=s,e[r]=s}}),t}function Bd(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(m){let y;return m&&typeof m=="string"&&e.isElement&&(y=e.el.querySelector(m),y)?y:(m&&(typeof m=="string"&&(y=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&y&&y.length>1&&e.el.querySelectorAll(m).length===1?y=e.el.querySelector(m):y&&y.length===1&&(y=y[0])),m&&!y?m:y)}function o(m,y){const v=e.params.navigation;m=ie(m),m.forEach(d=>{d&&(d.classList[y?"add":"remove"](...v.disabledClass.split(" ")),d.tagName==="BUTTON"&&(d.disabled=y),e.params.watchOverflow&&e.enabled&&d.classList[e.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:m,prevEl:y}=e.navigation;if(e.params.loop){o(y,!1),o(m,!1);return}o(y,e.isBeginning&&!e.params.rewind),o(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function c(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const m=e.params.navigation;if(e.params.navigation=bl(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let y=s(m.nextEl),v=s(m.prevEl);Object.assign(e.navigation,{nextEl:y,prevEl:v}),y=ie(y),v=ie(v);const d=(g,_)=>{g&&g.addEventListener("click",_==="next"?c:l),!e.enabled&&g&&g.classList.add(...m.lockClass.split(" "))};y.forEach(g=>d(g,"next")),v.forEach(g=>d(g,"prev"))}function h(){let{nextEl:m,prevEl:y}=e.navigation;m=ie(m),y=ie(y);const v=(d,g)=>{d.removeEventListener("click",g==="next"?c:l),d.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(d=>v(d,"next")),y.forEach(d=>v(d,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?p():(u(),a())}),i("toEdge fromEdge lock unlock",()=>{a()}),i("destroy",()=>{h()}),i("enable disable",()=>{let{nextEl:m,prevEl:y}=e.navigation;if(m=ie(m),y=ie(y),e.enabled){a();return}[...m,...y].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),i("click",(m,y)=>{let{nextEl:v,prevEl:d}=e.navigation;v=ie(v),d=ie(d);const g=y.target;if(e.params.navigation.hideOnClick&&!d.includes(g)&&!v.includes(g)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let _;v.length?_=v[0].classList.contains(e.params.navigation.hiddenClass):d.length&&(_=d[0].classList.contains(e.params.navigation.hiddenClass)),r(_===!0?"navigationShow":"navigationHide"),[...v,...d].filter(T=>!!T).forEach(T=>T.classList.toggle(e.params.navigation.hiddenClass))}});const f=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:f,disable:p,update:a,init:u,destroy:h})}function ln(n){return n===void 0&&(n=""),`.${n.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function $d(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;const s="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:d=>d,formatFractionTotal:d=>d,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(d,g){const{bulletActiveClass:_}=e.params.pagination;d&&(d=d[`${g==="prev"?"previous":"next"}ElementSibling`],d&&(d.classList.add(`${_}-${g}`),d=d[`${g==="prev"?"previous":"next"}ElementSibling`],d&&d.classList.add(`${_}-${g}-${g}`)))}function u(d){const g=d.target.closest(ln(e.params.pagination.bulletClass));if(!g)return;d.preventDefault();const _=bi(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===_)return;e.slideToLoop(_)}else e.slideTo(_)}function h(){const d=e.rtl,g=e.params.pagination;if(l())return;let _=e.pagination.el;_=ie(_);let T,I;const R=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,Q=e.params.loop?Math.ceil(R/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(I=e.previousRealIndex||0,T=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(T=e.snapIndex,I=e.previousSnapIndex):(I=e.previousIndex||0,T=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const P=e.pagination.bullets;let q,w,D;if(g.dynamicBullets&&(o=is(P[0],e.isHorizontal()?"width":"height",!0),_.forEach(k=>{k.style[e.isHorizontal()?"width":"height"]=`${o*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&I!==void 0&&(a+=T-(I||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),q=Math.max(T-a,0),w=q+(Math.min(P.length,g.dynamicMainBullets)-1),D=(w+q)/2),P.forEach(k=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${g.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();k.classList.remove(...C)}),_.length>1)P.forEach(k=>{const C=bi(k);C===T?k.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&k.setAttribute("part","bullet"),g.dynamicBullets&&(C>=q&&C<=w&&k.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),C===q&&c(k,"prev"),C===w&&c(k,"next"))});else{const k=P[T];if(k&&k.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&P.forEach((C,F)=>{C.setAttribute("part",F===T?"bullet-active":"bullet")}),g.dynamicBullets){const C=P[q],F=P[w];for(let K=q;K<=w;K+=1)P[K]&&P[K].classList.add(...`${g.bulletActiveClass}-main`.split(" "));c(C,"prev"),c(F,"next")}}if(g.dynamicBullets){const k=Math.min(P.length,g.dynamicMainBullets+4),C=(o*k-o)/2-D*o,F=d?"right":"left";P.forEach(K=>{K.style[e.isHorizontal()?F:"top"]=`${C}px`})}}_.forEach((P,q)=>{if(g.type==="fraction"&&(P.querySelectorAll(ln(g.currentClass)).forEach(w=>{w.textContent=g.formatFractionCurrent(T+1)}),P.querySelectorAll(ln(g.totalClass)).forEach(w=>{w.textContent=g.formatFractionTotal(Q)})),g.type==="progressbar"){let w;g.progressbarOpposite?w=e.isHorizontal()?"vertical":"horizontal":w=e.isHorizontal()?"horizontal":"vertical";const D=(T+1)/Q;let k=1,C=1;w==="horizontal"?k=D:C=D,P.querySelectorAll(ln(g.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${k}) scaleY(${C})`,F.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(P.innerHTML=g.renderCustom(e,T+1,Q),q===0&&r("paginationRender",P)):(q===0&&r("paginationRender",P),r("paginationUpdate",P)),e.params.watchOverflow&&e.enabled&&P.classList[e.isLocked?"add":"remove"](g.lockClass)})}function f(){const d=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let _=e.pagination.el;_=ie(_);let T="";if(d.type==="bullets"){let I=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&I>g&&(I=g);for(let R=0;R<I;R+=1)d.renderBullet?T+=d.renderBullet.call(e,R,d.bulletClass):T+=`<${d.bulletElement} ${e.isElement?'part="bullet"':""} class="${d.bulletClass}"></${d.bulletElement}>`}d.type==="fraction"&&(d.renderFraction?T=d.renderFraction.call(e,d.currentClass,d.totalClass):T=`<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),d.type==="progressbar"&&(d.renderProgressbar?T=d.renderProgressbar.call(e,d.progressbarFillClass):T=`<span class="${d.progressbarFillClass}"></span>`),e.pagination.bullets=[],_.forEach(I=>{d.type!=="custom"&&(I.innerHTML=T||""),d.type==="bullets"&&e.pagination.bullets.push(...I.querySelectorAll(ln(d.bulletClass)))}),d.type!=="custom"&&r("paginationRender",_[0])}function p(){e.params.pagination=bl(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const d=e.params.pagination;if(!d.el)return;let g;typeof d.el=="string"&&e.isElement&&(g=e.el.querySelector(d.el)),!g&&typeof d.el=="string"&&(g=[...document.querySelectorAll(d.el)]),g||(g=d.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof d.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(d.el)],g.length>1&&(g=g.filter(_=>Il(_,".swiper")[0]===e.el)[0])),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=ie(g),g.forEach(_=>{d.type==="bullets"&&d.clickable&&_.classList.add(...(d.clickableClass||"").split(" ")),_.classList.add(d.modifierClass+d.type),_.classList.add(e.isHorizontal()?d.horizontalClass:d.verticalClass),d.type==="bullets"&&d.dynamicBullets&&(_.classList.add(`${d.modifierClass}${d.type}-dynamic`),a=0,d.dynamicMainBullets<1&&(d.dynamicMainBullets=1)),d.type==="progressbar"&&d.progressbarOpposite&&_.classList.add(d.progressbarOppositeClass),d.clickable&&_.addEventListener("click",u),e.enabled||_.classList.add(d.lockClass)}))}function m(){const d=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=ie(g),g.forEach(_=>{_.classList.remove(d.hiddenClass),_.classList.remove(d.modifierClass+d.type),_.classList.remove(e.isHorizontal()?d.horizontalClass:d.verticalClass),d.clickable&&(_.classList.remove(...(d.clickableClass||"").split(" ")),_.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(_=>_.classList.remove(...d.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const d=e.params.pagination;let{el:g}=e.pagination;g=ie(g),g.forEach(_=>{_.classList.remove(d.horizontalClass,d.verticalClass),_.classList.add(e.isHorizontal()?d.horizontalClass:d.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?v():(p(),f(),h())}),i("activeIndexChange",()=>{typeof e.snapIndex>"u"&&h()}),i("snapIndexChange",()=>{h()}),i("snapGridLengthChange",()=>{f(),h()}),i("destroy",()=>{m()}),i("enable disable",()=>{let{el:d}=e.pagination;d&&(d=ie(d),d.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{h()}),i("click",(d,g)=>{const _=g.target,T=ie(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&T&&T.length>0&&!_.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&_===e.navigation.nextEl||e.navigation.prevEl&&_===e.navigation.prevEl))return;const I=T[0].classList.contains(e.params.pagination.hiddenClass);r(I===!0?"paginationShow":"paginationHide"),T.forEach(R=>R.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:d}=e.pagination;d&&(d=ie(d),d.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),p(),f(),h()},v=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:d}=e.pagination;d&&(d=ie(d),d.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:y,disable:v,render:f,update:h,init:p,destroy:m})}function zd(n){let{swiper:e,extendParams:t,on:i,emit:r,params:s}=n;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=s&&s.autoplay?s.autoplay.delay:3e3,c=s&&s.autoplay?s.autoplay.delay:3e3,u,h=new Date().getTime(),f,p,m,y,v,d,g;function _(H){!e||e.destroyed||!e.wrapperEl||H.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",_),!g&&w())}const T=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?f=!0:f&&(c=u,f=!1);const H=e.autoplay.paused?u:h+c-new Date().getTime();e.autoplay.timeLeft=H,r("autoplayTimeLeft",H,H/l),a=requestAnimationFrame(()=>{T()})},I=()=>{let H;return e.virtual&&e.params.virtual.enabled?H=e.slides.filter(ye=>ye.classList.contains("swiper-slide-active"))[0]:H=e.slides[e.activeIndex],H?parseInt(H.getAttribute("data-swiper-autoplay"),10):void 0},R=H=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),T();let Ce=typeof H>"u"?e.params.autoplay.delay:H;l=e.params.autoplay.delay,c=e.params.autoplay.delay;const ye=I();!Number.isNaN(ye)&&ye>0&&typeof H>"u"&&(Ce=ye,l=ye,c=ye),u=Ce;const gt=e.params.speed,ti=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(gt,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,gt,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(gt,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,gt,!0,!0),r("autoplay")),e.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{R()})))};return Ce>0?(clearTimeout(o),o=setTimeout(()=>{ti()},Ce)):requestAnimationFrame(()=>{ti()}),Ce},Q=()=>{h=new Date().getTime(),e.autoplay.running=!0,R(),r("autoplayStart")},P=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},q=(H,Ce)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),H||(d=!0);const ye=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",_):w()};if(e.autoplay.paused=!0,Ce){v&&(u=e.params.autoplay.delay),v=!1,ye();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-h),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),ye())},w=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(h=new Date().getTime(),d?(d=!1,R(u)):R(),e.autoplay.paused=!1,r("autoplayResume"))},D=()=>{if(e.destroyed||!e.autoplay.running)return;const H=We();H.visibilityState==="hidden"&&(d=!0,q(!0)),H.visibilityState==="visible"&&w()},k=H=>{H.pointerType==="mouse"&&(d=!0,g=!0,!(e.animating||e.autoplay.paused)&&q(!0))},C=H=>{H.pointerType==="mouse"&&(g=!1,e.autoplay.paused&&w())},F=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",k),e.el.addEventListener("pointerleave",C))},K=()=>{e.el.removeEventListener("pointerenter",k),e.el.removeEventListener("pointerleave",C)},ke=()=>{We().addEventListener("visibilitychange",D)},Cr=()=>{We().removeEventListener("visibilitychange",D)};i("init",()=>{e.params.autoplay.enabled&&(F(),ke(),Q())}),i("destroy",()=>{K(),Cr(),e.autoplay.running&&P()}),i("_freeModeStaticRelease",()=>{(m||d)&&w()}),i("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?P():q(!0,!0)}),i("beforeTransitionStart",(H,Ce,ye)=>{e.destroyed||!e.autoplay.running||(ye||!e.params.autoplay.disableOnInteraction?q(!0,!0):P())}),i("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){P();return}p=!0,m=!1,d=!1,y=setTimeout(()=>{d=!0,m=!0,q(!0)},200)}}),i("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(y),clearTimeout(o),e.params.autoplay.disableOnInteraction){m=!1,p=!1;return}m&&e.params.cssMode&&w(),m=!1,p=!1}}),i("slideChange",()=>{e.destroyed||!e.autoplay.running||(v=!0)}),Object.assign(e.autoplay,{start:Q,stop:P,pause:q,resume:w})}var Ko={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},qd=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),i.push(t[u],t[h],t[f],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new jd;const f=s<<2|a>>4;if(i.push(f),c!==64){const p=a<<4&240|c>>2;if(i.push(p),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hd=function(n){const e=Pl(n);return kl.encodeByteArray(e,!0)},Pi=function(n){return Hd(n).replace(/\./g,"")},Dl=function(n){try{return kl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=()=>Gd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof Ko>"u")return;const n=Ko.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Dl(n[1]);return e&&JSON.parse(e)},Us=()=>{try{return Wd()||Kd()||Qd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xl=n=>{var e,t;return(t=(e=Us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ol=n=>{const e=xl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Ml=()=>{var n;return(n=Us())===null||n===void 0?void 0:n.config},Nl=n=>{var e;return(e=Us())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Pi(JSON.stringify(t)),Pi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Jd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ef(){const n=ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tf(){try{return typeof indexedDB=="object"}catch{return!1}}function nf(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="FirebaseError";class ze extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=rf,Object.setPrototypeOf(this,ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?sf(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ze(r,a,i)}}function sf(n,e){return n.replace(of,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const of=/\{\$([^}]+)}/g;function af(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ki(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Qo(s)&&Qo(o)){if(!ki(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Qo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function lf(n,e){const t=new cf(n,e);return t.subscribe.bind(t)}class cf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");uf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Mr),r.error===void 0&&(r.error=Mr),r.complete===void 0&&(r.complete=Mr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n){return n&&n._delegate?n._delegate:n}class ct{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Xd;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ff(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:df(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function df(n){return n===_t?void 0:n}function ff(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const mf={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},gf=$.INFO,_f={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},yf=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=_f[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bs{constructor(e){this.name=e,this._logLevel=gf,this._logHandler=yf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const vf=(n,e)=>e.some(t=>n instanceof t);let Xo,Yo;function Tf(){return Xo||(Xo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ef(){return Yo||(Yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vl=new WeakMap,ss=new WeakMap,Fl=new WeakMap,Nr=new WeakMap,$s=new WeakMap;function wf(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(at(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Vl.set(t,n)}).catch(()=>{}),$s.set(e,n),e}function If(n){if(ss.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ss.set(n,e)}let os={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ss.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return at(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Af(n){os=n(os)}function Sf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Lr(this),e,...t);return Fl.set(i,e.sort?e.sort():[e]),at(i)}:Ef().includes(n)?function(...e){return n.apply(Lr(this),e),at(Vl.get(this))}:function(...e){return at(n.apply(Lr(this),e))}}function Cf(n){return typeof n=="function"?Sf(n):(n instanceof IDBTransaction&&If(n),vf(n,Tf())?new Proxy(n,os):n)}function at(n){if(n instanceof IDBRequest)return wf(n);if(Nr.has(n))return Nr.get(n);const e=Cf(n);return e!==n&&(Nr.set(n,e),$s.set(e,n)),e}const Lr=n=>$s.get(n);function Rf(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=at(o);return i&&o.addEventListener("upgradeneeded",l=>{i(at(o.result),l.oldVersion,l.newVersion,at(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bf=["get","getKey","getAll","getAllKeys","count"],Pf=["put","add","delete","clear"],Vr=new Map;function Jo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vr.get(e))return Vr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=Pf.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||bf.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return Vr.set(e,s),s}Af(n=>({...n,get:(e,t,i)=>Jo(e,t)||n.get(e,t,i),has:(e,t)=>!!Jo(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Df(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Df(n){const e=n.getComponent();return e?.type==="VERSION"}const as="@firebase/app",Zo="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Bs("@firebase/app"),xf="@firebase/app-compat",Of="@firebase/analytics-compat",Mf="@firebase/analytics",Nf="@firebase/app-check-compat",Lf="@firebase/app-check",Vf="@firebase/auth",Ff="@firebase/auth-compat",Uf="@firebase/database",Bf="@firebase/database-compat",$f="@firebase/functions",zf="@firebase/functions-compat",qf="@firebase/installations",jf="@firebase/installations-compat",Hf="@firebase/messaging",Gf="@firebase/messaging-compat",Wf="@firebase/performance",Kf="@firebase/performance-compat",Qf="@firebase/remote-config",Xf="@firebase/remote-config-compat",Yf="@firebase/storage",Jf="@firebase/storage-compat",Zf="@firebase/firestore",ep="@firebase/firestore-compat",tp="firebase",np="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="[DEFAULT]",ip={[as]:"fire-core",[xf]:"fire-core-compat",[Mf]:"fire-analytics",[Of]:"fire-analytics-compat",[Lf]:"fire-app-check",[Nf]:"fire-app-check-compat",[Vf]:"fire-auth",[Ff]:"fire-auth-compat",[Uf]:"fire-rtdb",[Bf]:"fire-rtdb-compat",[$f]:"fire-fn",[zf]:"fire-fn-compat",[qf]:"fire-iid",[jf]:"fire-iid-compat",[Hf]:"fire-fcm",[Gf]:"fire-fcm-compat",[Wf]:"fire-perf",[Kf]:"fire-perf-compat",[Qf]:"fire-rc",[Xf]:"fire-rc-compat",[Yf]:"fire-gcs",[Jf]:"fire-gcs-compat",[Zf]:"fire-fst",[ep]:"fire-fst-compat","fire-js":"fire-js",[tp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Map,cs=new Map;function rp(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ct(n){const e=n.name;if(cs.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;cs.set(e,n);for(const t of Di.values())rp(t,n);return!0}function Xi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},lt=new Ln("app","Firebase",sp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=np;function zs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ls,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw lt.create("bad-app-name",{appName:String(r)});if(t||(t=Ml()),!t)throw lt.create("no-options");const s=Di.get(r);if(s){if(ki(t,s.options)&&ki(i,s.config))return s;throw lt.create("duplicate-app",{appName:r})}const o=new pf(r);for(const l of cs.values())o.addComponent(l);const a=new op(t,i,o);return Di.set(r,a),a}function qs(n=ls){const e=Di.get(n);if(!e&&n===ls&&Ml())return zs();if(!e)throw lt.create("no-app",{appName:n});return e}function Le(n,e,t){var i;let r=(i=ip[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}Ct(new ct(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="firebase-heartbeat-database",lp=1,En="firebase-heartbeat-store";let Fr=null;function Ul(){return Fr||(Fr=Rf(ap,lp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(En)}}}).catch(n=>{throw lt.create("idb-open",{originalErrorMessage:n.message})})),Fr}async function cp(n){try{return await(await Ul()).transaction(En).objectStore(En).get(Bl(n))}catch(e){if(e instanceof ze)St.warn(e.message);else{const t=lt.create("idb-get",{originalErrorMessage:e?.message});St.warn(t.message)}}}async function ea(n,e){try{const i=(await Ul()).transaction(En,"readwrite");await i.objectStore(En).put(e,Bl(n)),await i.done}catch(t){if(t instanceof ze)St.warn(t.message);else{const i=lt.create("idb-set",{originalErrorMessage:t?.message});St.warn(i.message)}}}function Bl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=1024,hp=30*24*60*60*1e3;class dp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ta();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=hp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ta(),{heartbeatsToSend:t,unsentEntries:i}=fp(this._heartbeatsCache.heartbeats),r=Pi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ta(){return new Date().toISOString().substring(0,10)}function fp(n,e=up){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),na(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),na(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class pp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tf()?nf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ea(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ea(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function na(n){return Pi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n){Ct(new ct("platform-logger",e=>new kf(e),"PRIVATE")),Ct(new ct("heartbeat",e=>new dp(e),"PRIVATE")),Le(as,Zo,n),Le(as,Zo,"esm2017"),Le("fire-js","")}mp("");var gp="firebase",_p="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(gp,_p,"app");function js(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function $l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yp=$l,zl=new Ln("auth","Firebase",$l());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Bs("@firebase/auth");function vp(n,...e){xi.logLevel<=$.WARN&&xi.warn(`Auth (${Dt}): ${n}`,...e)}function yi(n,...e){xi.logLevel<=$.ERROR&&xi.error(`Auth (${Dt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,...e){throw Hs(n,...e)}function Ve(n,...e){return Hs(n,...e)}function Tp(n,e,t){const i=Object.assign(Object.assign({},yp()),{[e]:t});return new Ln("auth","Firebase",i).create(e,{appName:n.name})}function Hs(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return zl.create(n,...e)}function N(n,e,...t){if(!n)throw Hs(e,...t)}function je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw yi(e),new Error(e)}function Qe(n,e){n||je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ep(){return ia()==="http:"||ia()==="https:"}function ia(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ep()||Jd()||"connection"in navigator)?navigator.onLine:!0}function Ip(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qe(t>e,"Short delay should be less than long delay!"),this.isMobile=Yd()||Zd()}get(){return wp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n,e){Qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new Fn(3e4,6e4);function jl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Un(n,e,t,i,r={}){return Hl(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Vn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),ql.fetch()(Gl(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Hl(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ap),e);try{const r=new Rp(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ri(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ri(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ri(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ri(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Tp(n,u,c);Ke(n,u)}}catch(r){if(r instanceof ze)throw r;Ke(n,"network-request-failed",{message:String(r)})}}async function Cp(n,e,t,i,r={}){const s=await Un(n,e,t,i,r);return"mfaPendingCredential"in s&&Ke(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Gl(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Gs(n.config,r):`${n.config.apiScheme}://${r}`}class Rp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ve(this.auth,"network-request-failed")),Sp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ri(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Ve(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(n,e){return Un(n,"POST","/v1/accounts:delete",e)}async function Pp(n,e){return Un(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kp(n,e=!1){const t=ft(n),i=await t.getIdToken(e),r=Ws(i);N(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:mn(Ur(r.auth_time)),issuedAtTime:mn(Ur(r.iat)),expirationTime:mn(Ur(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ur(n){return Number(n)*1e3}function Ws(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return yi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Dl(t);return r?JSON.parse(r):(yi("Failed to decode base64 JWT payload"),null)}catch(r){return yi("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Dp(n){const e=Ws(n);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ze&&xp(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function xp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mn(this.lastLoginAt),this.creationTime=mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(n){var e;const t=n.auth,i=await n.getIdToken(),r=await wn(n,Pp(t,{idToken:i}));N(r?.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Lp(s.providerUserInfo):[],a=Np(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!a?.length,u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Mp(n){const e=ft(n);await Oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Np(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Lp(n){return n.map(e=>{var{providerId:t}=e,i=js(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,e){const t=await Hl(n,{},async()=>{const i=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=Gl(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ql.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Vp(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new In;return i&&(N(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(N(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n,e){N(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Et{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Op(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await wn(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kp(this,e)}reload(){return Mp(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Oi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wn(this,bp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(r=t.email)!==null&&r!==void 0?r:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,d=(c=t.createdAt)!==null&&c!==void 0?c:void 0,g=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:T,isAnonymous:I,providerData:R,stsTokenManager:Q}=t;N(_&&Q,e,"internal-error");const P=In.fromJSON(this.name,Q);N(typeof _=="string",e,"internal-error"),Ze(h,e.name),Ze(f,e.name),N(typeof T=="boolean",e,"internal-error"),N(typeof I=="boolean",e,"internal-error"),Ze(p,e.name),Ze(m,e.name),Ze(y,e.name),Ze(v,e.name),Ze(d,e.name),Ze(g,e.name);const q=new Et({uid:_,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:I,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:P,createdAt:d,lastLoginAt:g});return R&&Array.isArray(R)&&(q.providerData=R.map(w=>Object.assign({},w))),v&&(q._redirectEventId=v),q}static async _fromIdTokenResponse(e,t,i=!1){const r=new In;r.updateFromServerResponse(t);const s=new Et({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Oi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Map;function He(n){Qe(n instanceof Function,"Expected a class definition");let e=ra.get(n);return e?(Qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ra.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kl.type="NONE";const sa=Kl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e,t){return`firebase:${n}:${e}:${t}`}class Ut{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=vi(this.userKey,r.apiKey,s),this.fullPersistenceKey=vi("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ut(He(sa),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||He(sa);const o=vi(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=Et._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ut(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ut(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ql(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zl(e))return"Blackberry";if(ec(e))return"Webos";if(Ks(e))return"Safari";if((e.includes("chrome/")||Xl(e))&&!e.includes("edge/"))return"Chrome";if(Jl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Ql(n=ge()){return/firefox\//i.test(n)}function Ks(n=ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xl(n=ge()){return/crios\//i.test(n)}function Yl(n=ge()){return/iemobile/i.test(n)}function Jl(n=ge()){return/android/i.test(n)}function Zl(n=ge()){return/blackberry/i.test(n)}function ec(n=ge()){return/webos/i.test(n)}function Yi(n=ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fp(n=ge()){var e;return Yi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Up(){return ef()&&document.documentMode===10}function tc(n=ge()){return Yi(n)||Jl(n)||ec(n)||Zl(n)||/windows phone/i.test(n)||Yl(n)}function Bp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n,e=[]){let t;switch(n){case"Browser":t=oa(ge());break;case"Worker":t=`${oa(ge())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dt}/${i}`}async function ic(n,e){return Un(n,"GET","/v2/recaptchaConfig",jl(n,e))}function aa(n){return n!==void 0&&n.enterprise!==void 0}class rc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function sc(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Ve("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",$p().appendChild(i)})}function zp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const qp="https://www.google.com/recaptcha/enterprise.js?render=",jp="recaptcha-enterprise",Hp="NO_RECAPTCHA";class Gp{constructor(e){this.type=jp,this.auth=Ji(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ic(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new rc(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;aa(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Hp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&aa(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}sc(qp+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new la(this),this.idTokenSubscription=new la(this),this.beforeStateQueue=new Wp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ut.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ip()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ft(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}async initializeRecaptchaConfig(){const e=await ic(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new rc(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Gp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ln("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await Ut.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&vp(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ji(n){return ft(n)}class la{constructor(e){this.auth=e,this.observer=null,this.addObserver=lf(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n,e){const t=Xi(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(ki(s,e??{}))return r;Ke(r,"already-initialized")}return t.initialize({options:e})}function Xp(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(He);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Yp(n,e,t){const i=Ji(n);N(i._canInitEmulator,i,"emulator-config-failed"),N(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!t?.disableWarnings,s=oc(e),{host:o,port:a}=Jp(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Zp()}function oc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Jp(n){const e=oc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:ca(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:ca(o)}}}function ca(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return je("not implemented")}_getIdTokenResponse(e){return je("not implemented")}_linkToIdToken(e,t){return je("not implemented")}_getReauthenticationResolver(e){return je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(n,e){return Cp(n,"POST","/v1/accounts:signInWithIdp",jl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="http://localhost";class Rt extends ac{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=js(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Rt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Bt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Bt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bt(e,t)}buildRequest(){const e={requestUri:em,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends lc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Bn{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch{return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com";et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Bn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return tt.credential(t,i)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Bn{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com";nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Bn{constructor(){super("twitter.com")}static credential(e,t){return Rt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return it.credential(t,i)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await Et._fromIdTokenResponse(e,i,r),o=ua(i);return new Wt({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=ua(i);return new Wt({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function ua(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends ze{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Mi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Mi(e,t,i,r)}}function cc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mi._fromErrorAndOperation(n,s,e,i):s})}async function tm(n,e,t=!1){const i=await wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Wt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await wn(n,cc(i,r,e,n),t);N(s.idToken,i,"internal-error");const o=Ws(s.idToken);N(o,i,"internal-error");const{sub:a}=o;return N(n.uid===a,i,"user-mismatch"),Wt._forOperation(n,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&Ke(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(n,e,t=!1){const i="signIn",r=await cc(n,i,e),s=await Wt._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function rm(n,e,t,i){return ft(n).onIdTokenChanged(e,t,i)}function sm(n,e,t){return ft(n).beforeAuthStateChanged(e,t)}const Ni="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){const n=ge();return Ks(n)||Yi(n)}const am=1e3,lm=10;class hc extends uc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=om()&&Bp(),this.fallbackToPolling=tc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Up()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,lm):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hc.type="LOCAL";const cm=hc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends uc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dc.type="SESSION";const fc=dc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Zi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await um(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Qs("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function dm(n){Fe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function fm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pm(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function mm(){return pc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="firebaseLocalStorageDb",gm=1,Li="firebaseLocalStorage",gc="fbase_key";class $n{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function er(n,e){return n.transaction([Li],e?"readwrite":"readonly").objectStore(Li)}function _m(){const n=indexedDB.deleteDatabase(mc);return new $n(n).toPromise()}function hs(){const n=indexedDB.open(mc,gm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Li,{keyPath:gc})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Li)?e(i):(i.close(),await _m(),e(await hs()))})})}async function ha(n,e,t){const i=er(n,!0).put({[gc]:e,value:t});return new $n(i).toPromise()}async function ym(n,e){const t=er(n,!1).get(e),i=await new $n(t).toPromise();return i===void 0?null:i.value}function da(n,e){const t=er(n,!0).delete(e);return new $n(t).toPromise()}const vm=800,Tm=3;class _c{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Tm)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zi._getInstance(mm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fm(),!this.activeServiceWorker)return;this.sender=new hm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hs();return await ha(e,Ni,"1"),await da(e,Ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ha(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>ym(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>da(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=er(r,!1).getAll();return new $n(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_c.type="LOCAL";const Em=_c;new Fn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e){return e?He(e):(N(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends ac{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Im(n){return im(n.auth,new Xs(n),n.bypassAuthState)}function Am(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),nm(t,new Xs(n),n.bypassAuthState)}async function Sm(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),tm(t,new Xs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Im;case"linkViaPopup":case"linkViaRedirect":return Sm;case"reauthViaPopup":case"reauthViaRedirect":return Am;default:Ke(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=new Fn(2e3,1e4);class Vt extends yc{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Qs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cm.get())};e()}}Vt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="pendingRedirect",Ti=new Map;class bm extends yc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ti.get(this.auth._key());if(!e){try{const i=await Pm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ti.set(this.auth._key(),e)}return this.bypassAuthState||Ti.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pm(n,e){const t=xm(e),i=Dm(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function km(n,e){Ti.set(n._key(),e)}function Dm(n){return He(n._redirectPersistence)}function xm(n){return vi(Rm,n.config.apiKey,n.name)}async function Om(n,e,t=!1){const i=Ji(n),r=wm(i,e),o=await new bm(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=10*60*1e3;class Nm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!vc(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ve(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mm&&this.cachedEventUids.clear(),this.cachedEventUids.has(fa(e))}saveEventToCache(e){this.cachedEventUids.add(fa(e)),this.lastProcessedEventTime=Date.now()}}function fa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vc({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Lm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(n,e={}){return Un(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Um=/^https?/;async function Bm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vm(n);for(const t of e)try{if($m(t))return}catch{}Ke(n,"unauthorized-domain")}function $m(n){const e=us(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Um.test(t))return!1;if(Fm.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new Fn(3e4,6e4);function pa(){const n=Fe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qm(n){return new Promise((e,t)=>{var i,r,s;function o(){pa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pa(),t(Ve(n,"network-request-failed"))},timeout:zm.get()})}if(!((r=(i=Fe().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Fe().gapi)===null||s===void 0)&&s.load)o();else{const a=zp("iframefcb");return Fe()[a]=()=>{gapi.load?o():t(Ve(n,"network-request-failed"))},sc(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ei=null,e})}let Ei=null;function jm(n){return Ei=Ei||qm(n),Ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new Fn(5e3,15e3),Gm="__/auth/iframe",Wm="emulator/auth/iframe",Km={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xm(n){const e=n.config;N(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gs(e,Wm):`https://${n.config.authDomain}/${Gm}`,i={apiKey:e.apiKey,appName:n.name,v:Dt},r=Qm.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Vn(i).slice(1)}`}async function Ym(n){const e=await jm(n),t=Fe().gapi;return N(t,n,"internal-error"),e.open({where:document.body,url:Xm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Km,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Ve(n,"network-request-failed"),a=Fe().setTimeout(()=>{s(o)},Hm.get());function l(){Fe().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zm=500,eg=600,tg="_blank",ng="http://localhost";class ma{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ig(n,e,t,i=Zm,r=eg){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Jm),{width:i.toString(),height:r.toString(),top:s,left:o}),c=ge().toLowerCase();t&&(a=Xl(c)?tg:t),Ql(c)&&(e=e||ng,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(Fp(c)&&a!=="_self")return rg(e||"",a),new ma(null);const h=window.open(e||"",a,u);N(h,n,"popup-blocked");try{h.focus()}catch{}return new ma(h)}function rg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="__/auth/handler",og="emulator/auth/handler",ag=encodeURIComponent("fac");async function ga(n,e,t,i,r,s){N(n.config.authDomain,n,"auth-domain-config-required"),N(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Dt,eventId:r};if(e instanceof lc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",af(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Bn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${ag}=${encodeURIComponent(l)}`:"";return`${lg(n)}?${Vn(a).slice(1)}${c}`}function lg({config:n}){return n.emulator?Gs(n,og):`https://${n.authDomain}/${sg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="webStorageSupport";class cg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fc,this._completeRedirectFn=Om,this._overrideRedirectResult=km}async _openPopup(e,t,i,r){var s;Qe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ga(e,t,i,us(),r);return ig(e,o,Qs())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await ga(e,t,i,us(),r);return dm(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(Qe(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Ym(e),i=new Nm(e);return t.register("authEvent",r=>(N(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Br,{type:Br},r=>{var s;const o=(s=r?.[0])===null||s===void 0?void 0:s[Br];o!==void 0&&t(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tc()||Ks()||Yi()}}const ug=cg;var _a="@firebase/auth",ya="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fg(n){Ct(new ct("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nc(n)},c=new Kp(i,r,s,l);return Xp(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ct(new ct("auth-internal",e=>{const t=Ji(e.getProvider("auth").getImmediate());return(i=>new hg(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(_a,ya,dg(n)),Le(_a,ya,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=5*60,mg=Nl("authIdTokenMaxAge")||pg;let va=null;const gg=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>mg)return;const r=t?.token;va!==r&&(va=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _g(n=qs()){const e=Xi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qp(n,{popupRedirectResolver:ug,persistence:[Em,cm,fc]}),i=Nl("authTokenSyncURL");if(i){const s=gg(i);sm(t,s,()=>s(t.currentUser)),rm(t,o=>s(o))}const r=xl("auth");return r&&Yp(t,`http://${r}`),t}fg("Browser");var yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,Ys=Ys||{},M=yg||self;function tr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function zn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function vg(n){return Object.prototype.hasOwnProperty.call(n,$r)&&n[$r]||(n[$r]=++Tg)}var $r="closure_uid_"+(1e9*Math.random()>>>0),Tg=0;function Eg(n,e,t){return n.call.apply(n.bind,arguments)}function wg(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function fe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?fe=Eg:fe=wg,fe.apply(null,arguments)}function si(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function oe(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function pt(){this.s=this.s,this.o=this.o}var Ig=0;pt.prototype.s=!1;pt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ig!=0)&&vg(this)};pt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tc=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Js(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function Ta(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(tr(i)){const r=n.length||0,s=i.length||0;n.length=r+s;for(let o=0;o<s;o++)n[r+o]=i[o]}else n.push(i)}}function pe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Ag=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{M.addEventListener("test",()=>{},e),M.removeEventListener("test",()=>{},e)}catch{}return n}();function An(n){return/^[\s\xa0]*$/.test(n)}function nr(){var n=M.navigator;return n&&(n=n.userAgent)?n:""}function De(n){return nr().indexOf(n)!=-1}function Zs(n){return Zs[" "](n),n}Zs[" "]=function(){};function Sg(n,e){var t=__;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Cg=De("Opera"),Kt=De("Trident")||De("MSIE"),Ec=De("Edge"),ds=Ec||Kt,wc=De("Gecko")&&!(nr().toLowerCase().indexOf("webkit")!=-1&&!De("Edge"))&&!(De("Trident")||De("MSIE"))&&!De("Edge"),Rg=nr().toLowerCase().indexOf("webkit")!=-1&&!De("Edge");function Ic(){var n=M.document;return n?n.documentMode:void 0}var fs;e:{var zr="",qr=function(){var n=nr();if(wc)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ec)return/Edge\/([\d\.]+)/.exec(n);if(Kt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Rg)return/WebKit\/(\S+)/.exec(n);if(Cg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(qr&&(zr=qr?qr[1]:""),Kt){var jr=Ic();if(jr!=null&&jr>parseFloat(zr)){fs=String(jr);break e}}fs=zr}var ps;if(M.document&&Kt){var Ea=Ic();ps=Ea||parseInt(fs,10)||void 0}else ps=void 0;var bg=ps;function Sn(n,e){if(pe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(wc){e:{try{Zs(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Pg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Sn.$.h.call(this)}}oe(Sn,pe);var Pg={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),kg=0;function Dg(n,e,t,i,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=r,this.key=++kg,this.fa=this.ia=!1}function ir(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function eo(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function xg(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Ac(n){const e={};for(const t in n)e[t]=n[t];return e}const wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sc(n,e){let t,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(t in i)n[t]=i[t];for(let s=0;s<wa.length;s++)t=wa[s],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function rr(n){this.src=n,this.g={},this.h=0}rr.prototype.add=function(n,e,t,i,r){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=gs(n,e,i,r);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Dg(e,this.src,s,!!i,r),e.ia=t,n.push(e)),e};function ms(n,e){var t=e.type;if(t in n.g){var i=n.g[t],r=Tc(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(ir(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function gs(n,e,t,i){for(var r=0;r<n.length;++r){var s=n[r];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==i)return r}return-1}var to="closure_lm_"+(1e6*Math.random()|0),Hr={};function Cc(n,e,t,i,r){if(i&&i.once)return bc(n,e,t,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Cc(n,e[s],t,i,r);return null}return t=ro(t),n&&n[qn]?n.O(e,t,zn(i)?!!i.capture:!!i,r):Rc(n,e,t,!1,i,r)}function Rc(n,e,t,i,r,s){if(!e)throw Error("Invalid event type");var o=zn(r)?!!r.capture:!!r,a=io(n);if(a||(n[to]=a=new rr(n)),t=a.add(e,t,i,o,s),t.proxy)return t;if(i=Og(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)Ag||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),i,r);else if(n.attachEvent)n.attachEvent(kc(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Og(){function n(t){return e.call(n.src,n.listener,t)}const e=Mg;return n}function bc(n,e,t,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)bc(n,e[s],t,i,r);return null}return t=ro(t),n&&n[qn]?n.P(e,t,zn(i)?!!i.capture:!!i,r):Rc(n,e,t,!0,i,r)}function Pc(n,e,t,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Pc(n,e[s],t,i,r);else i=zn(i)?!!i.capture:!!i,t=ro(t),n&&n[qn]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=gs(s,t,i,r),-1<t&&(ir(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=io(n))&&(e=n.g[e.toString()],n=-1,e&&(n=gs(e,t,i,r)),(t=-1<n?e[n]:null)&&no(t))}function no(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[qn])ms(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(kc(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=io(e))?(ms(t,n),t.h==0&&(t.src=null,e[to]=null)):ir(n)}}}function kc(n){return n in Hr?Hr[n]:Hr[n]="on"+n}function Mg(n,e){if(n.fa)n=!0;else{e=new Sn(e,this);var t=n.listener,i=n.la||n.src;n.ia&&no(n),n=t.call(i,e)}return n}function io(n){return n=n[to],n instanceof rr?n:null}var Gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ro(n){return typeof n=="function"?n:(n[Gr]||(n[Gr]=function(e){return n.handleEvent(e)}),n[Gr])}function se(){pt.call(this),this.i=new rr(this),this.S=this,this.J=null}oe(se,pt);se.prototype[qn]=!0;se.prototype.removeEventListener=function(n,e,t,i){Pc(this,n,e,t,i)};function ce(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new pe(e,n);else if(e instanceof pe)e.target=e.target||n;else{var r=e;e=new pe(i,n),Sc(e,r)}if(r=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];r=oi(o,i,!0,e)&&r}if(o=e.g=n,r=oi(o,i,!0,e)&&r,r=oi(o,i,!1,e)&&r,t)for(s=0;s<t.length;s++)o=e.g=t[s],r=oi(o,i,!1,e)&&r}se.prototype.N=function(){if(se.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)ir(t[i]);delete n.g[e],n.h--}}this.J=null};se.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};se.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function oi(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,l=o.la||o.src;o.ia&&ms(n.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var so=M.JSON.stringify;class Ng{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Lg(){var n=oo;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Vg{constructor(){this.h=this.g=null}add(e,t){const i=Dc.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var Dc=new Ng(()=>new Fg,n=>n.reset());class Fg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ug(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Bg(n){M.setTimeout(()=>{throw n},0)}let Cn,Rn=!1,oo=new Vg,xc=()=>{const n=M.Promise.resolve(void 0);Cn=()=>{n.then($g)}};var $g=()=>{for(var n;n=Lg();){try{n.h.call(n.g)}catch(t){Bg(t)}var e=Dc;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Rn=!1};function sr(n,e){se.call(this),this.h=n||1,this.g=e||M,this.j=fe(this.qb,this),this.l=Date.now()}oe(sr,se);S=sr.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ce(this,"tick"),this.ga&&(ao(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ao(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}S.N=function(){sr.$.N.call(this),ao(this),delete this.g};function lo(n,e,t){if(typeof n=="function")t&&(n=fe(n,t));else if(n&&typeof n.handleEvent=="function")n=fe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(n,e||0)}function Oc(n){n.g=lo(()=>{n.g=null,n.i&&(n.i=!1,Oc(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class zg extends pt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Oc(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(n){pt.call(this),this.h=n,this.g={}}oe(bn,pt);var Ia=[];function Mc(n,e,t,i){Array.isArray(t)||(t&&(Ia[0]=t.toString()),t=Ia);for(var r=0;r<t.length;r++){var s=Cc(e,t[r],i||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Nc(n){eo(n.g,function(e,t){this.g.hasOwnProperty(t)&&no(e)},n),n.g={}}bn.prototype.N=function(){bn.$.N.call(this),Nc(this)};bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function or(){this.g=!0}or.prototype.Ea=function(){this.g=!1};function qg(n,e,t,i,r,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function jg(n,e,t,i,r,s,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+t+`
`+s+" "+o})}function Ft(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Gg(n,t)+(i?" "+i:"")})}function Hg(n,e){n.info(function(){return"TIMEOUT: "+e})}or.prototype.info=function(){};function Gg(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return so(t)}catch{return e}}var xt={},Aa=null;function ar(){return Aa=Aa||new se}xt.Ta="serverreachability";function Lc(n){pe.call(this,xt.Ta,n)}oe(Lc,pe);function Pn(n){const e=ar();ce(e,new Lc(e))}xt.STAT_EVENT="statevent";function Vc(n,e){pe.call(this,xt.STAT_EVENT,n),this.stat=e}oe(Vc,pe);function ve(n){const e=ar();ce(e,new Vc(e,n))}xt.Ua="timingevent";function Fc(n,e){pe.call(this,xt.Ua,n),this.size=e}oe(Fc,pe);function jn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){n()},e)}var lr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Uc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function co(){}co.prototype.h=null;function Sa(n){return n.h||(n.h=n.i())}function Bc(){}var Hn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function uo(){pe.call(this,"d")}oe(uo,pe);function ho(){pe.call(this,"c")}oe(ho,pe);var _s;function cr(){}oe(cr,co);cr.prototype.g=function(){return new XMLHttpRequest};cr.prototype.i=function(){return{}};_s=new cr;function Gn(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new bn(this),this.P=Wg,n=ds?125:void 0,this.V=new sr(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var Wg=45e3,ys={},Vi={};S=Gn.prototype;S.setTimeout=function(n){this.P=n};function vs(n,e,t){n.L=1,n.v=hr(Xe(e)),n.s=t,n.S=!0,zc(n,null)}function zc(n,e){n.G=Date.now(),Wn(n),n.A=Xe(n.v);var t=n.A,i=n.W;Array.isArray(i)||(i=[String(i)]),Xc(t.i,"t",i),n.C=0,t=n.l.J,n.h=new $c,n.g=_u(n.l,t?e:null,!n.s),0<n.O&&(n.M=new zg(fe(n.Pa,n,n.g),n.O)),Mc(n.U,n.g,"readystatechange",n.nb),e=n.I?Ac(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Pn(),qg(n.j,n.u,n.A,n.m,n.W,n.s)}S.nb=function(n){n=n.target;const e=this.M;e&&Me(n)==3?e.l():this.Pa(n)};S.Pa=function(n){try{if(n==this.g)e:{const u=Me(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ds||this.g&&(this.h.h||this.g.ja()||Pa(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Pn(3):Pn(2)),ur(this);var t=this.g.da();this.ca=t;t:if(qc(this)){var i=Pa(this.g);n="";var r=i.length,s=Me(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yt(this),gn(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,jg(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!An(a)){var c=a;break t}}c=null}if(t=c)Ft(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ts(this,t);else{this.i=!1,this.o=3,ve(12),yt(this),gn(this);break e}}this.S?(jc(this,u,o),ds&&this.i&&u==3&&(Mc(this.U,this.V,"tick",this.mb),this.V.start())):(Ft(this.j,this.m,o,null),Ts(this,o)),u==4&&yt(this),this.i&&!this.J&&(u==4?fu(this.l,this):(this.i=!1,Wn(this)))}else p_(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ve(12)):(this.o=0,ve(13)),yt(this),gn(this)}}}catch{}finally{}};function qc(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function jc(n,e,t){let i=!0,r;for(;!n.J&&n.C<t.length;)if(r=Kg(n,t),r==Vi){e==4&&(n.o=4,ve(14),i=!1),Ft(n.j,n.m,null,"[Incomplete Response]");break}else if(r==ys){n.o=4,ve(15),Ft(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else Ft(n.j,n.m,r,null),Ts(n,r);qc(n)&&r!=Vi&&r!=ys&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ve(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),yo(e),e.M=!0,ve(11))):(Ft(n.j,n.m,t,"[Invalid Chunked Response]"),yt(n),gn(n))}S.mb=function(){if(this.g){var n=Me(this.g),e=this.g.ja();this.C<e.length&&(ur(this),jc(this,n,e),this.i&&n!=4&&Wn(this))}};function Kg(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?Vi:(t=Number(e.substring(t,i)),isNaN(t)?ys:(i+=1,i+t>e.length?Vi:(e=e.slice(i,i+t),n.C=i+t,e)))}S.cancel=function(){this.J=!0,yt(this)};function Wn(n){n.Y=Date.now()+n.P,Hc(n,n.P)}function Hc(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=jn(fe(n.lb,n),e)}function ur(n){n.B&&(M.clearTimeout(n.B),n.B=null)}S.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Hg(this.j,this.A),this.L!=2&&(Pn(),ve(17)),yt(this),this.o=2,gn(this)):Hc(this,this.Y-n)};function gn(n){n.l.H==0||n.J||fu(n.l,n)}function yt(n){ur(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,ao(n.V),Nc(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Ts(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Es(t.i,n))){if(!n.K&&Es(t.i,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Bi(t),pr(t);else break e;_o(t),ve(18)}}else t.Fa=r[1],0<t.Fa-t.V&&37500>r[2]&&t.G&&t.A==0&&!t.v&&(t.v=jn(fe(t.ib,t),6e3));if(1>=Zc(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else vt(t,11)}else if((n.K||t.g==n)&&Bi(t),!An(e))for(r=t.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const u=c[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=c[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,t.L=i,t.l.info("backChannelRequestTimeoutMs_="+i)),i=t;const p=n.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=i.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(fo(s,s.h),s.h=null))}if(i.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.Da=y,W(i.I,i.F,y))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=gu(i,i.J?i.pa:null,i.Y),o.K){eu(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(ur(a),Wn(a)),i.g=o}else hu(i);0<t.j.length&&mr(t)}else c[0]!="stop"&&c[0]!="close"||vt(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?vt(t,7):go(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}Pn(4)}catch{}}function Qg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(tr(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function Xg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(tr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function Gc(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(tr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Xg(n),i=Qg(n),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],t&&t[s],n)}var Wc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yg(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),r=null;if(0<=i){var s=n[t].substring(0,i);r=n[t].substring(i+1)}else s=n[t];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function wt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof wt){this.h=n.h,Fi(this,n.j),this.s=n.s,this.g=n.g,Ui(this,n.m),this.l=n.l;var e=n.i,t=new kn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Ca(this,t),this.o=n.o}else n&&(e=String(n).match(Wc))?(this.h=!1,Fi(this,e[1]||"",!0),this.s=hn(e[2]||""),this.g=hn(e[3]||"",!0),Ui(this,e[4]),this.l=hn(e[5]||"",!0),Ca(this,e[6]||"",!0),this.o=hn(e[7]||"")):(this.h=!1,this.i=new kn(null,this.h))}wt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(dn(e,Ra,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(dn(e,Ra,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(dn(t,t.charAt(0)=="/"?e_:Zg,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",dn(t,n_)),n.join("")};function Xe(n){return new wt(n)}function Fi(n,e,t){n.j=t?hn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ui(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Ca(n,e,t){e instanceof kn?(n.i=e,i_(n.i,n.h)):(t||(e=dn(e,t_)),n.i=new kn(e,n.h))}function W(n,e,t){n.i.set(e,t)}function hr(n){return W(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function hn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function dn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Jg),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Jg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ra=/[#\/\?@]/g,Zg=/[#\?:]/g,e_=/[#\?]/g,t_=/[#\?@]/g,n_=/#/g;function kn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function mt(n){n.g||(n.g=new Map,n.h=0,n.i&&Yg(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}S=kn.prototype;S.add=function(n,e){mt(this),this.i=null,n=tn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Kc(n,e){mt(n),e=tn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Qc(n,e){return mt(n),e=tn(n,e),n.g.has(e)}S.forEach=function(n,e){mt(this),this.g.forEach(function(t,i){t.forEach(function(r){n.call(e,r,i,this)},this)},this)};S.ta=function(){mt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const r=n[i];for(let s=0;s<r.length;s++)t.push(e[i])}return t};S.Z=function(n){mt(this);let e=[];if(typeof n=="string")Qc(this,n)&&(e=e.concat(this.g.get(tn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};S.set=function(n,e){return mt(this),this.i=null,n=tn(this,n),Qc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};S.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Xc(n,e,t){Kc(n,e),0<t.length&&(n.i=null,n.g.set(tn(n,e),Js(t)),n.h+=t.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),n.push(r)}}return this.i=n.join("&")};function tn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function i_(n,e){e&&!n.j&&(mt(n),n.i=null,n.g.forEach(function(t,i){var r=i.toLowerCase();i!=r&&(Kc(this,i),Xc(this,r,t))},n)),n.j=e}var r_=class{constructor(n,e){this.g=n,this.map=e}};function Yc(n){this.l=n||s_,M.PerformanceNavigationTiming?(n=M.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var s_=10;function Jc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Zc(n){return n.h?1:n.g?n.g.size:0}function Es(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function fo(n,e){n.g?n.g.add(e):n.h=e}function eu(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Yc.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function tu(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Js(n.i)}var o_=class{stringify(n){return M.JSON.stringify(n,void 0)}parse(n){return M.JSON.parse(n,void 0)}};function a_(){this.g=new o_}function l_(n,e,t){const i=t||"";try{Gc(n,function(r,s){let o=r;zn(r)&&(o=so(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function c_(n,e){const t=new or;if(M.Image){const i=new Image;i.onload=si(ai,t,i,"TestLoadImage: loaded",!0,e),i.onerror=si(ai,t,i,"TestLoadImage: error",!1,e),i.onabort=si(ai,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=si(ai,t,i,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function ai(n,e,t,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Kn(n){this.l=n.fc||null,this.j=n.ob||!1}oe(Kn,co);Kn.prototype.g=function(){return new dr(this.l,this.j)};Kn.prototype.i=function(n){return function(){return n}}({});function dr(n,e){se.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=po,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(dr,se);var po=0;S=dr.prototype;S.open=function(n,e){if(this.readyState!=po)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Dn(this)};S.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||M).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=po};S.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function nu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}S.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Qn(this):Dn(this),this.readyState==3&&nu(this)}};S.Za=function(n){this.g&&(this.response=this.responseText=n,Qn(this))};S.Ya=function(n){this.g&&(this.response=n,Qn(this))};S.ka=function(){this.g&&Qn(this)};function Qn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Dn(n)}S.setRequestHeader=function(n,e){this.v.append(n,e)};S.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Dn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(dr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var u_=M.JSON.parse;function Y(n){se.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=iu,this.L=this.M=!1}oe(Y,se);var iu="",h_=/^https?$/i,d_=["POST","PUT"];S=Y.prototype;S.Oa=function(n){this.M=n};S.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_s.g(),this.C=this.u?Sa(this.u):Sa(_s),this.g.onreadystatechange=fe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){ba(this,s);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)t.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())t.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),r=M.FormData&&n instanceof M.FormData,!(0<=Tc(d_,e))||i||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ou(this),0<this.B&&((this.L=f_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=fe(this.ua,this)):this.A=lo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){ba(this,s)}};function f_(n){return Kt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}S.ua=function(){typeof Ys<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ce(this,"timeout"),this.abort(8))};function ba(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,ru(n),fr(n)}function ru(n){n.F||(n.F=!0,ce(n,"complete"),ce(n,"error"))}S.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ce(this,"complete"),ce(this,"abort"),fr(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fr(this,!0)),Y.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?su(this):this.kb())};S.kb=function(){su(this)};function su(n){if(n.h&&typeof Ys<"u"&&(!n.C[1]||Me(n)!=4||n.da()!=2)){if(n.v&&Me(n)==4)lo(n.La,0,n);else if(ce(n,"readystatechange"),Me(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var r=String(n.I).match(Wc)[1]||null;!r&&M.self&&M.self.location&&(r=M.self.location.protocol.slice(0,-1)),i=!h_.test(r?r.toLowerCase():"")}t=i}if(t)ce(n,"complete"),ce(n,"success");else{n.m=6;try{var s=2<Me(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",ru(n)}}finally{fr(n)}}}}function fr(n,e){if(n.g){ou(n);const t=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||ce(n,"ready");try{t.onreadystatechange=i}catch{}}}function ou(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(M.clearTimeout(n.A),n.A=null)}S.isActive=function(){return!!this.g};function Me(n){return n.g?n.g.readyState:0}S.da=function(){try{return 2<Me(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),u_(e)}};function Pa(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case iu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function p_(n){const e={};n=(n.g&&2<=Me(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(An(n[i]))continue;var t=Ug(n[i]);const r=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[r]||[];e[r]=s,s.push(t)}xg(e,function(i){return i.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function au(n){let e="";return eo(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function mo(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=au(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):W(n,e,t))}function cn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function lu(n){this.Ga=0,this.j=[],this.l=new or,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=cn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=cn("baseRetryDelayMs",5e3,n),this.hb=cn("retryDelaySeedMs",1e4,n),this.eb=cn("forwardChannelMaxRetries",2,n),this.xa=cn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Yc(n&&n.concurrentRequestLimit),this.Ja=new a_,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=lu.prototype;S.ra=8;S.H=1;function go(n){if(cu(n),n.H==3){var e=n.W++,t=Xe(n.I);if(W(t,"SID",n.K),W(t,"RID",e),W(t,"TYPE","terminate"),Xn(n,t),e=new Gn(n,n.l,e),e.L=2,e.v=hr(Xe(t)),t=!1,M.navigator&&M.navigator.sendBeacon)try{t=M.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&M.Image&&(new Image().src=e.v,t=!0),t||(e.g=_u(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Wn(e)}mu(n)}function pr(n){n.g&&(yo(n),n.g.cancel(),n.g=null)}function cu(n){pr(n),n.u&&(M.clearTimeout(n.u),n.u=null),Bi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&M.clearTimeout(n.m),n.m=null)}function mr(n){if(!Jc(n.i)&&!n.m){n.m=!0;var e=n.Na;Cn||xc(),Rn||(Cn(),Rn=!0),oo.add(e,n),n.C=0}}function m_(n,e){return Zc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=jn(fe(n.Na,n,e),pu(n,n.C)),n.C++,!0)}S.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const r=new Gn(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Ac(s),Sc(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var i=this.j[t];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=uu(this,r,e),t=Xe(this.I),W(t,"RID",n),W(t,"CVER",22),this.F&&W(t,"X-HTTP-Session-Id",this.F),Xn(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(au(s)))+"&"+e:this.o&&mo(t,this.o,s)),fo(this.i,r),this.bb&&W(t,"TYPE","init"),this.P?(W(t,"$req",e),W(t,"SID","null"),r.aa=!0,vs(r,t,null)):vs(r,t,e),this.H=2}}else this.H==3&&(n?ka(this,n):this.j.length==0||Jc(this.i)||ka(this))};function ka(n,e){var t;e?t=e.m:t=n.W++;const i=Xe(n.I);W(i,"SID",n.K),W(i,"RID",t),W(i,"AID",n.V),Xn(n,i),n.o&&n.s&&mo(i,n.o,n.s),t=new Gn(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=uu(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),fo(n.i,t),vs(t,i,e)}function Xn(n,e){n.na&&eo(n.na,function(t,i){W(e,i,t)}),n.h&&Gc({},function(t,i){W(e,i,t)})}function uu(n,e,t){t=Math.min(n.j.length,t);var i=n.h?fe(n.h.Va,n.h,n):null;e:{var r=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<t;l++){let c=r[l].g;const u=r[l].map;if(c-=s,0>c)s=Math.max(0,r[l].g-100),a=!1;else try{l_(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,i}function hu(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Cn||xc(),Rn||(Cn(),Rn=!0),oo.add(e,n),n.A=0}}function _o(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=jn(fe(n.Ma,n),pu(n,n.A)),n.A++,!0)}S.Ma=function(){if(this.u=null,du(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=jn(fe(this.jb,this),n)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ve(10),pr(this),du(this))};function yo(n){n.B!=null&&(M.clearTimeout(n.B),n.B=null)}function du(n){n.g=new Gn(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Xe(n.wa);W(e,"RID","rpc"),W(e,"SID",n.K),W(e,"AID",n.V),W(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&W(e,"TO",n.qa),W(e,"TYPE","xmlhttp"),Xn(n,e),n.o&&n.s&&mo(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=hr(Xe(e)),t.s=null,t.S=!0,zc(t,n)}S.ib=function(){this.v!=null&&(this.v=null,pr(this),_o(this),ve(19))};function Bi(n){n.v!=null&&(M.clearTimeout(n.v),n.v=null)}function fu(n,e){var t=null;if(n.g==e){Bi(n),yo(n),n.g=null;var i=2}else if(Es(n.i,e))t=e.F,eu(n.i,e),i=1;else return;if(n.H!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var r=n.C;i=ar(),ce(i,new Fc(i,t)),mr(n)}else hu(n);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&m_(n,e)||i==2&&_o(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),r){case 1:vt(n,5);break;case 4:vt(n,10);break;case 3:vt(n,6);break;default:vt(n,2)}}}function pu(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function vt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var i=fe(n.pb,n);t||(t=new wt("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||Fi(t,"https"),hr(t)),c_(t.toString(),i)}else ve(2);n.H=0,n.h&&n.h.za(e),mu(n),cu(n)}S.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ve(2)):(this.l.info("Failed to ping google.com"),ve(1))};function mu(n){if(n.H=0,n.ma=[],n.h){const e=tu(n.i);(e.length!=0||n.j.length!=0)&&(Ta(n.ma,e),Ta(n.ma,n.j),n.i.i.length=0,Js(n.j),n.j.length=0),n.h.ya()}}function gu(n,e,t){var i=t instanceof wt?Xe(t):new wt(t);if(i.g!="")e&&(i.g=e+"."+i.g),Ui(i,i.m);else{var r=M.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new wt(null);i&&Fi(s,i),e&&(s.g=e),r&&Ui(s,r),t&&(s.l=t),i=s}return t=n.F,e=n.Da,t&&e&&W(i,t,e),W(i,"VER",n.ra),Xn(n,i),i}function _u(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Y(new Kn({ob:!0})):new Y(n.va),e.Oa(n.J),e}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function yu(){}S=yu.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function $i(){if(Kt&&!(10<=Number(bg)))throw Error("Environmental error: no available transport.")}$i.prototype.g=function(n,e){return new Ae(n,e)};function Ae(n,e){se.call(this),this.g=new lu(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!An(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!An(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new nn(this)}oe(Ae,se);Ae.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ve(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=gu(n,null,n.Y),mr(n)};Ae.prototype.close=function(){go(this.g)};Ae.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=so(n),n=t);e.j.push(new r_(e.fb++,n)),e.H==3&&mr(e)};Ae.prototype.N=function(){this.g.h=null,delete this.j,go(this.g),delete this.g,Ae.$.N.call(this)};function vu(n){uo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}oe(vu,uo);function Tu(){ho.call(this),this.status=1}oe(Tu,ho);function nn(n){this.g=n}oe(nn,yu);nn.prototype.Ba=function(){ce(this.g,"a")};nn.prototype.Aa=function(n){ce(this.g,new vu(n))};nn.prototype.za=function(n){ce(this.g,new Tu)};nn.prototype.ya=function(){ce(this.g,"b")};function g_(){this.blockSize=-1}function Pe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}oe(Pe,g_);Pe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wr(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(r=0;16>r;++r)i[r]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],r=n.g[2];var s=n.g[3],o=e+(s^t&(r^s))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[3]+3250441966&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(s^t&(r^s))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[7]+4249261313&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(s^t&(r^s))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[11]+2304563134&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(s^t&(r^s))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[15]+1236535329&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(t^r))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[0]+3921069994&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(t^r))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[4]+3889429448&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(t^r))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[8]+1163531501&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(t^r))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[12]+2368359562&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(t^r^s)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[14]+4259657740&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^s)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[10]+3200236656&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^s)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[6]+76029189&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^s)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[2]+3299628645&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(r^(t|~s))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[5]+4237533241&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~s))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[1]+2240044497&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~s))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[13]+1309151649&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~s))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+r&4294967295,n.g[3]=n.g[3]+s&4294967295}Pe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=t;)Wr(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(i[r++]=n.charCodeAt(s++),r==this.blockSize){Wr(this,i),r=0;break}}else for(;s<e;)if(i[r++]=n[s++],r==this.blockSize){Wr(this,i),r=0;break}}this.h=r,this.i+=e};Pe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function G(n,e){this.h=e;for(var t=[],i=!0,r=n.length-1;0<=r;r--){var s=n[r]|0;i&&s==e||(t[r]=s,i=!1)}this.g=t}var __={};function vo(n){return-128<=n&&128>n?Sg(n,function(e){return new G([e|0],0>e?-1:0)}):new G([n|0],0>n?-1:0)}function Ne(n){if(isNaN(n)||!isFinite(n))return $t;if(0>n)return le(Ne(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=ws;return new G(e,0)}function Eu(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return le(Eu(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ne(Math.pow(e,8)),i=$t,r=0;r<n.length;r+=8){var s=Math.min(8,n.length-r),o=parseInt(n.substring(r,r+s),e);8>s?(s=Ne(Math.pow(e,s)),i=i.R(s).add(Ne(o))):(i=i.R(t),i=i.add(Ne(o)))}return i}var ws=4294967296,$t=vo(0),Is=vo(1),Da=vo(16777216);S=G.prototype;S.ea=function(){if(Re(this))return-le(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:ws+i)*e,e*=ws}return n};S.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ge(this))return"0";if(Re(this))return"-"+le(this).toString(n);for(var e=Ne(Math.pow(n,6)),t=this,i="";;){var r=qi(t,e).g;t=zi(t,r.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=r,Ge(t))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};S.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ge(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Re(n){return n.h==-1}S.X=function(n){return n=zi(this,n),Re(n)?-1:Ge(n)?0:1};function le(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new G(t,~n.h).add(Is)}S.abs=function(){return Re(this)?le(this):this};S.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(n.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(n.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,t[r]=o<<16|s}return new G(t,t[t.length-1]&-2147483648?-1:0)};function zi(n,e){return n.add(le(e))}S.R=function(n){if(Ge(this)||Ge(n))return $t;if(Re(this))return Re(n)?le(this).R(le(n)):le(le(this).R(n));if(Re(n))return le(this.R(le(n)));if(0>this.X(Da)&&0>n.X(Da))return Ne(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<n.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(r)>>>16,l=n.D(r)&65535;t[2*i+2*r]+=o*l,li(t,2*i+2*r),t[2*i+2*r+1]+=s*l,li(t,2*i+2*r+1),t[2*i+2*r+1]+=o*a,li(t,2*i+2*r+1),t[2*i+2*r+2]+=s*a,li(t,2*i+2*r+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new G(t,0)};function li(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function un(n,e){this.g=n,this.h=e}function qi(n,e){if(Ge(e))throw Error("division by zero");if(Ge(n))return new un($t,$t);if(Re(n))return e=qi(le(n),e),new un(le(e.g),le(e.h));if(Re(e))return e=qi(n,le(e)),new un(le(e.g),e.h);if(30<n.g.length){if(Re(n)||Re(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Is,i=e;0>=i.X(n);)t=xa(t),i=xa(i);var r=Ot(t,1),s=Ot(i,1);for(i=Ot(i,2),t=Ot(t,2);!Ge(i);){var o=s.add(i);0>=o.X(n)&&(r=r.add(t),s=o),i=Ot(i,1),t=Ot(t,1)}return e=zi(n,r.R(e)),new un(r,e)}for(r=$t;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Ne(t),o=s.R(e);Re(o)||0<o.X(n);)t-=i,s=Ne(t),o=s.R(e);Ge(s)&&(s=Is),r=r.add(s),n=zi(n,o)}return new un(r,n)}S.gb=function(n){return qi(this,n).h};S.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new G(t,this.h&n.h)};S.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new G(t,this.h|n.h)};S.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new G(t,this.h^n.h)};function xa(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new G(t,n.h)}function Ot(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,r=[],s=0;s<i;s++)r[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new G(r,n.h)}$i.prototype.createWebChannel=$i.prototype.g;Ae.prototype.send=Ae.prototype.u;Ae.prototype.open=Ae.prototype.m;Ae.prototype.close=Ae.prototype.close;lr.NO_ERROR=0;lr.TIMEOUT=8;lr.HTTP_ERROR=6;Uc.COMPLETE="complete";Bc.EventType=Hn;Hn.OPEN="a";Hn.CLOSE="b";Hn.ERROR="c";Hn.MESSAGE="d";se.prototype.listen=se.prototype.O;Y.prototype.listenOnce=Y.prototype.P;Y.prototype.getLastError=Y.prototype.Sa;Y.prototype.getLastErrorCode=Y.prototype.Ia;Y.prototype.getStatus=Y.prototype.da;Y.prototype.getResponseJson=Y.prototype.Wa;Y.prototype.getResponseText=Y.prototype.ja;Y.prototype.send=Y.prototype.ha;Y.prototype.setWithCredentials=Y.prototype.Oa;Pe.prototype.digest=Pe.prototype.l;Pe.prototype.reset=Pe.prototype.reset;Pe.prototype.update=Pe.prototype.j;G.prototype.add=G.prototype.add;G.prototype.multiply=G.prototype.R;G.prototype.modulo=G.prototype.gb;G.prototype.compare=G.prototype.X;G.prototype.toNumber=G.prototype.ea;G.prototype.toString=G.prototype.toString;G.prototype.getBits=G.prototype.D;G.fromNumber=Ne;G.fromString=Eu;var y_=function(){return new $i},v_=function(){return ar()},Kr=lr,T_=Uc,E_=xt,Oa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},w_=Kn,ci=Bc,I_=Y,A_=Pe,zt=G;const Ma="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}he.UNAUTHENTICATED=new he(null),he.GOOGLE_CREDENTIALS=new he("google-credentials-uid"),he.FIRST_PARTY=new he("first-party-uid"),he.MOCK_USER=new he("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Bs("@firebase/firestore");function Na(){return bt.logLevel}function b(n,...e){if(bt.logLevel<=$.DEBUG){const t=e.map(To);bt.debug(`Firestore (${rn}): ${n}`,...t)}}function Ye(n,...e){if(bt.logLevel<=$.ERROR){const t=e.map(To);bt.error(`Firestore (${rn}): ${n}`,...t)}}function Qt(n,...e){if(bt.logLevel<=$.WARN){const t=e.map(To);bt.warn(`Firestore (${rn}): ${n}`,...t)}}function To(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(n="Unexpected state"){const e=`FIRESTORE (${rn}) INTERNAL ASSERTION FAILED: `+n;throw Ye(e),new Error(e)}function ne(n,e){n||V()}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(he.UNAUTHENTICATED))}shutdown(){}}class C_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class R_{constructor(e){this.t=e,this.currentUser=he.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const r=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let s=new It;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new It,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new It)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ne(typeof i.accessToken=="string"),new wu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new he(e)}}class b_{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=he.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class P_{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new b_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(he.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string"),this.R=t.token,new k_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=x_(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%e.length))}return i}}function j(n,e){return n<e?-1:n>e?1:0}function Xt(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Ee(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.timestamp=e}static fromTimestamp(e){return new L(e)}static min(){return new L(new Ee(0,0))}static max(){return new L(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,i){t===void 0?t=0:t>e.length&&V(),i===void 0?i=e.length-t:i>e.length-t&&V(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xn?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=e.get(r),o=t.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class X extends xn{construct(e,t,i){return new X(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new x(A.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new X(t)}static emptyPath(){return new X([])}}const M_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends xn{construct(e,t,i){return new Te(e,t,i)}static isValidIdentifier(e){return M_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new x(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new x(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new x(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(X.fromString(e))}static fromName(e){return new O(X.fromString(e).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&X.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return X.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new X(e.slice()))}}function N_(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=L.fromTimestamp(i===1e9?new Ee(t+1,0):new Ee(t,i));return new ut(r,O.empty(),e)}function L_(n){return new ut(n.readTime,n.key,-1)}class ut{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ut(L.min(),O.empty(),-1)}static max(){return new ut(L.max(),O.empty(),-1)}}function V_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(n){if(n.code!==A.FAILED_PRECONDITION||n.message!==F_)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new E((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof E?t:E.resolve(t)}catch(t){return E.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):E.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):E.reject(t)}static resolve(e){return new E((t,i)=>{t(e)})}static reject(e){return new E((t,i)=>{i(e)})}static waitFor(e){return new E((t,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&t()},l=>i(l))}),o=!0,s===r&&t()})}static or(e){let t=E.resolve(!1);for(const i of e)t=t.next(r=>r?E.resolve(r):i());return t}static forEach(e,t){const i=[];return e.forEach((r,s)=>{i.push(t.call(this,r,s))}),this.waitFor(i)}static mapArray(e,t){return new E((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,t){return new E((i,r)=>{const s=()=>{e()===!0?t().next(()=>{s()},r):i()};s()})}}function Yn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}wo.ae=-1;function gr(n){return n==null}function As(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _r(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function B_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ui(this.root,e,this.comparator,!0)}}class ui{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??ae.RED,this.left=r??ae.EMPTY,this.right=s??ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,s){return new ae(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ae.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(e,t,i,r,s){return this}insert(e,t,i){return new ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Va(this.data.getIterator())}getIteratorFrom(e){return new Va(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class Va{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new st([])}unionWith(e){let t=new me(Te.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xt(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Iu("Invalid base64 string: "+s):s}}(e);return new _e(t)}static fromUint8Array(e){const t=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const $_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(n){if(ne(!!n),typeof n=="string"){let e=0;const t=$_.exec(n);if(ne(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pt(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ao(n){const e=n.mapValue.fields.__previous_value__;return Io(e)?Ao(e):e}function On(n){const e=ht(n.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t,i,r,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Mn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Io(n)?4:q_(n)?9007199254740991:10:V()}function Ue(n,e){if(n===e)return!0;const t=kt(n);if(t!==kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return On(n).isEqual(On(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=ht(r.timestampValue),a=ht(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return Pt(r.bytesValue).isEqual(Pt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return ee(r.geoPointValue.latitude)===ee(s.geoPointValue.latitude)&&ee(r.geoPointValue.longitude)===ee(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ee(r.integerValue)===ee(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=ee(r.doubleValue),a=ee(s.doubleValue);return o===a?As(o)===As(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Xt(n.arrayValue.values||[],e.arrayValue.values||[],Ue);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(La(o)!==La(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ue(o[l],a[l])))return!1;return!0}(n,e);default:return V()}}function Nn(n,e){return(n.values||[]).find(t=>Ue(t,e))!==void 0}function Yt(n,e){if(n===e)return 0;const t=kt(n),i=kt(e);if(t!==i)return j(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ee(s.integerValue||s.doubleValue),l=ee(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return Fa(n.timestampValue,e.timestampValue);case 4:return Fa(On(n),On(e));case 5:return j(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Pt(s),l=Pt(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=j(a[c],l[c]);if(u!==0)return u}return j(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=j(ee(s.latitude),ee(o.latitude));return a!==0?a:j(ee(s.longitude),ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Yt(a[c],l[c]);if(u)return u}return j(a.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===hi.mapValue&&o===hi.mapValue)return 0;if(s===hi.mapValue)return 1;if(o===hi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=j(l[h],u[h]);if(f!==0)return f;const p=Yt(a[l[h]],c[u[h]]);if(p!==0)return p}return j(l.length,u.length)}(n.mapValue,e.mapValue);default:throw V()}}function Fa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=ht(n),i=ht(e),r=j(t.seconds,i.seconds);return r!==0?r:j(t.nanos,i.nanos)}function Jt(n){return Ss(n)}function Ss(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=ht(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Pt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",r=!0;for(const s of t.values||[])r?r=!1:i+=",",i+=Ss(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${Ss(t.fields[o])}`;return r+"}"}(n.mapValue):V()}function Cs(n){return!!n&&"integerValue"in n}function So(n){return!!n&&"arrayValue"in n}function Ua(n){return!!n&&"nullValue"in n}function Ba(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qr(n){return!!n&&"mapValue"in n}function _n(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return _r(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=_n(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_n(n.arrayValue.values[t]);return e}return Object.assign({},n)}function q_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Qr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_n(t)}setAll(e){let t=Te.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,r),i={},r=[],t=a.popLast()}o?i[a.lastSegment()]=_n(o):r.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());Qr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ue(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];Qr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){_r(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new xe(_n(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t,i,r,s,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new de(e,0,L.min(),L.min(),L.min(),xe.empty(),0)}static newFoundDocument(e,t,i,r){return new de(e,1,t,L.min(),i,r,0)}static newNoDocument(e,t){return new de(e,2,t,L.min(),L.min(),xe.empty(),0)}static newUnknownDocument(e,t){return new de(e,3,t,L.min(),L.min(),xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.position=e,this.inclusive=t}}function $a(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){const s=e[r],o=n.position[r];if(s.field.isKeyField()?i=O.comparator(O.fromName(o.referenceValue),t.key):i=Yt(o,t.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function za(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ue(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t="asc"){this.field=e,this.dir=t}}function j_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{}class te extends Au{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new G_(e,t,i):t==="array-contains"?new Q_(e,i):t==="in"?new X_(e,i):t==="not-in"?new Y_(e,i):t==="array-contains-any"?new J_(e,i):new te(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new W_(e,i):new K_(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Yt(t,this.value)):t!==null&&kt(this.value)===kt(t)&&this.matchesComparison(Yt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Be extends Au{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Be(e,t)}matches(e){return Su(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Su(n){return n.op==="and"}function Cu(n){return H_(n)&&Su(n)}function H_(n){for(const e of n.filters)if(e instanceof Be)return!1;return!0}function Rs(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+Jt(n.value);if(Cu(n))return n.filters.map(e=>Rs(e)).join(",");{const e=n.filters.map(t=>Rs(t)).join(",");return`${n.op}(${e})`}}function Ru(n,e){return n instanceof te?function(i,r){return r instanceof te&&i.op===r.op&&i.field.isEqual(r.field)&&Ue(i.value,r.value)}(n,e):n instanceof Be?function(i,r){return r instanceof Be&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&Ru(o,r.filters[a]),!0):!1}(n,e):void V()}function bu(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${Jt(t.value)}`}(n):n instanceof Be?function(t){return t.op.toString()+" {"+t.getFilters().map(bu).join(" ,")+"}"}(n):"Filter"}class G_ extends te{constructor(e,t,i){super(e,t,i),this.key=O.fromName(i.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class W_ extends te{constructor(e,t){super(e,"in",t),this.keys=Pu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class K_ extends te{constructor(e,t){super(e,"not-in",t),this.keys=Pu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Pu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>O.fromName(i.referenceValue))}class Q_ extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return So(t)&&Nn(t.arrayValue,this.value)}}class X_ extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nn(this.value.arrayValue,t)}}class Y_ extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Nn(this.value.arrayValue,t)}}class J_ extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!So(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Nn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function qa(n,e=null,t=[],i=[],r=null,s=null,o=null){return new Z_(n,e,t,i,r,s,o)}function Co(n){const e=z(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Rs(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),gr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Jt(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Jt(i)).join(",")),e.he=t}return e.he}function Ro(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!j_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ru(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!za(n.startAt,e.startAt)&&za(n.endAt,e.endAt)}function bs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function ey(n,e,t,i,r,s,o,a){return new yr(n,e,t,i,r,s,o,a)}function ku(n){return new yr(n)}function ja(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ty(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ny(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function iy(n){return n.collectionGroup!==null}function qt(n){const e=z(n);if(e.Pe===null){e.Pe=[];const t=ny(e),i=ty(e);if(t!==null&&i===null)t.isKeyField()||e.Pe.push(new yn(t)),e.Pe.push(new yn(Te.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new yn(Te.keyField(),s))}}}return e.Pe}function Je(n){const e=z(n);if(!e.Ie)if(e.limitType==="F")e.Ie=qa(e.path,e.collectionGroup,qt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of qt(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new yn(s.field,o))}const i=e.endAt?new ji(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ji(e.startAt.position,e.startAt.inclusive):null;e.Ie=qa(e.path,e.collectionGroup,t,e.filters,e.limit,i,r)}return e.Ie}function Ps(n,e,t){return new yr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vr(n,e){return Ro(Je(n),Je(e))&&n.limitType===e.limitType}function Du(n){return`${Co(Je(n))}|lt:${n.limitType}`}function ks(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(r=>bu(r)).join(", ")}]`),gr(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(r=>Jt(r)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(r=>Jt(r)).join(",")),`Target(${i})`}(Je(n))}; limitType=${n.limitType})`}function Tr(n,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):O.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,e)&&function(i,r){for(const s of qt(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(i,r){return!(i.startAt&&!function(o,a,l){const c=$a(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,qt(i),r)||i.endAt&&!function(o,a,l){const c=$a(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,qt(i),r))}(n,e)}function ry(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xu(n){return(e,t)=>{let i=!1;for(const r of qt(n)){const s=sy(r,e,t);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function sy(n,e,t){const i=n.field.isKeyField()?O.comparator(e.key,t.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Yt(l,c):V()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return V()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,(t,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new J(O.comparator);function dt(){return oy}const Ou=new J(O.comparator);function fn(...n){let e=Ou;for(const t of n)e=e.insert(t.key,t);return e}function ay(n){let e=Ou;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Tt(){return vn()}function Mu(){return vn()}function vn(){return new sn(n=>n.toString(),(n,e)=>n.isEqual(e))}const ly=new me(O.comparator);function B(...n){let e=ly;for(const t of n)e=e.add(t);return e}const cy=new me(j);function uy(){return cy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:As(e)?"-0":e}}function dy(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this._=void 0}}function fy(n,e,t){return n instanceof Ds?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Io(s)&&(s=Ao(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Hi?Nu(n,e):n instanceof Gi?Lu(n,e):function(r,s){const o=my(r,s),a=Ha(o)+Ha(r.Te);return Cs(o)&&Cs(r.Te)?dy(a):hy(r.serializer,a)}(n,e)}function py(n,e,t){return n instanceof Hi?Nu(n,e):n instanceof Gi?Lu(n,e):t}function my(n,e){return n instanceof xs?function(i){return Cs(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class Ds extends Er{}class Hi extends Er{constructor(e){super(),this.elements=e}}function Nu(n,e){const t=Vu(e);for(const i of n.elements)t.some(r=>Ue(r,i))||t.push(i);return{arrayValue:{values:t}}}class Gi extends Er{constructor(e){super(),this.elements=e}}function Lu(n,e){let t=Vu(e);for(const i of n.elements)t=t.filter(r=>!Ue(r,i));return{arrayValue:{values:t}}}class xs extends Er{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Ha(n){return ee(n.integerValue||n.doubleValue)}function Vu(n){return So(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function gy(n,e){return n.field.isEqual(e.field)&&function(i,r){return i instanceof Hi&&r instanceof Hi||i instanceof Gi&&r instanceof Gi?Xt(i.elements,r.elements,Ue):i instanceof xs&&r instanceof xs?Ue(i.Te,r.Te):i instanceof Ds&&r instanceof Ds}(n.transform,e.transform)}class At{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new At}static exists(e){return new At(void 0,e)}static updateTime(e){return new At(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bo{}function Fu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yy(n.key,At.none()):new Po(n.key,n.data,At.none());{const t=n.data,i=xe.empty();let r=new me(Te.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new wr(n.key,i,new st(r.toArray()),At.none())}}function _y(n,e,t){n instanceof Po?function(r,s,o){const a=r.value.clone(),l=Wa(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof wr?function(r,s,o){if(!wi(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Wa(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Uu(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Tn(n,e,t,i){return n instanceof Po?function(s,o,a,l){if(!wi(s.precondition,o))return a;const c=s.value.clone(),u=Ka(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof wr?function(s,o,a,l){if(!wi(s.precondition,o))return a;const c=Ka(s.fieldTransforms,l,o),u=o.data;return u.setAll(Uu(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,i):function(s,o,a){return wi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function Ga(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Xt(i,r,(s,o)=>gy(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Po extends bo{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class wr extends bo{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Uu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Wa(n,e,t){const i=new Map;ne(n.length===t.length);for(let r=0;r<t.length;r++){const s=n[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,py(o,a,t[r]))}return i}function Ka(n,e,t){const i=new Map;for(const r of n){const s=r.transform,o=t.data.field(r.field);i.set(r.field,fy(s,o,e))}return i}class yy extends bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&_y(s,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Tn(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Tn(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Mu();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(r.key)?null:a;const l=Fu(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(L.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),B())}isEqual(e){return this.batchId===e.batchId&&Xt(this.mutations,e.mutations,(t,i)=>Ga(t,i))&&Xt(this.baseMutations,e.baseMutations,(t,i)=>Ga(t,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,U;function Bu(n){if(n===void 0)return Ye("GRPC error has no .code"),A.UNKNOWN;switch(n){case Z.OK:return A.OK;case Z.CANCELLED:return A.CANCELLED;case Z.UNKNOWN:return A.UNKNOWN;case Z.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Z.INTERNAL:return A.INTERNAL;case Z.UNAVAILABLE:return A.UNAVAILABLE;case Z.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Z.NOT_FOUND:return A.NOT_FOUND;case Z.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Z.ABORTED:return A.ABORTED;case Z.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Z.DATA_LOSS:return A.DATA_LOSS;default:return V()}}(U=Z||(Z={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return di}static getOrCreateInstance(){return di===null&&(di=new ko),di}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let di=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new zt([4294967295,4294967295],0);function Qa(n){const e=wy().encode(n),t=new A_;return t.update(e),new Uint8Array(t.digest())}function Xa(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zt([t,i],0),new zt([r,s],0)]}class Do{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new pn(`Invalid padding: ${t}`);if(i<0)throw new pn(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new pn(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new pn(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=zt.fromNumber(this.de)}Re(e,t,i){let r=e.add(t.multiply(zt.fromNumber(i)));return r.compare(Iy)===1&&(r=new zt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=Qa(e),[i,r]=Xa(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(i,r,s);if(!this.Ve(o))return!1}return!0}static create(e,t,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Do(s,r,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=Qa(e),[i,r]=Xa(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(i,r,s);this.me(o)}}me(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,i,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,Jn.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ir(L.min(),r,new J(j),dt(),B())}}class Jn{constructor(e,t,i,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Jn(i,t,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,i,r){this.fe=e,this.removedTargetIds=t,this.key=i,this.ge=r}}class $u{constructor(e,t){this.targetId=e,this.pe=t}}class zu{constructor(e,t,i=_e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class Ya{constructor(){this.ye=0,this.we=Za(),this.Se=_e.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=B(),t=B(),i=B();return this.we.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:V()}}),new Jn(this.Se,this.be,e,t,i)}xe(){this.De=!1,this.we=Za()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Ay{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=dt(),this.$e=Ja(),this.Ue=new J(j)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Fe(e.resumeToken);break;case 1:i.Le(),i.ve||i.xe(),i.Fe(e.resumeToken);break;case 2:i.Le(),i.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(i.ke(),i.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Fe(e.resumeToken));break;default:V()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((i,r)=>{this.Je(r)&&t(r)})}Ze(e){var t,i;const r=e.targetId,s=e.pe.count,o=this.Xe(r);if(o){const a=o.target;if(bs(a))if(s===0){const l=new O(a.path);this.ze(r,l,de.newNoDocument(l,L.min()))}else ne(s===1);else{const l=this.et(r);if(l!==s){const c=this.tt(e,l);if(c.status!==0){this.Ye(r);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,u)}(t=ko.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,f,p,m){var y,v,d,g,_,T;const I={localCacheCount:p,existenceFilterCount:m.count},R=m.unchangedNames;return R&&(I.bloomFilter={applied:h===0,hashCount:(y=R?.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(g=(d=(v=R?.bits)===null||v===void 0?void 0:v.bitmap)===null||d===void 0?void 0:d.length)!==null&&g!==void 0?g:0,padding:(T=(_=R?.bits)===null||_===void 0?void 0:_.padding)!==null&&T!==void 0?T:0},f&&(I.bloomFilter.mightContain=f)),I}(c.status,(i=c.nt)!==null&&i!==void 0?i:null,l,e.pe))}}}}tt(e,t){const{unchangedNames:i,count:r}=e.pe;if(!i||!i.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=Pt(s).toUint8Array()}catch(h){if(h instanceof Iu)return Qt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Do(l,o,a)}catch(h){return Qt(h instanceof pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return c.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return c.de===0?{status:1}:{status:r===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const i=this.qe.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{t(s.path.canonicalString())||(this.ze(e,s,null),r++)}),r}st(e){const t=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&bs(a.target)){const l=new O(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,de.newNoDocument(l,e))}s.Ce&&(t.set(o,s.Me()),s.xe())}});let i=B();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const r=new Ir(e,t,this.Ue,this.Ke,i);return this.Ke=dt(),this.$e=Ja(),this.Ue=new J(j),r}Ge(e,t){if(!this.Je(e))return;const i=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,i),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const r=this.He(e);this.ot(e,t)?r.Oe(t,1):r.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),i&&(this.Ke=this.Ke.insert(t,i))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new Ya,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new me(j),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||b("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Ya),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function Ja(){return new J(O.comparator)}function Za(){return new J(O.comparator)}const Sy={asc:"ASCENDING",desc:"DESCENDING"},Cy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ry={and:"AND",or:"OR"};class by{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Os(n,e){return n.useProto3Json||gr(e)?e:{value:e}}function Py(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ky(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jt(n){return ne(!!n),L.fromTimestamp(function(t){const i=ht(t);return new Ee(i.seconds,i.nanos)}(n))}function Dy(n,e){return function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents").child(e).canonicalString()}function qu(n){const e=X.fromString(n);return ne(Wu(e)),e}function Xr(n,e){const t=qu(e);if(t.get(1)!==n.databaseId.projectId)throw new x(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(ju(t))}function Ms(n,e){return Dy(n.databaseId,e)}function xy(n){const e=qu(n);return e.length===4?X.emptyPath():ju(e)}function el(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ju(n){return ne(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Oy(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(ne(u===void 0||typeof u=="string"),_e.fromBase64String(u||"")):(ne(u===void 0||u instanceof Uint8Array),_e.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:Bu(c.code);return new x(u,c.message||"")}(o);t=new zu(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Xr(n,i.document.name),s=jt(i.document.updateTime),o=i.document.createTime?jt(i.document.createTime):L.min(),a=new xe({mapValue:{fields:i.document.fields}}),l=de.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];t=new Ii(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Xr(n,i.document),s=i.readTime?jt(i.readTime):L.min(),o=de.newNoDocument(r,s),a=i.removedTargetIds||[];t=new Ii([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Xr(n,i.document),s=i.removedTargetIds||[];t=new Ii([],s,r,null)}else{if(!("filter"in e))return V();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new Ey(r,s),a=i.targetId;t=new $u(a,o)}}return t}function My(n,e){return{documents:[Ms(n,e.path)]}}function Ny(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=Ms(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ms(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length!==0)return Gu(Be.create(l,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const s=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Mt(h.field),direction:Fy(h.dir)}}(c))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Os(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function Ly(n){let e=xy(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let r=null;if(i>0){ne(i===1);const u=t.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(h){const f=Hu(h);return f instanceof Be&&Cu(f)?f.getFilters():[f]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(f=>function(m){return new yn(Nt(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(t.orderBy));let a=null;t.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,gr(f)?null:f}(t.limit));let l=null;t.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new ji(p,f)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const f=!h.before,p=h.values||[];return new ji(p,f)}(t.endAt)),ey(e,r,o,s,a,"F",l,c)}function Vy(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Hu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Nt(t.unaryFilter.field);return te.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Nt(t.unaryFilter.field);return te.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Nt(t.unaryFilter.field);return te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Nt(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(n):n.fieldFilter!==void 0?function(t){return te.create(Nt(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Be.create(t.compositeFilter.filters.map(i=>Hu(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return V()}}(t.compositeFilter.op))}(n):V()}function Fy(n){return Sy[n]}function Uy(n){return Cy[n]}function By(n){return Ry[n]}function Mt(n){return{fieldPath:n.canonicalString()}}function Nt(n){return Te.fromServerFormat(n.fieldPath)}function Gu(n){return n instanceof te?function(t){if(t.op==="=="){if(Ba(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NAN"}};if(Ua(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ba(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NOT_NAN"}};if(Ua(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mt(t.field),op:Uy(t.op),value:t.value}}}(n):n instanceof Be?function(t){const i=t.getFilters().map(r=>Gu(r));return i.length===1?i[0]:{compositeFilter:{op:By(t.op),filters:i}}}(n):V()}function Wu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,i,r,s=L.min(),o=L.min(),a=_e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.ct=e}}function zy(n){const e=Ly({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ps(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.sn=new jy}addToCollectionParentIndex(e,t){return this.sn.add(t),E.resolve()}getCollectionParents(e,t){return E.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return E.resolve()}deleteFieldIndex(e,t){return E.resolve()}getDocumentsMatchingTarget(e,t){return E.resolve(null)}getIndexType(e,t){return E.resolve(0)}getFieldIndexes(e,t){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,t){return E.resolve(ut.min())}getMinOffsetFromCollectionGroup(e,t){return E.resolve(ut.min())}updateCollectionGroup(e,t,i){return E.resolve()}updateIndexEntries(e,t){return E.resolve()}}class jy{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new me(X.comparator),s=!r.has(i);return this.index[t]=r.add(i),s}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new me(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Zt(0)}static On(){return new Zt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.changes=new sn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?E.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&Tn(i.mutation,r,st.empty(),Ee.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,B()).next(()=>i))}getLocalViewOfDocuments(e,t,i=B()){const r=Tt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(s=>{let o=fn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=Tt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,B()))}populateOverlays(e,t,i){const r=[];return i.forEach(s=>{t.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,r){let s=dt();const o=vn(),a=function(){return vn()}();return t.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof wr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Tn(u.mutation,c,u.mutation.getFieldMask(),Ee.now())):o.set(c.key,st.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new Gy(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=vn();let r=new J((o,a)=>o-a),s=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=i.get(l)||st.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(r.get(a.batchId)||B()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Mu();u.forEach(f=>{if(!s.has(f)){const p=Fu(t.get(f),i.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return O.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):iy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-s.size):E.resolve(Tt());let a=-1,l=s;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,B())).next(u=>({batchId:a,changes:ay(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(i=>{let r=fn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const r=t.collectionGroup;let s=fn();return this.indexManager.getCollectionParents(e,r).next(o=>E.forEach(o,a=>{const l=function(u,h){return new yr(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r))).next(s=>{r.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,de.newInvalidDocument(c)))});let o=fn();return s.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Tn(c.mutation,l,st.empty(),Ee.now()),Tr(t,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return E.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(r){return{id:r.id,version:r.version,createTime:jt(r.createTime)}}(t)),E.resolve()}getNamedQuery(e,t){return E.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(r){return{name:r.name,query:zy(r.bundledQuery),readTime:jt(r.readTime)}}(t)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.overlays=new J(O.comparator),this.cr=new Map}getOverlay(e,t){return E.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Tt();return E.forEach(t,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,s)=>{this.ht(e,t,s)}),E.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.cr.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(i)),E.resolve()}getOverlaysForCollection(e,t,i){const r=Tt(),s=t.length+1,o=new O(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return E.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let s=new J((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>i){let u=s.get(c.largestBatchId);u===null&&(u=Tt(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Tt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return E.resolve(a)}ht(e,t,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.cr.get(r.largestBatchId).delete(i.key);this.cr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Ty(t,i));let s=this.cr.get(t);s===void 0&&(s=B(),this.cr.set(t,s)),this.cr.set(t,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.lr=new me(re.hr),this.Pr=new me(re.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const i=new re(e,t);this.lr=this.lr.add(i),this.Pr=this.Pr.add(i)}Tr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Er(new re(e,t))}dr(e,t){e.forEach(i=>this.removeReference(i,t))}Ar(e){const t=new O(new X([])),i=new re(t,e),r=new re(t,e+1),s=[];return this.Pr.forEachInRange([i,r],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new O(new X([])),i=new re(t,e),r=new re(t,e+1);let s=B();return this.Pr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new re(e,0),i=this.lr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class re{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return O.comparator(e.key,t.key)||j(e.mr,t.mr)}static Ir(e,t){return j(e.mr,t.mr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new me(re.hr)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vy(s,t,i,r);this.mutationQueue.push(o);for(const a of r)this.pr=this.pr.add(new re(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,t){return E.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.wr(i),s=r<0?0:r;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new re(t,0),r=new re(t,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([i,r],o=>{const a=this.yr(o.mr);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new me(j);return t.forEach(r=>{const s=new re(r,0),o=new re(r,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{i=i.add(a.mr)})}),E.resolve(this.Sr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let s=i;O.isDocumentKey(s)||(s=s.child(""));const o=new re(new O(s),0);let a=new me(j);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.mr)),!0)},o),E.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(i=>{const r=this.yr(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ne(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.pr;return E.forEach(t.mutations,r=>{const s=new re(r.key,t.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.pr=i})}Cn(e){}containsKey(e,t){const i=new re(t,0),r=this.pr.firstAfterOrEqual(i);return E.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.Dr=e,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Dr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return E.resolve(i?i.document.mutableCopy():de.newInvalidDocument(t))}getEntries(e,t){let i=dt();return t.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():de.newInvalidDocument(r))}),E.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let s=dt();const o=t.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||V_(L_(u),i)<=0||(r.has(u.key)||Tr(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,t,i,r){V()}vr(e,t){return E.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Jy(this)}getSize(e){return E.resolve(this.size)}}class Jy extends Hy{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.sr.addEntry(e,r)):this.sr.removeEntry(i)}),E.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.persistence=e,this.Cr=new sn(t=>Co(t),Ro),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new xo,this.targetCount=0,this.Or=Zt.xn()}forEachTarget(e,t){return this.Cr.forEach((i,r)=>t(r)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Fr&&(this.Fr=t),E.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new Zt(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,E.resolve()}updateTargetData(e,t){return this.Ln(t),E.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,t,i){let r=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),E.waitFor(s).next(()=>r)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,t){const i=this.Cr.get(t)||null;return E.resolve(i)}addMatchingKeys(e,t,i){return this.Mr.Tr(t,i),E.resolve()}removeMatchingKeys(e,t,i){this.Mr.dr(t,i);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),E.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Mr.Vr(t);return E.resolve(i)}containsKey(e,t){return E.resolve(this.Mr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.Nr={},this.overlays={},this.Br=new wo(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new Zy(this),this.indexManager=new qy,this.remoteDocumentCache=function(r){return new Yy(r)}(i=>this.referenceDelegate.qr(i)),this.serializer=new $y(t),this.Qr=new Ky(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Nr[e.toKey()];return i||(i=new Xy(t,this.referenceDelegate),this.Nr[e.toKey()]=i),i}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,i){b("MemoryPersistence","Starting transaction:",e);const r=new tv(this.Br.next());return this.referenceDelegate.Kr(),i(r).next(s=>this.referenceDelegate.$r(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ur(e,t){return E.or(Object.values(this.Nr).map(i=>()=>i.containsKey(e,t)))}}class tv extends U_{constructor(e){super(),this.currentSequenceNumber=e}}class Oo{constructor(e){this.persistence=e,this.Wr=new xo,this.Gr=null}static zr(e){return new Oo(e)}get jr(){if(this.Gr)return this.Gr;throw V()}addReference(e,t,i){return this.Wr.addReference(i,t),this.jr.delete(i.toString()),E.resolve()}removeReference(e,t,i){return this.Wr.removeReference(i,t),this.jr.add(i.toString()),E.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),E.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(r=>this.jr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(s=>this.jr.add(s.toString()))}).next(()=>i.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.jr,i=>{const r=O.fromPath(i);return this.Hr(e,r).next(s=>{s||t.removeEntry(r,L.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(i=>{i?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return E.or([()=>E.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.Li=i,this.ki=r}static qi(e,t){let i=B(),r=B();for(const s of t.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Mo(e,t.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,i,r){return this.$i(e,t).next(s=>s||this.Ui(e,t,r,i)).next(s=>s||this.Wi(e,t))}$i(e,t){if(ja(t))return E.resolve(null);let i=Je(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ps(t,null,"F"),i=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=B(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Gi(t,a);return this.zi(t,c,o,l.readTime)?this.$i(e,Ps(t,null,"F")):this.ji(e,c,t,l)}))})))}Ui(e,t,i,r){return ja(t)||r.isEqual(L.min())?this.Wi(e,t):this.Ki.getDocuments(e,i).next(s=>{const o=this.Gi(t,s);return this.zi(t,o,i,r)?this.Wi(e,t):(Na()<=$.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ks(t)),this.ji(e,o,t,N_(r,-1)))})}Gi(e,t){let i=new me(xu(e));return t.forEach((r,s)=>{Tr(e,s)&&(i=i.add(s))}),i}zi(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Wi(e,t){return Na()<=$.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",ks(t)),this.Ki.getDocumentsMatchingQuery(e,t,ut.min())}ji(e,t,i,r){return this.Ki.getDocumentsMatchingQuery(e,i,r).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,i,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new J(j),this.Yi=new sn(s=>Co(s),Ro),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(i)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wy(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function rv(n,e,t,i){return new iv(n,e,t,i)}async function Ku(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,t.es(e),t.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=B();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(i,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function Qu(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function sv(n,e){const t=z(n),i=e.snapshotVersion;let r=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});r=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(t.kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.kr.addMatchingKeys(s,u.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(_e.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,i)),r=r.insert(h,p),function(y,v,d){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0}(f,p,u)&&a.push(t.kr.updateTargetData(s,p))});let l=dt(),c=B();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(ov(s,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!i.isEqual(L.min())){const u=t.kr.getLastRemoteSnapshotVersion(s).next(h=>t.kr.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(t.Ji=r,s))}function ov(n,e,t){let i=B(),r=B();return t.forEach(s=>i=i.add(s)),e.getEntries(n,i).next(s=>{let o=dt();return t.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(L.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:r}})}function av(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.kr.getTargetData(i,e).next(s=>s?(r=s,E.resolve(r)):t.kr.allocateTargetId(i).next(o=>(r=new ot(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.kr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=t.Ji.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(i.targetId,i),t.Yi.set(e,i.targetId)),i})}async function Ns(n,e,t){const i=z(n),r=i.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Yn(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(r.target)}function tl(n,e,t){const i=z(n);let r=L.min(),s=B();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=z(l),f=h.Yi.get(u);return f!==void 0?E.resolve(h.Ji.get(f)):h.kr.getTargetData(c,u)}(i,o,Je(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,t?r:L.min(),t?s:B())).next(a=>(lv(i,ry(e),a),{documents:a,ss:s})))}function lv(n,e,t){let i=n.Zi.get(e)||L.min();t.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.Zi.set(e,i)}class nl{constructor(){this.activeTargetIds=uy()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cv{constructor(){this.Hs=new nl,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,i){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new nl,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi=null;function Yr(){return fi===null?fi=function(){return 268435456+Math.round(2147483648*Math.random())}():fi++,"0x"+fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="WebChannelConnection";class fv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=i+"://"+t.host,this.Eo=`projects/${r}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Ro(){return!1}Vo(t,i,r,s,o){const a=Yr(),l=this.mo(t,i);b("RestConnection",`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,s,o),this.po(t,l,c,r).then(u=>(b("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw Qt("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}yo(t,i,r,s,o,a){return this.Vo(t,i,r,s,o)}fo(t,i,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}mo(t,i){const r=hv[t];return`${this.To}/v1/${i}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,i,r){const s=Yr();return new Promise((o,a)=>{const l=new I_;l.setWithCredentials(!0),l.listenOnce(T_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Kr.NO_ERROR:const u=l.getResponseJson();b(ue,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Kr.TIMEOUT:b(ue,`RPC '${e}' ${s} timed out`),a(new x(A.DEADLINE_EXCEEDED,"Request time out"));break;case Kr.HTTP_ERROR:const h=l.getStatus();if(b(ue,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f?.error;if(p&&p.status&&p.message){const m=function(v){const d=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(d)>=0?d:A.UNKNOWN}(p.status);a(new x(m,p.message))}else a(new x(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(A.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{b(ue,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);b(ue,`RPC '${e}' ${s} sending request:`,r),l.send(t,"POST",c,i,15)})}wo(e,t,i){const r=Yr(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=y_(),a=v_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new w_({})),this.fo(l.initMessageHeaders,t,i),l.encodeInitMessageHeaders=!0;const u=s.join("");b(ue,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,p=!1;const m=new dv({so:v=>{p?b(ue,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(f||(b(ue,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),b(ue,`RPC '${e}' stream ${r} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,d,g)=>{v.listen(d,_=>{try{g(_)}catch(T){setTimeout(()=>{throw T},0)}})};return y(h,ci.EventType.OPEN,()=>{p||b(ue,`RPC '${e}' stream ${r} transport opened.`)}),y(h,ci.EventType.CLOSE,()=>{p||(p=!0,b(ue,`RPC '${e}' stream ${r} transport closed`),m.Po())}),y(h,ci.EventType.ERROR,v=>{p||(p=!0,Qt(ue,`RPC '${e}' stream ${r} transport errored:`,v),m.Po(new x(A.UNAVAILABLE,"The operation could not be completed")))}),y(h,ci.EventType.MESSAGE,v=>{var d;if(!p){const g=v.data[0];ne(!!g);const _=g,T=_.error||((d=_[0])===null||d===void 0?void 0:d.error);if(T){b(ue,`RPC '${e}' stream ${r} received error:`,T);const I=T.status;let R=function(q){const w=Z[q];if(w!==void 0)return Bu(w)}(I),Q=T.message;R===void 0&&(R=A.INTERNAL,Q="Unknown error status: "+I+" with message "+T.message),p=!0,m.Po(new x(R,Q)),h.close()}else b(ue,`RPC '${e}' stream ${r} received:`,g),m.Io(g)}}),y(a,E_.STAT_EVENT,v=>{v.stat===Oa.PROXY?b(ue,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Oa.NOPROXY&&b(ue,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function Jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){return new by(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,i=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=t,this.So=i,this.bo=r,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),r=Math.max(0,t-i);r>0&&b("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,i,r,s,o,a,l){this.ii=e,this.Bo=i,this.Lo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Yu(e,t)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():t&&t.code===A.RESOURCE_EXHAUSTED?(Ye(t.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.ko===t&&this.e_(i,r)},i=>{e(()=>{const r=new x(A.UNKNOWN,"Fetching auth token failed: "+i.message);return this.t_(r)})})}e_(e,t){const i=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o(()=>{i(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(r=>{i(()=>this.t_(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.ko===e?t():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mv extends pv{constructor(e,t,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=Oy(this.serializer,e),i=function(s){if(!("targetChange"in s))return L.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?L.min():o.readTime?jt(o.readTime):L.min()}(e);return this.listener.r_(t,i)}i_(e){const t={};t.database=el(this.serializer),t.addTarget=function(s,o){let a;const l=o.target;if(a=bs(l)?{documents:My(s,l)}:{query:Ny(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ky(s,o.resumeToken);const c=Os(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(L.min())>0){a.readTime=Py(s,o.snapshotVersion.toTimestamp());const c=Os(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=Vy(this.serializer,e);i&&(t.labels=i),this.Ho(t)}s_(e){const t={};t.database=el(this.serializer),t.removeTarget=e,this.Ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new x(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Vo(e,t,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(A.UNKNOWN,r.toString())})}yo(e,t,i,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,t,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(A.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class _v{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Ye(t),this.d_=!1):b("OnlineStateTracker",t)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t,i,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{i.enqueueAndForget(async()=>{ei(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=z(l);c.y_.add(4),await Zn(c),c.b_.set("Unknown"),c.y_.delete(4),await Ar(c)}(this))})}),this.b_=new _v(i,r)}}async function Ar(n){if(ei(n))for(const e of n.w_)await e(!0)}async function Zn(n){for(const e of n.w_)await e(!1)}function Ju(n,e){const t=z(n);t.p_.has(e.targetId)||(t.p_.set(e.targetId,e),Vo(t)?Lo(t):on(t).Uo()&&No(t,e))}function Zu(n,e){const t=z(n),i=on(t);t.p_.delete(e),i.Uo()&&eh(t,e),t.p_.size===0&&(i.Uo()?i.zo():ei(t)&&t.b_.set("Unknown"))}function No(n,e){if(n.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(L.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}on(n).i_(e)}function eh(n,e){n.D_.Be(e),on(n).s_(e)}function Lo(n){n.D_=new Ay({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.p_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),on(n).start(),n.b_.A_()}function Vo(n){return ei(n)&&!on(n).$o()&&n.p_.size>0}function ei(n){return z(n).y_.size===0}function th(n){n.D_=void 0}async function vv(n){n.p_.forEach((e,t)=>{No(n,e)})}async function Tv(n,e){th(n),Vo(n)?(n.b_.m_(e),Lo(n)):n.b_.set("Unknown")}async function Ev(n,e,t){if(n.b_.set("Online"),e instanceof zu&&e.state===2&&e.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.p_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.p_.delete(a),r.D_.removeTarget(a))}(n,e)}catch(i){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await rl(n,i)}else if(e instanceof Ii?n.D_.We(e):e instanceof $u?n.D_.Ze(e):n.D_.je(e),!t.isEqual(L.min()))try{const i=await Qu(n.localStore);t.compareTo(i)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.p_.get(c);u&&s.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.p_.get(l);if(!u)return;s.p_.set(l,u.withResumeToken(_e.EMPTY_BYTE_STRING,u.snapshotVersion)),eh(s,l);const h=new ot(u.target,l,c,u.sequenceNumber);No(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(i){b("RemoteStore","Failed to raise snapshot:",i),await rl(n,i)}}async function rl(n,e,t){if(!Yn(e))throw e;n.y_.add(1),await Zn(n),n.b_.set("Offline"),t||(t=()=>Qu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await t(),n.y_.delete(1),await Ar(n)})}async function sl(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const i=ei(t);t.y_.add(3),await Zn(t),i&&t.b_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.y_.delete(3),await Ar(t)}async function wv(n,e){const t=z(n);e?(t.y_.delete(2),await Ar(t)):e||(t.y_.add(2),await Zn(t),t.b_.set("Unknown"))}function on(n){return n.v_||(n.v_=function(t,i,r){const s=z(t);return s.P_(),new mv(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{_o:vv.bind(null,n),uo:Tv.bind(null,n),r_:Ev.bind(null,n)}),n.w_.push(async e=>{e?(n.v_.Go(),Vo(n)?Lo(n):n.b_.set("Unknown")):(await n.v_.stop(),th(n))})),n.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,a=new Fo(e,t,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nh(n,e){if(Ye("AsyncQueue",`${e}: ${n}`),Yn(n))return new x(A.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.comparator=e?(t,i)=>e(t,i)||O.comparator(t.key,i.key):(t,i)=>O.comparator(t.key,i.key),this.keyedMap=fn(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new Ht(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ht;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.F_=new J(O.comparator)}track(e){const t=e.doc.key,i=this.F_.get(t);i?e.type!==0&&i.type===3?this.F_=this.F_.insert(t,e):e.type===3&&i.type!==1?this.F_=this.F_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.F_=this.F_.remove(t):e.type===1&&i.type===2?this.F_=this.F_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):V():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal((t,i)=>{e.push(i)}),e}}class en{constructor(e,t,i,r,s,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,i,r,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new en(e,t,Ht.emptySet(t),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.x_=void 0,this.listeners=[]}}class Av{constructor(){this.queries=new sn(e=>Du(e),vr),this.onlineState="Unknown",this.O_=new Set}}async function Sv(n,e){const t=z(n),i=e.query;let r=!1,s=t.queries.get(i);if(s||(r=!0,s=new Iv),r)try{s.x_=await t.onListen(i)}catch(o){const a=nh(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.listeners.push(e),e.N_(t.onlineState),s.x_&&e.B_(s.x_)&&Uo(t)}async function Cv(n,e){const t=z(n),i=e.query;let r=!1;const s=t.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return t.queries.delete(i),t.onUnlisten(i)}function Rv(n,e){const t=z(n);let i=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.B_(r)&&(i=!0);o.x_=r}}i&&Uo(t)}function bv(n,e,t){const i=z(n),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(t);i.queries.delete(e)}function Uo(n){n.O_.forEach(e=>{e.next()})}class Pv{constructor(e,t,i){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=i||{}}B_(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new en(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.W_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}U_(e){e=en.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.key=e}}class rh{constructor(e){this.key=e}}class kv{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=B(),this.mutatedKeys=B(),this.na=xu(e),this.ra=new Ht(this.na)}get ia(){return this.X_}sa(e,t){const i=t?t.oa:new ol,r=t?t.ra:this.ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=Tr(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?m!==y&&(i.track({type:3,doc:p}),v=!0):this._a(f,p)||(i.track({type:2,doc:p}),v=!0,(l&&this.na(p,l)>0||c&&this.na(p,c)<0)&&(a=!0)):!f&&p?(i.track({type:0,doc:p}),v=!0):f&&!p&&(i.track({type:1,doc:f}),v=!0,(l||c)&&(a=!0)),v&&(p?(o=o.add(p),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{ra:o,oa:i,zi:a,mutatedKeys:s}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const r=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((c,u)=>function(f,p){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return m(f)-m(p)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(i);const o=t?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new en(this.query,e.ra,r,s,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new ol,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(t=>this.X_=this.X_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.X_=this.X_.delete(t)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=B(),this.ra.forEach(i=>{this.la(i.key)&&(this.ta=this.ta.add(i.key))});const t=[];return e.forEach(i=>{this.ta.has(i)||t.push(new rh(i))}),this.ta.forEach(i=>{e.has(i)||t.push(new ih(i))}),t}ha(e){this.X_=e.ss,this.ta=B();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return en.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class Dv{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class xv{constructor(e){this.key=e,this.Ia=!1}}class Ov{constructor(e,t,i,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new sn(a=>Du(a),vr),this.da=new Map,this.Aa=new Set,this.Ra=new J(O.comparator),this.Va=new Map,this.ma=new xo,this.fa={},this.ga=new Map,this.pa=Zt.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function Mv(n,e){const t=$v(n);let i,r;const s=t.Ea.get(e);if(s)i=s.targetId,t.sharedClientState.addLocalQueryTarget(i),r=s.view.Pa();else{const o=await av(t.localStore,Je(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await Nv(t,e,i,a==="current",o.resumeToken),t.isPrimaryClient&&Ju(t.remoteStore,o)}return r}async function Nv(n,e,t,i,r){n.wa=(h,f,p)=>async function(y,v,d,g){let _=v.view.sa(d);_.zi&&(_=await tl(y.localStore,v.query,!1).then(({documents:R})=>v.view.sa(R,_)));const T=g&&g.targetChanges.get(v.targetId),I=v.view.applyChanges(_,y.isPrimaryClient,T);return ll(y,v.targetId,I.ca),I.snapshot}(n,h,f,p);const s=await tl(n.localStore,e,!0),o=new kv(e,s.ss),a=o.sa(s.documents),l=Jn.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),c=o.applyChanges(a,n.isPrimaryClient,l);ll(n,t,c.ca);const u=new Dv(e,t,o);return n.Ea.set(e,u),n.da.has(t)?n.da.get(t).push(e):n.da.set(t,[e]),c.snapshot}async function Lv(n,e){const t=z(n),i=t.Ea.get(e),r=t.da.get(i.targetId);if(r.length>1)return t.da.set(i.targetId,r.filter(s=>!vr(s,e))),void t.Ea.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await Ns(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),Zu(t.remoteStore,i.targetId),Ls(t,i.targetId)}).catch(Eo)):(Ls(t,i.targetId),await Ns(t.localStore,i.targetId,!0))}async function sh(n,e){const t=z(n);try{const i=await sv(t.localStore,e);e.targetChanges.forEach((r,s)=>{const o=t.Va.get(s);o&&(ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ia=!0:r.modifiedDocuments.size>0?ne(o.Ia):r.removedDocuments.size>0&&(ne(o.Ia),o.Ia=!1))}),await ah(t,i,e)}catch(i){await Eo(i)}}function al(n,e,t){const i=z(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const r=[];i.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=z(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.N_(a)&&(c=!0)}),c&&Uo(l)}(i.eventManager,e),r.length&&i.Ta.r_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Vv(n,e,t){const i=z(n);i.sharedClientState.updateQueryState(e,"rejected",t);const r=i.Va.get(e),s=r&&r.key;if(s){let o=new J(O.comparator);o=o.insert(s,de.newNoDocument(s,L.min()));const a=B().add(s),l=new Ir(L.min(),new Map,new J(j),o,a);await sh(i,l),i.Ra=i.Ra.remove(s),i.Va.delete(e),Bo(i)}else await Ns(i.localStore,e,!1).then(()=>Ls(i,e,t)).catch(Eo)}function Ls(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.da.get(e))n.Ea.delete(i),t&&n.Ta.Sa(i,t);n.da.delete(e),n.isPrimaryClient&&n.ma.Ar(e).forEach(i=>{n.ma.containsKey(i)||oh(n,i)})}function oh(n,e){n.Aa.delete(e.path.canonicalString());const t=n.Ra.get(e);t!==null&&(Zu(n.remoteStore,t),n.Ra=n.Ra.remove(e),n.Va.delete(t),Bo(n))}function ll(n,e,t){for(const i of t)i instanceof ih?(n.ma.addReference(i.key,e),Fv(n,i)):i instanceof rh?(b("SyncEngine","Document no longer in limbo: "+i.key),n.ma.removeReference(i.key,e),n.ma.containsKey(i.key)||oh(n,i.key)):V()}function Fv(n,e){const t=e.key,i=t.path.canonicalString();n.Ra.get(t)||n.Aa.has(i)||(b("SyncEngine","New document in limbo: "+t),n.Aa.add(i),Bo(n))}function Bo(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const e=n.Aa.values().next().value;n.Aa.delete(e);const t=new O(X.fromString(e)),i=n.pa.next();n.Va.set(i,new xv(t)),n.Ra=n.Ra.insert(t,i),Ju(n.remoteStore,new ot(Je(ku(t.path)),i,"TargetPurposeLimboResolution",wo.ae))}}async function ah(n,e,t){const i=z(n),r=[],s=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach((a,l)=>{o.push(i.wa(l,e,t).then(c=>{if((c||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c?.fromCache?"not-current":"current"),c){r.push(c);const u=Mo.qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.Ta.r_(r),await async function(l,c){const u=z(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(c,f=>E.forEach(f.Li,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>E.forEach(f.ki,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Yn(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const p=u.Ji.get(f),m=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(f,y)}}}(i.localStore,s))}async function Uv(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const i=await Ku(t.localStore,e);t.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new x(A.CANCELLED,o))})}),s.ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ah(t,i.ts)}}function Bv(n,e){const t=z(n),i=t.Va.get(e);if(i&&i.Ia)return B().add(i.key);{let r=B();const s=t.da.get(e);if(!s)return r;for(const o of s){const a=t.Ea.get(o);r=r.unionWith(a.view.ia)}return r}}function $v(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vv.bind(null,e),e.Ta.r_=Rv.bind(null,e.eventManager),e.Ta.Sa=bv.bind(null,e.eventManager),e}class cl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return rv(this.persistence,new nv,e.initialUser,this.serializer)}createPersistence(e){return new ev(Oo.zr,this.serializer)}createSharedClientState(e){return new cv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>al(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uv.bind(null,this.syncEngine),await wv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Av}()}createDatastore(e){const t=Xu(e.databaseInfo.databaseId),i=function(s){return new fv(s)}(e.databaseInfo);return function(s,o,a,l){return new gv(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,r,s,o,a){return new yv(i,r,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>al(this.syncEngine,t,0),function(){return il.v()?new il:new uv}())}createSyncEngine(e,t){return function(r,s,o,a,l,c,u){const h=new Ov(r,s,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const i=z(t);b("RemoteStore","RemoteStore shutting down."),i.y_.add(5),await Zn(i),i.S_.shutdown(),i.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=he.UNAUTHENTICATED,this.clientId=O_.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=nh(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Zr(n,e){n.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Ku(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ul(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Gv(n);b("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(r=>sl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>sl(e.remoteStore,s)),n._onlineComponents=e}function Hv(n){return n.name==="FirebaseError"?n.code===A.FAILED_PRECONDITION||n.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Gv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zr(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Hv(t))throw t;Qt("Error using user provided cache. Falling back to memory cache: "+t),await Zr(n,new cl)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Zr(n,new cl);return n._offlineComponents}async function Wv(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await ul(n,n._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await ul(n,new zv))),n._onlineComponents}async function Kv(n){const e=await Wv(n),t=e.eventManager;return t.onListen=Mv.bind(null,e.syncEngine),t.onUnlisten=Lv.bind(null,e.syncEngine),t}function Qv(n,e,t={}){const i=new It;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new qv({next:f=>{o.enqueueAndForget(()=>Cv(s,h)),f.fromCache&&l.source==="server"?c.reject(new x(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new Pv(a,u,{includeMetadataChanges:!0,W_:!0});return Sv(s,h)}(await Kv(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n,e,t){if(!t)throw new x(A.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Yv(n,e,t,i){if(e===!0&&i===!0)throw new x(A.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dl(n){if(O.isDocumentKey(n))throw new x(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Jv(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":V()}function Vs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Jv(n);throw new x(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new x(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lh((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $o{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fl(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new S_;switch(i.type){case"firstParty":return new P_(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new x(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=hl.get(t);i&&(b("ComponentProvider","Removing Datastore"),hl.delete(t),i.terminate())}(this),Promise.resolve()}}function Zv(n,e,t,i={}){var r;const s=(n=Vs(n,$o))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=he.MOCK_USER;else{a=Ll(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new x(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new he(c)}n._authCredentials=new C_(new wu(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class an{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class Gt extends Sr{constructor(e,t,i){super(e,t,ku(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new O(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function eT(n,e,...t){if(n=ft(n),Xv("collection","path",e),n instanceof $o){const i=X.fromString(e,...t);return dl(i),new Gt(n,null,i)}{if(!(n instanceof an||n instanceof Gt))throw new x(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(X.fromString(e,...t));return dl(i),new Gt(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Yu(this,"async_queue_retry"),this.Xa=()=>{const t=Jr();t&&b("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const e=Jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=Jr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const t=new It;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Yn(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const t=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Ye("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ja=!1,i))));return this.Wa=t,t}enqueueAfterDelay(e,t,i){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const r=Fo.createAndSchedule(this,e,t,i,s=>this.ru(s));return this.ja.push(r),r}eu(){this.Ha&&V()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.ja)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}class ch extends $o{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=function(){return new tT}(),this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||uh(this),this._firestoreClient.terminate()}}function nT(n,e){const t=typeof n=="object"?n:qs(),i=typeof n=="string"?n:e||"(default)",r=Xi(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Ol("firestore");s&&Zv(r,...s)}return r}function iT(n){return n._firestoreClient||uh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function uh(n){var e,t,i;const r=n._freezeSettings(),s=function(a,l,c,u){return new z_(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,lh(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._firestoreClient=new jv(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(_e.fromBase64String(e))}catch(t){throw new x(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wi(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}const sT=new RegExp("[~\\*/\\[\\]]");function oT(n,e,t){if(e.search(sT)>=0)throw pl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new hh(...e.split("."))._internalPath}catch{throw pl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function pl(n,e,t,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new x(A.INVALID_ARGUMENT,a+n+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aT extends dh{data(){return super.data()}}function fh(n,e){return typeof e=="string"?oT(n,e):e instanceof hh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cT{convertValue(e,t="none"){switch(kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw V()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return _r(e,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertGeoPoint(e){return new rT(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Ao(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(On(e));default:return null}}convertTimestamp(e){const t=ht(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=X.fromString(e);ne(Wu(i));const r=new Mn(i.get(1),i.get(3)),s=new O(i.popFirst(5));return r.isEqual(t)||Ye(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uT extends dh{constructor(e,t,i,r,s,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(fh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Ai extends uT{data(e={}){return super.data(e)}}class hT{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new pi(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Ai(this._firestore,this._userDataWriter,i.key,i,new pi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Ai(r._firestore,r._userDataWriter,a.doc.key,a.doc,new pi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ai(r._firestore,r._userDataWriter,a.doc.key,a.doc,new pi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:dT(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function dT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}class fT extends cT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,t)}}function pT(n){n=Vs(n,Sr);const e=Vs(n.firestore,ch),t=iT(e),i=new fT(e);return lT(n._query),Qv(t,n._query).then(r=>new hT(e,i,n,r))}(function(e,t=!0){(function(r){rn=r})(Dt),Ct(new ct("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new ch(new R_(i.getProvider("auth-internal")),new D_(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new x(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mn(c.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Le(Ma,"4.1.0",e),Le(Ma,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="firebasestorage.googleapis.com",mT="storageBucket",gT=2*60*1e3,_T=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends ze{constructor(e,t,i=0){super(es(e),`Firebase Storage: ${t} (${es(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return es(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function es(n){return"storage/"+n}function yT(){const n="An unknown error occurred, please check the error payload for server response.";return new qe($e.UNKNOWN,n)}function vT(){return new qe($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function TT(){return new qe($e.CANCELED,"User canceled the upload/download.")}function ET(n){return new qe($e.INVALID_URL,"Invalid URL '"+n+"'.")}function wT(n){return new qe($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ml(n){return new qe($e.INVALID_ARGUMENT,n)}function mh(){return new qe($e.APP_DELETED,"The Firebase app was deleted.")}function IT(n){return new qe($e.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=be.makeFromUrl(e,t)}catch{return new be(e,"")}if(i.path==="")return i;throw wT(e)}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},y=t===ph?"(?:storage.googleapis.com|storage.cloud.google.com)":t,v="([^?#]*)",d=new RegExp(`^https?://${y}/${r}/${v}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:c},{regex:d,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<_.length;T++){const I=_[T],R=I.regex.exec(e);if(R){const Q=R[I.indices.bucket];let P=R[I.indices.path];P||(P=""),i=new be(Q,P),I.postModify(i);break}}if(i==null)throw ET(e);return i}}class AT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(n,e,t){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,n(p,l())},v)}function f(){s&&clearTimeout(s)}function p(v,...d){if(c){f();return}if(v){f(),u.call(null,v,...d);return}if(l()||o){f(),u.call(null,v,...d);return}i<64&&(i*=2);let _;a===1?(a=2,_=0):_=(i+Math.random())*1e3,h(_)}let m=!1;function y(v){m||(m=!0,f(),!c&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},t),y}function CT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(n){return n!==void 0}function gl(n,e,t,i){if(i<e)throw ml(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw ml(`Invalid value for '${n}'. Expected ${t} or less.`)}function bT(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const r=e(i)+"="+e(n[i]);t=t+r+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ki;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ki||(Ki={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t,i,r,s,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new mi(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ki.NO_ERROR,l=s.getStatus();if(!a||PT(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Ki.ABORT;i(!1,new mi(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new mi(c,s))})},t=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());RT(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=yT();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?mh():TT();o(l)}else{const l=vT();o(l)}};this.canceled_?t(!1,new mi(!1,null,!0)):this.backoffId_=ST(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mi{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function DT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function xT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function MT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function NT(n,e,t,i,r,s,o=!0){const a=bT(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return OT(c,e),DT(c,t),xT(c,s),MT(c,i),new kT(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function VT(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this._service=e,t instanceof be?this._location=t:this._location=be.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Qi(e,t)}get root(){const e=new be(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VT(this._location.path)}get storage(){return this._service}get parent(){const e=LT(this._location.path);if(e===null)return null;const t=new be(this._location.bucket,e);return new Qi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw IT(e)}}function _l(n,e){const t=e?.[mT];return t==null?null:be.makeFromBucketSpec(t,n)}function FT(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:Ll(r,n.app.options.projectId))}class UT{constructor(e,t,i,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=ph,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gT,this._maxUploadRetryTime=_T,this._requests=new Set,r!=null?this._bucket=be.makeFromBucketSpec(r,this._host):this._bucket=_l(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=be.makeFromBucketSpec(this._url,e):this._bucket=_l(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qi(this,e)}_makeRequest(e,t,i,r,s=!0){if(this._deleted)return new AT(mh());{const o=NT(e,this._appId,i,r,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const yl="@firebase/storage",vl="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="storage";function BT(n=qs(),e){n=ft(n);const i=Xi(n,gh).getImmediate({identifier:e}),r=Ol("storage");return r&&$T(i,...r),i}function $T(n,e,t,i={}){FT(n,e,t,i)}function zT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new UT(t,i,r,e,Dt)}function qT(){Ct(new ct(gh,zT,"PUBLIC").setMultipleInstances(!0)),Le(yl,vl,""),Le(yl,vl,"esm2017")}qT();const _h={apiKey:"AIzaSyAOmgmjB_k7AzapNtXEBcxT53BvR_WbCyw",authDomain:"crisp-b06bf.firebaseapp.com",projectId:"crisp-b06bf",storageBucket:"crisp-b06bf.appspot.com",messagingSenderId:"712604544303",appId:"1:712604544303:web:52821ca807fa74e2da85da",measurementId:"G-6MTNM6EBKH"},zo=zs(_h);zs(_h,"Secondary");_g(zo);const jT=nT(zo);BT(zo);async function yh(n){return await pT(eT(jT,n))}async function vh(n,e){n.forEach(i=>{e(i)})}class HT{allSkeleton;constructor(){this.allSkeleton=ts(".skeleton"),this.removeSkeleton()}removeSkeleton(){Promise.all(Array.from(document.images).filter(e=>!e.complete).map(e=>new Promise(t=>{e.onload=e.onerror=t}))).then(()=>{this.allSkeleton.forEach(e=>{e.classList.remove("skeleton")})})}}we.use([Bd,$d,zd]);const Tl=Lt(".summer-sale__swiper-wrapper");class GT{swiper;slidesArr;constructor(){this.swiper=new we(".summer-sale__swiper",{slidesPerView:2,autoplay:{delay:1e4},grabCursor:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prew"}}),this.slidesArr=[],this.loadCards()}async loadCards(){vh(await yh("main-swiper"),e=>this.slidesArr.push(e.data())),console.log(this.slidesArr),this.renderSldes(),new HT}renderSldes(){this.slidesArr.forEach(e=>{Tl&&Tl.insertAdjacentHTML("beforeend",`
          <div class="swiper-slide summer-sale__slide">
            <picture>
              <source srcset=${e.imgWebP} type="image/webp" />
              <img src=${e.img}/>
            </picture>
          </div>
          `)})}}class WT{static stop(){const e=new Event("loadingIsFinished");document.dispatchEvent(e)}}const gi=Lt(".shop-some__items");class KT{shopDb;constructor(){this.shopDb=[],this.loadCards()}async loadCards(){vh(await yh("clothers"),e=>this.shopDb.push(e.data())),console.log(this.shopDb),console.log(gi),this.renderCard()}renderCard(){this.shopDb.forEach(e=>{gi&&(e.sale==!1?gi.insertAdjacentHTML("afterbegin",`
                <a class="card" href="#">
                    <div class="card__img">
                        <img src="${e.img}" alt="" />
                    </div>

                    <div class="card__info">
                        <p class="card__category">${e.category}</p>
                        <h3 class="card__title">${e.name}</h3>
                        <p class="card__price">${e.cost}</p>
                    </div>
                </a>
            `):gi.insertAdjacentHTML("afterbegin",`
                    <a class="card sale" href="#">
                        <div class="card__img">
                            <img src="${e.img}" alt="" />
                            <div class="card__sale">
                                <p>-30%</p>
                            </div>
                        </div>
    
                        <div class="card__info">
                            <p class="card__category">${e.category}</p>
                            <h3 class="card__title">${e.name}</h3>
                            <p class="card__price">${e.costNew} <span>${e.cost}</span></p>
                        </div>
                    </a>
                `))})}}document.addEventListener("DOMContentLoaded",async()=>{new Th,new Eh,new GT,new KT,WT.stop()});
