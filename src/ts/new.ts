import { Burger } from './components/burger';
import { Accordion } from './components/accordeon';
import { Loader } from './modules/stop-preload';
import { NewBaner } from './new/new-baner';
import { NewInfo } from './new/new-info';
import { LikeSwiper } from './components/you-may-also-like';
import { Skeleton } from './components/skeleton';
import { AddToBag } from './one-product/add-to-bag';
import { Search } from './components/search';
import { PopupCloser } from './components/pop-up-closer';

document.addEventListener('DOMContentLoaded', async () => {
  new Burger();
  new Accordion();
  new AddToBag();
  new LikeSwiper();
  new NewBaner();
  new NewInfo();
  Loader.stop('adds');
  new Search();
  new PopupCloser('.buy__bag', '.bag__list');
});

new Skeleton();
