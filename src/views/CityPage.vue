<template>
  <div class="city-page">
    <Loader v-if="weatherData.loading" />
    <h1
      class="city-page__error-text"
      v-else-if="weatherData.errorMessage.length > 0"
    >No such city found...</h1>
    <CityInfo v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CityInfo from "@/components/CityInfo/CityInfo";
import Loader from "@/components/common/Loader";

export default {
  data() {
    return {};
  },
  props: { name: String },
  components: { CityInfo, Loader },
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

<style lang="scss" scoped>
.city-page {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(50%);

  &__error-text {
    color: white;
    font-size: 4rem;
  }
}
</style>
