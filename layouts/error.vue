<template>
  <div>
    <header>
      <Banner v-if="error.statusCode === 404"
        heading="Error 404"
        subheading="Page not found."
        header-background-gradient-start-colour="#1a1a1a"
        header-background-gradient-end-colour="#8a8a8a" />
    </header>
    <div class="container">
      <p>Sorry, it seems like you've stumbled across something that doesn't exist! It's probably best you
      <nuxt-link to="/">navigate back to the home page.</nuxt-link></p>
      <p>I hope you find what you're looking for!</p>
    </div>
  </div>
</template>

<style scoped>

</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['error'],
  head: {
    title: 'Taj Deluca - Page not found',
    meta: [
      { hid: 'description', name: 'description', content: 'Sorry, despite the vast amount of skills I have... that page doesn\'t exist.' }
    ]
  }
});
</script>
