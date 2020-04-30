import Vue from "vue";
import Vuex from "vuex";
import search from "./modules/search";
import cityWeather from "./modules/cityWeather";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
    cityWeather,
  },
});

// 7a7f77f0a434db89fee8c9edc1a12fe9
