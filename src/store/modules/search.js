export default {
  state: {
    searchData: {},
  },
  mutations: {
    updateSearchString(state, newSearchData) {
      state.searchData = newSearchData;
    },
  },
  actions: {
    setSearch({ commit }, newString) {
      const searchData =
        newString.split(",").length === 2
          ? {
              city: newString.split(",")[0].trim(),
              country: newString.split(",")[1].trim(),
            }
          : newString;
      commit("updateSearchString", searchData);
    },
  },
  getters: {
    searchData(state) {
      return state.searchData;
    },
  },
};
