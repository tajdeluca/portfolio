<template>
  <div>
    <header>
      <Banner heading="About me."
        subheading="Who I am and what I can do."
        header-background-gradient-start-colour="#633ca1"
        header-background-gradient-end-colour="#4a74e2"
        v-bind:show-home-link="true" />
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
    title: 'Taj Deluca - About me',
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
