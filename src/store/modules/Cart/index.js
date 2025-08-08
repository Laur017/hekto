import cartMutations from "./mutations";
import cartActions from "./actions";
import cartGetters from "./getters";

export default {
  state() {
    return {
      cart: [],
      // {
      //  code:
      //  name:
      //  image:
      //  price:
      //  count:
      // }
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
