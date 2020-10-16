<template>
  <div>
    <header>
      <Header heading="INTO University Partnerships"
        subheading="Senior Software Engineer"
        header-background-gradient-start-colour="#7A0000"
        header-background-gradient-end-colour="#ed1c24"
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
    title: 'Taj Deluca - My tenure @ INTO University Partnerships',
    meta: [
      { hid: 'description', name: 'description', content: 'A summary of my time at INTO University Partnerships.' }
    ]
  },
  async asyncData ({ $content }) {
    const page = await $content('experience/into-university-partnerships').fetch()

    return {
      page
    }
  }
});
</script>

<style scoped>
.container {
  --horizontal-rule-start-colour: #7A0000;
  --horizontal-rule-end-colour: #ed1c24;
}
</style>
