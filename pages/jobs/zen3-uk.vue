<template>
  <div>
    <header>
      <Header heading="Zen3 UK"
        subheading="Front-End Architect"
        header-background-gradient-start-colour="#2b5ba7"
        header-background-gradient-end-colour="#82bcea"
        header-background-gradient-direction="134" />
    </header>
    <article class="container">
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head: {
    title: 'Taj Deluca - My tenure @ Zen3 UK',
    meta: [
      { hid: 'description', name: 'description', content: 'A summary of my time at Zen3 UK.' }
    ]
  },
  async asyncData ({ $content }) {
    const page = await $content('jobs/zen3-uk').fetch()

    return {
      page
    }
  }
});
</script>

<style scoped>
.nuxt-content-container >>> hr {
  background: linear-gradient(134deg, #2b5ba7 0%, #82bcea 100%);
}
</style>
