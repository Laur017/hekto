export default {
  async setFilters({ commit }) {
    try {
      const response = await fetch("http://localhost:3000/filters");
      const data = await response.json();
      commit("fetchAllFilters", data);
    } catch (error) {
      console.error("Failed to fetch filters:", error);
    }
  },

  addActiveFilter(context, payload) {
    context.commit("addActiveFilter", payload);
  },
  removeActiveFilter(context, payload) {
    context.commit("removeActiveFilter", payload);
  },
};
