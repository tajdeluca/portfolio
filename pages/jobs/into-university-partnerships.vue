<template>
  <div>
    <header>
      <Header heading="INTO University Partnerships"
        subheading="Software Engineer"
        header-background-gradient-start-colour="#ed1c24"
        header-background-gradient-end-colour="#f39c9f"
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
    title: 'Taj Deluca - Front End Wizard - Jobs - INTO University Partnerships',
    meta: [
      { hid: 'description', name: 'description', content: 'A summary of my time at INTO University Partnerships.' }
    ]
  },
  async asyncData ({ $content }) {
    const page = await $content('jobs/into-university-partnerships').fetch()

    return {
      page
    }
  }
});
</script>
