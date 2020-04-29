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
      console.log(newString.split(","));
      //   const searchData = {
      //     city: newString.split(",")[0].trim(),
      //     country: newString.split(",")[1].trim(),
      //   };
      //   commit("updateSearchString", searchData);
    },
  },
  getters: {
    searchData(state) {
      return state.searchData;
    },
  },
};
