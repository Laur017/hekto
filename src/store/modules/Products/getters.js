export default {
  getProducts(state) {
    return state.products;
  },
  getProductsSortedHigh(state) {
    return state.products.toSorted((a, b) => b.price - a.price);
  },

  getNewArrival(state) {
    const prod = state.products
      .toSorted((a, b) => a.createdAt - b.createdAt)
      .slice(0, 6);
    return prod;
  },

  getBestSeller(state) {
    const prod = state.products
      .toSorted((a, b) => a.soldTimes - b.soldTimes)
      .slice(0, 6);

    return prod;
  },

  getFeatured(state) {
    const prod = state.products.filter((el) => el.isFeatured).slice(0, 6);

    return prod;
  },
  getSpecialOffer(state) {
    const prod = state.products
      .toSorted((a, b) => a.discountPercentage - b.discountPercentage)
      .slice(0, 6);

    return prod;
  },

  getProductById: (state) => (id) => {
    return state.products.find((el) => el.id.split("-")[0] === id);
  },

  getRelatedProducts: (state) => (relation) => {
    return state.products.filter((el) => el.category === relation).slice(0, 4);
  },
};
