<template>
  <div>
    <header>
      <Header heading="CWT Digital"
        subheading="From Web Developer to Front-End Architect"
        header-background-gradient-start-colour="#700000"
        header-background-gradient-end-colour="#ef4c25"
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
    title: 'Taj Deluca - My tenure @ CWT Digital',
    meta: [
      { hid: 'description', name: 'description', content: 'A summary of my time at CWT Digital.' }
    ]
  },
  async asyncData ({ $content }) {
    const page = await $content('jobs/cwt-digital').fetch()

    return {
      page
    }
  }
});
</script>

<style scoped>
.container {
  --horizontal-rule-start-colour: #700000;
  --horizontal-rule-end-colour: #ef4c25;
}
</style>
