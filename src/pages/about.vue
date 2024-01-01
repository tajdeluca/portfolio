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
      <ContentRenderer v-if="data" :value="data" />
    </article>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'About me - Taj Deluca - Front End Wizard',
  meta: [
    { name: 'description', content: 'All about Taj Deluca, the (not so) famous software engineer.' }
  ]
})

const { data } = await useAsyncData('about', () => queryContent('/about-me/index').findOne())
</script>

<style scoped>
.container {
  --horizontal-rule-start-colour: #633ca1;
  --horizontal-rule-end-colour: #4a74e2;
}
</style>
