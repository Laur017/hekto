export default {
  fetchAllFilters(state) {
    fetch("http://localhost:3000/filters")
      .then((res) => res.json())
      .then((data) => (state.filters = data));
  },
};
