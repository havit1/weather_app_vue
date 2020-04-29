<template>
  <div class="home">
    <SearchBox />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SearchBox from "@/components/SearchBox/SearchBox.vue";
export default {
  name: "Home",
  components: { SearchBox },
  methods: {}
};
</script>
