<template>
  <div :class="setBgPicture()" id="app">
    <div class="darker">
      <Navbar></Navbar>
      <router-view />
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

import Navbar from "@/components/Navbar/Navbar";

export default {
  data() {
    return {};
  },
  methods: {
    setBgPicture() {
      if (this.weatherData.weatherData.main) {
        return this.weatherData.weatherData.weather[0].main == "Rain"
          ? "rainy"
          : this.weatherData.weatherData.main.temp > 15
          ? "warm"
          : "cold";
      } else {
        return ["warm", "cold", "rainy", "nice"][
          Math.floor(Math.random() * Math.floor(4))
        ];
      }
    }
  },
  computed: { ...mapGetters(["weatherData"]) },
  components: { Navbar }
};
</script>

<style lang="scss">
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;

  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.4s;

  .darker {
    height: 100vh;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.75)
    );
  }
}

.warm {
  background-image: url("./assets/hot_weather.jpg");
}

.cold {
  background-image: url("./assets/cold_weather.jpg");
}

.nice {
  background-image: url("./assets/nice_weather.jpg");
}

.rainy {
  background-image: url("./assets/rainy_weather.jpg");
}
</style>
