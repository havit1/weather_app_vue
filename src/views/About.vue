<template>
  <div class="about">
    <div class="about__text-wrapper">
      <h1>About page</h1>
      <p>Application for training my VueJS skills.</p>
      <p>Used technologies:</p>
      <ul>
        <li>VueJS</li>
        <li>Vuex</li>
        <li>Vue Router</li>
        <li>SCSS</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(20%);

  &__text-wrapper {
    text-align: left;
    p {
      font-size: 2rem;
    }

    ul {
      list-style: circle;
      li {
        margin-left: 4rem;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
