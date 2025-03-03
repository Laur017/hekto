export default {
  fetchAllFilters(state, filters) {
    state.filters = filters;
  },
  addActiveFilter(state, payload) {
    state.activeFilters.push(payload);
    console.log(state.activeFilters);
  },
  removeActiveFilter(state, payload) {
    state.activeFilters = state.activeFilters.filter((el) => el !== payload);
    console.log(state.activeFilters);
  },
};
