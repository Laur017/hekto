export default {
  fetchAllProducts(state) {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => (state.products = data));
  },
};
