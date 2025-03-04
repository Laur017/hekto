export default {
  addItemToCart(context, payload) {
    console.log(payload);
    context.commit("addItemToCart", payload);
  },

  increaseCounter(context, payload) {
    context.commit("increaseCounter", payload);
  },
  decreaseCounter(context, payload) {
    context.commit("decreaseCounter", payload);
  },
  clearCart(context) {
    context.commit("clearCart");
  },
};
