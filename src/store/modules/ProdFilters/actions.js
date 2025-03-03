export default {
  setViewFlex(context, payload) {
    context.commit("setViewFlex", payload);
  },
  setViewPerPage(context, payload) {
    context.commit("setViewPerPage", payload);
  },
  setSortBy(context, payload) {
    context.commit("setSortBy", payload);
  },
};
