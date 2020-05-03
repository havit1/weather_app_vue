<template>
  <div id="nav" class="nav">
    <ul class="nav__list">
      <li class="nav__list-link" :key="link.id" v-for="link of links">
        <router-link :to="{path: `${link.url}`}">{{link.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { url: "/", name: "Home", id: 2 },
        { url: "/about", name: "About", id: 1 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  position: fixed;
}
.nav {
  &__list {
    display: flex;
    &-link {
      margin-right: 1rem;
      a {
        text-decoration: none;
        font-size: 2rem;
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}
</style>