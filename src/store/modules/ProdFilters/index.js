import productsFilterMutations from "./mutations";
import productsFilterActions from "./actions";
import productsFilterGetters from "./getters";

export default {
  state() {
    return {
      viewFlex: false,
      itemsPerPage: 10,
      sortHighToLow: true,
    };
  },
  mutations: productsFilterMutations,
  actions: productsFilterActions,
  getters: productsFilterGetters,
};
