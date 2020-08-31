<template>
  <div>
    <header>
      <Header heading="HolidayTaxis"
        subheading="Senior Front-End Developer"
        header-background-gradient-start-colour="#003087"
        header-background-gradient-end-colour="#0961a6"
        header-background-gradient-direction="34" />
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
    title: 'Taj Deluca - Front End Wizard - Jobs - HolidayTaxis',
    meta: [
      { hid: 'description', name: 'description', content: 'A summary of my time at HolidayTaxis.' }
    ]
  },
  async asyncData ({ $content }) {
    const page = await $content('jobs/holidaytaxis').fetch()

    return {
      page
    }
  }
});
</script>
