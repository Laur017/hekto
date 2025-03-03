export default {
  getFilters(state) {
    return state.filters;
  },
  getCategories(state) {
    const filt = state.filters.category["values"].slice(0, 12);
    return filt;
  },
  getBrands(state) {
    const filt = state.filters.brand.values.slice(0, 6);
    console.log(filt);
    return filt;
  },

  getDiscounts(state) {
    const filt = state.filters.discountPercentage.values.slice(1);
    return filt;
  },
  getRatings(state) {
    const filt = state.filters.rating.values;
    return filt;
  },
  getPrices(state) {
    const filt = state.filters.price.values;
    return filt;
  },

  getActiveFilters(state) {
    console.log(state.activeFilters);
    return state.activeFilters;
  },
};
