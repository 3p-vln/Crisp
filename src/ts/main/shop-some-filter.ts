import { ShopFilters } from '../components/interface';
import { getElement, getElements, renderElement } from '../composables/useCallDom';
import { fetchComposable } from '../composables/useFetch';

const clothersWrapper = getElement('.shop-some__items');

export class ShopFilter {
  shopDb: { id: string; data: ShopFilters }[];

  constructor() {
    this.shopDb = [];

    this.initEventListeners();
  }

  private async sendFetchRequest(category: string): Promise<void> {
    const firebaseConfig = {
      projectId: 'crisp-b06bf',
    };

    const requestBody = {
      structuredQuery: {
        where: {
          fieldFilter: {
            field: {
              fieldPath: 'category',
            },
            op: 'EQUAL',
            value: {
              stringValue: category,
            },
          },
        },
        from: [
          {
            collectionId: 'clothers',
          },
        ],
      },
    };

    const url = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents:runQuery`;

    const response = await fetchComposable<{ document: { name: string; fields: ShopFilters } }[], typeof requestBody>(url, {
      method: 'POST',
      body: requestBody,
    });

    if (response.error) {
      console.error('Произошла ошибка:', response.error);
    } else if (response.data && Array.isArray(response.data) && response.data.length > 0) {
      const items = response.data
        .filter((item) => item.document && item.document.fields)
        .map((item) => {
          const id = item.document.name.split('/').pop(); // Extracting id from the document name
          return {
            id, // This could be undefined, handle this case
            data: item.document.fields,
          };
        })
        .filter((item): item is { id: string; data: ShopFilters } => !!item.id); // Ensure id is not undefined

      console.log(items);
      this.updateContent(items);
    } else {
      console.error('Ошибка: Данные Firestore пришли в неправильном формате.');
    }
  }

  private updateContent(items: { id: string; data: ShopFilters }[]): void {
    if (clothersWrapper) {
      clothersWrapper.innerHTML = '';
      items.forEach((item) => {
        const card = renderElement('a', ['card', 'shop-some__card', item.id]) as HTMLAnchorElement;
        card.href = `one-product.html?id=${item.id}`;
        if (item.data.sale.booleanValue === true) {
          card.classList.add('sale');
        }

        const img = renderElement('div', 'card__img');
        img.innerHTML += `
            <picture>
              <source srcset=${item.data.imgWebP.stringValue} type="image/webp" />
              <img src=${item.data.img.stringValue} />
            </picture>
        `;
        if (item.data.sale.booleanValue === true) {
          img.innerHTML += `
            <div class="card__sale">
              <p>-30%</p>
            </div>
          `;
        }

        const info = renderElement('div', 'card__info');

        const category = renderElement('p', 'card__category');
        category.innerText = item.data.category.stringValue;

        const title = renderElement('h3', 'card__title');
        title.innerText = item.data.name.stringValue;

        const price = renderElement('p', 'card__price');
        if (item.data.sale.booleanValue === false) {
          price.innerText = item.data.cost.stringValue;
        } else {
          price.innerHTML = `${item.data.costNew.stringValue} <span>${item.data.cost.stringValue}</span>`;
        }

        info.appendChild(category);
        info.appendChild(title);
        info.appendChild(price);

        card.appendChild(img);
        card.appendChild(info);

        clothersWrapper.appendChild(card);
      });

      const cards = getElements('.shop-some__card');

      for (let i = 0; i < cards.length; i++) {
        if (i < 8) {
          continue;
        } else {
          cards[i].classList.add('hidden');
        }
      }

      if (items.length > 8) {
        const loadMoreButton = document.createElement('button');
        loadMoreButton.classList.add('btn', 'shop-some__load');
        loadMoreButton.textContent = 'Load more';
        clothersWrapper.insertAdjacentElement('beforeend', loadMoreButton);
      }

      const btn = getElement('.shop-some__load');

      if (btn) {
        btn.addEventListener('click', () => {
          const hiddenCards = getElements('.shop-some__card.hidden');
          for (let i = 0; i < hiddenCards.length && i < 8; i++) {
            hiddenCards[i].classList.remove('hidden');
          }
          const remainingHiddenCards = getElements('.shop-some__card.hidden');
          if (remainingHiddenCards.length === 0) {
            btn.classList.add('hidden');
          }
        });
      }
    }
  }

  private initEventListeners(): void {
    document.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;

      if (target && target.type === 'radio' && target.name === 'shop-filtr') {
        const category = target.parentNode?.textContent?.trim();

        if (category) {
          this.sendFetchRequest(category.toUpperCase());
        }
      }
    });
  }
}
