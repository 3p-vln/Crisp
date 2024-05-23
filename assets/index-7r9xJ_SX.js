(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ie(n,e=document){return e.querySelectorAll(n)}function Se(n,e=document){return e.querySelector(n)}class td{burgerBtn;menuAdapt;search;searchBtn;constructor(){this.burgerBtn=Se(".burger-btn"),this.menuAdapt=Se(".header__menu_adapt"),this.search=Se(".header__search-and-bag .search"),this.searchBtn=Se(".header__search-and-bag .search svg"),this.burger(),this.searchFunc()}burger(){const e=this;this.burgerBtn.addEventListener("click",function(){e.burgerBtn.classList.toggle("active"),e.menuAdapt.classList.toggle("active")})}searchFunc(){const e=this;this.searchBtn.addEventListener("click",function(){e.search.classList.toggle("active")})}}class nd{accordionTitle;accordionContent;constructor(){this.accordionTitle=Ie(".accordion__item"),this.accordionContent=Ie(".accordion__info"),this.initAccordion()}initAccordion(){this.accordionTitle.forEach((e,t)=>{e.addEventListener("click",()=>{this.toggleAccordion(t)})})}toggleAccordion(e){const t=this.accordionContent[e].classList.toggle("active");this.accordionTitle[e].classList.toggle("active"),t&&this.closeOtherAccordions(e),this.accordionContent.forEach((i,r)=>{r!==e&&(i.style.maxHeight="0",i.classList.remove("active"))}),t?this.accordionContent[e].style.maxHeight=`${this.accordionContent[e].scrollHeight}px`:this.accordionContent[e].style.maxHeight="0"}closeOtherAccordions(e){this.accordionContent.forEach((t,i)=>{i!==e&&t.classList.contains("active")&&t.classList.remove("active")}),this.accordionTitle.forEach((t,i)=>{i!==e&&t.classList.contains("active")&&t.classList.remove("active")})}}function aa(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Hs(n,e){n===void 0&&(n={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof n[t]>"u"?n[t]=e[t]:aa(e[t])&&aa(n[t])&&Object.keys(e[t]).length>0&&Hs(n[t],e[t])})}const $l={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Xe(){const n=typeof document<"u"?document:{};return Hs(n,$l),n}const id={document:$l,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function Ce(){const n=typeof window<"u"?window:{};return Hs(n,id),n}function rd(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function sd(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function cs(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function Di(){return Date.now()}function od(n){const e=Ce();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function ad(n,e){e===void 0&&(e="x");const t=Ce();let i,r,s;const o=od(n);return t.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function ai(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function ld(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Ae(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!ld(i)){const r=Object.keys(Object(i)).filter(s=>e.indexOf(s)<0);for(let s=0,o=r.length;s<o;s+=1){const a=r[s],l=Object.getOwnPropertyDescriptor(i,a);l!==void 0&&l.enumerable&&(ai(n[a])&&ai(i[a])?i[a].__swiper__?n[a]=i[a]:Ae(n[a],i[a]):!ai(n[a])&&ai(i[a])?(n[a]={},i[a].__swiper__?n[a]=i[a]:Ae(n[a],i[a])):n[a]=i[a])}}}return n}function li(n,e,t){n.style.setProperty(e,t)}function zl(n){let{swiper:e,targetPosition:t,side:i}=n;const r=Ce(),s=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(d,p)=>c==="next"&&d>=p||c==="prev"&&d<=p,h=()=>{a=new Date().getTime(),o===null&&(o=a);const d=Math.max(Math.min((a-o)/l,1),0),p=.5-Math.cos(d*Math.PI)/2;let m=s+p*(t-s);if(u(m,t)&&(m=t),e.wrapperEl.scrollTo({[i]:m}),u(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:m})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(h)};h()}function Le(n,e){return e===void 0&&(e=""),[...n.children].filter(t=>t.matches(e))}function xi(n){try{console.warn(n);return}catch{}}function Oi(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:rd(e)),t}function cd(n,e){const t=[];for(;n.previousElementSibling;){const i=n.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function ud(n,e){const t=[];for(;n.nextElementSibling;){const i=n.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function lt(n,e){return Ce().getComputedStyle(n,null).getPropertyValue(e)}function Vi(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function ql(n,e){const t=[];let i=n.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function us(n,e,t){const i=Ce();return t?n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):n.offsetWidth}function ie(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}let Vr;function hd(){const n=Ce(),e=Xe();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function jl(){return Vr||(Vr=hd()),Vr}let Mr;function dd(n){let{userAgent:e}=n===void 0?{}:n;const t=jl(),i=Ce(),r=i.navigator.platform,s=e||i.navigator.userAgent,o={ios:!1,android:!1},a=i.screen.width,l=i.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let u=s.match(/(iPad).*OS\s([\d_]+)/);const h=s.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=r==="Win32";let m=r==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&m&&t.touch&&y.indexOf(`${a}x${l}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),m=!1),c&&!p&&(o.os="android",o.android=!0),(u||d||h)&&(o.os="ios",o.ios=!0),o}function Gl(n){return n===void 0&&(n={}),Mr||(Mr=dd(n)),Mr}let Nr;function fd(){const n=Ce(),e=Gl();let t=!1;function i(){const a=n.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(i()){const a=String(n.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=i(),o=s||r&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:o,isWebView:r}}function pd(){return Nr||(Nr=fd()),Nr}function md(n){let{swiper:e,on:t,emit:i}=n;const r=Ce();let s=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(h=>{o=r.requestAnimationFrame(()=>{const{width:d,height:p}=e;let m=d,y=p;h.forEach(v=>{let{contentBoxSize:f,contentRect:g,target:_}=v;_&&_!==e.el||(m=g?g.width:(f[0]||f).inlineSize,y=g?g.height:(f[0]||f).blockSize)}),(m!==d||y!==p)&&a()})}),s.observe(e.el))},c=()=>{o&&r.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},u=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",u)}),t("destroy",()=>{c(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",u)})}function gd(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;const s=[],o=Ce(),a=function(u,h){h===void 0&&(h={});const d=o.MutationObserver||o.WebkitMutationObserver,p=new d(m=>{if(e.__preventObserver__)return;if(m.length===1){r("observerUpdate",m[0]);return}const y=function(){r("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});p.observe(u,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:typeof h.childList>"u"?!0:h.childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),s.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const u=ql(e.hostEl);for(let h=0;h<u.length;h+=1)a(u[h])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(u=>{u.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",c)}var _d={on(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=t?"unshift":"push";return n.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][r](e)}),i},once(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(n,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(i,o)}return r.__emitterProxy=e,i.on(n,r,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[i](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[i].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,i;for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),i=n):(e=s[0].events,t=s[0].data,i=s[0].context||n),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(c=>{c.apply(i,[l,...t])}),n.eventsListeners&&n.eventsListeners[l]&&n.eventsListeners[l].forEach(c=>{c.apply(i,t)})}),n}};function yd(){const n=this;let e,t;const i=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=i.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=i.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(lt(i,"padding-left")||0,10)-parseInt(lt(i,"padding-right")||0,10),t=t-parseInt(lt(i,"padding-top")||0,10)-parseInt(lt(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function vd(){const n=this;function e(I,x){return parseFloat(I.getPropertyValue(n.getDirectionLabel(x))||0)}const t=n.params,{wrapperEl:i,slidesEl:r,size:s,rtlTranslate:o,wrongRTL:a}=n,l=n.virtual&&t.virtual.enabled,c=l?n.virtual.slides.length:n.slides.length,u=Le(r,`.${n.params.slideClass}, swiper-slide`),h=l?n.virtual.slides.length:u.length;let d=[];const p=[],m=[];let y=t.slidesOffsetBefore;typeof y=="function"&&(y=t.slidesOffsetBefore.call(n));let v=t.slidesOffsetAfter;typeof v=="function"&&(v=t.slidesOffsetAfter.call(n));const f=n.snapGrid.length,g=n.slidesGrid.length;let _=t.spaceBetween,w=-y,A=0,R=0;if(typeof s>"u")return;typeof _=="string"&&_.indexOf("%")>=0?_=parseFloat(_.replace("%",""))/100*s:typeof _=="string"&&(_=parseFloat(_)),n.virtualSize=-_,u.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(li(i,"--swiper-centered-offset-before",""),li(i,"--swiper-centered-offset-after",""));const X=t.grid&&t.grid.rows>1&&n.grid;X?n.grid.initSlides(u):n.grid&&n.grid.unsetSlides();let k;const q=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(I=>typeof t.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<h;I+=1){k=0;let x;if(u[I]&&(x=u[I]),X&&n.grid.updateSlide(I,x,u),!(u[I]&&lt(x,"display")==="none")){if(t.slidesPerView==="auto"){q&&(u[I].style[n.getDirectionLabel("width")]="");const D=getComputedStyle(x),b=x.style.transform,F=x.style.webkitTransform;if(b&&(x.style.transform="none"),F&&(x.style.webkitTransform="none"),t.roundLengths)k=n.isHorizontal()?us(x,"width",!0):us(x,"height",!0);else{const K=e(D,"width"),Ve=e(D,"padding-left"),Or=e(D,"padding-right"),G=e(D,"margin-left"),Re=e(D,"margin-right"),we=D.getPropertyValue("box-sizing");if(we&&we==="border-box")k=K+G+Re;else{const{clientWidth:vt,offsetWidth:oi}=x;k=K+Ve+Or+G+Re+(oi-vt)}}b&&(x.style.transform=b),F&&(x.style.webkitTransform=F),t.roundLengths&&(k=Math.floor(k))}else k=(s-(t.slidesPerView-1)*_)/t.slidesPerView,t.roundLengths&&(k=Math.floor(k)),u[I]&&(u[I].style[n.getDirectionLabel("width")]=`${k}px`);u[I]&&(u[I].swiperSlideSize=k),m.push(k),t.centeredSlides?(w=w+k/2+A/2+_,A===0&&I!==0&&(w=w-s/2-_),I===0&&(w=w-s/2-_),Math.abs(w)<1/1e3&&(w=0),t.roundLengths&&(w=Math.floor(w)),R%t.slidesPerGroup===0&&d.push(w),p.push(w)):(t.roundLengths&&(w=Math.floor(w)),(R-Math.min(n.params.slidesPerGroupSkip,R))%n.params.slidesPerGroup===0&&d.push(w),p.push(w),w=w+k+_),n.virtualSize+=k+_,A=k,R+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+v,o&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${n.virtualSize+_}px`),t.setWrapperSize&&(i.style[n.getDirectionLabel("width")]=`${n.virtualSize+_}px`),X&&n.grid.updateWrapperSize(k,d),!t.centeredSlides){const I=[];for(let x=0;x<d.length;x+=1){let D=d[x];t.roundLengths&&(D=Math.floor(D)),d[x]<=n.virtualSize-s&&I.push(D)}d=I,Math.floor(n.virtualSize-s)-Math.floor(d[d.length-1])>1&&d.push(n.virtualSize-s)}if(l&&t.loop){const I=m[0]+_;if(t.slidesPerGroup>1){const x=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),D=I*t.slidesPerGroup;for(let b=0;b<x;b+=1)d.push(d[d.length-1]+D)}for(let x=0;x<n.virtual.slidesBefore+n.virtual.slidesAfter;x+=1)t.slidesPerGroup===1&&d.push(d[d.length-1]+I),p.push(p[p.length-1]+I),n.virtualSize+=I}if(d.length===0&&(d=[0]),_!==0){const I=n.isHorizontal()&&o?"marginLeft":n.getDirectionLabel("marginRight");u.filter((x,D)=>!t.cssMode||t.loop?!0:D!==u.length-1).forEach(x=>{x.style[I]=`${_}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let I=0;m.forEach(D=>{I+=D+(_||0)}),I-=_;const x=I-s;d=d.map(D=>D<=0?-y:D>x?x+v:D)}if(t.centerInsufficientSlides){let I=0;if(m.forEach(x=>{I+=x+(_||0)}),I-=_,I<s){const x=(s-I)/2;d.forEach((D,b)=>{d[b]=D-x}),p.forEach((D,b)=>{p[b]=D+x})}}if(Object.assign(n,{slides:u,snapGrid:d,slidesGrid:p,slidesSizesGrid:m}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){li(i,"--swiper-centered-offset-before",`${-d[0]}px`),li(i,"--swiper-centered-offset-after",`${n.size/2-m[m.length-1]/2}px`);const I=-n.snapGrid[0],x=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(D=>D+I),n.slidesGrid=n.slidesGrid.map(D=>D+x)}if(h!==c&&n.emit("slidesLengthChange"),d.length!==f&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),p.length!==g&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const I=`${t.containerModifierClass}backface-hidden`,x=n.el.classList.contains(I);h<=t.maxBackfaceHiddenSlides?x||n.el.classList.add(I):x&&n.el.classList.remove(I)}}function wd(n){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const o=a=>i?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!i)break;t.push(o(a))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const a=t[s].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function Td(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(n.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-n.cssOverflowAdjustment()}function Ed(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:r,snapGrid:s}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-n;r&&(o=n),i.forEach(l=>{l.classList.remove(t.slideVisibleClass,t.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<i.length;l+=1){const c=i[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);const h=(o+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),d=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),p=-(o-u),m=p+e.slidesSizesGrid[l],y=p>=0&&p<=e.size-e.slidesSizesGrid[l];(p>=0&&p<e.size-1||m>1&&m<=e.size||p<=0&&m>=e.size)&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l),i[l].classList.add(t.slideVisibleClass)),y&&i[l].classList.add(t.slideFullyVisibleClass),c.progress=r?-h:h,c.originalProgress=r?-d:d}}function Id(n){const e=this;if(typeof n>"u"){const u=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*u||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,c=o;if(i===0)r=0,s=!0,o=!0;else{r=(n-e.minTranslate())/i;const u=Math.abs(n-e.minTranslate())<1,h=Math.abs(n-e.maxTranslate())<1;s=u||r<=0,o=h||r>=1,u&&(r=0),h&&(r=1)}if(t.loop){const u=e.getSlideIndexByData(0),h=e.getSlideIndexByData(e.slides.length-1),d=e.slidesGrid[u],p=e.slidesGrid[h],m=e.slidesGrid[e.slidesGrid.length-1],y=Math.abs(n);y>=d?a=(y-d)/m:a=(y+m-p)/m,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}const Lr=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Ad(){const n=this,{slides:e,params:t,slidesEl:i,activeIndex:r}=n,s=n.virtual&&t.virtual.enabled,o=n.grid&&t.grid&&t.grid.rows>1,a=h=>Le(i,`.${t.slideClass}${h}, swiper-slide${h}`)[0];let l,c,u;if(s)if(t.loop){let h=r-n.virtual.slidesBefore;h<0&&(h=n.virtual.slides.length+h),h>=n.virtual.slides.length&&(h-=n.virtual.slides.length),l=a(`[data-swiper-slide-index="${h}"]`)}else l=a(`[data-swiper-slide-index="${r}"]`);else o?(l=e.filter(h=>h.column===r)[0],u=e.filter(h=>h.column===r+1)[0],c=e.filter(h=>h.column===r-1)[0]):l=e[r];l&&(o||(u=ud(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=cd(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(h=>{Lr(h,h===l,t.slideActiveClass),Lr(h,h===u,t.slideNextClass),Lr(h,h===c,t.slidePrevClass)}),n.emitSlidesClasses()}const Ii=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,i=e.closest(t());if(i){let r=i.querySelector(`.${n.params.lazyPreloaderClass}`);!r&&n.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},Fr=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},hs=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),r=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const o=r,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+i+c)),n.slides.forEach((l,c)=>{a.includes(l.column)&&Fr(n,c)});return}const s=r+i-1;if(n.params.rewind||n.params.loop)for(let o=r-e;o<=s+e;o+=1){const a=(o%t+t)%t;(a<r||a>s)&&Fr(n,a)}else for(let o=Math.max(r-e,0);o<=Math.min(s+e,t-1);o+=1)o!==r&&(o>s||o<r)&&Fr(n,o)};function Sd(n){const{slidesGrid:e,params:t}=n,i=n.rtlTranslate?n.translate:-n.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?i>=e[s]&&i<e[s+1]-(e[s+1]-e[s])/2?r=s:i>=e[s]&&i<e[s+1]&&(r=s+1):i>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function bd(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=n,c;const u=p=>{let m=p-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l>"u"&&(l=Sd(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const p=Math.min(r.slidesPerGroupSkip,l);c=p+Math.floor((l-p)/r.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===s&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const h=e.grid&&r.grid&&r.grid.rows>1;let d;if(e.virtual&&r.virtual.enabled&&r.loop)d=u(l);else if(h){const p=e.slides.filter(y=>y.column===l)[0];let m=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(p),0)),d=Math.floor(m/r.grid.rows)}else if(e.slides[l]){const p=e.slides[l].getAttribute("data-swiper-slide-index");p?d=parseInt(p,10):d=l}else d=l;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:d,previousIndex:s,activeIndex:l}),e.initialized&&hs(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==d&&e.emit("realIndexChange"),e.emit("slideChange"))}function Cd(n,e){const t=this,i=t.params;let r=n.closest(`.${i.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(a=>{!r&&a.matches&&a.matches(`.${i.slideClass}, swiper-slide`)&&(r=a)});let s=!1,o;if(r){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===r){s=!0,o=a;break}}if(r&&s)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Rd={updateSize:yd,updateSlides:vd,updateAutoHeight:wd,updateSlidesOffset:Td,updateSlidesProgress:Ed,updateProgress:Id,updateSlidesClasses:Ad,updateActiveIndex:bd,updateClickedSlide:Cd};function Pd(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return i?-r:r;if(t.cssMode)return r;let o=ad(s,n);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function kd(n,e){const t=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:o}=t;let a=0,l=0;const c=0;t.isHorizontal()?a=i?-n:n:l=n,r.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:r.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const h=t.maxTranslate()-t.minTranslate();h===0?u=0:u=(n-t.minTranslate())/h,u!==o&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function Dd(){return-this.snapGrid[0]}function xd(){return-this.snapGrid[this.snapGrid.length-1]}function Od(n,e,t,i,r){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(i&&n>l?u=l:i&&n<c?u=c:u=n,s.updateProgress(u),o.cssMode){const h=s.isHorizontal();if(e===0)a[h?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return zl({swiper:s,targetPosition:-u,side:h?"left":"top"}),!0;a.scrollTo({[h?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(d){!s||s.destroyed||d.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Vd={getTranslate:Pd,setTranslate:kd,minTranslate:Dd,maxTranslate:xd,translateTo:Od};function Md(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function Hl(n){let{swiper:e,runCallbacks:t,direction:i,step:r}=n;const{activeIndex:s,previousIndex:o}=e;let a=i;if(a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&s!==o){if(a==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Nd(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Hl({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function Ld(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Hl({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var Fd={setTransition:Md,transitionStart:Nd,transitionEnd:Ld};function Ud(n,e,t,i,r){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let o=n;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:d,wrapperEl:p,enabled:m}=s;if(!m&&!i&&!r||s.destroyed||s.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const y=Math.min(s.params.slidesPerGroupSkip,o);let v=y+Math.floor((o-y)/s.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const f=-l[v];if(a.normalizeSlideIndex)for(let _=0;_<c.length;_+=1){const w=-Math.floor(f*100),A=Math.floor(c[_]*100),R=Math.floor(c[_+1]*100);typeof c[_+1]<"u"?w>=A&&w<R-(R-A)/2?o=_:w>=A&&w<R&&(o=_+1):w>=A&&(o=_)}if(s.initialized&&o!==h&&(!s.allowSlideNext&&(d?f>s.translate&&f>s.minTranslate():f<s.translate&&f<s.minTranslate())||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(h||0)!==o))return!1;o!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let g;if(o>h?g="next":o<h?g="prev":g="reset",d&&-f===s.translate||!d&&f===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(f),g!=="reset"&&(s.transitionStart(t,g),s.transitionEnd(t,g)),!1;if(a.cssMode){const _=s.isHorizontal(),w=d?f:-f;if(e===0){const A=s.virtual&&s.params.virtual.enabled;A&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),A&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[_?"scrollLeft":"scrollTop"]=w})):p[_?"scrollLeft":"scrollTop"]=w,A&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return zl({swiper:s,targetPosition:w,side:_?"left":"top"}),!0;p.scrollTo({[_?"left":"top"]:w,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(f),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,i),s.transitionStart(t,g),e===0?s.transitionEnd(t,g):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(w){!s||s.destroyed||w.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,g))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Bd(n,e,t,i){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=n;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let a;if(s){const d=o*r.params.grid.rows;a=r.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===d)[0].column}else a=r.getSlideIndexByData(o);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c}=r.params;let u=r.params.slidesPerView;u==="auto"?u=r.slidesPerViewDynamic():(u=Math.ceil(parseFloat(r.params.slidesPerView,10)),c&&u%2===0&&(u=u+1));let h=l-a<u;if(c&&(h=h||a<Math.ceil(u/2)),i&&c&&r.params.slidesPerView!=="auto"&&!s&&(h=!1),h){const d=c?a<r.activeIndex?"prev":"next":a-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:d,slideTo:!0,activeSlideIndex:d==="next"?a+1:a-l+1,slideRealIndex:d==="next"?r.realIndex:void 0})}if(s){const d=o*r.params.grid.rows;o=r.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===d)[0].column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,e,t,i)}),r}function $d(n,e,t){e===void 0&&(e=!0);const i=this,{enabled:r,params:s,animating:o}=i;if(!r||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:a,c=i.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,n,e,t)}),!0}return s.rewind&&i.isEnd?i.slideTo(0,n,e,t):i.slideTo(i.activeIndex+l,n,e,t)}function zd(n,e,t){e===void 0&&(e=!0);const i=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof n>"u"&&(n=i.params.speed);const u=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!u&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const h=a?i.translate:-i.translate;function d(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const p=d(h),m=s.map(f=>d(f));let y=s[m.indexOf(p)-1];if(typeof y>"u"&&r.cssMode){let f;s.forEach((g,_)=>{p>=g&&(f=_)}),typeof f<"u"&&(y=s[f>0?f-1:f])}let v=0;if(typeof y<"u"&&(v=o.indexOf(y),v<0&&(v=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(v=v-i.slidesPerViewDynamic("previous",!0)+1,v=Math.max(v,0))),r.rewind&&i.isBeginning){const f=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(f,n,e,t)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(v,n,e,t)}),!0;return i.slideTo(v,n,e,t)}function qd(n,e,t){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof n>"u"&&(n=i.params.speed),i.slideTo(i.activeIndex,n,e,t)}function jd(n,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;typeof n>"u"&&(n=r.params.speed);let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const c=r.snapGrid[a],u=r.snapGrid[a+1];l-c>(u-c)*i&&(s+=r.params.slidesPerGroup)}else{const c=r.snapGrid[a-1],u=r.snapGrid[a];l-c<=(u-c)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,n,e,t)}function Gd(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,i=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let r=n.clickedIndex,s;const o=n.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<n.loopedSlides-i/2||r>n.slides.length-n.loopedSlides+i/2?(n.loopFix(),r=n.getSlideIndex(Le(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),cs(()=>{n.slideTo(r)})):n.slideTo(r):r>n.slides.length-i?(n.loopFix(),r=n.getSlideIndex(Le(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),cs(()=>{n.slideTo(r)})):n.slideTo(r)}else n.slideTo(r)}var Hd={slideTo:Ud,slideToLoop:Bd,slideNext:$d,slidePrev:zd,slideReset:qd,slideToClosest:jd,slideToClickedSlide:Gd};function Wd(n){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{Le(i,`.${t.slideClass}, swiper-slide`).forEach((h,d)=>{h.setAttribute("data-swiper-slide-index",d)})},s=e.grid&&t.grid&&t.grid.rows>1,o=t.slidesPerGroup*(s?t.grid.rows:1),a=e.slides.length%o!==0,l=s&&e.slides.length%t.grid.rows!==0,c=u=>{for(let h=0;h<u;h+=1){const d=e.isElement?Oi("swiper-slide",[t.slideBlankClass]):Oi("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(d)}};if(a){if(t.loopAddBlankSlides){const u=o-e.slides.length%o;c(u),e.recalcSlides(),e.updateSlides()}else xi("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(t.loopAddBlankSlides){const u=t.grid.rows-e.slides.length%t.grid.rows;c(u),e.recalcSlides(),e.updateSlides()}else xi("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:n,direction:t.centeredSlides?void 0:"next"})}function Kd(n){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:r,activeSlideIndex:s,byController:o,byMousewheel:a}=n===void 0?{}:n;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:h,slidesEl:d,params:p}=l,{centeredSlides:m}=p;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled){t&&(!p.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):p.centeredSlides&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=h,l.emit("loopFix");return}let y=p.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(p.slidesPerView,10)),m&&y%2===0&&(y=y+1));const v=p.slidesPerGroupAuto?y:p.slidesPerGroup;let f=v;f%v!==0&&(f+=v-f%v),f+=p.loopAdditionalSlides,l.loopedSlides=f;const g=l.grid&&p.grid&&p.grid.rows>1;c.length<y+f?xi("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):g&&p.grid.fill==="row"&&xi("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const _=[],w=[];let A=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.filter(b=>b.classList.contains(p.slideActiveClass))[0]):A=s;const R=i==="next"||!i,X=i==="prev"||!i;let k=0,q=0;const I=g?Math.ceil(c.length/p.grid.rows):c.length,D=(g?c[s].column:s)+(m&&typeof r>"u"?-y/2+.5:0);if(D<f){k=Math.max(f-D,v);for(let b=0;b<f-D;b+=1){const F=b-Math.floor(b/I)*I;if(g){const K=I-F-1;for(let Ve=c.length-1;Ve>=0;Ve-=1)c[Ve].column===K&&_.push(Ve)}else _.push(I-F-1)}}else if(D+y>I-f){q=Math.max(D-(I-f*2),v);for(let b=0;b<q;b+=1){const F=b-Math.floor(b/I)*I;g?c.forEach((K,Ve)=>{K.column===F&&w.push(Ve)}):w.push(F)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),X&&_.forEach(b=>{c[b].swiperLoopMoveDOM=!0,d.prepend(c[b]),c[b].swiperLoopMoveDOM=!1}),R&&w.forEach(b=>{c[b].swiperLoopMoveDOM=!0,d.append(c[b]),c[b].swiperLoopMoveDOM=!1}),l.recalcSlides(),p.slidesPerView==="auto"?l.updateSlides():g&&(_.length>0&&X||w.length>0&&R)&&l.slides.forEach((b,F)=>{l.grid.updateSlide(F,b,l.slides)}),p.watchSlidesProgress&&l.updateSlidesOffset(),t){if(_.length>0&&X){if(typeof e>"u"){const b=l.slidesGrid[A],K=l.slidesGrid[A+k]-b;a?l.setTranslate(l.translate-K):(l.slideTo(A+Math.ceil(k),0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-K,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-K))}else if(r){const b=g?_.length/p.grid.rows:_.length;l.slideTo(l.activeIndex+b,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&R)if(typeof e>"u"){const b=l.slidesGrid[A],K=l.slidesGrid[A-q]-b;a?l.setTranslate(l.translate-K):(l.slideTo(A-q,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-K,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-K))}else{const b=g?w.length/p.grid.rows:w.length;l.slideTo(l.activeIndex-b,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=h,l.controller&&l.controller.control&&!o){const b={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(F=>{!F.destroyed&&F.params.loop&&F.loopFix({...b,slideTo:F.params.slidesPerView===p.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...b,slideTo:l.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}l.emit("loopFix")}function Qd(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const i=[];n.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[s]=r}),n.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{t.append(r)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var Xd={loopCreate:Wd,loopFix:Kd,loopDestroy:Qd};function Yd(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Jd(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var Zd={setGrabCursor:Yd,unsetGrabCursor:Jd};function ef(n,e){e===void 0&&(e=this);function t(i){if(!i||i===Xe()||i===Ce())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(n);return!r&&!i.getRootNode?null:r||t(i.getRootNode().host)}return t(e)}function la(n,e,t){const i=Ce(),{params:r}=n,s=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return s&&(t<=o||t>=i.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function tf(n){const e=this,t=Xe();let i=n;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){la(e,i,i.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=i.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&u&&(l=u[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,d=!!(i.target&&i.target.shadowRoot);if(s.noSwiping&&(d?ef(h,l):l.closest(h))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const p=o.currentX,m=o.currentY;if(!la(e,i,p))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,r.touchStartTime=Di(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let y=!0;l.matches(r.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l&&t.activeElement.blur();const v=y&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||v)&&!l.isContentEditable&&i.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function nf(n){const e=Xe(),t=this,i=t.touchEventsData,{params:r,touches:s,rtlTranslate:o,enabled:a}=t;if(!a||!r.simulateTouch&&n.pointerType==="mouse")return;let l=n;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(R=>R.identifier===i.touchId)[0],!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,h=c.pageY;if(l.preventedByNestedSwiper){s.startX=u,s.startY=h;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:u,startY:h,currentX:u,currentY:h}),i.touchStartTime=Di());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(h<s.startY&&t.translate<=t.maxTranslate()||h>s.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(u<s.startX&&t.translate<=t.maxTranslate()||u>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=u,s.currentY=h;const d=s.currentX-s.startX,p=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(d**2+p**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let R;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:d*d+p*p>=25&&(R=Math.atan2(Math.abs(p),Math.abs(d))*180/Math.PI,i.isScrolling=t.isHorizontal()?R>r.touchAngle:90-R>r.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let m=t.isHorizontal()?d:p,y=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),s.diff=m,m*=r.touchRatio,o&&(m=-m,y=-y);const v=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=y>0?"prev":"next";const f=t.params.loop&&!r.cssMode,g=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(f&&g&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const R=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(R)}i.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let _;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&v!==t.touchesDirection&&f&&g&&Math.abs(m)>=1){Object.assign(s,{startX:u,startY:h,currentX:u,currentY:h,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let w=!0,A=r.resistanceRatio;if(r.touchReleaseOnEdges&&(A=0),m>0?(f&&g&&!_&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+m)**A))):m<0&&(f&&g&&!_&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-m)**A))),w&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(m)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function rf(n){const e=this,t=e.touchEventsData;let i=n;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].filter(A=>A.identifier===t.touchId)[0],!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!o.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const h=Di(),d=h-t.touchStartTime;if(e.allowClick){const A=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(A&&A[0]||i.target,A),e.emit("tap click",i),d<300&&h-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Di(),cs(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(o.followFinger?p=l?e.translate:-e.translate:p=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-e.maxTranslate()&&!e.params.loop;let y=0,v=e.slidesSizesGrid[0];for(let A=0;A<c.length;A+=A<o.slidesPerGroupSkip?1:o.slidesPerGroup){const R=A<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[A+R]<"u"?(m||p>=c[A]&&p<c[A+R])&&(y=A,v=c[A+R]-c[A]):(m||p>=c[A])&&(y=A,v=c[c.length-1]-c[c.length-2])}let f=null,g=null;o.rewind&&(e.isBeginning?g=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const _=(p-c[y])/v,w=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(d>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(_>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?f:y+w):e.slideTo(y)),e.swipeDirection==="prev"&&(_>1-o.longSwipesRatio?e.slideTo(y+w):g!==null&&_<0&&Math.abs(_)>o.longSwipesRatio?e.slideTo(g):e.slideTo(y))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(y+w):e.slideTo(y):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:y+w),e.swipeDirection==="prev"&&e.slideTo(g!==null?g:y))}}function ca(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=n,o=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!a?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!o?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=r,n.allowSlideNext=i,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function sf(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function of(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=n;if(!i)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let r;const s=n.maxTranslate()-n.minTranslate();s===0?r=0:r=(n.translate-n.minTranslate())/s,r!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function af(n){const e=this;Ii(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function lf(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const Wl=(n,e)=>{const t=Xe(),{params:i,el:r,wrapperEl:s,device:o}=n,a=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;t[l]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:a}),r[l]("touchstart",n.onTouchStart,{passive:!1}),r[l]("pointerdown",n.onTouchStart,{passive:!1}),t[l]("touchmove",n.onTouchMove,{passive:!1,capture:a}),t[l]("pointermove",n.onTouchMove,{passive:!1,capture:a}),t[l]("touchend",n.onTouchEnd,{passive:!0}),t[l]("pointerup",n.onTouchEnd,{passive:!0}),t[l]("pointercancel",n.onTouchEnd,{passive:!0}),t[l]("touchcancel",n.onTouchEnd,{passive:!0}),t[l]("pointerout",n.onTouchEnd,{passive:!0}),t[l]("pointerleave",n.onTouchEnd,{passive:!0}),t[l]("contextmenu",n.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",n.onClick,!0),i.cssMode&&s[l]("scroll",n.onScroll),i.updateOnWindowResize?n[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",ca,!0):n[c]("observerUpdate",ca,!0),r[l]("load",n.onLoad,{capture:!0})};function cf(){const n=this,{params:e}=n;n.onTouchStart=tf.bind(n),n.onTouchMove=nf.bind(n),n.onTouchEnd=rf.bind(n),n.onDocumentTouchStart=lf.bind(n),e.cssMode&&(n.onScroll=of.bind(n)),n.onClick=sf.bind(n),n.onLoad=af.bind(n),Wl(n,"on")}function uf(){Wl(this,"off")}var hf={attachEvents:cf,detachEvents:uf};const ua=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function df(){const n=this,{realIndex:e,initialized:t,params:i,el:r}=n,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=n.getBreakpoint(s,n.params.breakpointsBase,n.el);if(!o||n.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||n.originalParams,c=ua(n,i),u=ua(n,l),h=n.params.grabCursor,d=l.grabCursor,p=i.enabled;c&&!u?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),n.emitContainerClasses()):!c&&u&&(r.classList.add(`${i.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),n.emitContainerClasses()),h&&!d?n.unsetGrabCursor():!h&&d&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(_=>{if(typeof l[_]>"u")return;const w=i[_]&&i[_].enabled,A=l[_]&&l[_].enabled;w&&!A&&n[_].disable(),!w&&A&&n[_].enable()});const m=l.direction&&l.direction!==i.direction,y=i.loop&&(l.slidesPerView!==i.slidesPerView||m),v=i.loop;m&&t&&n.changeDirection(),Ae(n.params,l);const f=n.params.enabled,g=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),p&&!f?n.disable():!p&&f&&n.enable(),n.currentBreakpoint=o,n.emit("_beforeBreakpoint",l),t&&(y?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!v&&g?(n.loopCreate(e),n.updateSlides()):v&&!g&&n.loopDestroy()),n.emit("breakpoint",l)}function ff(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let i=!1;const r=Ce(),s=e==="window"?r.innerHeight:t.clientHeight,o=Object.keys(n).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var pf={setBreakpoint:df,getBreakpoint:ff};function mf(n,e){const t=[];return n.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&t.push(e+r)}):typeof i=="string"&&t.push(e+i)}),t}function gf(){const n=this,{classNames:e,params:t,rtl:i,el:r,device:s}=n,o=mf(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),r.classList.add(...e),n.emitContainerClasses()}function _f(){const n=this,{el:e,classNames:t}=n;e.classList.remove(...t),n.emitContainerClasses()}var yf={addClasses:gf,removeClasses:_f};function vf(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:i}=t;if(i){const r=n.slides.length-1,s=n.slidesGrid[r]+n.slidesSizesGrid[r]+i*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var wf={checkOverflow:vf},ha={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Tf(n,e){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],s=i[r];if(typeof s!="object"||s===null){Ae(e,i);return}if(n[r]===!0&&(n[r]={enabled:!0}),r==="navigation"&&n[r]&&n[r].enabled&&!n[r].prevEl&&!n[r].nextEl&&(n[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&n[r]&&n[r].enabled&&!n[r].el&&(n[r].auto=!0),!(r in n&&"enabled"in s)){Ae(e,i);return}typeof n[r]=="object"&&!("enabled"in n[r])&&(n[r].enabled=!0),n[r]||(n[r]={enabled:!1}),Ae(e,i)}}const Ur={eventsEmitter:_d,update:Rd,translate:Vd,transition:Fd,slide:Hd,loop:Xd,grabCursor:Zd,events:hf,breakpoints:pf,checkOverflow:wf,classes:yf},Br={};class le{constructor(){let e,t;for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=Ae({},t),e&&!t.el&&(t.el=e);const o=Xe();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const u=[];return o.querySelectorAll(t.el).forEach(h=>{const d=Ae({},t,{el:h});u.push(new le(d))}),u}const a=this;a.__swiper__=!0,a.support=jl(),a.device=Gl({userAgent:t.userAgent}),a.browser=pd(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const l={};a.modules.forEach(u=>{u({params:t,swiper:a,extendParams:Tf(t,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=Ae({},ha,l);return a.params=Ae({},c,Br,t),a.originalParams=Ae({},a.params),a.passedParams=Ae({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(u=>{a.on(u,a.params.on[u])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,r=Le(t,`.${i.slideClass}, swiper-slide`),s=Vi(r[0]);return Vi(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=Le(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),o=(i.maxTranslate()-r)*e+r;i.translateTo(o,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);t.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:r,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=i;let u=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let h=s[c]?Math.ceil(s[c].swiperSlideSize):0,d;for(let p=c+1;p<s.length;p+=1)s[p]&&!d&&(h+=Math.ceil(s[p].swiperSlideSize),u+=1,h>l&&(d=!0));for(let p=c-1;p>=0;p-=1)s[p]&&!d&&(h+=s[p].swiperSlideSize,u+=1,h>l&&(d=!0))}else if(e==="current")for(let h=c+1;h<s.length;h+=1)(t?o[h]+a[h]-o[c]<l:o[h]-o[c]<l)&&(u+=1);else for(let h=c-1;h>=0;h-=1)o[c]-o[h]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Ii(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):Le(i,r())[0];return!o&&t.params.createElements&&(o=Oi("div",t.params.wrapperClass),i.append(o),Le(i,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:i,wrapperEl:o,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||lt(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||lt(i,"direction")==="rtl"),wrongRTL:lt(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?Ii(t,s):s.addEventListener("load",o=>{Ii(t,o.target)})}),hs(t),t.initialized=!0,hs(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:r,el:s,wrapperEl:o,slides:a}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),t&&(i.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el.swiper=null,sd(i)),i.destroyed=!0),null}static extendDefaults(e){Ae(Br,e)}static get extendedDefaults(){return Br}static get defaults(){return ha}static installModule(e){le.prototype.__modules__||(le.prototype.__modules__=[]);const t=le.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>le.installModule(t)),le):(le.installModule(e),le)}}Object.keys(Ur).forEach(n=>{Object.keys(Ur[n]).forEach(e=>{le.prototype[e]=Ur[n][e]})});le.use([md,gd]);function Kl(n,e,t,i){return n.params.createElements&&Object.keys(i).forEach(r=>{if(!t[r]&&t.auto===!0){let s=Le(n.el,`.${i[r]}`)[0];s||(s=Oi("div",i[r]),s.className=i[r],n.el.append(s)),t[r]=s,e[r]=s}}),t}function Ws(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(m){let y;return m&&typeof m=="string"&&e.isElement&&(y=e.el.querySelector(m),y)?y:(m&&(typeof m=="string"&&(y=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&y&&y.length>1&&e.el.querySelectorAll(m).length===1?y=e.el.querySelector(m):y&&y.length===1&&(y=y[0])),m&&!y?m:y)}function o(m,y){const v=e.params.navigation;m=ie(m),m.forEach(f=>{f&&(f.classList[y?"add":"remove"](...v.disabledClass.split(" ")),f.tagName==="BUTTON"&&(f.disabled=y),e.params.watchOverflow&&e.enabled&&f.classList[e.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:m,prevEl:y}=e.navigation;if(e.params.loop){o(y,!1),o(m,!1);return}o(y,e.isBeginning&&!e.params.rewind),o(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function c(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const m=e.params.navigation;if(e.params.navigation=Kl(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let y=s(m.nextEl),v=s(m.prevEl);Object.assign(e.navigation,{nextEl:y,prevEl:v}),y=ie(y),v=ie(v);const f=(g,_)=>{g&&g.addEventListener("click",_==="next"?c:l),!e.enabled&&g&&g.classList.add(...m.lockClass.split(" "))};y.forEach(g=>f(g,"next")),v.forEach(g=>f(g,"prev"))}function h(){let{nextEl:m,prevEl:y}=e.navigation;m=ie(m),y=ie(y);const v=(f,g)=>{f.removeEventListener("click",g==="next"?c:l),f.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(f=>v(f,"next")),y.forEach(f=>v(f,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?p():(u(),a())}),i("toEdge fromEdge lock unlock",()=>{a()}),i("destroy",()=>{h()}),i("enable disable",()=>{let{nextEl:m,prevEl:y}=e.navigation;if(m=ie(m),y=ie(y),e.enabled){a();return}[...m,...y].filter(v=>!!v).forEach(v=>v.classList.add(e.params.navigation.lockClass))}),i("click",(m,y)=>{let{nextEl:v,prevEl:f}=e.navigation;v=ie(v),f=ie(f);const g=y.target;if(e.params.navigation.hideOnClick&&!f.includes(g)&&!v.includes(g)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let _;v.length?_=v[0].classList.contains(e.params.navigation.hiddenClass):f.length&&(_=f[0].classList.contains(e.params.navigation.hiddenClass)),r(_===!0?"navigationShow":"navigationHide"),[...v,...f].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:d,disable:p,update:a,init:u,destroy:h})}function hn(n){return n===void 0&&(n=""),`.${n.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ef(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;const s="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(f,g){const{bulletActiveClass:_}=e.params.pagination;f&&(f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${_}-${g}`),f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${_}-${g}-${g}`)))}function u(f){const g=f.target.closest(hn(e.params.pagination.bulletClass));if(!g)return;f.preventDefault();const _=Vi(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===_)return;e.slideToLoop(_)}else e.slideTo(_)}function h(){const f=e.rtl,g=e.params.pagination;if(l())return;let _=e.pagination.el;_=ie(_);let w,A;const R=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,X=e.params.loop?Math.ceil(R/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(A=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(w=e.snapIndex,A=e.previousSnapIndex):(A=e.previousIndex||0,w=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const k=e.pagination.bullets;let q,I,x;if(g.dynamicBullets&&(o=us(k[0],e.isHorizontal()?"width":"height",!0),_.forEach(D=>{D.style[e.isHorizontal()?"width":"height"]=`${o*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&A!==void 0&&(a+=w-(A||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),q=Math.max(w-a,0),I=q+(Math.min(k.length,g.dynamicMainBullets)-1),x=(I+q)/2),k.forEach(D=>{const b=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${g.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();D.classList.remove(...b)}),_.length>1)k.forEach(D=>{const b=Vi(D);b===w?D.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&D.setAttribute("part","bullet"),g.dynamicBullets&&(b>=q&&b<=I&&D.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),b===q&&c(D,"prev"),b===I&&c(D,"next"))});else{const D=k[w];if(D&&D.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&k.forEach((b,F)=>{b.setAttribute("part",F===w?"bullet-active":"bullet")}),g.dynamicBullets){const b=k[q],F=k[I];for(let K=q;K<=I;K+=1)k[K]&&k[K].classList.add(...`${g.bulletActiveClass}-main`.split(" "));c(b,"prev"),c(F,"next")}}if(g.dynamicBullets){const D=Math.min(k.length,g.dynamicMainBullets+4),b=(o*D-o)/2-x*o,F=f?"right":"left";k.forEach(K=>{K.style[e.isHorizontal()?F:"top"]=`${b}px`})}}_.forEach((k,q)=>{if(g.type==="fraction"&&(k.querySelectorAll(hn(g.currentClass)).forEach(I=>{I.textContent=g.formatFractionCurrent(w+1)}),k.querySelectorAll(hn(g.totalClass)).forEach(I=>{I.textContent=g.formatFractionTotal(X)})),g.type==="progressbar"){let I;g.progressbarOpposite?I=e.isHorizontal()?"vertical":"horizontal":I=e.isHorizontal()?"horizontal":"vertical";const x=(w+1)/X;let D=1,b=1;I==="horizontal"?D=x:b=x,k.querySelectorAll(hn(g.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${D}) scaleY(${b})`,F.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(k.innerHTML=g.renderCustom(e,w+1,X),q===0&&r("paginationRender",k)):(q===0&&r("paginationRender",k),r("paginationUpdate",k)),e.params.watchOverflow&&e.enabled&&k.classList[e.isLocked?"add":"remove"](g.lockClass)})}function d(){const f=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let _=e.pagination.el;_=ie(_);let w="";if(f.type==="bullets"){let A=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&A>g&&(A=g);for(let R=0;R<A;R+=1)f.renderBullet?w+=f.renderBullet.call(e,R,f.bulletClass):w+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?w=f.renderFraction.call(e,f.currentClass,f.totalClass):w=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?w=f.renderProgressbar.call(e,f.progressbarFillClass):w=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],_.forEach(A=>{f.type!=="custom"&&(A.innerHTML=w||""),f.type==="bullets"&&e.pagination.bullets.push(...A.querySelectorAll(hn(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",_[0])}function p(){e.params.pagination=Kl(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let g;typeof f.el=="string"&&e.isElement&&(g=e.el.querySelector(f.el)),!g&&typeof f.el=="string"&&(g=[...document.querySelectorAll(f.el)]),g||(g=f.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(f.el)],g.length>1&&(g=g.filter(_=>ql(_,".swiper")[0]===e.el)[0])),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=ie(g),g.forEach(_=>{f.type==="bullets"&&f.clickable&&_.classList.add(...(f.clickableClass||"").split(" ")),_.classList.add(f.modifierClass+f.type),_.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(_.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&_.classList.add(f.progressbarOppositeClass),f.clickable&&_.addEventListener("click",u),e.enabled||_.classList.add(f.lockClass)}))}function m(){const f=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=ie(g),g.forEach(_=>{_.classList.remove(f.hiddenClass),_.classList.remove(f.modifierClass+f.type),_.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(_.classList.remove(...(f.clickableClass||"").split(" ")),_.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(_=>_.classList.remove(...f.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:g}=e.pagination;g=ie(g),g.forEach(_=>{_.classList.remove(f.horizontalClass,f.verticalClass),_.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?v():(p(),d(),h())}),i("activeIndexChange",()=>{typeof e.snapIndex>"u"&&h()}),i("snapIndexChange",()=>{h()}),i("snapGridLengthChange",()=>{d(),h()}),i("destroy",()=>{m()}),i("enable disable",()=>{let{el:f}=e.pagination;f&&(f=ie(f),f.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{h()}),i("click",(f,g)=>{const _=g.target,w=ie(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!_.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&_===e.navigation.nextEl||e.navigation.prevEl&&_===e.navigation.prevEl))return;const A=w[0].classList.contains(e.params.pagination.hiddenClass);r(A===!0?"paginationShow":"paginationHide"),w.forEach(R=>R.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=ie(f),f.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),p(),d(),h()},v=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=ie(f),f.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:y,disable:v,render:d,update:h,init:p,destroy:m})}function Ks(n){let{swiper:e,extendParams:t,on:i,emit:r,params:s}=n;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,a,l=s&&s.autoplay?s.autoplay.delay:3e3,c=s&&s.autoplay?s.autoplay.delay:3e3,u,h=new Date().getTime(),d,p,m,y,v,f,g;function _(G){!e||e.destroyed||!e.wrapperEl||G.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",_),!g&&I())}const w=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(c=u,d=!1);const G=e.autoplay.paused?u:h+c-new Date().getTime();e.autoplay.timeLeft=G,r("autoplayTimeLeft",G,G/l),a=requestAnimationFrame(()=>{w()})},A=()=>{let G;return e.virtual&&e.params.virtual.enabled?G=e.slides.filter(we=>we.classList.contains("swiper-slide-active"))[0]:G=e.slides[e.activeIndex],G?parseInt(G.getAttribute("data-swiper-autoplay"),10):void 0},R=G=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(a),w();let Re=typeof G>"u"?e.params.autoplay.delay:G;l=e.params.autoplay.delay,c=e.params.autoplay.delay;const we=A();!Number.isNaN(we)&&we>0&&typeof G>"u"&&(Re=we,l=we,c=we),u=Re;const vt=e.params.speed,oi=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(vt,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,vt,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(vt,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,vt,!0,!0),r("autoplay")),e.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{R()})))};return Re>0?(clearTimeout(o),o=setTimeout(()=>{oi()},Re)):requestAnimationFrame(()=>{oi()}),Re},X=()=>{h=new Date().getTime(),e.autoplay.running=!0,R(),r("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(a),r("autoplayStop")},q=(G,Re)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),G||(f=!0);const we=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",_):I()};if(e.autoplay.paused=!0,Re){v&&(u=e.params.autoplay.delay),v=!1,we();return}u=(u||e.params.autoplay.delay)-(new Date().getTime()-h),!(e.isEnd&&u<0&&!e.params.loop)&&(u<0&&(u=0),we())},I=()=>{e.isEnd&&u<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(h=new Date().getTime(),f?(f=!1,R(u)):R(),e.autoplay.paused=!1,r("autoplayResume"))},x=()=>{if(e.destroyed||!e.autoplay.running)return;const G=Xe();G.visibilityState==="hidden"&&(f=!0,q(!0)),G.visibilityState==="visible"&&I()},D=G=>{G.pointerType==="mouse"&&(f=!0,g=!0,!(e.animating||e.autoplay.paused)&&q(!0))},b=G=>{G.pointerType==="mouse"&&(g=!1,e.autoplay.paused&&I())},F=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",D),e.el.addEventListener("pointerleave",b))},K=()=>{e.el.removeEventListener("pointerenter",D),e.el.removeEventListener("pointerleave",b)},Ve=()=>{Xe().addEventListener("visibilitychange",x)},Or=()=>{Xe().removeEventListener("visibilitychange",x)};i("init",()=>{e.params.autoplay.enabled&&(F(),Ve(),X())}),i("destroy",()=>{K(),Or(),e.autoplay.running&&k()}),i("_freeModeStaticRelease",()=>{(m||f)&&I()}),i("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():q(!0,!0)}),i("beforeTransitionStart",(G,Re,we)=>{e.destroyed||!e.autoplay.running||(we||!e.params.autoplay.disableOnInteraction?q(!0,!0):k())}),i("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}p=!0,m=!1,f=!1,y=setTimeout(()=>{f=!0,m=!0,q(!0)},200)}}),i("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(y),clearTimeout(o),e.params.autoplay.disableOnInteraction){m=!1,p=!1;return}m&&e.params.cssMode&&I(),m=!1,p=!1}}),i("slideChange",()=>{e.destroyed||!e.autoplay.running||(v=!0)}),Object.assign(e.autoplay,{start:X,stop:k,pause:q,resume:I})}var da={};/**
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
 */const Ql=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},If=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),i.push(t[u],t[h],t[d],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ql(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):If(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new Af;const d=s<<2|a>>4;if(i.push(d),c!==64){const p=a<<4&240|c>>2;if(i.push(p),h!==64){const m=c<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Af extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sf=function(n){const e=Ql(n);return Xl.encodeByteArray(e,!0)},Mi=function(n){return Sf(n).replace(/\./g,"")},Yl=function(n){try{return Xl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cf=()=>bf().__FIREBASE_DEFAULTS__,Rf=()=>{if(typeof process>"u"||typeof da>"u")return;const n=da.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yl(n[1]);return e&&JSON.parse(e)},Qs=()=>{try{return Cf()||Rf()||Pf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jl=n=>{var e,t;return(t=(e=Qs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zl=n=>{const e=Jl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ec=()=>{var n;return(n=Qs())===null||n===void 0?void 0:n.config},tc=n=>{var e;return(e=Qs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class kf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function nc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Mi(JSON.stringify(t)),Mi(JSON.stringify(o)),""].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Df(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function xf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Of(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vf(){const n=ye();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mf(){try{return typeof indexedDB=="object"}catch{return!1}}function Nf(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Lf="FirebaseError";class Ge extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Lf,Object.setPrototypeOf(this,Ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Un.prototype.create)}}class Un{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Ff(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ge(r,a,i)}}function Ff(n,e){return n.replace(Uf,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Uf=/\{\$([^}]+)}/g;function Bf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ni(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(fa(s)&&fa(o)){if(!Ni(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function fa(n){return n!==null&&typeof n=="object"}/**
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
 */function Bn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function $f(n,e){const t=new zf(n,e);return t.subscribe.bind(t)}class zf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");qf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=$r),r.error===void 0&&(r.error=$r),r.complete===void 0&&(r.complete=$r);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $r(){}/**
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
 */function De(n){return n&&n._delegate?n._delegate:n}class ft{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wt="[DEFAULT]";/**
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
 */class jf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new kf;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hf(e))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wt){return this.instances.has(e)}getOptions(e=wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Gf(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=wt){return this.component?this.component.multipleInstances?e:wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gf(n){return n===wt?void 0:n}function Hf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Wf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Kf={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Qf=$.INFO,Xf={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Yf=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Xf[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xs{constructor(e){this.name=e,this._logLevel=Qf,this._logHandler=Yf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Jf=(n,e)=>e.some(t=>n instanceof t);let pa,ma;function Zf(){return pa||(pa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ep(){return ma||(ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ic=new WeakMap,ds=new WeakMap,rc=new WeakMap,zr=new WeakMap,Ys=new WeakMap;function tp(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ht(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ic.set(t,n)}).catch(()=>{}),Ys.set(e,n),e}function np(n){if(ds.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ds.set(n,e)}let fs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ds.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ip(n){fs=n(fs)}function rp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(qr(this),e,...t);return rc.set(i,e.sort?e.sort():[e]),ht(i)}:ep().includes(n)?function(...e){return n.apply(qr(this),e),ht(ic.get(this))}:function(...e){return ht(n.apply(qr(this),e))}}function sp(n){return typeof n=="function"?rp(n):(n instanceof IDBTransaction&&np(n),Jf(n,Zf())?new Proxy(n,fs):n)}function ht(n){if(n instanceof IDBRequest)return tp(n);if(zr.has(n))return zr.get(n);const e=sp(n);return e!==n&&(zr.set(n,e),Ys.set(e,n)),e}const qr=n=>Ys.get(n);function op(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=ht(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ht(o.result),l.oldVersion,l.newVersion,ht(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ap=["get","getKey","getAll","getAllKeys","count"],lp=["put","add","delete","clear"],jr=new Map;function ga(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=lp.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ap.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return jr.set(e,s),s}ip(n=>({...n,get:(e,t,i)=>ga(e,t)||n.get(e,t,i),has:(e,t)=>!!ga(e,t)||n.has(e,t)}));/**
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
 */class cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(up(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function up(n){const e=n.getComponent();return e?.type==="VERSION"}const ps="@firebase/app",_a="0.9.15";/**
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
 */const Rt=new Xs("@firebase/app"),hp="@firebase/app-compat",dp="@firebase/analytics-compat",fp="@firebase/analytics",pp="@firebase/app-check-compat",mp="@firebase/app-check",gp="@firebase/auth",_p="@firebase/auth-compat",yp="@firebase/database",vp="@firebase/database-compat",wp="@firebase/functions",Tp="@firebase/functions-compat",Ep="@firebase/installations",Ip="@firebase/installations-compat",Ap="@firebase/messaging",Sp="@firebase/messaging-compat",bp="@firebase/performance",Cp="@firebase/performance-compat",Rp="@firebase/remote-config",Pp="@firebase/remote-config-compat",kp="@firebase/storage",Dp="@firebase/storage-compat",xp="@firebase/firestore",Op="@firebase/firestore-compat",Vp="firebase",Mp="10.1.0";/**
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
 */const ms="[DEFAULT]",Np={[ps]:"fire-core",[hp]:"fire-core-compat",[fp]:"fire-analytics",[dp]:"fire-analytics-compat",[mp]:"fire-app-check",[pp]:"fire-app-check-compat",[gp]:"fire-auth",[_p]:"fire-auth-compat",[yp]:"fire-rtdb",[vp]:"fire-rtdb-compat",[wp]:"fire-fn",[Tp]:"fire-fn-compat",[Ep]:"fire-iid",[Ip]:"fire-iid-compat",[Ap]:"fire-fcm",[Sp]:"fire-fcm-compat",[bp]:"fire-perf",[Cp]:"fire-perf-compat",[Rp]:"fire-rc",[Pp]:"fire-rc-compat",[kp]:"fire-gcs",[Dp]:"fire-gcs-compat",[xp]:"fire-fst",[Op]:"fire-fst-compat","fire-js":"fire-js",[Vp]:"fire-js-all"};/**
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
 */const Li=new Map,gs=new Map;function Lp(n,e){try{n.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pt(n){const e=n.name;if(gs.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;gs.set(e,n);for(const t of Li.values())Lp(t,n);return!0}function ir(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Fp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new Un("app","Firebase",Fp);/**
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
 */class Up{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Vt=Mp;function Js(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ms,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw dt.create("bad-app-name",{appName:String(r)});if(t||(t=ec()),!t)throw dt.create("no-options");const s=Li.get(r);if(s){if(Ni(t,s.options)&&Ni(i,s.config))return s;throw dt.create("duplicate-app",{appName:r})}const o=new Wf(r);for(const l of gs.values())o.addComponent(l);const a=new Up(t,i,o);return Li.set(r,a),a}function Zs(n=ms){const e=Li.get(n);if(!e&&n===ms&&ec())return Js();if(!e)throw dt.create("no-app",{appName:n});return e}function Be(n,e,t){var i;let r=(i=Np[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(a.join(" "));return}Pt(new ft(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Bp="firebase-heartbeat-database",$p=1,An="firebase-heartbeat-store";let Gr=null;function sc(){return Gr||(Gr=op(Bp,$p,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(An)}}}).catch(n=>{throw dt.create("idb-open",{originalErrorMessage:n.message})})),Gr}async function zp(n){try{return await(await sc()).transaction(An).objectStore(An).get(oc(n))}catch(e){if(e instanceof Ge)Rt.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:e?.message});Rt.warn(t.message)}}}async function ya(n,e){try{const i=(await sc()).transaction(An,"readwrite");await i.objectStore(An).put(e,oc(n)),await i.done}catch(t){if(t instanceof Ge)Rt.warn(t.message);else{const i=dt.create("idb-set",{originalErrorMessage:t?.message});Rt.warn(i.message)}}}function oc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qp=1024,jp=30*24*60*60*1e3;class Gp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=va();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=jp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=va(),{heartbeatsToSend:t,unsentEntries:i}=Hp(this._heartbeatsCache.heartbeats),r=Mi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function va(){return new Date().toISOString().substring(0,10)}function Hp(n,e=qp){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),wa(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),wa(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Wp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mf()?Nf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ya(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ya(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wa(n){return Mi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Kp(n){Pt(new ft("platform-logger",e=>new cp(e),"PRIVATE")),Pt(new ft("heartbeat",e=>new Gp(e),"PRIVATE")),Be(ps,_a,n),Be(ps,_a,"esm2017"),Be("fire-js","")}Kp("");var Qp="firebase",Xp="10.1.0";/**
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
 */Be(Qp,Xp,"app");function eo(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function ac(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yp=ac,lc=new Un("auth","Firebase",ac());/**
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
 */const Fi=new Xs("@firebase/auth");function Jp(n,...e){Fi.logLevel<=$.WARN&&Fi.warn(`Auth (${Vt}): ${n}`,...e)}function Ai(n,...e){Fi.logLevel<=$.ERROR&&Fi.error(`Auth (${Vt}): ${n}`,...e)}/**
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
 */function Ye(n,...e){throw to(n,...e)}function $e(n,...e){return to(n,...e)}function Zp(n,e,t){const i=Object.assign(Object.assign({},Yp()),{[e]:t});return new Un("auth","Firebase",i).create(e,{appName:n.name})}function to(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return lc.create(n,...e)}function M(n,e,...t){if(!n)throw to(e,...t)}function We(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ai(e),new Error(e)}function Je(n,e){n||We(e)}/**
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
 */function _s(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function em(){return Ta()==="http:"||Ta()==="https:"}function Ta(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function tm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(em()||xf()||"connection"in navigator)?navigator.onLine:!0}function nm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class $n{constructor(e,t){this.shortDelay=e,this.longDelay=t,Je(t>e,"Short delay should be less than long delay!"),this.isMobile=Df()||Of()}get(){return tm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function no(n,e){Je(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;We("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;We("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;We("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const im={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rm=new $n(3e4,6e4);function uc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zn(n,e,t,i,r={}){return hc(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Bn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),cc.fetch()(dc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function hc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},im),e);try{const r=new om(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ci(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ci(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ci(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ci(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zp(n,u,c);Ye(n,u)}}catch(r){if(r instanceof Ge)throw r;Ye(n,"network-request-failed",{message:String(r)})}}async function sm(n,e,t,i,r={}){const s=await zn(n,e,t,i,r);return"mfaPendingCredential"in s&&Ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function dc(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?no(n.config,r):`${n.config.apiScheme}://${r}`}class om{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i($e(this.auth,"network-request-failed")),rm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ci(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=$e(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function am(n,e){return zn(n,"POST","/v1/accounts:delete",e)}async function lm(n,e){return zn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function yn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cm(n,e=!1){const t=De(n),i=await t.getIdToken(e),r=io(i);M(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:yn(Hr(r.auth_time)),issuedAtTime:yn(Hr(r.iat)),expirationTime:yn(Hr(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Hr(n){return Number(n)*1e3}function io(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const r=Yl(t);return r?JSON.parse(r):(Ai("Failed to decode base64 JWT payload"),null)}catch(r){return Ai("Caught error parsing JWT payload as JSON",r?.toString()),null}}function um(n){const e=io(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ge&&hm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function hm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class dm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yn(this.lastLoginAt),this.creationTime=yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ui(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Sn(n,lm(t,{idToken:i}));M(r?.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mm(s.providerUserInfo):[],a=pm(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!a?.length,u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function fm(n){const e=De(n);await Ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pm(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function mm(n){return n.map(e=>{var{providerId:t}=e,i=eo(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function gm(n,e){const t=await hc(n,{},async()=>{const i=Bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=dc(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await gm(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new bn;return i&&(M(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(M(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return We("not implemented")}}/**
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
 */function it(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Sn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cm(this,e)}reload(){return fm(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ui(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sn(this,am(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,f=(c=t.createdAt)!==null&&c!==void 0?c:void 0,g=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:w,isAnonymous:A,providerData:R,stsTokenManager:X}=t;M(_&&X,e,"internal-error");const k=bn.fromJSON(this.name,X);M(typeof _=="string",e,"internal-error"),it(h,e.name),it(d,e.name),M(typeof w=="boolean",e,"internal-error"),M(typeof A=="boolean",e,"internal-error"),it(p,e.name),it(m,e.name),it(y,e.name),it(v,e.name),it(f,e.name),it(g,e.name);const q=new At({uid:_,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:A,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:k,createdAt:f,lastLoginAt:g});return R&&Array.isArray(R)&&(q.providerData=R.map(I=>Object.assign({},I))),v&&(q._redirectEventId=v),q}static async _fromIdTokenResponse(e,t,i=!1){const r=new bn;r.updateFromServerResponse(t);const s=new At({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ui(s),s}}/**
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
 */const Ea=new Map;function Ke(n){Je(n instanceof Function,"Expected a class definition");let e=Ea.get(n);return e?(Je(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ea.set(n,e),e)}/**
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
 */class pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pc.type="NONE";const Ia=pc;/**
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
 */function Si(n,e,t){return`firebase:${n}:${e}:${t}`}class zt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Si(this.userKey,r.apiKey,s),this.fullPersistenceKey=Si("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new zt(Ke(Ia),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Ke(Ia);const o=Si(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=At._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zt(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new zt(s,e,i))}}/**
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
 */function Aa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_c(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vc(e))return"Blackberry";if(wc(e))return"Webos";if(ro(e))return"Safari";if((e.includes("chrome/")||gc(e))&&!e.includes("edge/"))return"Chrome";if(yc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function mc(n=ye()){return/firefox\//i.test(n)}function ro(n=ye()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gc(n=ye()){return/crios\//i.test(n)}function _c(n=ye()){return/iemobile/i.test(n)}function yc(n=ye()){return/android/i.test(n)}function vc(n=ye()){return/blackberry/i.test(n)}function wc(n=ye()){return/webos/i.test(n)}function rr(n=ye()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _m(n=ye()){var e;return rr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ym(){return Vf()&&document.documentMode===10}function Tc(n=ye()){return rr(n)||yc(n)||wc(n)||vc(n)||/windows phone/i.test(n)||_c(n)}function vm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ec(n,e=[]){let t;switch(n){case"Browser":t=Aa(ye());break;case"Worker":t=`${Aa(ye())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vt}/${i}`}async function Ic(n,e){return zn(n,"GET","/v2/recaptchaConfig",uc(n,e))}function Sa(n){return n!==void 0&&n.enterprise!==void 0}class Ac{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function wm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Sc(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=$e("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",wm().appendChild(i)})}function Tm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Em="https://www.google.com/recaptcha/enterprise.js?render=",Im="recaptcha-enterprise",Am="NO_RECAPTCHA";class Sm{constructor(e){this.type=Im,this.auth=sr(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ic(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ac(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;Sa(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Am)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&Sa(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Sc(Em+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class bm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */class Cm{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ba(this),this.idTokenSubscription=new ba(this),this.beforeStateQueue=new bm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ke(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await zt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ui(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?De(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}async initializeRecaptchaConfig(){const e=await Ic(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ac(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Sm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Un("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ke(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await zt.create(this,[Ke(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Jp(`Error while retrieving App Check token: ${t.error}`),t?.token}}function sr(n){return De(n)}class ba{constructor(e){this.auth=e,this.observer=null,this.addObserver=$f(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Rm(n,e){const t=ir(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Ni(s,e??{}))return r;Ye(r,"already-initialized")}return t.initialize({options:e})}function Pm(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Ke);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function km(n,e,t){const i=sr(n);M(i._canInitEmulator,i,"emulator-config-failed"),M(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!t?.disableWarnings,s=bc(e),{host:o,port:a}=Dm(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||xm()}function bc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Dm(n){const e=bc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ca(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ca(o)}}}function Ca(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return We("not implemented")}_getIdTokenResponse(e){return We("not implemented")}_linkToIdToken(e,t){return We("not implemented")}_getReauthenticationResolver(e){return We("not implemented")}}/**
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
 */async function qt(n,e){return sm(n,"POST","/v1/accounts:signInWithIdp",uc(n,e))}/**
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
 */const Om="http://localhost";class kt extends Cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=eo(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new kt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return qt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,qt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qt(e,t)}buildRequest(){const e={requestUri:Om,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bn(t)}return e}}/**
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
 */class Rc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qn extends Rc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rt extends qn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";rt.PROVIDER_ID="facebook.com";/**
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
 */class st extends qn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return st.credential(t,i)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
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
 */class ot extends qn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
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
 */class at extends qn{constructor(){super("twitter.com")}static credential(e,t){return kt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return at.credential(t,i)}catch{return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
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
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await At._fromIdTokenResponse(e,i,r),o=Ra(i);return new Xt({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Ra(i);return new Xt({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Ra(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Bi extends Ge{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Bi(e,t,i,r)}}function Pc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(n,s,e,i):s})}async function Vm(n,e,t=!1){const i=await Sn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xt._forOperation(n,"link",i)}/**
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
 */async function Mm(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await Sn(n,Pc(i,r,e,n),t);M(s.idToken,i,"internal-error");const o=io(s.idToken);M(o,i,"internal-error");const{sub:a}=o;return M(n.uid===a,i,"user-mismatch"),Xt._forOperation(n,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&Ye(i,"user-mismatch"),s}}/**
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
 */async function Nm(n,e,t=!1){const i="signIn",r=await Pc(n,i,e),s=await Xt._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function Lm(n,e,t,i){return De(n).onIdTokenChanged(e,t,i)}function Fm(n,e,t){return De(n).beforeAuthStateChanged(e,t)}const $i="__sak";/**
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
 */class kc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($i,"1"),this.storage.removeItem($i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Um(){const n=ye();return ro(n)||rr(n)}const Bm=1e3,$m=10;class Dc extends kc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Um()&&vm(),this.fallbackToPolling=Tc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);ym()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,$m):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dc.type="LOCAL";const zm=Dc;/**
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
 */class xc extends kc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xc.type="SESSION";const Oc=xc;/**
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
 */function qm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new or(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await qm(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}or.receivers=[];/**
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
 */function so(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class jm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=so("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ze(){return window}function Gm(n){ze().location.href=n}/**
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
 */function Vc(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function Hm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wm(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Km(){return Vc()?self:null}/**
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
 */const Mc="firebaseLocalStorageDb",Qm=1,zi="firebaseLocalStorage",Nc="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ar(n,e){return n.transaction([zi],e?"readwrite":"readonly").objectStore(zi)}function Xm(){const n=indexedDB.deleteDatabase(Mc);return new jn(n).toPromise()}function ys(){const n=indexedDB.open(Mc,Qm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(zi,{keyPath:Nc})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(zi)?e(i):(i.close(),await Xm(),e(await ys()))})})}async function Pa(n,e,t){const i=ar(n,!0).put({[Nc]:e,value:t});return new jn(i).toPromise()}async function Ym(n,e){const t=ar(n,!1).get(e),i=await new jn(t).toPromise();return i===void 0?null:i.value}function ka(n,e){const t=ar(n,!0).delete(e);return new jn(t).toPromise()}const Jm=800,Zm=3;class Lc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ys(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Zm)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=or._getInstance(Km()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hm(),!this.activeServiceWorker)return;this.sender=new jm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ys();return await Pa(e,$i,"1"),await ka(e,$i),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Pa(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Ym(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ka(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ar(r,!1).getAll();return new jn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lc.type="LOCAL";const eg=Lc;new $n(3e4,6e4);/**
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
 */function tg(n,e){return e?Ke(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class oo extends Cc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ng(n){return Nm(n.auth,new oo(n),n.bypassAuthState)}function ig(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Mm(t,new oo(n),n.bypassAuthState)}async function rg(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Vm(t,new oo(n),n.bypassAuthState)}/**
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
 */class Fc{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ng;case"linkViaPopup":case"linkViaRedirect":return rg;case"reauthViaPopup":case"reauthViaRedirect":return ig;default:Ye(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sg=new $n(2e3,1e4);class Bt extends Fc{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=so();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sg.get())};e()}}Bt.currentPopupAction=null;/**
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
 */const og="pendingRedirect",bi=new Map;class ag extends Fc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=bi.get(this.auth._key());if(!e){try{const i=await lg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lg(n,e){const t=hg(e),i=ug(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function cg(n,e){bi.set(n._key(),e)}function ug(n){return Ke(n._redirectPersistence)}function hg(n){return Si(og,n.config.apiKey,n.name)}async function dg(n,e,t=!1){const i=sr(n),r=tg(i,e),o=await new ag(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const fg=10*60*1e3;class pg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Uc(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError($e(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Da(e))}saveEventToCache(e){this.cachedEventUids.add(Da(e)),this.lastProcessedEventTime=Date.now()}}function Da(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uc({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function mg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uc(n);default:return!1}}/**
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
 */async function gg(n,e={}){return zn(n,"GET","/v1/projects",e)}/**
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
 */const _g=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yg=/^https?/;async function vg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gg(n);for(const t of e)try{if(wg(t))return}catch{}Ye(n,"unauthorized-domain")}function wg(n){const e=_s(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!yg.test(t))return!1;if(_g.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Tg=new $n(3e4,6e4);function xa(){const n=ze().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Eg(n){return new Promise((e,t)=>{var i,r,s;function o(){xa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xa(),t($e(n,"network-request-failed"))},timeout:Tg.get()})}if(!((r=(i=ze().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ze().gapi)===null||s===void 0)&&s.load)o();else{const a=Tm("iframefcb");return ze()[a]=()=>{gapi.load?o():t($e(n,"network-request-failed"))},Sc(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ci=null,e})}let Ci=null;function Ig(n){return Ci=Ci||Eg(n),Ci}/**
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
 */const Ag=new $n(5e3,15e3),Sg="__/auth/iframe",bg="emulator/auth/iframe",Cg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pg(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?no(e,bg):`https://${n.config.authDomain}/${Sg}`,i={apiKey:e.apiKey,appName:n.name,v:Vt},r=Rg.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Bn(i).slice(1)}`}async function kg(n){const e=await Ig(n),t=ze().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Pg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cg,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=$e(n,"network-request-failed"),a=ze().setTimeout(()=>{s(o)},Ag.get());function l(){ze().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xg=500,Og=600,Vg="_blank",Mg="http://localhost";class Oa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ng(n,e,t,i=xg,r=Og){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Dg),{width:i.toString(),height:r.toString(),top:s,left:o}),c=ye().toLowerCase();t&&(a=gc(c)?Vg:t),mc(c)&&(e=e||Mg,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(_m(c)&&a!=="_self")return Lg(e||"",a),new Oa(null);const h=window.open(e||"",a,u);M(h,n,"popup-blocked");try{h.focus()}catch{}return new Oa(h)}function Lg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Fg="__/auth/handler",Ug="emulator/auth/handler",Bg=encodeURIComponent("fac");async function Va(n,e,t,i,r,s){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Vt,eventId:r};if(e instanceof Rc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Bf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof qn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${Bg}=${encodeURIComponent(l)}`:"";return`${$g(n)}?${Bn(a).slice(1)}${c}`}function $g({config:n}){return n.emulator?no(n,Ug):`https://${n.authDomain}/${Fg}`}/**
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
 */const Wr="webStorageSupport";class zg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=dg,this._overrideRedirectResult=cg}async _openPopup(e,t,i,r){var s;Je((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Va(e,t,i,_s(),r);return Ng(e,o,so())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Va(e,t,i,_s(),r);return Gm(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(Je(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await kg(e),i=new pg(e);return t.register("authEvent",r=>(M(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wr,{type:Wr},r=>{var s;const o=(s=r?.[0])===null||s===void 0?void 0:s[Wr];o!==void 0&&t(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tc()||ro()||rr()}}const qg=zg;var Ma="@firebase/auth",Na="1.1.0";/**
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
 */class jg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hg(n){Pt(new ft("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ec(n)},c=new Cm(i,r,s,l);return Pm(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Pt(new ft("auth-internal",e=>{const t=sr(e.getProvider("auth").getImmediate());return(i=>new jg(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Ma,Na,Gg(n)),Be(Ma,Na,"esm2017")}/**
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
 */const Wg=5*60,Kg=tc("authIdTokenMaxAge")||Wg;let La=null;const Qg=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Kg)return;const r=t?.token;La!==r&&(La=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Xg(n=Zs()){const e=ir(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Rm(n,{popupRedirectResolver:qg,persistence:[eg,zm,Oc]}),i=tc("authTokenSyncURL");if(i){const s=Qg(i);Fm(t,s,()=>s(t.currentUser)),Lm(t,o=>s(o))}const r=Jl("auth");return r&&km(t,`http://${r}`),t}Hg("Browser");var Yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,ao=ao||{},V=Yg||self;function lr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Gn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Jg(n){return Object.prototype.hasOwnProperty.call(n,Kr)&&n[Kr]||(n[Kr]=++Zg)}var Kr="closure_uid_"+(1e9*Math.random()>>>0),Zg=0;function e_(n,e,t){return n.call.apply(n.bind,arguments)}function t_(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function me(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?me=e_:me=t_,me.apply(null,arguments)}function ui(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function ae(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function _t(){this.s=this.s,this.o=this.o}var n_=0;_t.prototype.s=!1;_t.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),n_!=0)&&Jg(this)};_t.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bc=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function lo(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function Fa(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(lr(i)){const r=n.length||0,s=i.length||0;n.length=r+s;for(let o=0;o<s;o++)n[r+o]=i[o]}else n.push(i)}}function ge(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var i_=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{V.addEventListener("test",()=>{},e),V.removeEventListener("test",()=>{},e)}catch{}return n}();function Cn(n){return/^[\s\xa0]*$/.test(n)}function cr(){var n=V.navigator;return n&&(n=n.userAgent)?n:""}function Me(n){return cr().indexOf(n)!=-1}function co(n){return co[" "](n),n}co[" "]=function(){};function r_(n,e){var t=X_;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var s_=Me("Opera"),Yt=Me("Trident")||Me("MSIE"),$c=Me("Edge"),vs=$c||Yt,zc=Me("Gecko")&&!(cr().toLowerCase().indexOf("webkit")!=-1&&!Me("Edge"))&&!(Me("Trident")||Me("MSIE"))&&!Me("Edge"),o_=cr().toLowerCase().indexOf("webkit")!=-1&&!Me("Edge");function qc(){var n=V.document;return n?n.documentMode:void 0}var ws;e:{var Qr="",Xr=function(){var n=cr();if(zc)return/rv:([^\);]+)(\)|;)/.exec(n);if($c)return/Edge\/([\d\.]+)/.exec(n);if(Yt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(o_)return/WebKit\/(\S+)/.exec(n);if(s_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Xr&&(Qr=Xr?Xr[1]:""),Yt){var Yr=qc();if(Yr!=null&&Yr>parseFloat(Qr)){ws=String(Yr);break e}}ws=Qr}var Ts;if(V.document&&Yt){var Ua=qc();Ts=Ua||parseInt(ws,10)||void 0}else Ts=void 0;var a_=Ts;function Rn(n,e){if(ge.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(zc){e:{try{co(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:l_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Rn.$.h.call(this)}}ae(Rn,ge);var l_={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),c_=0;function u_(n,e,t,i,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=r,this.key=++c_,this.fa=this.ia=!1}function ur(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function uo(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function h_(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function jc(n){const e={};for(const t in n)e[t]=n[t];return e}const Ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gc(n,e){let t,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(t in i)n[t]=i[t];for(let s=0;s<Ba.length;s++)t=Ba[s],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function hr(n){this.src=n,this.g={},this.h=0}hr.prototype.add=function(n,e,t,i,r){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Is(n,e,i,r);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new u_(e,this.src,s,!!i,r),e.ia=t,n.push(e)),e};function Es(n,e){var t=e.type;if(t in n.g){var i=n.g[t],r=Bc(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(ur(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Is(n,e,t,i){for(var r=0;r<n.length;++r){var s=n[r];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==i)return r}return-1}var ho="closure_lm_"+(1e6*Math.random()|0),Jr={};function Hc(n,e,t,i,r){if(i&&i.once)return Kc(n,e,t,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Hc(n,e[s],t,i,r);return null}return t=mo(t),n&&n[Hn]?n.O(e,t,Gn(i)?!!i.capture:!!i,r):Wc(n,e,t,!1,i,r)}function Wc(n,e,t,i,r,s){if(!e)throw Error("Invalid event type");var o=Gn(r)?!!r.capture:!!r,a=po(n);if(a||(n[ho]=a=new hr(n)),t=a.add(e,t,i,o,s),t.proxy)return t;if(i=d_(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)i_||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),i,r);else if(n.attachEvent)n.attachEvent(Xc(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function d_(){function n(t){return e.call(n.src,n.listener,t)}const e=f_;return n}function Kc(n,e,t,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Kc(n,e[s],t,i,r);return null}return t=mo(t),n&&n[Hn]?n.P(e,t,Gn(i)?!!i.capture:!!i,r):Wc(n,e,t,!0,i,r)}function Qc(n,e,t,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Qc(n,e[s],t,i,r);else i=Gn(i)?!!i.capture:!!i,t=mo(t),n&&n[Hn]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Is(s,t,i,r),-1<t&&(ur(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=po(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Is(e,t,i,r)),(t=-1<n?e[n]:null)&&fo(t))}function fo(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Hn])Es(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(Xc(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=po(e))?(Es(t,n),t.h==0&&(t.src=null,e[ho]=null)):ur(n)}}}function Xc(n){return n in Jr?Jr[n]:Jr[n]="on"+n}function f_(n,e){if(n.fa)n=!0;else{e=new Rn(e,this);var t=n.listener,i=n.la||n.src;n.ia&&fo(n),n=t.call(i,e)}return n}function po(n){return n=n[ho],n instanceof hr?n:null}var Zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function mo(n){return typeof n=="function"?n:(n[Zr]||(n[Zr]=function(e){return n.handleEvent(e)}),n[Zr])}function oe(){_t.call(this),this.i=new hr(this),this.S=this,this.J=null}ae(oe,_t);oe.prototype[Hn]=!0;oe.prototype.removeEventListener=function(n,e,t,i){Qc(this,n,e,t,i)};function he(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new ge(e,n);else if(e instanceof ge)e.target=e.target||n;else{var r=e;e=new ge(i,n),Gc(e,r)}if(r=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];r=hi(o,i,!0,e)&&r}if(o=e.g=n,r=hi(o,i,!0,e)&&r,r=hi(o,i,!1,e)&&r,t)for(s=0;s<t.length;s++)o=e.g=t[s],r=hi(o,i,!1,e)&&r}oe.prototype.N=function(){if(oe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)ur(t[i]);delete n.g[e],n.h--}}this.J=null};oe.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};oe.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function hi(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,l=o.la||o.src;o.ia&&Es(n.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var go=V.JSON.stringify;class p_{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function m_(){var n=_o;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class g_{constructor(){this.h=this.g=null}add(e,t){const i=Yc.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var Yc=new p_(()=>new __,n=>n.reset());class __{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function y_(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function v_(n){V.setTimeout(()=>{throw n},0)}let Pn,kn=!1,_o=new g_,Jc=()=>{const n=V.Promise.resolve(void 0);Pn=()=>{n.then(w_)}};var w_=()=>{for(var n;n=m_();){try{n.h.call(n.g)}catch(t){v_(t)}var e=Yc;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}kn=!1};function dr(n,e){oe.call(this),this.h=n||1,this.g=e||V,this.j=me(this.qb,this),this.l=Date.now()}ae(dr,oe);S=dr.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),he(this,"tick"),this.ga&&(yo(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}S.N=function(){dr.$.N.call(this),yo(this),delete this.g};function vo(n,e,t){if(typeof n=="function")t&&(n=me(n,t));else if(n&&typeof n.handleEvent=="function")n=me(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(n,e||0)}function Zc(n){n.g=vo(()=>{n.g=null,n.i&&(n.i=!1,Zc(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class T_ extends _t{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zc(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dn(n){_t.call(this),this.h=n,this.g={}}ae(Dn,_t);var $a=[];function eu(n,e,t,i){Array.isArray(t)||(t&&($a[0]=t.toString()),t=$a);for(var r=0;r<t.length;r++){var s=Hc(e,t[r],i||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function tu(n){uo(n.g,function(e,t){this.g.hasOwnProperty(t)&&fo(e)},n),n.g={}}Dn.prototype.N=function(){Dn.$.N.call(this),tu(this)};Dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fr(){this.g=!0}fr.prototype.Ea=function(){this.g=!1};function E_(n,e,t,i,r,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function I_(n,e,t,i,r,s,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+t+`
`+s+" "+o})}function $t(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+S_(n,t)+(i?" "+i:"")})}function A_(n,e){n.info(function(){return"TIMEOUT: "+e})}fr.prototype.info=function(){};function S_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return go(t)}catch{return e}}var Mt={},za=null;function pr(){return za=za||new oe}Mt.Ta="serverreachability";function nu(n){ge.call(this,Mt.Ta,n)}ae(nu,ge);function xn(n){const e=pr();he(e,new nu(e))}Mt.STAT_EVENT="statevent";function iu(n,e){ge.call(this,Mt.STAT_EVENT,n),this.stat=e}ae(iu,ge);function Ee(n){const e=pr();he(e,new iu(e,n))}Mt.Ua="timingevent";function ru(n,e){ge.call(this,Mt.Ua,n),this.size=e}ae(ru,ge);function Wn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){n()},e)}var mr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},su={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wo(){}wo.prototype.h=null;function qa(n){return n.h||(n.h=n.i())}function ou(){}var Kn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function To(){ge.call(this,"d")}ae(To,ge);function Eo(){ge.call(this,"c")}ae(Eo,ge);var As;function gr(){}ae(gr,wo);gr.prototype.g=function(){return new XMLHttpRequest};gr.prototype.i=function(){return{}};As=new gr;function Qn(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new Dn(this),this.P=b_,n=vs?125:void 0,this.V=new dr(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new au}function au(){this.i=null,this.g="",this.h=!1}var b_=45e3,Ss={},qi={};S=Qn.prototype;S.setTimeout=function(n){this.P=n};function bs(n,e,t){n.L=1,n.v=yr(Ze(e)),n.s=t,n.S=!0,lu(n,null)}function lu(n,e){n.G=Date.now(),Xn(n),n.A=Ze(n.v);var t=n.A,i=n.W;Array.isArray(i)||(i=[String(i)]),gu(t.i,"t",i),n.C=0,t=n.l.J,n.h=new au,n.g=Lu(n.l,t?e:null,!n.s),0<n.O&&(n.M=new T_(me(n.Pa,n,n.g),n.O)),eu(n.U,n.g,"readystatechange",n.nb),e=n.I?jc(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),xn(),E_(n.j,n.u,n.A,n.m,n.W,n.s)}S.nb=function(n){n=n.target;const e=this.M;e&&Fe(n)==3?e.l():this.Pa(n)};S.Pa=function(n){try{if(n==this.g)e:{const u=Fe(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||vs||this.g&&(this.h.h||this.g.ja()||Wa(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?xn(3):xn(2)),_r(this);var t=this.g.da();this.ca=t;t:if(cu(this)){var i=Wa(this.g);n="";var r=i.length,s=Fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tt(this),vn(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,I_(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cn(a)){var c=a;break t}}c=null}if(t=c)$t(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cs(this,t);else{this.i=!1,this.o=3,Ee(12),Tt(this),vn(this);break e}}this.S?(uu(this,u,o),vs&&this.i&&u==3&&(eu(this.U,this.V,"tick",this.mb),this.V.start())):($t(this.j,this.m,o,null),Cs(this,o)),u==4&&Tt(this),this.i&&!this.J&&(u==4?Ou(this.l,this):(this.i=!1,Xn(this)))}else W_(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ee(12)):(this.o=0,Ee(13)),Tt(this),vn(this)}}}catch{}finally{}};function cu(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function uu(n,e,t){let i=!0,r;for(;!n.J&&n.C<t.length;)if(r=C_(n,t),r==qi){e==4&&(n.o=4,Ee(14),i=!1),$t(n.j,n.m,null,"[Incomplete Response]");break}else if(r==Ss){n.o=4,Ee(15),$t(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else $t(n.j,n.m,r,null),Cs(n,r);cu(n)&&r!=qi&&r!=Ss&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ee(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ro(e),e.M=!0,Ee(11))):($t(n.j,n.m,t,"[Invalid Chunked Response]"),Tt(n),vn(n))}S.mb=function(){if(this.g){var n=Fe(this.g),e=this.g.ja();this.C<e.length&&(_r(this),uu(this,n,e),this.i&&n!=4&&Xn(this))}};function C_(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?qi:(t=Number(e.substring(t,i)),isNaN(t)?Ss:(i+=1,i+t>e.length?qi:(e=e.slice(i,i+t),n.C=i+t,e)))}S.cancel=function(){this.J=!0,Tt(this)};function Xn(n){n.Y=Date.now()+n.P,hu(n,n.P)}function hu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Wn(me(n.lb,n),e)}function _r(n){n.B&&(V.clearTimeout(n.B),n.B=null)}S.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(A_(this.j,this.A),this.L!=2&&(xn(),Ee(17)),Tt(this),this.o=2,vn(this)):hu(this,this.Y-n)};function vn(n){n.l.H==0||n.J||Ou(n.l,n)}function Tt(n){_r(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,yo(n.V),tu(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Cs(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Rs(t.i,n))){if(!n.K&&Rs(t.i,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Hi(t),Tr(t);else break e;Co(t),Ee(18)}}else t.Fa=r[1],0<t.Fa-t.V&&37500>r[2]&&t.G&&t.A==0&&!t.v&&(t.v=Wn(me(t.ib,t),6e3));if(1>=vu(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Et(t,11)}else if((n.K||t.g==n)&&Hi(t),!Cn(e))for(r=t.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const u=c[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=c[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.L=i,t.l.info("backChannelRequestTimeoutMs_="+i)),i=t;const p=n.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=i.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Io(s,s.h),s.h=null))}if(i.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(i.Da=y,W(i.I,i.F,y))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=Nu(i,i.J?i.pa:null,i.Y),o.K){wu(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(_r(a),Xn(a)),i.g=o}else Du(i);0<t.j.length&&Er(t)}else c[0]!="stop"&&c[0]!="close"||Et(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Et(t,7):bo(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}xn(4)}catch{}}function R_(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(lr(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function P_(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(lr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function du(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(lr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=P_(n),i=R_(n),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],t&&t[s],n)}var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function k_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),r=null;if(0<=i){var s=n[t].substring(0,i);r=n[t].substring(i+1)}else s=n[t];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function St(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof St){this.h=n.h,ji(this,n.j),this.s=n.s,this.g=n.g,Gi(this,n.m),this.l=n.l;var e=n.i,t=new On;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ja(this,t),this.o=n.o}else n&&(e=String(n).match(fu))?(this.h=!1,ji(this,e[1]||"",!0),this.s=pn(e[2]||""),this.g=pn(e[3]||"",!0),Gi(this,e[4]),this.l=pn(e[5]||"",!0),ja(this,e[6]||"",!0),this.o=pn(e[7]||"")):(this.h=!1,this.i=new On(null,this.h))}St.prototype.toString=function(){var n=[],e=this.j;e&&n.push(mn(e,Ga,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(mn(e,Ga,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(mn(t,t.charAt(0)=="/"?O_:x_,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",mn(t,M_)),n.join("")};function Ze(n){return new St(n)}function ji(n,e,t){n.j=t?pn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Gi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ja(n,e,t){e instanceof On?(n.i=e,N_(n.i,n.h)):(t||(e=mn(e,V_)),n.i=new On(e,n.h))}function W(n,e,t){n.i.set(e,t)}function yr(n){return W(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function pn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function mn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,D_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function D_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ga=/[#\/\?@]/g,x_=/[#\?:]/g,O_=/[#\?]/g,V_=/[#\?@]/g,M_=/#/g;function On(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function yt(n){n.g||(n.g=new Map,n.h=0,n.i&&k_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}S=On.prototype;S.add=function(n,e){yt(this),this.i=null,n=on(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function pu(n,e){yt(n),e=on(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function mu(n,e){return yt(n),e=on(n,e),n.g.has(e)}S.forEach=function(n,e){yt(this),this.g.forEach(function(t,i){t.forEach(function(r){n.call(e,r,i,this)},this)},this)};S.ta=function(){yt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const r=n[i];for(let s=0;s<r.length;s++)t.push(e[i])}return t};S.Z=function(n){yt(this);let e=[];if(typeof n=="string")mu(this,n)&&(e=e.concat(this.g.get(on(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};S.set=function(n,e){return yt(this),this.i=null,n=on(this,n),mu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};S.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function gu(n,e,t){pu(n,e),0<t.length&&(n.i=null,n.g.set(on(n,e),lo(t)),n.h+=t.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),n.push(r)}}return this.i=n.join("&")};function on(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function N_(n,e){e&&!n.j&&(yt(n),n.i=null,n.g.forEach(function(t,i){var r=i.toLowerCase();i!=r&&(pu(this,i),gu(this,r,t))},n)),n.j=e}var L_=class{constructor(n,e){this.g=n,this.map=e}};function _u(n){this.l=n||F_,V.PerformanceNavigationTiming?(n=V.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var F_=10;function yu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function vu(n){return n.h?1:n.g?n.g.size:0}function Rs(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Io(n,e){n.g?n.g.add(e):n.h=e}function wu(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}_u.prototype.cancel=function(){if(this.i=Tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Tu(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return lo(n.i)}var U_=class{stringify(n){return V.JSON.stringify(n,void 0)}parse(n){return V.JSON.parse(n,void 0)}};function B_(){this.g=new U_}function $_(n,e,t){const i=t||"";try{du(n,function(r,s){let o=r;Gn(r)&&(o=go(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function z_(n,e){const t=new fr;if(V.Image){const i=new Image;i.onload=ui(di,t,i,"TestLoadImage: loaded",!0,e),i.onerror=ui(di,t,i,"TestLoadImage: error",!1,e),i.onabort=ui(di,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=ui(di,t,i,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function di(n,e,t,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Yn(n){this.l=n.fc||null,this.j=n.ob||!1}ae(Yn,wo);Yn.prototype.g=function(){return new vr(this.l,this.j)};Yn.prototype.i=function(n){return function(){return n}}({});function vr(n,e){oe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Ao,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ae(vr,oe);var Ao=0;S=vr.prototype;S.open=function(n,e){if(this.readyState!=Ao)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Vn(this)};S.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||V).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=Ao};S.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Eu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Eu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}S.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Jn(this):Vn(this),this.readyState==3&&Eu(this)}};S.Za=function(n){this.g&&(this.response=this.responseText=n,Jn(this))};S.Ya=function(n){this.g&&(this.response=n,Jn(this))};S.ka=function(){this.g&&Jn(this)};function Jn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Vn(n)}S.setRequestHeader=function(n,e){this.v.append(n,e)};S.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Vn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var q_=V.JSON.parse;function Y(n){oe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Iu,this.L=this.M=!1}ae(Y,oe);var Iu="",j_=/^https?$/i,G_=["POST","PUT"];S=Y.prototype;S.Oa=function(n){this.M=n};S.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():As.g(),this.C=this.u?qa(this.u):qa(As),this.g.onreadystatechange=me(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Ha(this,s);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)t.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())t.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),r=V.FormData&&n instanceof V.FormData,!(0<=Bc(G_,e))||i||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bu(this),0<this.B&&((this.L=H_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=me(this.ua,this)):this.A=vo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Ha(this,s)}};function H_(n){return Yt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}S.ua=function(){typeof ao<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))};function Ha(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Au(n),wr(n)}function Au(n){n.F||(n.F=!0,he(n,"complete"),he(n,"error"))}S.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,he(this,"complete"),he(this,"abort"),wr(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wr(this,!0)),Y.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?Su(this):this.kb())};S.kb=function(){Su(this)};function Su(n){if(n.h&&typeof ao<"u"&&(!n.C[1]||Fe(n)!=4||n.da()!=2)){if(n.v&&Fe(n)==4)vo(n.La,0,n);else if(he(n,"readystatechange"),Fe(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var r=String(n.I).match(fu)[1]||null;!r&&V.self&&V.self.location&&(r=V.self.location.protocol.slice(0,-1)),i=!j_.test(r?r.toLowerCase():"")}t=i}if(t)he(n,"complete"),he(n,"success");else{n.m=6;try{var s=2<Fe(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Au(n)}}finally{wr(n)}}}}function wr(n,e){if(n.g){bu(n);const t=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||he(n,"ready");try{t.onreadystatechange=i}catch{}}}function bu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(V.clearTimeout(n.A),n.A=null)}S.isActive=function(){return!!this.g};function Fe(n){return n.g?n.g.readyState:0}S.da=function(){try{return 2<Fe(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),q_(e)}};function Wa(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Iu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function W_(n){const e={};n=(n.g&&2<=Fe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(Cn(n[i]))continue;var t=y_(n[i]);const r=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[r]||[];e[r]=s,s.push(t)}h_(e,function(i){return i.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cu(n){let e="";return uo(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function So(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=Cu(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):W(n,e,t))}function dn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ru(n){this.Ga=0,this.j=[],this.l=new fr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=dn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=dn("baseRetryDelayMs",5e3,n),this.hb=dn("retryDelaySeedMs",1e4,n),this.eb=dn("forwardChannelMaxRetries",2,n),this.xa=dn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new _u(n&&n.concurrentRequestLimit),this.Ja=new B_,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=Ru.prototype;S.ra=8;S.H=1;function bo(n){if(Pu(n),n.H==3){var e=n.W++,t=Ze(n.I);if(W(t,"SID",n.K),W(t,"RID",e),W(t,"TYPE","terminate"),Zn(n,t),e=new Qn(n,n.l,e),e.L=2,e.v=yr(Ze(t)),t=!1,V.navigator&&V.navigator.sendBeacon)try{t=V.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&V.Image&&(new Image().src=e.v,t=!0),t||(e.g=Lu(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Xn(e)}Mu(n)}function Tr(n){n.g&&(Ro(n),n.g.cancel(),n.g=null)}function Pu(n){Tr(n),n.u&&(V.clearTimeout(n.u),n.u=null),Hi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&V.clearTimeout(n.m),n.m=null)}function Er(n){if(!yu(n.i)&&!n.m){n.m=!0;var e=n.Na;Pn||Jc(),kn||(Pn(),kn=!0),_o.add(e,n),n.C=0}}function K_(n,e){return vu(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Wn(me(n.Na,n,e),Vu(n,n.C)),n.C++,!0)}S.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const r=new Qn(this,this.l,n);let s=this.s;if(this.U&&(s?(s=jc(s),Gc(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var i=this.j[t];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=ku(this,r,e),t=Ze(this.I),W(t,"RID",n),W(t,"CVER",22),this.F&&W(t,"X-HTTP-Session-Id",this.F),Zn(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Cu(s)))+"&"+e:this.o&&So(t,this.o,s)),Io(this.i,r),this.bb&&W(t,"TYPE","init"),this.P?(W(t,"$req",e),W(t,"SID","null"),r.aa=!0,bs(r,t,null)):bs(r,t,e),this.H=2}}else this.H==3&&(n?Ka(this,n):this.j.length==0||yu(this.i)||Ka(this))};function Ka(n,e){var t;e?t=e.m:t=n.W++;const i=Ze(n.I);W(i,"SID",n.K),W(i,"RID",t),W(i,"AID",n.V),Zn(n,i),n.o&&n.s&&So(i,n.o,n.s),t=new Qn(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=ku(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Io(n.i,t),bs(t,i,e)}function Zn(n,e){n.na&&uo(n.na,function(t,i){W(e,i,t)}),n.h&&du({},function(t,i){W(e,i,t)})}function ku(n,e,t){t=Math.min(n.j.length,t);var i=n.h?me(n.h.Va,n.h,n):null;e:{var r=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<t;l++){let c=r[l].g;const u=r[l].map;if(c-=s,0>c)s=Math.max(0,r[l].g-100),a=!1;else try{$_(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,i}function Du(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Pn||Jc(),kn||(Pn(),kn=!0),_o.add(e,n),n.A=0}}function Co(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Wn(me(n.Ma,n),Vu(n,n.A)),n.A++,!0)}S.Ma=function(){if(this.u=null,xu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Wn(me(this.jb,this),n)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ee(10),Tr(this),xu(this))};function Ro(n){n.B!=null&&(V.clearTimeout(n.B),n.B=null)}function xu(n){n.g=new Qn(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Ze(n.wa);W(e,"RID","rpc"),W(e,"SID",n.K),W(e,"AID",n.V),W(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&W(e,"TO",n.qa),W(e,"TYPE","xmlhttp"),Zn(n,e),n.o&&n.s&&So(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=yr(Ze(e)),t.s=null,t.S=!0,lu(t,n)}S.ib=function(){this.v!=null&&(this.v=null,Tr(this),Co(this),Ee(19))};function Hi(n){n.v!=null&&(V.clearTimeout(n.v),n.v=null)}function Ou(n,e){var t=null;if(n.g==e){Hi(n),Ro(n),n.g=null;var i=2}else if(Rs(n.i,e))t=e.F,wu(n.i,e),i=1;else return;if(n.H!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var r=n.C;i=pr(),he(i,new ru(i,t)),Er(n)}else Du(n);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&K_(n,e)||i==2&&Co(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),r){case 1:Et(n,5);break;case 4:Et(n,10);break;case 3:Et(n,6);break;default:Et(n,2)}}}function Vu(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Et(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var i=me(n.pb,n);t||(t=new St("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||ji(t,"https"),yr(t)),z_(t.toString(),i)}else Ee(2);n.H=0,n.h&&n.h.za(e),Mu(n),Pu(n)}S.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ee(2)):(this.l.info("Failed to ping google.com"),Ee(1))};function Mu(n){if(n.H=0,n.ma=[],n.h){const e=Tu(n.i);(e.length!=0||n.j.length!=0)&&(Fa(n.ma,e),Fa(n.ma,n.j),n.i.i.length=0,lo(n.j),n.j.length=0),n.h.ya()}}function Nu(n,e,t){var i=t instanceof St?Ze(t):new St(t);if(i.g!="")e&&(i.g=e+"."+i.g),Gi(i,i.m);else{var r=V.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new St(null);i&&ji(s,i),e&&(s.g=e),r&&Gi(s,r),t&&(s.l=t),i=s}return t=n.F,e=n.Da,t&&e&&W(i,t,e),W(i,"VER",n.ra),Zn(n,i),i}function Lu(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Y(new Yn({ob:!0})):new Y(n.va),e.Oa(n.J),e}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function Fu(){}S=Fu.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function Wi(){if(Yt&&!(10<=Number(a_)))throw Error("Environmental error: no available transport.")}Wi.prototype.g=function(n,e){return new be(n,e)};function be(n,e){oe.call(this),this.g=new Ru(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Cn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new an(this)}ae(be,oe);be.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ee(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Nu(n,null,n.Y),Er(n)};be.prototype.close=function(){bo(this.g)};be.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=go(n),n=t);e.j.push(new L_(e.fb++,n)),e.H==3&&Er(e)};be.prototype.N=function(){this.g.h=null,delete this.j,bo(this.g),delete this.g,be.$.N.call(this)};function Uu(n){To.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ae(Uu,To);function Bu(){Eo.call(this),this.status=1}ae(Bu,Eo);function an(n){this.g=n}ae(an,Fu);an.prototype.Ba=function(){he(this.g,"a")};an.prototype.Aa=function(n){he(this.g,new Uu(n))};an.prototype.za=function(n){he(this.g,new Bu)};an.prototype.ya=function(){he(this.g,"b")};function Q_(){this.blockSize=-1}function xe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ae(xe,Q_);xe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function es(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(r=0;16>r;++r)i[r]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],r=n.g[2];var s=n.g[3],o=e+(s^t&(r^s))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[3]+3250441966&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(s^t&(r^s))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[7]+4249261313&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(s^t&(r^s))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[11]+2304563134&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(s^t&(r^s))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(r^e&(t^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(t^s&(e^t))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=t+(e^r&(s^e))+i[15]+1236535329&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(t^r))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[0]+3921069994&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(t^r))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[4]+3889429448&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(t^r))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[8]+1163531501&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(t^r))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^r&(e^t))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(r^s))+i[12]+2368359562&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(t^r^s)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[14]+4259657740&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^s)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[10]+3200236656&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^s)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[6]+76029189&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^s)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^t)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=t+(r^s^e)+i[2]+3299628645&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(r^(t|~s))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[5]+4237533241&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~s))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[1]+2240044497&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~s))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[13]+1309151649&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~s))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~t))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=t+(s^(r|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+r&4294967295,n.g[3]=n.g[3]+s&4294967295}xe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=t;)es(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(i[r++]=n.charCodeAt(s++),r==this.blockSize){es(this,i),r=0;break}}else for(;s<e;)if(i[r++]=n[s++],r==this.blockSize){es(this,i),r=0;break}}this.h=r,this.i+=e};xe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function H(n,e){this.h=e;for(var t=[],i=!0,r=n.length-1;0<=r;r--){var s=n[r]|0;i&&s==e||(t[r]=s,i=!1)}this.g=t}var X_={};function Po(n){return-128<=n&&128>n?r_(n,function(e){return new H([e|0],0>e?-1:0)}):new H([n|0],0>n?-1:0)}function Ue(n){if(isNaN(n)||!isFinite(n))return jt;if(0>n)return ue(Ue(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=Ps;return new H(e,0)}function $u(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ue($u(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ue(Math.pow(e,8)),i=jt,r=0;r<n.length;r+=8){var s=Math.min(8,n.length-r),o=parseInt(n.substring(r,r+s),e);8>s?(s=Ue(Math.pow(e,s)),i=i.R(s).add(Ue(o))):(i=i.R(t),i=i.add(Ue(o)))}return i}var Ps=4294967296,jt=Po(0),ks=Po(1),Qa=Po(16777216);S=H.prototype;S.ea=function(){if(Pe(this))return-ue(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:Ps+i)*e,e*=Ps}return n};S.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Qe(this))return"0";if(Pe(this))return"-"+ue(this).toString(n);for(var e=Ue(Math.pow(n,6)),t=this,i="";;){var r=Qi(t,e).g;t=Ki(t,r.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=r,Qe(t))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};S.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Qe(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Pe(n){return n.h==-1}S.X=function(n){return n=Ki(this,n),Pe(n)?-1:Qe(n)?0:1};function ue(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new H(t,~n.h).add(ks)}S.abs=function(){return Pe(this)?ue(this):this};S.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(n.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(n.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,t[r]=o<<16|s}return new H(t,t[t.length-1]&-2147483648?-1:0)};function Ki(n,e){return n.add(ue(e))}S.R=function(n){if(Qe(this)||Qe(n))return jt;if(Pe(this))return Pe(n)?ue(this).R(ue(n)):ue(ue(this).R(n));if(Pe(n))return ue(this.R(ue(n)));if(0>this.X(Qa)&&0>n.X(Qa))return Ue(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<n.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(r)>>>16,l=n.D(r)&65535;t[2*i+2*r]+=o*l,fi(t,2*i+2*r),t[2*i+2*r+1]+=s*l,fi(t,2*i+2*r+1),t[2*i+2*r+1]+=o*a,fi(t,2*i+2*r+1),t[2*i+2*r+2]+=s*a,fi(t,2*i+2*r+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new H(t,0)};function fi(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function fn(n,e){this.g=n,this.h=e}function Qi(n,e){if(Qe(e))throw Error("division by zero");if(Qe(n))return new fn(jt,jt);if(Pe(n))return e=Qi(ue(n),e),new fn(ue(e.g),ue(e.h));if(Pe(e))return e=Qi(n,ue(e)),new fn(ue(e.g),e.h);if(30<n.g.length){if(Pe(n)||Pe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=ks,i=e;0>=i.X(n);)t=Xa(t),i=Xa(i);var r=Lt(t,1),s=Lt(i,1);for(i=Lt(i,2),t=Lt(t,2);!Qe(i);){var o=s.add(i);0>=o.X(n)&&(r=r.add(t),s=o),i=Lt(i,1),t=Lt(t,1)}return e=Ki(n,r.R(e)),new fn(r,e)}for(r=jt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Ue(t),o=s.R(e);Pe(o)||0<o.X(n);)t-=i,s=Ue(t),o=s.R(e);Qe(s)&&(s=ks),r=r.add(s),n=Ki(n,o)}return new fn(r,n)}S.gb=function(n){return Qi(this,n).h};S.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new H(t,this.h&n.h)};S.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new H(t,this.h|n.h)};S.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new H(t,this.h^n.h)};function Xa(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new H(t,n.h)}function Lt(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,r=[],s=0;s<i;s++)r[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new H(r,n.h)}Wi.prototype.createWebChannel=Wi.prototype.g;be.prototype.send=be.prototype.u;be.prototype.open=be.prototype.m;be.prototype.close=be.prototype.close;mr.NO_ERROR=0;mr.TIMEOUT=8;mr.HTTP_ERROR=6;su.COMPLETE="complete";ou.EventType=Kn;Kn.OPEN="a";Kn.CLOSE="b";Kn.ERROR="c";Kn.MESSAGE="d";oe.prototype.listen=oe.prototype.O;Y.prototype.listenOnce=Y.prototype.P;Y.prototype.getLastError=Y.prototype.Sa;Y.prototype.getLastErrorCode=Y.prototype.Ia;Y.prototype.getStatus=Y.prototype.da;Y.prototype.getResponseJson=Y.prototype.Wa;Y.prototype.getResponseText=Y.prototype.ja;Y.prototype.send=Y.prototype.ha;Y.prototype.setWithCredentials=Y.prototype.Oa;xe.prototype.digest=xe.prototype.l;xe.prototype.reset=xe.prototype.reset;xe.prototype.update=xe.prototype.j;H.prototype.add=H.prototype.add;H.prototype.multiply=H.prototype.R;H.prototype.modulo=H.prototype.gb;H.prototype.compare=H.prototype.X;H.prototype.toNumber=H.prototype.ea;H.prototype.toString=H.prototype.toString;H.prototype.getBits=H.prototype.D;H.fromNumber=Ue;H.fromString=$u;var Y_=function(){return new Wi},J_=function(){return pr()},ts=mr,Z_=su,ey=Mt,Ya={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ty=Yn,pi=ou,ny=Y,iy=xe,Gt=H;const Ja="@firebase/firestore";/**
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
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
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
 */let ln="10.1.0";/**
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
 */const Dt=new Xs("@firebase/firestore");function Za(){return Dt.logLevel}function P(n,...e){if(Dt.logLevel<=$.DEBUG){const t=e.map(ko);Dt.debug(`Firestore (${ln}): ${n}`,...t)}}function et(n,...e){if(Dt.logLevel<=$.ERROR){const t=e.map(ko);Dt.error(`Firestore (${ln}): ${n}`,...t)}}function Jt(n,...e){if(Dt.logLevel<=$.WARN){const t=e.map(ko);Dt.warn(`Firestore (${ln}): ${n}`,...t)}}function ko(n){if(typeof n=="string")return n;try{/**
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
 */function L(n="Unexpected state"){const e=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: `+n;throw et(e),new Error(e)}function ne(n,e){n||L()}function z(n,e){return n}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Ge{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class zu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ry{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(fe.UNAUTHENTICATED))}shutdown(){}}class sy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oy{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const r=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let s=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ne(typeof i.accessToken=="string"),new zu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new fe(e)}}class ay{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ly{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new ay(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string"),this.R=t.token,new cy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function hy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class dy{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=hy(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%e.length))}return i}}function j(n,e){return n<e?-1:n>e?1:0}function Zt(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
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
 */class se{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new se(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class N{constructor(e){this.timestamp=e}static fromTimestamp(e){return new N(e)}static min(){return new N(new se(0,0))}static max(){return new N(new se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Mn{constructor(e,t,i){t===void 0?t=0:t>e.length&&L(),i===void 0?i=e.length-t:i>e.length-t&&L(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Mn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mn?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=e.get(r),o=t.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Q extends Mn{construct(e,t,i){return new Q(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}const fy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends Mn{construct(e,t,i){return new Te(e,t,i)}static isValidIdentifier(e){return fy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new C(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new C(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Q.fromString(e))}static fromName(e){return new O(Q.fromString(e).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Q(e.slice()))}}function py(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=N.fromTimestamp(i===1e9?new se(t+1,0):new se(t,i));return new pt(r,O.empty(),e)}function my(n){return new pt(n.readTime,n.key,-1)}class pt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new pt(N.min(),O.empty(),-1)}static max(){return new pt(N.max(),O.empty(),-1)}}function gy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
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
 */const _y="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Do(n){if(n.code!==E.FAILED_PRECONDITION||n.message!==_y)throw n;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new T((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof T?t:T.resolve(t)}catch(t){return T.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):T.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):T.reject(t)}static resolve(e){return new T((t,i)=>{t(e)})}static reject(e){return new T((t,i)=>{i(e)})}static waitFor(e){return new T((t,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&t()},l=>i(l))}),o=!0,s===r&&t()})}static or(e){let t=T.resolve(!1);for(const i of e)t=t.next(r=>r?T.resolve(r):i());return t}static forEach(e,t){const i=[];return e.forEach((r,s)=>{i.push(t.call(this,r,s))}),this.waitFor(i)}static mapArray(e,t){return new T((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,t){return new T((i,r)=>{const s=()=>{e()===!0?t().next(()=>{s()},r):i()};s()})}}function ei(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class xo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}xo.ae=-1;function Ir(n){return n==null}function Xi(n){return n===0&&1/n==-1/0}function vy(n){return typeof n=="number"&&Number.isInteger(n)&&!Xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function el(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ti(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class J{constructor(e,t){this.comparator=e,this.root=t||ce.EMPTY}insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mi(this.root,e,this.comparator,!0)}}class mi{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??ce.RED,this.left=r??ce.EMPTY,this.right=s??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,s){return new ce(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ce.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,t,i,r,s){return this}insert(e,t,i){return new ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tl(this.data.getIterator())}getIteratorFrom(e){return new tl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class tl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ct{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new ct([])}unionWith(e){let t=new _e(Te.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zt(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class ju extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ju("Invalid base64 string: "+s):s}}(e);return new ve(t)}static fromUint8Array(e){const t=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const wy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(n){if(ne(!!n),typeof n=="string"){let e=0;const t=wy.exec(n);if(ne(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xt(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
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
 */function Oo(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Vo(n){const e=n.mapValue.fields.__previous_value__;return Oo(e)?Vo(e):e}function Nn(n){const e=mt(n.mapValue.fields.__local_write_time__.timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class Ty{constructor(e,t,i,r,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ln{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ot(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oo(n)?4:Ey(n)?9007199254740991:10:L()}function qe(n,e){if(n===e)return!0;const t=Ot(n);if(t!==Ot(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nn(n).isEqual(Nn(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=mt(r.timestampValue),a=mt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return xt(r.bytesValue).isEqual(xt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return ee(r.geoPointValue.latitude)===ee(s.geoPointValue.latitude)&&ee(r.geoPointValue.longitude)===ee(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ee(r.integerValue)===ee(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=ee(r.doubleValue),a=ee(s.doubleValue);return o===a?Xi(o)===Xi(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Zt(n.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(el(o)!==el(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!qe(o[l],a[l])))return!1;return!0}(n,e);default:return L()}}function Fn(n,e){return(n.values||[]).find(t=>qe(t,e))!==void 0}function en(n,e){if(n===e)return 0;const t=Ot(n),i=Ot(e);if(t!==i)return j(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ee(s.integerValue||s.doubleValue),l=ee(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return nl(n.timestampValue,e.timestampValue);case 4:return nl(Nn(n),Nn(e));case 5:return j(n.stringValue,e.stringValue);case 6:return function(s,o){const a=xt(s),l=xt(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=j(a[c],l[c]);if(u!==0)return u}return j(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=j(ee(s.latitude),ee(o.latitude));return a!==0?a:j(ee(s.longitude),ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=en(a[c],l[c]);if(u)return u}return j(a.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===gi.mapValue&&o===gi.mapValue)return 0;if(s===gi.mapValue)return 1;if(o===gi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=j(l[h],u[h]);if(d!==0)return d;const p=en(a[l[h]],c[u[h]]);if(p!==0)return p}return j(l.length,u.length)}(n.mapValue,e.mapValue);default:throw L()}}function nl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=mt(n),i=mt(e),r=j(t.seconds,i.seconds);return r!==0?r:j(t.nanos,i.nanos)}function tn(n){return Ds(n)}function Ds(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=mt(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",r=!0;for(const s of t.values||[])r?r=!1:i+=",",i+=Ds(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${Ds(t.fields[o])}`;return r+"}"}(n.mapValue):L()}function il(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function xs(n){return!!n&&"integerValue"in n}function Mo(n){return!!n&&"arrayValue"in n}function rl(n){return!!n&&"nullValue"in n}function sl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ns(n){return!!n&&"mapValue"in n}function wn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ti(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=wn(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ey(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wn(t)}setAll(e){let t=Te.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,r),i={},r=[],t=a.popLast()}o?i[a.lastSegment()]=wn(o):r.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];ns(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){ti(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Ne(wn(this.value))}}/**
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
 */class pe{constructor(e,t,i,r,s,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pe(e,0,N.min(),N.min(),N.min(),Ne.empty(),0)}static newFoundDocument(e,t,i,r){return new pe(e,1,t,N.min(),i,r,0)}static newNoDocument(e,t){return new pe(e,2,t,N.min(),N.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new pe(e,3,t,N.min(),N.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yi{constructor(e,t){this.position=e,this.inclusive=t}}function ol(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){const s=e[r],o=n.position[r];if(s.field.isKeyField()?i=O.comparator(O.fromName(o.referenceValue),t.key):i=en(o,t.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function al(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Tn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Iy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Gu{}class te extends Gu{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Sy(e,t,i):t==="array-contains"?new Ry(e,i):t==="in"?new Py(e,i):t==="not-in"?new ky(e,i):t==="array-contains-any"?new Dy(e,i):new te(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new by(e,i):new Cy(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(en(t,this.value)):t!==null&&Ot(this.value)===Ot(t)&&this.matchesComparison(en(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Oe extends Gu{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Oe(e,t)}matches(e){return Hu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Hu(n){return n.op==="and"}function Wu(n){return Ay(n)&&Hu(n)}function Ay(n){for(const e of n.filters)if(e instanceof Oe)return!1;return!0}function Os(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(Wu(n))return n.filters.map(e=>Os(e)).join(",");{const e=n.filters.map(t=>Os(t)).join(",");return`${n.op}(${e})`}}function Ku(n,e){return n instanceof te?function(i,r){return r instanceof te&&i.op===r.op&&i.field.isEqual(r.field)&&qe(i.value,r.value)}(n,e):n instanceof Oe?function(i,r){return r instanceof Oe&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&Ku(o,r.filters[a]),!0):!1}(n,e):void L()}function Qu(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${tn(t.value)}`}(n):n instanceof Oe?function(t){return t.op.toString()+" {"+t.getFilters().map(Qu).join(" ,")+"}"}(n):"Filter"}class Sy extends te{constructor(e,t,i){super(e,t,i),this.key=O.fromName(i.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class by extends te{constructor(e,t){super(e,"in",t),this.keys=Xu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Cy extends te{constructor(e,t){super(e,"not-in",t),this.keys=Xu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>O.fromName(i.referenceValue))}class Ry extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mo(t)&&Fn(t.arrayValue,this.value)}}class Py extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fn(this.value.arrayValue,t)}}class ky extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Fn(this.value.arrayValue,t)}}class Dy extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Fn(this.value.arrayValue,i))}}/**
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
 */class xy{constructor(e,t=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function ll(n,e=null,t=[],i=[],r=null,s=null,o=null){return new xy(n,e,t,i,r,s,o)}function No(n){const e=z(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Os(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ir(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>tn(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>tn(i)).join(",")),e.he=t}return e.he}function Lo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Iy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ku(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!al(n.startAt,e.startAt)&&al(n.endAt,e.endAt)}function Vs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ni{constructor(e,t=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Oy(n,e,t,i,r,s,o,a){return new ni(n,e,t,i,r,s,o,a)}function Yu(n){return new ni(n)}function cl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ju(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Fo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Zu(n){return n.collectionGroup!==null}function Ht(n){const e=z(n);if(e.Pe===null){e.Pe=[];const t=Fo(e),i=Ju(e);if(t!==null&&i===null)t.isKeyField()||e.Pe.push(new Tn(t)),e.Pe.push(new Tn(Te.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Tn(Te.keyField(),s))}}}return e.Pe}function tt(n){const e=z(n);if(!e.Ie)if(e.limitType==="F")e.Ie=ll(e.path,e.collectionGroup,Ht(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Ht(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Tn(s.field,o))}const i=e.endAt?new Yi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Yi(e.startAt.position,e.startAt.inclusive):null;e.Ie=ll(e.path,e.collectionGroup,t,e.filters,e.limit,i,r)}return e.Ie}function Ms(n,e){e.getFirstInequalityField(),Fo(n);const t=n.filters.concat([e]);return new ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ji(n,e,t){return new ni(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ar(n,e){return Lo(tt(n),tt(e))&&n.limitType===e.limitType}function eh(n){return`${No(tt(n))}|lt:${n.limitType}`}function Ns(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(r=>Qu(r)).join(", ")}]`),Ir(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(r=>tn(r)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(r=>tn(r)).join(",")),`Target(${i})`}(tt(n))}; limitType=${n.limitType})`}function Sr(n,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):O.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,e)&&function(i,r){for(const s of Ht(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(i,r){return!(i.startAt&&!function(o,a,l){const c=ol(o,a,l);return o.inclusive?c<=0:c<0}(i.startAt,Ht(i),r)||i.endAt&&!function(o,a,l){const c=ol(o,a,l);return o.inclusive?c>=0:c>0}(i.endAt,Ht(i),r))}(n,e)}function Vy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function th(n){return(e,t)=>{let i=!1;for(const r of Ht(n)){const s=My(r,e,t);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function My(n,e,t){const i=n.field.isKeyField()?O.comparator(e.key,t.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?en(l,c):L()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return L()}}/**
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
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ti(this.inner,(t,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return qu(this.inner)}size(){return this.innerSize}}/**
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
 */const Ny=new J(O.comparator);function gt(){return Ny}const nh=new J(O.comparator);function gn(...n){let e=nh;for(const t of n)e=e.insert(t.key,t);return e}function Ly(n){let e=nh;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function It(){return En()}function ih(){return En()}function En(){return new cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Fy=new _e(O.comparator);function B(...n){let e=Fy;for(const t of n)e=e.add(t);return e}const Uy=new _e(j);function By(){return Uy}/**
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
 */function rh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xi(e)?"-0":e}}function sh(n){return{integerValue:""+n}}function $y(n,e){return vy(e)?sh(e):rh(n,e)}/**
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
 */class br{constructor(){this._=void 0}}function zy(n,e,t){return n instanceof Ls?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Oo(s)&&(s=Vo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Zi?oh(n,e):n instanceof er?ah(n,e):function(r,s){const o=jy(r,s),a=ul(o)+ul(r.Te);return xs(o)&&xs(r.Te)?sh(a):rh(r.serializer,a)}(n,e)}function qy(n,e,t){return n instanceof Zi?oh(n,e):n instanceof er?ah(n,e):t}function jy(n,e){return n instanceof Fs?function(i){return xs(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class Ls extends br{}class Zi extends br{constructor(e){super(),this.elements=e}}function oh(n,e){const t=lh(e);for(const i of n.elements)t.some(r=>qe(r,i))||t.push(i);return{arrayValue:{values:t}}}class er extends br{constructor(e){super(),this.elements=e}}function ah(n,e){let t=lh(e);for(const i of n.elements)t=t.filter(r=>!qe(r,i));return{arrayValue:{values:t}}}class Fs extends br{constructor(e,t){super(),this.serializer=e,this.Te=t}}function ul(n){return ee(n.integerValue||n.doubleValue)}function lh(n){return Mo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Gy(n,e){return n.field.isEqual(e.field)&&function(i,r){return i instanceof Zi&&r instanceof Zi||i instanceof er&&r instanceof er?Zt(i.elements,r.elements,qe):i instanceof Fs&&r instanceof Fs?qe(i.Te,r.Te):i instanceof Ls&&r instanceof Ls}(n.transform,e.transform)}class Ct{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ri(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Uo{}function ch(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wy(n.key,Ct.none()):new Bo(n.key,n.data,Ct.none());{const t=n.data,i=Ne.empty();let r=new _e(Te.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Cr(n.key,i,new ct(r.toArray()),Ct.none())}}function Hy(n,e,t){n instanceof Bo?function(r,s,o){const a=r.value.clone(),l=dl(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Cr?function(r,s,o){if(!Ri(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=dl(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(uh(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function In(n,e,t,i){return n instanceof Bo?function(s,o,a,l){if(!Ri(s.precondition,o))return a;const c=s.value.clone(),u=fl(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,i):n instanceof Cr?function(s,o,a,l){if(!Ri(s.precondition,o))return a;const c=fl(s.fieldTransforms,l,o),u=o.data;return u.setAll(uh(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,i):function(s,o,a){return Ri(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function hl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Zt(i,r,(s,o)=>Gy(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Bo extends Uo{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Cr extends Uo{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function uh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function dl(n,e,t){const i=new Map;ne(n.length===t.length);for(let r=0;r<t.length;r++){const s=n[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,qy(o,a,t[r]))}return i}function fl(n,e,t){const i=new Map;for(const r of n){const s=r.transform,o=t.data.field(r.field);i.set(r.field,zy(s,o,e))}return i}class Wy extends Uo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ky{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&Hy(s,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=In(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=In(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=ih();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(r.key)?null:a;const l=ch(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(N.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),B())}isEqual(e){return this.batchId===e.batchId&&Zt(this.mutations,e.mutations,(t,i)=>hl(t,i))&&Zt(this.baseMutations,e.baseMutations,(t,i)=>hl(t,i))}}/**
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
 */class Qy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Xy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Z,U;function hh(n){if(n===void 0)return et("GRPC error has no .code"),E.UNKNOWN;switch(n){case Z.OK:return E.OK;case Z.CANCELLED:return E.CANCELLED;case Z.UNKNOWN:return E.UNKNOWN;case Z.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Z.INTERNAL:return E.INTERNAL;case Z.UNAVAILABLE:return E.UNAVAILABLE;case Z.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Z.NOT_FOUND:return E.NOT_FOUND;case Z.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Z.ABORTED:return E.ABORTED;case Z.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Z.DATA_LOSS:return E.DATA_LOSS;default:return L()}}(U=Z||(Z={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class $o{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return _i}static getOrCreateInstance(){return _i===null&&(_i=new $o),_i}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let _i=null;/**
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
 */function Yy(){return new TextEncoder}/**
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
 */const Jy=new Gt([4294967295,4294967295],0);function pl(n){const e=Yy().encode(n),t=new iy;return t.update(e),new Uint8Array(t.digest())}function ml(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gt([t,i],0),new Gt([r,s],0)]}class zo{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new _n(`Invalid padding: ${t}`);if(i<0)throw new _n(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new _n(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new _n(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Gt.fromNumber(this.de)}Re(e,t,i){let r=e.add(t.multiply(Gt.fromNumber(i)));return r.compare(Jy)===1&&(r=new Gt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=pl(e),[i,r]=ml(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(i,r,s);if(!this.Ve(o))return!1}return!0}static create(e,t,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new zo(s,r,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=pl(e),[i,r]=ml(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(i,r,s);this.me(o)}}me(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class _n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Rr{constructor(e,t,i,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,ii.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Rr(N.min(),r,new J(j),gt(),B())}}class ii{constructor(e,t,i,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ii(i,t,B(),B(),B())}}/**
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
 */class Pi{constructor(e,t,i,r){this.fe=e,this.removedTargetIds=t,this.key=i,this.ge=r}}class dh{constructor(e,t){this.targetId=e,this.pe=t}}class fh{constructor(e,t,i=ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class gl{constructor(){this.ye=0,this.we=yl(),this.Se=ve.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=B(),t=B(),i=B();return this.we.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:L()}}),new ii(this.Se,this.be,e,t,i)}xe(){this.De=!1,this.we=yl()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Zy{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=gt(),this.$e=_l(),this.Ue=new J(j)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Fe(e.resumeToken);break;case 1:i.Le(),i.ve||i.xe(),i.Fe(e.resumeToken);break;case 2:i.Le(),i.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(i.ke(),i.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Fe(e.resumeToken));break;default:L()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((i,r)=>{this.Je(r)&&t(r)})}Ze(e){var t,i;const r=e.targetId,s=e.pe.count,o=this.Xe(r);if(o){const a=o.target;if(Vs(a))if(s===0){const l=new O(a.path);this.ze(r,l,pe.newNoDocument(l,N.min()))}else ne(s===1);else{const l=this.et(r);if(l!==s){const c=this.tt(e,l);if(c.status!==0){this.Ye(r);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,u)}(t=$o.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,d,p,m){var y,v,f,g,_,w;const A={localCacheCount:p,existenceFilterCount:m.count},R=m.unchangedNames;return R&&(A.bloomFilter={applied:h===0,hashCount:(y=R?.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(g=(f=(v=R?.bits)===null||v===void 0?void 0:v.bitmap)===null||f===void 0?void 0:f.length)!==null&&g!==void 0?g:0,padding:(w=(_=R?.bits)===null||_===void 0?void 0:_.padding)!==null&&w!==void 0?w:0},d&&(A.bloomFilter.mightContain=d)),A}(c.status,(i=c.nt)!==null&&i!==void 0?i:null,l,e.pe))}}}}tt(e,t){const{unchangedNames:i,count:r}=e.pe;if(!i||!i.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=xt(s).toUint8Array()}catch(h){if(h instanceof ju)return Jt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new zo(l,o,a)}catch(h){return Jt(h instanceof _n?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:r===t-this.it(e.targetId,u)?0:2,nt:u}}it(e,t){const i=this.qe.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{t(s.path.canonicalString())||(this.ze(e,s,null),r++)}),r}st(e){const t=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Vs(a.target)){const l=new O(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,pe.newNoDocument(l,e))}s.Ce&&(t.set(o,s.Me()),s.xe())}});let i=B();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const r=new Rr(e,t,this.Ue,this.Ke,i);return this.Ke=gt(),this.$e=_l(),this.Ue=new J(j),r}Ge(e,t){if(!this.Je(e))return;const i=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,i),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const r=this.He(e);this.ot(e,t)?r.Oe(t,1):r.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),i&&(this.Ke=this.Ke.insert(t,i))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new gl,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new _e(j),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||P("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new gl),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function _l(){return new J(O.comparator)}function yl(){return new J(O.comparator)}const ev={asc:"ASCENDING",desc:"DESCENDING"},tv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nv={and:"AND",or:"OR"};class iv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Us(n,e){return n.useProto3Json||Ir(e)?e:{value:e}}function Bs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ph(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Wt(n){return ne(!!n),N.fromTimestamp(function(t){const i=mt(t);return new se(i.seconds,i.nanos)}(n))}function mh(n,e){return function(i){return new Q(["projects",i.projectId,"databases",i.database])}(n).child("documents").child(e).canonicalString()}function gh(n){const e=Q.fromString(n);return ne(wh(e)),e}function is(n,e){const t=gh(e);if(t.get(1)!==n.databaseId.projectId)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(_h(t))}function $s(n,e){return mh(n.databaseId,e)}function rv(n){const e=gh(n);return e.length===4?Q.emptyPath():_h(e)}function vl(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _h(n){return ne(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function sv(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(ne(u===void 0||typeof u=="string"),ve.fromBase64String(u||"")):(ne(u===void 0||u instanceof Uint8Array),ve.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:hh(c.code);return new C(u,c.message||"")}(o);t=new fh(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=is(n,i.document.name),s=Wt(i.document.updateTime),o=i.document.createTime?Wt(i.document.createTime):N.min(),a=new Ne({mapValue:{fields:i.document.fields}}),l=pe.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];t=new Pi(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=is(n,i.document),s=i.readTime?Wt(i.readTime):N.min(),o=pe.newNoDocument(r,s),a=i.removedTargetIds||[];t=new Pi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=is(n,i.document),s=i.removedTargetIds||[];t=new Pi([],s,r,null)}else{if(!("filter"in e))return L();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new Xy(r,s),a=i.targetId;t=new dh(a,o)}}return t}function ov(n,e){return{documents:[$s(n,e.path)]}}function av(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=$s(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=$s(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length!==0)return vh(Oe.create(l,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const s=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ft(h.field),direction:uv(h.dir)}}(c))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Us(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function lv(n){let e=rv(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let r=null;if(i>0){ne(i===1);const u=t.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(h){const d=yh(h);return d instanceof Oe&&Wu(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(m){return new Tn(Ut(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ir(d)?null:d}(t.limit));let l=null;t.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Yi(p,d)}(t.startAt));let c=null;return t.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new Yi(p,d)}(t.endAt)),Oy(e,r,o,s,a,"F",l,c)}function cv(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ut(t.unaryFilter.field);return te.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Ut(t.unaryFilter.field);return te.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ut(t.unaryFilter.field);return te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ut(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(t){return te.create(Ut(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Oe.create(t.compositeFilter.filters.map(i=>yh(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return L()}}(t.compositeFilter.op))}(n):L()}function uv(n){return ev[n]}function hv(n){return tv[n]}function dv(n){return nv[n]}function Ft(n){return{fieldPath:n.canonicalString()}}function Ut(n){return Te.fromServerFormat(n.fieldPath)}function vh(n){return n instanceof te?function(t){if(t.op==="=="){if(sl(t.value))return{unaryFilter:{field:Ft(t.field),op:"IS_NAN"}};if(rl(t.value))return{unaryFilter:{field:Ft(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sl(t.value))return{unaryFilter:{field:Ft(t.field),op:"IS_NOT_NAN"}};if(rl(t.value))return{unaryFilter:{field:Ft(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ft(t.field),op:hv(t.op),value:t.value}}}(n):n instanceof Oe?function(t){const i=t.getFilters().map(r=>vh(r));return i.length===1?i[0]:{compositeFilter:{op:dv(t.op),filters:i}}}(n):L()}function wh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ut{constructor(e,t,i,r,s=N.min(),o=N.min(),a=ve.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ut(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ut(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fv{constructor(e){this.ct=e}}function pv(n){const e=lv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ji(e,e.limit,"L"):e}/**
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
 */class mv{constructor(){this.sn=new gv}addToCollectionParentIndex(e,t){return this.sn.add(t),T.resolve()}getCollectionParents(e,t){return T.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return T.resolve()}deleteFieldIndex(e,t){return T.resolve()}getDocumentsMatchingTarget(e,t){return T.resolve(null)}getIndexType(e,t){return T.resolve(0)}getFieldIndexes(e,t){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,t){return T.resolve(pt.min())}getMinOffsetFromCollectionGroup(e,t){return T.resolve(pt.min())}updateCollectionGroup(e,t,i){return T.resolve()}updateIndexEntries(e,t){return T.resolve()}}class gv{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new _e(Q.comparator),s=!r.has(i);return this.index[t]=r.add(i),s}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new _e(Q.comparator)).toArray()}}/**
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
 */class nn{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new nn(0)}static On(){return new nn(-1)}}/**
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
 */class _v{constructor(){this.changes=new cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?T.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class vv{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&In(i.mutation,r,ct.empty(),se.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,B()).next(()=>i))}getLocalViewOfDocuments(e,t,i=B()){const r=It();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(s=>{let o=gn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=It();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,B()))}populateOverlays(e,t,i){const r=[];return i.forEach(s=>{t.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,r){let s=gt();const o=En(),a=function(){return En()}();return t.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Cr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),In(u.mutation,c,u.mutation.getFieldMask(),se.now())):o.set(c.key,ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new yv(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=En();let r=new J((o,a)=>o-a),s=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=i.get(l)||ct.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(r.get(a.batchId)||B()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=ih();u.forEach(d=>{if(!s.has(d)){const p=ch(t.get(d),i.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return T.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return O.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-s.size):T.resolve(It());let a=-1,l=s;return o.next(c=>T.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,B())).next(u=>({batchId:a,changes:Ly(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(i=>{let r=gn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const r=t.collectionGroup;let s=gn();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const l=function(u,h){return new ni(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r))).next(s=>{r.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,pe.newInvalidDocument(c)))});let o=gn();return s.forEach((a,l)=>{const c=r.get(a);c!==void 0&&In(c.mutation,l,ct.empty(),se.now()),Sr(t,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class wv{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return T.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Wt(r.createTime)}}(t)),T.resolve()}getNamedQuery(e,t){return T.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(r){return{name:r.name,query:pv(r.bundledQuery),readTime:Wt(r.readTime)}}(t)),T.resolve()}}/**
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
 */class Tv{constructor(){this.overlays=new J(O.comparator),this.cr=new Map}getOverlay(e,t){return T.resolve(this.overlays.get(t))}getOverlays(e,t){const i=It();return T.forEach(t,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,s)=>{this.ht(e,t,s)}),T.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.cr.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(i)),T.resolve()}getOverlaysForCollection(e,t,i){const r=It(),s=t.length+1,o=new O(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return T.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let s=new J((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>i){let u=s.get(c.largestBatchId);u===null&&(u=It(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=It(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return T.resolve(a)}ht(e,t,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.cr.get(r.largestBatchId).delete(i.key);this.cr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Qy(t,i));let s=this.cr.get(t);s===void 0&&(s=B(),this.cr.set(t,s)),this.cr.set(t,s.add(i.key))}}/**
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
 */class qo{constructor(){this.lr=new _e(re.hr),this.Pr=new _e(re.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const i=new re(e,t);this.lr=this.lr.add(i),this.Pr=this.Pr.add(i)}Tr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Er(new re(e,t))}dr(e,t){e.forEach(i=>this.removeReference(i,t))}Ar(e){const t=new O(new Q([])),i=new re(t,e),r=new re(t,e+1),s=[];return this.Pr.forEachInRange([i,r],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new O(new Q([])),i=new re(t,e),r=new re(t,e+1);let s=B();return this.Pr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new re(e,0),i=this.lr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class re{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return O.comparator(e.key,t.key)||j(e.mr,t.mr)}static Ir(e,t){return j(e.mr,t.mr)||O.comparator(e.key,t.key)}}/**
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
 */class Ev{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new _e(re.hr)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ky(s,t,i,r);this.mutationQueue.push(o);for(const a of r)this.pr=this.pr.add(new re(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,t){return T.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.wr(i),s=r<0?0:r;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new re(t,0),r=new re(t,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([i,r],o=>{const a=this.yr(o.mr);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new _e(j);return t.forEach(r=>{const s=new re(r,0),o=new re(r,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{i=i.add(a.mr)})}),T.resolve(this.Sr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let s=i;O.isDocumentKey(s)||(s=s.child(""));const o=new re(new O(s),0);let a=new _e(j);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.mr)),!0)},o),T.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(i=>{const r=this.yr(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){ne(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.pr;return T.forEach(t.mutations,r=>{const s=new re(r.key,t.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.pr=i})}Cn(e){}containsKey(e,t){const i=new re(t,0),r=this.pr.firstAfterOrEqual(i);return T.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Iv{constructor(e){this.Dr=e,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Dr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return T.resolve(i?i.document.mutableCopy():pe.newInvalidDocument(t))}getEntries(e,t){let i=gt();return t.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():pe.newInvalidDocument(r))}),T.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let s=gt();const o=t.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gy(my(u),i)<=0||(r.has(u.key)||Sr(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,t,i,r){L()}vr(e,t){return T.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Av(this)}getSize(e){return T.resolve(this.size)}}class Av extends _v{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.sr.addEntry(e,r)):this.sr.removeEntry(i)}),T.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
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
 */class Sv{constructor(e){this.persistence=e,this.Cr=new cn(t=>No(t),Lo),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new qo,this.targetCount=0,this.Or=nn.xn()}forEachTarget(e,t){return this.Cr.forEach((i,r)=>t(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Fr&&(this.Fr=t),T.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new nn(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,T.resolve()}updateTargetData(e,t){return this.Ln(t),T.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,t,i){let r=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(s).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,t){const i=this.Cr.get(t)||null;return T.resolve(i)}addMatchingKeys(e,t,i){return this.Mr.Tr(t,i),T.resolve()}removeMatchingKeys(e,t,i){this.Mr.dr(t,i);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),T.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Mr.Vr(t);return T.resolve(i)}containsKey(e,t){return T.resolve(this.Mr.containsKey(t))}}/**
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
 */class bv{constructor(e,t){this.Nr={},this.overlays={},this.Br=new xo(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new Sv(this),this.indexManager=new mv,this.remoteDocumentCache=function(r){return new Iv(r)}(i=>this.referenceDelegate.qr(i)),this.serializer=new fv(t),this.Qr=new wv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Tv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Nr[e.toKey()];return i||(i=new Ev(t,this.referenceDelegate),this.Nr[e.toKey()]=i),i}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,i){P("MemoryPersistence","Starting transaction:",e);const r=new Cv(this.Br.next());return this.referenceDelegate.Kr(),i(r).next(s=>this.referenceDelegate.$r(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ur(e,t){return T.or(Object.values(this.Nr).map(i=>()=>i.containsKey(e,t)))}}class Cv extends yy{constructor(e){super(),this.currentSequenceNumber=e}}class jo{constructor(e){this.persistence=e,this.Wr=new qo,this.Gr=null}static zr(e){return new jo(e)}get jr(){if(this.Gr)return this.Gr;throw L()}addReference(e,t,i){return this.Wr.addReference(i,t),this.jr.delete(i.toString()),T.resolve()}removeReference(e,t,i){return this.Wr.removeReference(i,t),this.jr.add(i.toString()),T.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),T.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(r=>this.jr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(s=>this.jr.add(s.toString()))}).next(()=>i.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.jr,i=>{const r=O.fromPath(i);return this.Hr(e,r).next(s=>{s||t.removeEntry(r,N.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(i=>{i?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return T.or([()=>T.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}/**
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
 */class Go{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.Li=i,this.ki=r}static qi(e,t){let i=B(),r=B();for(const s of t.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Go(e,t.fromCache,i,r)}}/**
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
 */class Rv{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,i,r){return this.$i(e,t).next(s=>s||this.Ui(e,t,r,i)).next(s=>s||this.Wi(e,t))}$i(e,t){if(cl(t))return T.resolve(null);let i=tt(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ji(t,null,"F"),i=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=B(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Gi(t,a);return this.zi(t,c,o,l.readTime)?this.$i(e,Ji(t,null,"F")):this.ji(e,c,t,l)}))})))}Ui(e,t,i,r){return cl(t)||r.isEqual(N.min())?this.Wi(e,t):this.Ki.getDocuments(e,i).next(s=>{const o=this.Gi(t,s);return this.zi(t,o,i,r)?this.Wi(e,t):(Za()<=$.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ns(t)),this.ji(e,o,t,py(r,-1)))})}Gi(e,t){let i=new _e(th(e));return t.forEach((r,s)=>{Sr(e,s)&&(i=i.add(s))}),i}zi(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Wi(e,t){return Za()<=$.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Ns(t)),this.Ki.getDocumentsMatchingQuery(e,t,pt.min())}ji(e,t,i,r){return this.Ki.getDocumentsMatchingQuery(e,i,r).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Pv{constructor(e,t,i,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new J(j),this.Yi=new cn(s=>No(s),Lo),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(i)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vv(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function kv(n,e,t,i){return new Pv(n,e,t,i)}async function Th(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,t.es(e),t.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=B();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(i,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function Eh(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function Dv(n,e){const t=z(n),i=e.snapshotVersion;let r=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});r=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(t.kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.kr.addMatchingKeys(s,u.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ve.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,i)),r=r.insert(h,p),function(y,v,f){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(d,p,u)&&a.push(t.kr.updateTargetData(s,p))});let l=gt(),c=B();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(xv(s,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!i.isEqual(N.min())){const u=t.kr.getLastRemoteSnapshotVersion(s).next(h=>t.kr.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(t.Ji=r,s))}function xv(n,e,t){let i=B(),r=B();return t.forEach(s=>i=i.add(s)),e.getEntries(n,i).next(s=>{let o=gt();return t.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(N.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:r}})}function Ov(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.kr.getTargetData(i,e).next(s=>s?(r=s,T.resolve(r)):t.kr.allocateTargetId(i).next(o=>(r=new ut(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.kr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=t.Ji.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(i.targetId,i),t.Yi.set(e,i.targetId)),i})}async function zs(n,e,t){const i=z(n),r=i.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ei(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(r.target)}function wl(n,e,t){const i=z(n);let r=N.min(),s=B();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=z(l),d=h.Yi.get(u);return d!==void 0?T.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(i,o,tt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,t?r:N.min(),t?s:B())).next(a=>(Vv(i,Vy(e),a),{documents:a,ss:s})))}function Vv(n,e,t){let i=n.Zi.get(e)||N.min();t.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.Zi.set(e,i)}class Tl{constructor(){this.activeTargetIds=By()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mv{constructor(){this.Hs=new Tl,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,i){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Tl,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Nv{Ys(e){}shutdown(){}}/**
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
 */class El{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yi=null;function rs(){return yi===null?yi=function(){return 268435456+Math.round(2147483648*Math.random())}():yi++,"0x"+yi.toString(16)}/**
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
 */const Lv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Fv{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const de="WebChannelConnection";class Uv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=i+"://"+t.host,this.Eo=`projects/${r}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Ro(){return!1}Vo(t,i,r,s,o){const a=rs(),l=this.mo(t,i);P("RestConnection",`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,s,o),this.po(t,l,c,r).then(u=>(P("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw Jt("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}yo(t,i,r,s,o,a){return this.Vo(t,i,r,s,o)}fo(t,i,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ln}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}mo(t,i){const r=Lv[t];return`${this.To}/v1/${i}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,i,r){const s=rs();return new Promise((o,a)=>{const l=new ny;l.setWithCredentials(!0),l.listenOnce(Z_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ts.NO_ERROR:const u=l.getResponseJson();P(de,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case ts.TIMEOUT:P(de,`RPC '${e}' ${s} timed out`),a(new C(E.DEADLINE_EXCEEDED,"Request time out"));break;case ts.HTTP_ERROR:const h=l.getStatus();if(P(de,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d?.error;if(p&&p.status&&p.message){const m=function(v){const f=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(f)>=0?f:E.UNKNOWN}(p.status);a(new C(m,p.message))}else a(new C(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new C(E.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{P(de,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);P(de,`RPC '${e}' ${s} sending request:`,r),l.send(t,"POST",c,i,15)})}wo(e,t,i){const r=rs(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Y_(),a=J_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new ty({})),this.fo(l.initMessageHeaders,t,i),l.encodeInitMessageHeaders=!0;const u=s.join("");P(de,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const m=new Fv({so:v=>{p?P(de,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(d||(P(de,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),P(de,`RPC '${e}' stream ${r} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,f,g)=>{v.listen(f,_=>{try{g(_)}catch(w){setTimeout(()=>{throw w},0)}})};return y(h,pi.EventType.OPEN,()=>{p||P(de,`RPC '${e}' stream ${r} transport opened.`)}),y(h,pi.EventType.CLOSE,()=>{p||(p=!0,P(de,`RPC '${e}' stream ${r} transport closed`),m.Po())}),y(h,pi.EventType.ERROR,v=>{p||(p=!0,Jt(de,`RPC '${e}' stream ${r} transport errored:`,v),m.Po(new C(E.UNAVAILABLE,"The operation could not be completed")))}),y(h,pi.EventType.MESSAGE,v=>{var f;if(!p){const g=v.data[0];ne(!!g);const _=g,w=_.error||((f=_[0])===null||f===void 0?void 0:f.error);if(w){P(de,`RPC '${e}' stream ${r} received error:`,w);const A=w.status;let R=function(q){const I=Z[q];if(I!==void 0)return hh(I)}(A),X=w.message;R===void 0&&(R=E.INTERNAL,X="Unknown error status: "+A+" with message "+w.message),p=!0,m.Po(new C(R,X)),h.close()}else P(de,`RPC '${e}' stream ${r} received:`,g),m.Io(g)}}),y(a,ey.STAT_EVENT,v=>{v.stat===Ya.PROXY?P(de,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Ya.NOPROXY&&P(de,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function ss(){return typeof document<"u"?document:null}/**
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
 */function Pr(n){return new iv(n,!0)}/**
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
 */class Ih{constructor(e,t,i=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=t,this.So=i,this.bo=r,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),r=Math.max(0,t-i);r>0&&P("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Bv{constructor(e,t,i,r,s,o,a,l){this.ii=e,this.Bo=i,this.Lo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Ih(e,t)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(et(t.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.ko===t&&this.e_(i,r)},i=>{e(()=>{const r=new C(E.UNKNOWN,"Fetching auth token failed: "+i.message);return this.t_(r)})})}e_(e,t){const i=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o(()=>{i(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(r=>{i(()=>this.t_(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.ko===e?t():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $v extends Bv{constructor(e,t,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=sv(this.serializer,e),i=function(s){if(!("targetChange"in s))return N.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?N.min():o.readTime?Wt(o.readTime):N.min()}(e);return this.listener.r_(t,i)}i_(e){const t={};t.database=vl(this.serializer),t.addTarget=function(s,o){let a;const l=o.target;if(a=Vs(l)?{documents:ov(s,l)}:{query:av(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ph(s,o.resumeToken);const c=Us(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(N.min())>0){a.readTime=Bs(s,o.snapshotVersion.toTimestamp());const c=Us(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const i=cv(this.serializer,e);i&&(t.labels=i),this.Ho(t)}s_(e){const t={};t.database=vl(this.serializer),t.removeTarget=e,this.Ho(t)}}/**
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
 */class zv extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Vo(e,t,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new C(E.UNKNOWN,r.toString())})}yo(e,t,i,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,t,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(E.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class qv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(et(t),this.d_=!1):P("OnlineStateTracker",t)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class jv{constructor(e,t,i,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{i.enqueueAndForget(async()=>{si(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=z(l);c.y_.add(4),await ri(c),c.b_.set("Unknown"),c.y_.delete(4),await kr(c)}(this))})}),this.b_=new qv(i,r)}}async function kr(n){if(si(n))for(const e of n.w_)await e(!0)}async function ri(n){for(const e of n.w_)await e(!1)}function Ah(n,e){const t=z(n);t.p_.has(e.targetId)||(t.p_.set(e.targetId,e),Ko(t)?Wo(t):un(t).Uo()&&Ho(t,e))}function Sh(n,e){const t=z(n),i=un(t);t.p_.delete(e),i.Uo()&&bh(t,e),t.p_.size===0&&(i.Uo()?i.zo():si(t)&&t.b_.set("Unknown"))}function Ho(n,e){if(n.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(N.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}un(n).i_(e)}function bh(n,e){n.D_.Be(e),un(n).s_(e)}function Wo(n){n.D_=new Zy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.p_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),un(n).start(),n.b_.A_()}function Ko(n){return si(n)&&!un(n).$o()&&n.p_.size>0}function si(n){return z(n).y_.size===0}function Ch(n){n.D_=void 0}async function Gv(n){n.p_.forEach((e,t)=>{Ho(n,e)})}async function Hv(n,e){Ch(n),Ko(n)?(n.b_.m_(e),Wo(n)):n.b_.set("Unknown")}async function Wv(n,e,t){if(n.b_.set("Online"),e instanceof fh&&e.state===2&&e.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.p_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.p_.delete(a),r.D_.removeTarget(a))}(n,e)}catch(i){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Il(n,i)}else if(e instanceof Pi?n.D_.We(e):e instanceof dh?n.D_.Ze(e):n.D_.je(e),!t.isEqual(N.min()))try{const i=await Eh(n.localStore);t.compareTo(i)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.p_.get(c);u&&s.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.p_.get(l);if(!u)return;s.p_.set(l,u.withResumeToken(ve.EMPTY_BYTE_STRING,u.snapshotVersion)),bh(s,l);const h=new ut(u.target,l,c,u.sequenceNumber);Ho(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(i){P("RemoteStore","Failed to raise snapshot:",i),await Il(n,i)}}async function Il(n,e,t){if(!ei(e))throw e;n.y_.add(1),await ri(n),n.b_.set("Offline"),t||(t=()=>Eh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await t(),n.y_.delete(1),await kr(n)})}async function Al(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const i=si(t);t.y_.add(3),await ri(t),i&&t.b_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.y_.delete(3),await kr(t)}async function Kv(n,e){const t=z(n);e?(t.y_.delete(2),await kr(t)):e||(t.y_.add(2),await ri(t),t.b_.set("Unknown"))}function un(n){return n.v_||(n.v_=function(t,i,r){const s=z(t);return s.P_(),new $v(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{_o:Gv.bind(null,n),uo:Hv.bind(null,n),r_:Wv.bind(null,n)}),n.w_.push(async e=>{e?(n.v_.Go(),Ko(n)?Wo(n):n.b_.set("Unknown")):(await n.v_.stop(),Ch(n))})),n.v_}/**
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
 */class Qo{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,a=new Qo(e,t,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rh(n,e){if(et("AsyncQueue",`${e}: ${n}`),ei(n))return new C(E.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Kt{constructor(e){this.comparator=e?(t,i)=>e(t,i)||O.comparator(t.key,i.key):(t,i)=>O.comparator(t.key,i.key),this.keyedMap=gn(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new Kt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Kt;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Sl{constructor(){this.F_=new J(O.comparator)}track(e){const t=e.doc.key,i=this.F_.get(t);i?e.type!==0&&i.type===3?this.F_=this.F_.insert(t,e):e.type===3&&i.type!==1?this.F_=this.F_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.F_=this.F_.remove(t):e.type===1&&i.type===2?this.F_=this.F_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):L():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal((t,i)=>{e.push(i)}),e}}class rn{constructor(e,t,i,r,s,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,i,r,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new rn(e,t,Kt.emptySet(t),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ar(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class Qv{constructor(){this.x_=void 0,this.listeners=[]}}class Xv{constructor(){this.queries=new cn(e=>eh(e),Ar),this.onlineState="Unknown",this.O_=new Set}}async function Yv(n,e){const t=z(n),i=e.query;let r=!1,s=t.queries.get(i);if(s||(r=!0,s=new Qv),r)try{s.x_=await t.onListen(i)}catch(o){const a=Rh(o,`Initialization of query '${Ns(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.listeners.push(e),e.N_(t.onlineState),s.x_&&e.B_(s.x_)&&Xo(t)}async function Jv(n,e){const t=z(n),i=e.query;let r=!1;const s=t.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return t.queries.delete(i),t.onUnlisten(i)}function Zv(n,e){const t=z(n);let i=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.B_(r)&&(i=!0);o.x_=r}}i&&Xo(t)}function ew(n,e,t){const i=z(n),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(t);i.queries.delete(e)}function Xo(n){n.O_.forEach(e=>{e.next()})}class tw{constructor(e,t,i){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=i||{}}B_(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new rn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.W_||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}U_(e){e=rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class Ph{constructor(e){this.key=e}}class kh{constructor(e){this.key=e}}class nw{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=B(),this.mutatedKeys=B(),this.na=th(e),this.ra=new Kt(this.na)}get ia(){return this.X_}sa(e,t){const i=t?t.oa:new Sl,r=t?t.ra:this.ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=Sr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?m!==y&&(i.track({type:3,doc:p}),v=!0):this._a(d,p)||(i.track({type:2,doc:p}),v=!0,(l&&this.na(p,l)>0||c&&this.na(p,c)<0)&&(a=!0)):!d&&p?(i.track({type:0,doc:p}),v=!0):d&&!p&&(i.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(p?(o=o.add(p),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{ra:o,oa:i,zi:a,mutatedKeys:s}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const r=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((c,u)=>function(d,p){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return m(d)-m(p)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(i);const o=t?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new rn(this.query,e.ra,r,s,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Sl,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(t=>this.X_=this.X_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.X_=this.X_.delete(t)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=B(),this.ra.forEach(i=>{this.la(i.key)&&(this.ta=this.ta.add(i.key))});const t=[];return e.forEach(i=>{this.ta.has(i)||t.push(new kh(i))}),this.ta.forEach(i=>{e.has(i)||t.push(new Ph(i))}),t}ha(e){this.X_=e.ss,this.ta=B();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return rn.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class iw{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class rw{constructor(e){this.key=e,this.Ia=!1}}class sw{constructor(e,t,i,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new cn(a=>eh(a),Ar),this.da=new Map,this.Aa=new Set,this.Ra=new J(O.comparator),this.Va=new Map,this.ma=new qo,this.fa={},this.ga=new Map,this.pa=nn.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function ow(n,e){const t=fw(n);let i,r;const s=t.Ea.get(e);if(s)i=s.targetId,t.sharedClientState.addLocalQueryTarget(i),r=s.view.Pa();else{const o=await Ov(t.localStore,tt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await aw(t,e,i,a==="current",o.resumeToken),t.isPrimaryClient&&Ah(t.remoteStore,o)}return r}async function aw(n,e,t,i,r){n.wa=(h,d,p)=>async function(y,v,f,g){let _=v.view.sa(f);_.zi&&(_=await wl(y.localStore,v.query,!1).then(({documents:R})=>v.view.sa(R,_)));const w=g&&g.targetChanges.get(v.targetId),A=v.view.applyChanges(_,y.isPrimaryClient,w);return Cl(y,v.targetId,A.ca),A.snapshot}(n,h,d,p);const s=await wl(n.localStore,e,!0),o=new nw(e,s.ss),a=o.sa(s.documents),l=ii.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),c=o.applyChanges(a,n.isPrimaryClient,l);Cl(n,t,c.ca);const u=new iw(e,t,o);return n.Ea.set(e,u),n.da.has(t)?n.da.get(t).push(e):n.da.set(t,[e]),c.snapshot}async function lw(n,e){const t=z(n),i=t.Ea.get(e),r=t.da.get(i.targetId);if(r.length>1)return t.da.set(i.targetId,r.filter(s=>!Ar(s,e))),void t.Ea.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await zs(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),Sh(t.remoteStore,i.targetId),qs(t,i.targetId)}).catch(Do)):(qs(t,i.targetId),await zs(t.localStore,i.targetId,!0))}async function Dh(n,e){const t=z(n);try{const i=await Dv(t.localStore,e);e.targetChanges.forEach((r,s)=>{const o=t.Va.get(s);o&&(ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ia=!0:r.modifiedDocuments.size>0?ne(o.Ia):r.removedDocuments.size>0&&(ne(o.Ia),o.Ia=!1))}),await Oh(t,i,e)}catch(i){await Do(i)}}function bl(n,e,t){const i=z(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const r=[];i.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=z(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&Xo(l)}(i.eventManager,e),r.length&&i.Ta.r_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function cw(n,e,t){const i=z(n);i.sharedClientState.updateQueryState(e,"rejected",t);const r=i.Va.get(e),s=r&&r.key;if(s){let o=new J(O.comparator);o=o.insert(s,pe.newNoDocument(s,N.min()));const a=B().add(s),l=new Rr(N.min(),new Map,new J(j),o,a);await Dh(i,l),i.Ra=i.Ra.remove(s),i.Va.delete(e),Yo(i)}else await zs(i.localStore,e,!1).then(()=>qs(i,e,t)).catch(Do)}function qs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.da.get(e))n.Ea.delete(i),t&&n.Ta.Sa(i,t);n.da.delete(e),n.isPrimaryClient&&n.ma.Ar(e).forEach(i=>{n.ma.containsKey(i)||xh(n,i)})}function xh(n,e){n.Aa.delete(e.path.canonicalString());const t=n.Ra.get(e);t!==null&&(Sh(n.remoteStore,t),n.Ra=n.Ra.remove(e),n.Va.delete(t),Yo(n))}function Cl(n,e,t){for(const i of t)i instanceof Ph?(n.ma.addReference(i.key,e),uw(n,i)):i instanceof kh?(P("SyncEngine","Document no longer in limbo: "+i.key),n.ma.removeReference(i.key,e),n.ma.containsKey(i.key)||xh(n,i.key)):L()}function uw(n,e){const t=e.key,i=t.path.canonicalString();n.Ra.get(t)||n.Aa.has(i)||(P("SyncEngine","New document in limbo: "+t),n.Aa.add(i),Yo(n))}function Yo(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const e=n.Aa.values().next().value;n.Aa.delete(e);const t=new O(Q.fromString(e)),i=n.pa.next();n.Va.set(i,new rw(t)),n.Ra=n.Ra.insert(t,i),Ah(n.remoteStore,new ut(tt(Yu(t.path)),i,"TargetPurposeLimboResolution",xo.ae))}}async function Oh(n,e,t){const i=z(n),r=[],s=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach((a,l)=>{o.push(i.wa(l,e,t).then(c=>{if((c||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c?.fromCache?"not-current":"current"),c){r.push(c);const u=Go.qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.Ta.r_(r),await async function(l,c){const u=z(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>T.forEach(c,d=>T.forEach(d.Li,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>T.forEach(d.ki,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ei(h))throw h;P("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.Ji.get(d),m=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,y)}}}(i.localStore,s))}async function hw(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const i=await Th(t.localStore,e);t.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new C(E.CANCELLED,o))})}),s.ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Oh(t,i.ts)}}function dw(n,e){const t=z(n),i=t.Va.get(e);if(i&&i.Ia)return B().add(i.key);{let r=B();const s=t.da.get(e);if(!s)return r;for(const o of s){const a=t.Ea.get(o);r=r.unionWith(a.view.ia)}return r}}function fw(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cw.bind(null,e),e.Ta.r_=Zv.bind(null,e.eventManager),e.Ta.Sa=ew.bind(null,e.eventManager),e}class Rl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return kv(this.persistence,new Rv,e.initialUser,this.serializer)}createPersistence(e){return new bv(jo.zr,this.serializer)}createSharedClientState(e){return new Mv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>bl(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=hw.bind(null,this.syncEngine),await Kv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xv}()}createDatastore(e){const t=Pr(e.databaseInfo.databaseId),i=function(s){return new Uv(s)}(e.databaseInfo);return function(s,o,a,l){return new zv(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,r,s,o,a){return new jv(i,r,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>bl(this.syncEngine,t,0),function(){return El.v()?new El:new Nv}())}createSyncEngine(e,t){return function(r,s,o,a,l,c,u){const h=new sw(r,s,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const i=z(t);P("RemoteStore","RemoteStore shutting down."),i.y_.add(5),await ri(i),i.S_.shutdown(),i.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class mw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class gw{constructor(e,t,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=fe.UNAUTHENTICATED,this.clientId=dy.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Rh(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function os(n,e){n.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Th(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Pl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yw(n);P("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(r=>Al(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Al(e.remoteStore,s)),n._onlineComponents=e}function _w(n){return n.name==="FirebaseError"?n.code===E.FAILED_PRECONDITION||n.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function yw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await os(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!_w(t))throw t;Jt("Error using user provided cache. Falling back to memory cache: "+t),await os(n,new Rl)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await os(n,new Rl);return n._offlineComponents}async function vw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Pl(n,n._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Pl(n,new pw))),n._onlineComponents}async function ww(n){const e=await vw(n),t=e.eventManager;return t.onListen=ow.bind(null,e.syncEngine),t.onUnlisten=lw.bind(null,e.syncEngine),t}function Tw(n,e,t={}){const i=new bt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new mw({next:d=>{o.enqueueAndForget(()=>Jv(s,h)),d.fromCache&&l.source==="server"?c.reject(new C(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new tw(a,u,{includeMetadataChanges:!0,W_:!0});return Yv(s,h)}(await ww(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function Vh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const kl=new Map;/**
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
 */function Ew(n,e,t){if(!t)throw new C(E.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Iw(n,e,t,i){if(e===!0&&i===!0)throw new C(E.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Dl(n){if(O.isDocumentKey(n))throw new C(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Dr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L()}function js(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new C(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dr(n);throw new C(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Aw(n,e){if(e<=0)throw new C(E.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class xl{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new C(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Iw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vh((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new C(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new C(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new C(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jo{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ry;switch(i.type){case"firstParty":return new ly(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new C(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=kl.get(t);i&&(P("ComponentProvider","Removing Datastore"),kl.delete(t),i.terminate())}(this),Promise.resolve()}}function Sw(n,e,t,i={}){var r;const s=(n=js(n,Jo))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=fe.MOCK_USER;else{a=nc(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new C(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new fe(c)}n._authCredentials=new sy(new zu(a,l))}}/**
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
 */class Nt{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class nt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class Qt extends Nt{constructor(e,t,i){super(e,t,Yu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new O(e))}withConverter(e){return new Qt(this.firestore,e,this._path)}}function Mh(n,e,...t){if(n=De(n),Ew("collection","path",e),n instanceof Jo){const i=Q.fromString(e,...t);return Dl(i),new Qt(n,null,i)}{if(!(n instanceof nt||n instanceof Qt))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(e,...t));return Dl(i),new Qt(n.firestore,null,i)}}/**
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
 */class bw{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Ih(this,"async_queue_retry"),this.Xa=()=>{const t=ss();t&&P("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const e=ss();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=ss();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const t=new bt;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!ei(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const t=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw et("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ja=!1,i))));return this.Wa=t,t}enqueueAfterDelay(e,t,i){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const r=Qo.createAndSchedule(this,e,t,i,s=>this.ru(s));return this.ja.push(r),r}eu(){this.Ha&&L()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.ja)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}class Nh extends Jo{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=function(){return new bw}(),this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Lh(this),this._firestoreClient.terminate()}}function Cw(n,e){const t=typeof n=="object"?n:Zs(),i=typeof n=="string"?n:e||"(default)",r=ir(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Zl("firestore");s&&Sw(r,...s)}return r}function Rw(n){return n._firestoreClient||Lh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Lh(n){var e,t,i;const r=n._freezeSettings(),s=function(a,l,c,u){return new Ty(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Vh(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._firestoreClient=new gw(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(ve.fromBase64String(e))}catch(t){throw new C(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sn(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Fh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Uh{constructor(e){this._methodName=e}}/**
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
 */class Zo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
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
 */const Pw=/^__.*__$/;function Bh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class ea{constructor(e,t,i,r,s,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new ea(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.cu({path:i,hu:!1});return r.Pu(e),r}Iu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.cu({path:i,hu:!1});return r.au(),r}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Gs(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(Bh(this.uu)&&Pw.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class kw{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Pr(e)}Ru(e,t,i,r=!1){return new ea({uu:e,methodName:t,Au:i,path:Te.emptyPath(),hu:!1,du:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dw(n){const e=n._freezeSettings(),t=Pr(n._databaseId);return new kw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xw(n,e,t,i=!1){return ta(t,n.Ru(i?4:3,e))}function ta(n,e){if($h(n=De(n)))return Vw("Unsupported field value:",e,n),Ow(n,e);if(n instanceof Uh)return function(i,r){if(!Bh(r.uu))throw r.Eu(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Eu(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let l=ta(a,r.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(i,r){if((i=De(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return $y(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=se.fromDate(i);return{timestampValue:Bs(r.serializer,s)}}if(i instanceof se){const s=new se(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Bs(r.serializer,s)}}if(i instanceof Zo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof sn)return{bytesValue:ph(r.serializer,i._byteString)};if(i instanceof nt){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mh(i.firestore._databaseId||r.databaseId,i._key.path)}}throw r.Eu(`Unsupported field value: ${Dr(i)}`)}(n,e)}function Ow(n,e){const t={};return qu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ti(n,(i,r)=>{const s=ta(r,e.lu(i));s!=null&&(t[i]=s)}),{mapValue:{fields:t}}}function $h(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof Zo||n instanceof sn||n instanceof nt||n instanceof Uh)}function Vw(n,e,t){if(!$h(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const i=Dr(t);throw i==="an object"?e.Eu(n+" a custom object"):e.Eu(n+" "+i)}}const Mw=new RegExp("[~\\*/\\[\\]]");function Nw(n,e,t){if(e.search(Mw)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Fh(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gs(n,e,t,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new C(E.INVALID_ARGUMENT,a+n+l)}/**
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
 */class zh{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Lw extends zh{data(){return super.data()}}function qh(n,e){return typeof e=="string"?Nw(n,e):e instanceof Fh?e._internalPath:e._delegate._internalPath}/**
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
 */function Fw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new C(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class na{}class jh extends na{}function Uw(n,e,...t){let i=[];e instanceof na&&i.push(e),i=i.concat(t),function(s){const o=s.filter(l=>l instanceof ra).length,a=s.filter(l=>l instanceof ia).length;if(o>1||o>0&&a>0)throw new C(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class ia extends jh{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new ia(e,t,i)}_apply(e){const t=this._parse(e);return Gh(e._query,t),new Nt(e.firestore,e.converter,Ms(e._query,t))}_parse(e){const t=Dw(e.firestore);return function(s,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Vl(h,u);const p=[];for(const m of h)p.push(Ol(l,s,m));d={arrayValue:{values:p}}}else d=Ol(l,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Vl(h,u),d=xw(a,o,h,u==="in"||u==="not-in");return te.create(c,u,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ra extends na{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ra(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Oe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let o=r;const a=s.getFlattenedFilters();for(const l of a)Gh(o,l),o=Ms(o,l)}(e._query,t),new Nt(e.firestore,e.converter,Ms(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sa extends jh{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new sa(e,t,i)}_apply(e){return new Nt(e.firestore,e.converter,Ji(e._query,this._limit,this._limitType))}}function Bw(n){return Aw("limit",n),sa._create("limit",n,"F")}function Ol(n,e,t){if(typeof(t=De(t))=="string"){if(t==="")throw new C(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zu(e)&&t.indexOf("/")!==-1)throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Q.fromString(t));if(!O.isDocumentKey(i))throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return il(n,new O(i))}if(t instanceof nt)return il(n,t._key);throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dr(t)}.`)}function Vl(n,e){if(!Array.isArray(n)||n.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gh(n,e){if(e.isInequality()){const i=Fo(n),r=e.field;if(i!==null&&!i.isEqual(r))throw new C(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${r.toString()}'`);const s=Ju(n);s!==null&&$w(n,r,s)}const t=function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function $w(n,e,t){if(!t.isEqual(e))throw new C(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class zw{convertValue(e,t="none"){switch(Ot(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw L()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ti(e,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertGeoPoint(e){return new Zo(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Vo(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Nn(e));default:return null}}convertTimestamp(e){const t=mt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Q.fromString(e);ne(wh(i));const r=new Ln(i.get(1),i.get(3)),s=new O(i.popFirst(5));return r.isEqual(t)||et(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class vi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qw extends zh{constructor(e,t,i,r,s,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(qh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class ki extends qw{data(e={}){return super.data(e)}}class jw{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new vi(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ki(this._firestore,this._userDataWriter,i.key,i,new vi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new ki(r._firestore,r._userDataWriter,a.doc.key,a.doc,new vi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ki(r._firestore,r._userDataWriter,a.doc.key,a.doc,new vi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Gw(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Gw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Hw extends zw{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,t)}}function Hh(n){n=js(n,Nt);const e=js(n.firestore,Nh),t=Rw(e),i=new Hw(e);return Fw(n._query),Tw(t,n._query).then(r=>new jw(e,i,n,r))}(function(e,t=!0){(function(r){ln=r})(Vt),Pt(new ft("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new Nh(new oy(i.getProvider("auth-internal")),new uy(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new C(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(c.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Be(Ja,"4.1.0",e),Be(Ja,"4.1.0","esm2017")})();/**
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
 */const Wh="firebasestorage.googleapis.com",Ww="storageBucket",Kw=2*60*1e3,Qw=10*60*1e3;/**
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
 */class He extends Ge{constructor(e,t,i=0){super(as(e),`Firebase Storage: ${t} (${as(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return as(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function as(n){return"storage/"+n}function Xw(){const n="An unknown error occurred, please check the error payload for server response.";return new He(je.UNKNOWN,n)}function Yw(){return new He(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jw(){return new He(je.CANCELED,"User canceled the upload/download.")}function Zw(n){return new He(je.INVALID_URL,"Invalid URL '"+n+"'.")}function eT(n){return new He(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ml(n){return new He(je.INVALID_ARGUMENT,n)}function Kh(){return new He(je.APP_DELETED,"The Firebase app was deleted.")}function tT(n){return new He(je.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ke{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=ke.makeFromUrl(e,t)}catch{return new ke(e,"")}if(i.path==="")return i;throw eT(e)}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},y=t===Wh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,v="([^?#]*)",f=new RegExp(`^https?://${y}/${r}/${v}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:c},{regex:f,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<_.length;w++){const A=_[w],R=A.regex.exec(e);if(R){const X=R[A.indices.bucket];let k=R[A.indices.path];k||(k=""),i=new ke(X,k),A.postModify(i);break}}if(i==null)throw Zw(e);return i}}class nT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iT(n,e,t){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,n(p,l())},v)}function d(){s&&clearTimeout(s)}function p(v,...f){if(c){d();return}if(v){d(),u.call(null,v,...f);return}if(l()||o){d(),u.call(null,v,...f);return}i<64&&(i*=2);let _;a===1?(a=2,_=0):_=(i+Math.random())*1e3,h(_)}let m=!1;function y(v){m||(m=!0,d(),!c&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},t),y}function rT(n){n(!1)}/**
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
 */function sT(n){return n!==void 0}function Nl(n,e,t,i){if(i<e)throw Ml(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Ml(`Invalid value for '${n}'. Expected ${t} or less.`)}function oT(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const r=e(i)+"="+e(n[i]);t=t+r+"&"}return t=t.slice(0,-1),t}/**
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
 */var tr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(tr||(tr={}));/**
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
 */function aT(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||r||s}/**
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
 */class lT{constructor(e,t,i,r,s,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new wi(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===tr.NO_ERROR,l=s.getStatus();if(!a||aT(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===tr.ABORT;i(!1,new wi(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new wi(c,s))})},t=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());sT(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Xw();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Kh():Jw();o(l)}else{const l=Yw();o(l)}};this.canceled_?t(!1,new wi(!1,null,!0)):this.backoffId_=iT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wi{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function cT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function uT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function dT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function fT(n,e,t,i,r,s,o=!0){const a=oT(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return hT(c,e),cT(c,t),uT(c,s),dT(c,i),new lT(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
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
 */function pT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function mT(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class nr{constructor(e,t){this._service=e,t instanceof ke?this._location=t:this._location=ke.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new nr(e,t)}get root(){const e=new ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mT(this._location.path)}get storage(){return this._service}get parent(){const e=pT(this._location.path);if(e===null)return null;const t=new ke(this._location.bucket,e);return new nr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw tT(e)}}function Ll(n,e){const t=e?.[Ww];return t==null?null:ke.makeFromBucketSpec(t,n)}function gT(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:nc(r,n.app.options.projectId))}class _T{constructor(e,t,i,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=Wh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kw,this._maxUploadRetryTime=Qw,this._requests=new Set,r!=null?this._bucket=ke.makeFromBucketSpec(r,this._host):this._bucket=Ll(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ke.makeFromBucketSpec(this._url,e):this._bucket=Ll(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Nl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Nl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new nr(this,e)}_makeRequest(e,t,i,r,s=!0){if(this._deleted)return new nT(Kh());{const o=fT(e,this._appId,i,r,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const Fl="@firebase/storage",Ul="0.11.2";/**
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
 */const Qh="storage";function yT(n=Zs(),e){n=De(n);const i=ir(n,Qh).getImmediate({identifier:e}),r=Zl("storage");return r&&vT(i,...r),i}function vT(n,e,t,i={}){gT(n,e,t,i)}function wT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new _T(t,i,r,e,Vt)}function TT(){Pt(new ft(Qh,wT,"PUBLIC").setMultipleInstances(!0)),Be(Fl,Ul,""),Be(Fl,Ul,"esm2017")}TT();const Xh={apiKey:"AIzaSyAOmgmjB_k7AzapNtXEBcxT53BvR_WbCyw",authDomain:"crisp-b06bf.firebaseapp.com",projectId:"crisp-b06bf",storageBucket:"crisp-b06bf.appspot.com",messagingSenderId:"712604544303",appId:"1:712604544303:web:52821ca807fa74e2da85da",measurementId:"G-6MTNM6EBKH"},oa=Js(Xh);Js(Xh,"Secondary");Xg(oa);const Yh=Cw(oa);yT(oa);async function Jh(n){return await Hh(Mh(Yh,n))}function Zh(n,e){return Uw(Mh(Yh,n),Bw(e))}async function ed(n){return await Hh(n)}function xr(n,e){n.forEach(t=>{e(t)})}class ET{allSkeleton;constructor(){this.allSkeleton=Ie(".skeleton"),this.removeSkeleton()}removeSkeleton(){Promise.all(Array.from(document.images).filter(e=>!e.complete).map(e=>new Promise(t=>{e.onload=e.onerror=t}))).then(()=>{this.allSkeleton.forEach(e=>{e.classList.remove("skeleton")})})}}le.use([Ws,Ef,Ks]);const Bl=Se(".summer-sale__swiper-wrapper");class IT{swiper;slidesArr;constructor(){this.swiper=new le(".summer-sale__swiper",{slidesPerView:2,autoplay:{delay:1e4},grabCursor:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prew"}}),this.slidesArr=[],this.loadCards()}async loadCards(){xr(await Jh("main-swiper"),e=>this.slidesArr.push(e.data())),console.log(this.slidesArr),this.renderSldes(),new ET}renderSldes(){this.slidesArr.forEach(e=>{Bl&&Bl.insertAdjacentHTML("beforeend",`
          <div class="swiper-slide summer-sale__slide">
            <picture>
              <source srcset=${e.imgWebP} type="image/webp" />
              <img src=${e.img}/>
            </picture>
          </div>
          `)})}}class AT{static stop(){const e=new Event("loadingIsFinished");document.dispatchEvent(e)}}const ls=Se(".shop-some__items");class ST{shopDb;constructor(){this.shopDb=[],this.loadCards()}async loadCards(){xr(await Jh("clothers"),e=>this.shopDb.push(e.data())),console.log(this.shopDb),this.renderCard(),this.loadMore()}renderCard(){this.shopDb.forEach(e=>{ls&&(e.sale==!1?ls.insertAdjacentHTML("afterbegin",`
                <a class="card shop-some__card" href="#">
                    <div class="card__img">
                      <picture>
                        <source srcset=${e.imgWebP} type="image/webp" />
                        <img src=${e.img}/>
                      </picture>
                    </div>

                    <div class="card__info">
                        <p class="card__category">${e.category}</p>
                        <h3 class="card__title">${e.name}</h3>
                        <p class="card__price">${e.cost}</p>
                    </div>
                </a>
            `):ls.insertAdjacentHTML("afterbegin",`
                    <a class="card sale shop-some__card" href="#">
                        <div class="card__img">
                            <picture>
                              <source srcset=${e.imgWebP} type="image/webp" />
                              <img src=${e.img}/>
                            </picture>
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
                `))})}loadMore(){this.hidden(),this.btnLoad()}hidden(){const e=Ie(".shop-some__card");for(let t=0;t<e.length;t++)t<8||e[t].classList.add("hidden")}btnLoad(){const e=Se(".shop-some__load");e&&e.addEventListener("click",()=>{const t=Ie(".shop-some__card.hidden");for(let r=0;r<t.length&&r<8;r++)t[r].classList.remove("hidden");Ie(".shop-some__card.hidden").length===0&&e.classList.add("hidden")})}}class bT{constructor(){this.initEventListeners()}sendFetchRequest(e){const t={projectId:"crisp-b06bf"},i=JSON.stringify({structuredQuery:{where:{fieldFilter:{field:{fieldPath:"category"},op:"EQUAL",value:{stringValue:e}}},from:[{collectionId:"clothers"}]}}),r=`https://firestore.googleapis.com/v1/projects/${t.projectId}/databases/(default)/documents:runQuery`;fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:i}).then(s=>{if(!s.ok)throw new Error("Ошибка сети");return s.json()}).then(s=>{if(s&&Array.isArray(s)&&s.length>0){const o=s.filter(a=>a.document&&a.document.fields).map(a=>a.document.fields);console.log(o),this.updateContent(o)}else console.error("Ошибка: Данные Firestore пришли в неправильном формате.")}).catch(s=>{console.error("Произошла ошибка:",s)})}updateContent(e){const t=Se(".shop-some__items");if(t){t.innerHTML="",e.forEach(s=>{if(s.sale.booleanValue==!1){const o=`
          <a class="card shop-some__card" href="#">
            <div class="card__img">
              <picture>
                <source srcset=${s.imgWebP.stringValue} type="image/webp" />
                <img src=${s.img.stringValue}/>
              </picture>
            </div>
            <div class="card__info">
              <p class="card__category">${s.category.stringValue}</p>
              <h3 class="card__title">${s.name.stringValue}</h3>
              <p class="card__price">${s.cost.stringValue}</p>
            </div>
          </a>
        `;t.innerHTML+=o}else{const o=`
          <a class="card sale shop-some__card" href="#">
            <div class="card__img">
              <picture>
                <source srcset=${s.imgWebP.stringValue} type="image/webp" />
                <img src=${s.img.stringValue}/>
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
        `;t.innerHTML+=o}});const i=Ie(".shop-some__card");for(let s=0;s<i.length;s++)s<8||i[s].classList.add("hidden");if(e.length>8){const s=document.createElement("button");s.classList.add("btn","shop-some__load"),s.textContent="Load more",t.insertAdjacentElement("beforeend",s)}const r=Se(".shop-some__load");r&&r.addEventListener("click",()=>{const s=Ie(".shop-some__card.hidden");for(let a=0;a<s.length&&a<8;a++)s[a].classList.remove("hidden");Ie(".shop-some__card.hidden").length===0&&r.classList.add("hidden")})}}initEventListeners(){document.addEventListener("change",e=>{const t=e.target;if(t&&t.type==="radio"&&t.name==="shop-filtr"){const i=t.parentNode?.textContent?.trim();i&&this.sendFetchRequest(i.toUpperCase())}})}}le.use([Ws,Ks]);const Ti=Se(".featured-items__swiper-wrapper");class CT{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards()}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new le(".featured-items__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),Ti&&Ti.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e=Zh("clothers",8),t=await ed(e);xr(t,i=>this.slidesArr.push(i.data())),console.log(this.slidesArr),this.renderSlides(),this.loadMore()}renderSlides(){if(!Ti){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{Ti.insertAdjacentHTML("beforeend",`
          <div class="featured-items__swiper-slide swiper-slide">
            <a class="card featured-items__card" href="#">
              <div class="card__img">
                <picture>
                  <source srcset=${e.imgWebP} type="image/webp" />
                  <img src=${e.img} />
                </picture>
              </div>
              <div class="card__info">
                <p class="card__category">${e.category}</p>
                <h3 class="card__title">${e.name}</h3>
                <p class="card__price">${e.cost}</p>
              </div>
            </a>
          </div>
        `)})}loadMore(){this.hidden(),this.btnLoad()}hidden(){const e=Ie(".featured-items__swiper-slide");for(let t=0;t<e.length;t++)if(window.innerWidth<1023)if(window.innerWidth>576){if(t<6)continue;e[t].classList.add("hidden")}else{if(t<4)continue;e[t].classList.add("hidden")}}btnLoad(){const e=Ie(".featured-items__swiper-slide"),t=Se(".featured-items__swiper");if(e.length>6&&t&&window.innerWidth<=1023){const r=document.createElement("button");r.classList.add("btn","featured-items__load"),r.textContent="See more",t.insertAdjacentElement("beforeend",r)}const i=Se(".featured-items__load");i&&i.addEventListener("click",()=>{const r=Ie(".featured-items__swiper-slide.hidden");for(let o=0;o<r.length&&o<6;o++)r[o].classList.remove("hidden");Ie(".featured-items__swiper-slide.hidden").length===0&&i.classList.add("hidden")})}}le.use([Ws,Ks]);const Ei=Se(".most-popular__swiper-wrapper");class RT{swiper;slidesArr;constructor(){this.swiper=null,this.slidesArr=[],this.initSwiper(),this.loadCards()}initSwiper(){const e=()=>{window.innerWidth>1023?this.swiper||(this.swiper=new le(".most-popular__swiper",{slidesPerView:5,spaceBetween:30,grabCursor:!0,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prew"},breakpoints:{1440:{slidesPerView:5,spaceBetween:30},1023:{slidesPerView:4,spaceBetween:30}}})):(this.swiper&&(this.swiper.destroy(!0,!0),this.swiper=null),Ei&&Ei.classList.add("swiper-disabled"))};window.addEventListener("resize",e),e()}async loadCards(){const e=Zh("clothers",8),t=await ed(e);xr(t,i=>this.slidesArr.push(i.data())),console.log(this.slidesArr),this.renderSlides(),this.hidden()}renderSlides(){if(!Ei){console.error("swiperWrapper is null");return}this.slidesArr.forEach(e=>{Ei.insertAdjacentHTML("beforeend",`
          <div class="most-popular__swiper-slide swiper-slide">
            <a class="card most-popular__card" href="#">
              <div class="card__img">
                <picture>
                  <source srcset=${e.imgWebP} type="image/webp" />
                  <img src=${e.img} />
                </picture>
              </div>
              <div class="card__info">
                <p class="card__category">${e.category}</p>
                <h3 class="card__title">${e.name}</h3>
                <p class="card__price">${e.cost}</p>
              </div>
            </a>
          </div>
        `)})}hidden(){const e=Ie(".most-popular__swiper-slide");for(let t=0;t<e.length;t++)if(window.innerWidth<1023)if(window.innerWidth>576){if(t<6)continue;e[t].classList.add("hidden")}else{if(t<4)continue;e[t].classList.add("hidden")}}}document.addEventListener("DOMContentLoaded",async()=>{new td,new nd,new IT,new ST,new bT,new CT,new RT,AT.stop()});
