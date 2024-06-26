import { Burger } from './components/burger';
import { Accordion } from './components/accordion';
import { Skeleton } from './components/skeleton';
import { SignInFormValidator } from './sign-in/sign-in-validate';
import { AddToBag } from './one-product/add-to-bag';

document.addEventListener('DOMContentLoaded', async () => {
  new Burger();
  new AddToBag();
  new Accordion();
  new SignInFormValidator();
});

new Skeleton();
