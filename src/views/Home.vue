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
  components: { SearchBox }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: rgba(0, 0, 0, 0.377);
  .darker {
    height: 100vh;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.75)
    );
  }
}
</style>
