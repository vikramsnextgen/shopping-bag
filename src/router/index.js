import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Basket from '../views/ShoppingBasket.vue';
import ContactPage from '../views/ContactPage.vue';
import ProductPage from '../views/ProductPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  {
    path: '/product',
    name: 'product',
    component: ProductPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
