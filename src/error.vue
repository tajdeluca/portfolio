<template>
  <div>
    <header>
      <Banner v-if="error && error.statusCode === 404"
        heading="Error 404"
        subheading="Page not found."
        header-background-gradient-start-colour="#1a1a1a"
        header-background-gradient-end-colour="#8a8a8a" />
    </header>
    <div class="container">
      <p>Sorry, it seems like you've stumbled across something that doesn't exist! It's probably best you
      <NuxtLink to="/">navigate back to the home page.</NuxtLink></p>
      <p>I hope you find what you're looking for!</p>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
defineProps({
  error: Object
})

useHead({
  title: 'Taj Deluca - Page not found',
  meta: [
    { name: 'description', content: 'Sorry, despite the vast amount of skills I have... that page doesn\'t exist.' }
  ]
})
</script>
