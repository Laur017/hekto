export default {
  getFilters(state) {
    return state.filters;
  },
  getCategories(state) {
    console.log(state.filters.category.values.slice(0, 12));
    return state.filters.category["values"].slice(0, 12);
  },
};
