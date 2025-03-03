export default {
  setViewFlex(state, payload) {
    state.viewFlex = payload;
  },
  setViewPerPage(state, payload) {
    state.itemsPerPage = payload;
  },
  setSortBy(state, payload) {
    state.sortHighToLow = payload;
  },
};
