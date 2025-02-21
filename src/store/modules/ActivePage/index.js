import activePageMutations from "./mutations";
import activePageActions from "./actions";
import activePageGetters from "./getters";

export default {
  state() {
    return {
      activePage: "home",
    };
  },
  mutations: activePageMutations,
  actions: activePageActions,
  getters: activePageGetters,
};
