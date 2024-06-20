import { getElements, getElement } from '../composables/callDom';
import { ShopSome } from '../main/shop-some';

export class FilterAccordeon extends ShopSome{
  accordeonButtons: NodeListOf<HTMLElement>;

  constructor() {
    super();
    this.accordeonButtons = getElements('.accordeon__button') as NodeListOf<HTMLElement>;

    this.accordeonButtons.forEach((button) => {
      button.addEventListener('click', this.toggleClass.bind(this));
    });
  }

  toggleClass(event: Event) {
    const button = event.target as HTMLElement;
    const content = button.nextElementSibling as HTMLElement;
    const span = button.children[1].children[1] as HTMLElement;
    console.log(span);
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

}

export class BrandFilter extends FilterAccordeon {
  constructor() {
    super();
  }
}
