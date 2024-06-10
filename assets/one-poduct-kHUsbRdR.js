import{a as i,g as r,S as l,A as b,f as m,B as _,b as h,L as g,c as p}from"./skeleton-C715KiXB.js";import{P as v}from"./pagination-DfpsdzsY.js";class f{tabsBtn;tabsItems;constructor(){this.tabsBtn=i(".tabs__nav-btn"),this.tabsItems=i(".tabs__item"),this.init()}init(){this.tabsBtn.forEach(t=>{t.addEventListener("click",()=>this.onTabClick(t))})}onTabClick(t){const s=t.getAttribute("data-tab"),e=r(s);t.classList.contains("active")||(this.tabsBtn.forEach(n=>n.classList.remove("tabs__nav-btn_active")),this.tabsItems.forEach(n=>n.classList.remove("tabs__item_active")),t.classList.add("tabs__nav-btn_active"),e&&e.classList.add("tabs__item_active"))}}l.use([v,b]);const a=r(".main-img__swiper-wrapper"),o=r(".main-info__all-img");class L{swiper;slidesArr;constructor(){this.swiper=new l(".main-img__swiper",{slidesPerView:1,autoplay:{delay:1e4},pagination:{el:".swiper-pagination"},grabCursor:!0,on:{slideChange:()=>this.onSlideChange()}}),this.slidesArr=null,this.init()}init(){this.conectDb()}initTabsSync(){i(".tabs__nav-btn").forEach((s,e)=>{s.addEventListener("click",()=>{console.log(`Tab ${e+1} clicked`),this.swiper.slideTo(e)})})}onSlideChange(){i(".tabs__nav-btn").forEach((s,e)=>{e===this.swiper.realIndex?s.classList.add("tabs__nav-btn_active"):s.classList.remove("tabs__nav-btn_active")})}async conectDb(){const t=this.getDocumentIdFromURL();if(!t){console.error("Document ID not found in URL");return}const e=`https://firestore.googleapis.com/v1/projects/${{projectId:"crisp-b06bf"}.projectId}/databases/(default)/documents/clothers/${t}`,n=await m(e,{method:"GET"});if(n.error){console.error("Error fetching document:",n.error);return}n.data&&(this.slidesArr=n.data.fields,console.log(this.slidesArr),this.renderSlides(),this.swiper.update(),new f,this.initTabsSync())}getDocumentIdFromURL(){return new URLSearchParams(window.location.search).get("id")}renderSlides(){if(a&&o&&this.slidesArr){const{img:t,subImg1:s,subImg2:e,subImgWebP1:n,subImgWebP2:d}=this.slidesArr;t&&s&&e&&n&&d?(o.innerHTML=`
          <button class="tabs__nav-btn tabs__nav-btn_active" type="button" data-tab="#slide-1">
              <img src="${t.stringValue}" />
          </button>
          <button class="tabs__nav-btn" type="button" data-tab="#slide-2">
              <img src="${s.stringValue}" />
          </button>
          <button class="tabs__nav-btn" type="button" data-tab="#slide-3">
              <img src="${e.stringValue}" />
          </button>
        `,a.innerHTML=`
          <div class="main-img__slide swiper-slide tabs__item tabs__item_active" id="slide-1">
            <img src="${t.stringValue}" />
          </div>
          <div class="main-img__slide swiper-slide tabs__item" id="slide-2">
            <img src="${s.stringValue}" />
          </div>
          <div class="main-img__slide swiper-slide tabs__item" id="slide-3">
            <img src="${e.stringValue}" />
          </div>
        `):t?.stringValue!=null&&(o.innerHTML=`
          <button class="tabs__nav-btn tabs__nav-btn_active" type="button" data-tab="#slide-1">
            <img src="${t.stringValue}" />
          </button>
        `,a.innerHTML=`
          <div class="main-img__slide swiper-slide tabs__item tabs__item_active" id="slide-1">
            <img src="${t.stringValue}" />
          </div>
        `)}}}class u{calculation;countElement;calculationElement;buttonCountPlus;buttonCountMinus;constructor(){this.calculationElement=document.getElementById("calculation"),this.countElement=document.getElementById("buttonCountNumber"),this.buttonCountPlus=document.getElementById("buttonCountPlus"),this.buttonCountMinus=document.getElementById("buttonCountMinus"),this.calculation=+this.calculationElement.innerHTML,this.buttonCountPlus.onclick=this.incrementCount.bind(this),this.buttonCountMinus.onclick=this.decrementCount.bind(this)}incrementCount(){let t=+this.countElement.innerHTML;t++,this.countElement.innerHTML=t.toString(),this.updateCalculation(t)}decrementCount(){let t=+this.countElement.innerHTML;t>=2&&(t--,this.countElement.innerHTML=t.toString(),this.updateCalculation(t))}updateCalculation(t){const s=this.calculation*t;this.calculationElement.innerHTML=this.formatPrice(s)}formatPrice(t){return t.toFixed(2).replace(".",",")}}document.addEventListener("DOMContentLoaded",()=>{new u});document.addEventListener("DOMContentLoaded",async()=>{new _,new h,new L,new u,g.stop()});new p;
