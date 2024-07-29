import{g as e,a as o}from"./useFetch-CPNCRhkP.js";import{J as l}from"./just-validate.es-C73wyOde.js";import{A as c}from"./add-to-bag-D7o2r1jJ.js";const m=function(){class i{dropdownBox;arrowSvg;menu;options;selectedText;constructor(){this.dropdownBox=e(".dropdown__box"),this.arrowSvg=e(".dropdown__svg-arrow"),this.menu=e(".dropdown__menu"),this.options=o(".dropdown__menu-item"),this.selectedText=e(".dropdown__text"),this.dropdownBox?.addEventListener("click",()=>{this.arrowSvg?.classList.toggle("dropdown__svg-arrow_rotate"),this.menu?.classList.toggle("dropdown__menu_open")}),this.options.forEach(s=>{s.addEventListener("click",()=>{this.selectedText instanceof HTMLElement&&s instanceof HTMLElement&&(this.selectedText.innerText=s.innerText,this.menu?.classList.remove("dropdown__menu_open")),this.arrowSvg?.classList.remove("dropdown__svg-arrow_rotate"),this.options.forEach(n=>{n.classList.remove("dropdown__menu-item_active")}),s.classList.add("dropdown__menu-item_active")})})}}document.querySelectorAll(".dropdown").forEach(()=>new i)};function h(){class i{form;figures;submitAdressButton;backButton;paymentForms;response;firstNameInput;lastNameInput;firstUserNameOutput;lastUserNameOutput;userCompanyInput;userCompanyOutput;userArdressInput;userAdressOutput;userRegionInput;userRegionOutput;userCountryInput;userCountryOutput;constructor(){this.form=e("#adress-form"),this.figures=o(".select-box__figures"),this.submitAdressButton=e(".submit-adress"),this.backButton=o(".back"),this.paymentForms=e(".payment__forms"),this.response=e(".response"),this.firstNameInput=e(".first-name"),this.lastNameInput=e(".last-name"),this.firstUserNameOutput=e(".user-name"),this.lastUserNameOutput=e(".user-last-name"),this.userCompanyInput=e(".company"),this.userCompanyOutput=e(".user-company"),this.userArdressInput=e(".adress1"),this.userAdressOutput=e(".user-adress"),this.userRegionInput=e(".adress2"),this.userRegionOutput=e(".user-region"),this.userCountryInput=e(".country"),this.userCountryOutput=e(".user-country"),this.form&&this.init(),this.backButton.forEach(r=>{r.addEventListener("click",s=>{s.preventDefault(),console.log("clicked"),this.paymentForms?.classList.remove("payment__forms_unvis"),this.response?.classList.remove("response_active"),this.figures?.forEach(n=>{this.figures?.forEach(a=>{a.classList.remove("active-figure")}),n.classList.add("active-figure")})})})}init(){const r=new l(this.form,{errorLabelStyle:{color:"#1D1F21"},tooltip:{position:"bottom"}});r.addField("#first-name",[{rule:"required"},{rule:"minLength",value:3},{rule:"maxLength",value:15}]).addField("#last-name",[{rule:"required"},{rule:"minLength",value:3},{rule:"maxLength",value:15}]).addField("#adress1",[{rule:"required"},{rule:"minLength",value:3},{rule:"maxLength",value:15}]),r.onSuccess(()=>{console.log("validate"),this.figures?.forEach(s=>{this.figures?.forEach(n=>{n.classList.remove("active-figure")}),s.classList.add("active-figure")}),this.paymentForms?.classList.add("payment__forms_unvis"),this.response?.classList.add("response_active")}),this.firstNameInput?.addEventListener("input",()=>{this.firstUserNameOutput&&(this.firstUserNameOutput.textContent=this.firstNameInput?.value??"")}),this.lastNameInput?.addEventListener("input",()=>{this.lastUserNameOutput&&(this.lastUserNameOutput.textContent=this.lastNameInput?.value??"")}),this.userCompanyInput?.addEventListener("input",()=>{this.userCompanyOutput&&(this.userCompanyOutput.textContent=this.userCompanyInput?.value??"")}),this.userArdressInput?.addEventListener("input",()=>{this.userAdressOutput&&(this.userAdressOutput.textContent=this.userArdressInput?.value??"")}),this.userRegionInput?.addEventListener("input",()=>{this.userRegionOutput&&(this.userRegionOutput.textContent=this.userRegionInput?.value+",")}),this.userCountryInput?.addEventListener("input",()=>{this.userCountryOutput&&(this.userCountryOutput.textContent=this.userCountryInput?.value??"")})}}new i}class u{cart;countItem;constructor(){this.cart=this.loadCart(),this.countItem=this.cart.length}addToCart(t){const r=this.cart.find(s=>s.id===t.id&&s.size===t.size);r?(r.quantity+=t.quantity,r.price+=t.price*t.quantity):this.cart.push(t),this.countItem=this.cart.length,this.saveCart(),this.updateCartInfo()}removeFromCart(t,r){this.cart=this.cart.filter(s=>s.id!==t||s.size!==r),this.countItem=this.cart.length,this.saveCart(),this.updateCartInfo()}getCartItems(){return this.cart}getTotal(){return this.cart.reduce((t,r)=>t+r.price,0)}saveCart(){localStorage.setItem("shoppingCart",JSON.stringify(this.cart))}loadCart(){const t=localStorage.getItem("shoppingCart");return t?JSON.parse(t):[]}updateCartInfo(){const t=new d;t.updateItemCount(this.countItem),t.updateTotalAmount(this.getTotal())}}class d extends c{countAllProducts;totalAmount;discountButton;constructor(){super(),this.countAllProducts=e(".order-summary-count"),this.totalAmount=e(".order-summary-total"),this.discountButton=e(".discount__button"),this.renderCartItemsOnPaymentPage(),this.discountButton?.addEventListener("click",()=>{this.applyDiscount()})}updateItemCount(t){this.countAllProducts&&(this.countAllProducts.textContent=`${t} item in cart`)}updateTotalAmount(t){this.totalAmount&&(this.totalAmount.textContent=`Order Total ${t.toFixed(2)} EUR`)}applyDiscount(){const s=new u().getTotal()*.9;this.updateTotalAmount(s)}renderCartItemsOnPaymentPage(){const t=document.getElementById("cart-items-container");if(t){const r=new u,s=r.getCartItems();let n="";console.log("Cart items:",s),s.length===0?n="<p>Your cart is empty.</p>":s.forEach(a=>{console.log("Rendering item:",a);const p=a.data.name.stringValue;n+=`
            <div class="cart-item">
              <picture>
                <source srcset=${a.data.imgWebP.stringValue} type="image/webp" />
                <img src=${a.data.img.stringValue} class="cart-item-img"/>
              </picture>
              <div class="cart-item-details">
                <p class="cart-item-name">${p}</p>
                <p class="cart-item-size">Size: ${a.size||"N/A"}</p>
                <p class="cart-item-qty">QTY: ${a.quantity}</p>
                <p class="cart-item-price">${a.price.toFixed(2)} EUR</p>
              </div>
            </div>
          `}),t.innerHTML=n,this.updateItemCount(s.length),this.updateTotalAmount(r.getTotal())}}}document.addEventListener("DOMContentLoaded",async()=>{m(),h(),new c,new d});
