import { ShopSome } from '../main/shop-some';
import { getElement, getElements } from '../composables/useCallDom';
import noUiSlider from 'nouislider';

const clothersWrapper = getElement('.shop-some__items');
const shopBlock = getElement('.catalog__shop');
const nothing = getElement('.nothing');

export class FilterAccordeon extends ShopSome {
  accordeonButtons: NodeListOf<HTMLElement>;
  lengthLabels: NodeListOf<Element>;
  labels: NodeListOf<Element>;
  brand: string | null;
  length: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  rangeSlider: any;
  inputs: [HTMLInputElement | null, HTMLInputElement | null];
  inputFirst: HTMLInputElement | null;
  inputSecond: HTMLInputElement | null;
  filteredCards: any[];

  constructor() {
    super();
    this.accordeonButtons = getElements('.accordeon__button') as NodeListOf<HTMLElement>;
    this.labels = getElements('.brand-item');
    this.lengthLabels = getElements('.length-item');
    this.minPrice = null;
    this.maxPrice = null;
    this.brand = null;
    this.length = null;
    this.rangeSlider = document.getElementById('range-slider');

    this.inputFirst = getElement('.range__input_first') as HTMLInputElement;
    this.inputSecond = getElement('.range__input_second') as HTMLInputElement;
    this.inputs = [this.inputFirst, this.inputSecond];
    this.filteredCards = [...this.shopDb];

    this.labels.forEach((label) => {
      label.addEventListener('click', () => {
        this.brand = label.textContent;
        this.applyFilters();
      });
    });

    this.accordeonButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const button = btn;
        const content = button.nextElementSibling as HTMLElement;
        const span = button.children[1].children[1] as HTMLElement;

        this.toggleFunc(content, span);
      });
    });

    this.lengthLabels.forEach((label) => {
      label.addEventListener('click', () => {
        this.length = label.textContent;
        this.applyFilters();
      });
    });

    if (this.rangeSlider) {
      this.initializeSlider();
      this.changeInputs();
    }
  }

  toggleFunc(content: HTMLElement, span: HTMLElement) {
    if (!content.classList.contains('accordeon__list_active')) {
      content.classList.add('accordeon__list_active');
      content.style.maxHeight = content.scrollHeight + 'px';
      span.style.opacity = '0';
    } else {
      content.classList.remove('accordeon__list_active');
      content.style.maxHeight = '0';
      span.style.opacity = '1';
    }
  }

  applyFilters() {
    this.filteredCards = [...this.shopDb];

    if (this.brand) {
      this.filteredCards = this.filteredCards.filter((card) => {
        return card.data.brand.stringValue.toLocaleLowerCase() === this.brand!.trim();
      });
    }

    if (this.length) {
      this.filteredCards = this.filteredCards.filter((card) => {
        return card.data.length.stringValue === this.length!.trim();
      });
    }

    if (this.minPrice !== null && this.maxPrice !== null) {
      this.filteredCards = this.filteredCards.filter((card) => {
        const price = parseFloat(card.data.cost.stringValue);
        return price >= this.minPrice! && price <= this.maxPrice!;
      });
    }

    if (this.filteredCards.length === 0) {
      shopBlock?.classList.add('catalog__shop_no-cards');
      nothing?.classList.add('nothing_active');
    } else {
      shopBlock?.classList.remove('catalog__shop_no-cards');
      nothing?.classList.remove('nothing_active');
    }

    this.renderCards();
  }

  renderCards() {
    if (clothersWrapper) {
      clothersWrapper.innerHTML = '';

      this.filteredCards.forEach((item) => {
        if (clothersWrapper) {
          if (item.data.sale.booleanValue === false) {
            clothersWrapper.insertAdjacentHTML(
              'afterbegin',
              `
              <a class="card shop-some__card ${item.id}" href="one-product.html?id=${item.id}">
                <div class="card__img">
                  <picture>
                    <source srcset=${item.data.imgWebP.stringValue} type="image/webp" />
                    <img src=${item.data.img.stringValue} />
                  </picture>
                </div>
                <div class="card__info">
                  <p class="card__category">${item.data.category.stringValue}</p>
                  <h3 class="card__title">${item.data.name.stringValue}</h3>
                  <p class="card__price">${item.data.cost.stringValue}</p>
                </div>
              </a>
              `
            );
          } else {
            clothersWrapper.insertAdjacentHTML(
              'afterbegin',
              `
              <a class="card sale shop-some__card ${item.id}" href="one-product.html?id=${item.id}">
                <div class="card__img">
                  <picture>
                    <source srcset=${item.data.imgWebP.stringValue} type="image/webp" />
                    <img src=${item.data.img.stringValue} />
                  </picture>
                  <div class="card__sale">
                    <p>-30%</p>
                  </div>
                </div>
                <div class="card__info">
                  <p class="card__category">${item.data.category.stringValue}</p>
                  <h3 class="card__title">${item.data.name.stringValue}</h3>
                  <p class="card__price">${item.data.costNew.stringValue} <span>${item.data.cost.stringValue}</span></p>
                </div>
              </a>
              `
            );
          }
        }
      });
    }
  }

  initializeSlider() {
    noUiSlider.create(this.rangeSlider, {
      start: [50, 1000],
      step: 1,
      connect: true,
      range: {
        min: 50,
        max: 1000,
      },
    });

    this.rangeSlider.noUiSlider.on('update', (values: any, handle: any) => {
      const inputElement = this.inputs[handle];
      if (inputElement) {
        inputElement.value = String(Math.round(values[handle]));
        if (handle === 0) {
          this.minPrice = Math.round(values[handle]);
        } else {
          this.maxPrice = Math.round(values[handle]);
        }
        this.applyFilters();
      }
    });
  }

  setRangeSlider(inputIndex: number, value: number) {
    const array: (number | null)[] = [null, null];
    array[inputIndex] = value;
    this.rangeSlider.noUiSlider.set(array);
  }

  changeInputs() {
    this.inputs.forEach((input, index) => {
      input?.addEventListener('change', (event) => {
        const target = event.currentTarget as HTMLInputElement; // Type casting to HTMLInputElement
        if (target) {
          this.setRangeSlider(index, parseFloat(target.value));
          this.applyFilters();
        }
      });
    });
  }
}
