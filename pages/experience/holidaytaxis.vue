<template>
  <div>
    <header>
      <Banner heading="HolidayTaxis"
        subheading="Senior Front-End Developer"
        header-background-gradient-start-colour="#003087"
        header-background-gradient-end-colour="#0961a6"
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
    title: 'Taj Deluca - My tenure @ HolidayTaxis',
    meta: [
      { hid: 'description', name: 'description', content: 'A summary of my time at HolidayTaxis.' }
    ]
  },
  async asyncData ({ $content }) {
    const page = await $content('experience/holidaytaxis').fetch()

    return {
      page
    }
  }
});
</script>

<style scoped>
.container {
  --horizontal-rule-start-colour: #003087;
  --horizontal-rule-end-colour: #0961a6;
}
</style>
