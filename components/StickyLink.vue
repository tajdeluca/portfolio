<template>
  <nav class="container">
    <ul>
      <li>
        <nuxt-link v-bind:to="linkTo">{{ linkText }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    linkTo: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    }
  }
});
</script>

<style scoped>
nav {
  background: var(--body-background);
  margin-top: -1.5rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  position: sticky;
  text-align: left;
  top: 0;
  width: 100%;
  z-index: 1;
}

nav ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
</style>
