import productsMutations from "./mutations";
import productsActions from "./actions";
import productsGetters from "./getters";

export default {
  state() {
    return {
      products: [],
    };
  },
  mutations: productsMutations,
  actions: productsActions,
  getters: productsGetters,
};
