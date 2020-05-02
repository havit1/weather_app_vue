<template>
  <div>
    <div>City Weather</div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: { name: String },
  computed: mapGetters(["weatherData", "searchData"]),
  watch: {
    weatherData(value) {
      return value;
    }
  },
  async mounted() {
    this.setSearch(this.name);
    this.fetchWeather(this.searchData);
  },

  methods: {
    ...mapActions(["fetchWeather", "setSearch"])
  }
};
</script>
