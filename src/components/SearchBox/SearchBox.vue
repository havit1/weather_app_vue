<template>
  <div>
    <input
      @keypress="submitSearch"
      v-model="searchString"
      type="text"
      placeholder="Tokyo, JP"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return { searchString: "" };
  },
  computed: mapGetters(["searchData"]),
  watch: {
    searchString(value) {
      this.setSearch(value);
    },
  },

  methods: {
    ...mapActions(["setSearch", "fetchWeather"]),
    onSeachStringChange(newString) {
      this.searchString = newString;
    },
    submitSearch(e) {
      if (e.key === "Enter") {
        this.$router.push(
          `/weather/${this.searchData.city},${this.searchData.country}`
        );
      }
    },
  },
};
</script>
