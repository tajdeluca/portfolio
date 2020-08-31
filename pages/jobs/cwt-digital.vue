<template>
  <div>
    <header>
      <Header heading="CWT Digital"
        subheading="From Web Developer to Front-End Architect"
        header-background-gradient-start-colour="#ef4c25"
        header-background-gradient-end-colour="#ffbcab"
        header-background-gradient-direction="34"
        header-foreground-colour="var(--body-foreground-colour)" />
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
    title: 'Taj Deluca - Front End Wizard - Jobs - CWT Digital',
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
