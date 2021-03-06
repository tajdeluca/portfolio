<template>
  <div>
    <header>
      <Banner heading="About me."
        subheading="Who I am and what I can do."
        header-background-gradient-start-colour="#633ca1"
        header-background-gradient-end-colour="#4a74e2" />
    </header>
    <StickyLink linkTo="/" linkText="Back to the homepage." />
    <article class="container">
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head: {
    title: 'About me - Taj Deluca - Front End Wizard',
    meta: [
      { hid: 'description', name: 'description', content: 'All about Taj Deluca, the (not so) famous software engineer.' }
    ]
  },
  async asyncData ({ $content }) {
    const page = await $content('about-me/index').fetch()

    return {
      page
    }
  }
});
</script>

<style scoped>
.container {
  --horizontal-rule-start-colour: #633ca1;
  --horizontal-rule-end-colour: #4a74e2;
}
</style>
