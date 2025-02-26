import filtersMutations from "./mutations";
import filtersActions from "./actions";
import filtersGetters from "./getters";

export default {
  state() {
    return {
      filters: [],
    };
  },
  mutations: filtersMutations,
  actions: filtersActions,
  getters: filtersGetters,
};
