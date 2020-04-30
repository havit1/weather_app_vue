import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "7a7f77f0a434db89fee8c9edc1a12fe9";
export default {
  state: {
    weatherData: {},
    loading: false,
    errorMessage: "",
  },
  mutations: {
    fetchStart(state) {
      state.loading = true;
    },
    fetchSuccessFinish(state, weatherData) {
      state.loading = false;
    },
    fetchFinishError(state, errorMsg) {
      (state.loading = false), (state.errorMessage = errorMsg);
    },
  },
  actions: {
    async fetchWeather({ commit }, cityData) {
      commit("fetchStart");
      try {
        console.log(cityData);
        const { data } = await axios.get(
          `${API_URL}${cityData.city},${cityData.country}&appid=${API_KEY}`
        );
        commit("fetchSuccessFinish", data);
      } catch (error) {
        console.error("Error while getting weather data", error.message);
        commit("fetchFinishError", error.message);
      }
    },
  },
  getters: {
    weatherData(state) {
      return {
        ...state.weatherData,
        loading: state.loading,
        errorMessage: state.errorMessage,
      };
    },
  },
};
