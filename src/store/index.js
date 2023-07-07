import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productsInBag: [],
    total: 0,
  },
  mutations: {
    loadProducts(state, products) {
      console.log(products);
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
    },
    getTotal(state) {
      state.total = state.productsInBag
        .reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
        .toFixed(2);
    },
    removeFromBag(state, product) {
      //state.productsInBag.push(product);
      const objWithIdIndex = state.productsInBag.findIndex(
        (obj) => obj.id === product.id
      );

      if (objWithIdIndex > -1) {
        state.productsInBag.splice(objWithIdIndex, 1);
      }
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products ').then((response) => {
        commit('loadProducts', response.data);
      });
    },
    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    getTotal({ commit }) {
      commit('getTotal');
    },
    removeFromBag({ commit }, product) {
      if (confirm('do you want really remove?')) {
        commit('removeFromBag', product);
      }
    },
  },
  modules: {},
});
