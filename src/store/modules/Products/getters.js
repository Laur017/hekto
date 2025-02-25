export default {
  getProducts(state) {
    return state.products;
  },

  getNewArrival(state) {
    const prod = state.products
      .sort((a, b) => a.createdAt - b.createdAt)
      .slice(0, 6);
    return prod;
  },

  getBestSeller(state) {
    const prod = state.products
      .sort((a, b) => a.soldTimes - b.soldTimes)
      .slice(0, 6);

    return prod;
  },

  getFeatured(state) {
    const prod = state.products.filter((el) => el.isFeatured).slice(0, 6);

    return prod;
  },
  getSpecialOffer(state) {
    const prod = state.products
      .sort((a, b) => a.discountPercentage - b.discountPercentage)
      .slice(0, 6);

    return prod;
  },
};
