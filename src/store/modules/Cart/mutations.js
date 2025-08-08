export default {
  addItemToCart(state, payload) {
    state.cart.push(payload);
  },
  increaseCounter(state, payload) {
    console.log("--- ", payload);
    const idx = state.cart.findIndex((el) => el.code === payload);
    console.log(idx);
    state.cart[idx].count++;
  },
  decreaseCounter(state, payload) {
    const idx = state.cart.findIndex((el) => el.code === payload);
    if (state.cart[idx].count === 1) {
      state.cart = state.cart.filter((el) => el.code !== payload);
    } else {
      state.cart[idx].count--;
    }
  },
  clearCart(state) {
    state.cart = [];
  },
};
