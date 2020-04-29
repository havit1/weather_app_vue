<template>
  <div>
    <input v-model="searchString" type="text" placeholder="Tokyo, JP" />
    {{searchData}}
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
    }
  },
  methods: {
    ...mapActions(["setSearch"]),
    onSeachStringChange(newString) {
      this.searchString = newString;
    }
  }
};
</script>