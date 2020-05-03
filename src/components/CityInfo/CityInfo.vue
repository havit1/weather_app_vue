<template>
  <div class="city-info">
    <h1
      class="city-info__name"
    >{{weatherData.weatherData.name}}, {{weatherData.weatherData.sys.country}}</h1>
    <h2 class="city-info__date">{{this.dateBuilder()}}</h2>
    <h1 class="city-info__temp">{{Math.round(weatherData.weatherData.main.temp)}}°C</h1>
    <p class="city-info__weather">{{weatherData.weatherData.weather[0].main}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["weatherData"]),
  methods: {
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.city-info {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.35)
  );
  padding: 3rem;
  border-radius: 10px;

  &__name {
    margin: 0;
    font-size: 3rem;
    color: #42b983;
  }

  &__date {
    color: white;
  }

  &__temp {
    margin: 0;
    font-size: 5rem;
    color: #42b983;
    font-weight: 900;

    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;

    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  }

  &__weather {
    font-size: 2rem;
    margin-bottom: 0;
    color: white;
  }
}
</style>