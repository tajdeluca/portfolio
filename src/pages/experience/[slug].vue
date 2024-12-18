<template>
  <div>
    <header>
      <Banner v-if="job" v-bind:heading="job.title"
        v-bind:subheading="job.role"
        v-bind:header-background-gradient-start-colour="job.gradientStartColour"
        v-bind:header-background-gradient-end-colour="job.gradientEndColour"
        v-bind:header-background-gradient-direction="job.gradientDirection" />
    </header>
    <StickyLink linkTo="/" linkText="Back to the homepage." />
    <article class="container" :style="horizontalRuleStyles">
      <ContentRenderer v-if="job" :value="job" />
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = ref(route.params["slug"])

const { data: job } = await useAsyncData(`experience:${slug.value}`, () => queryContent(`/experience/${slug.value}`).findOne())

const horizontalRuleStyles = ref({
  '--horizontal-rule-start-colour': job.value?.gradientStartColour,
  '--horizontal-rule-end-colour': job.value?.gradientEndColour,
})

useHead({
  title: `My tenure @ ${job.value?.title} - Taj Deluca - Front End Wizard`,
  meta: [
    { name: 'description', content: job.value?.description }
  ]
})

if (!job.value)
{
  throw createError({
    statusCode: 404,
    statusMessage: 'Work experience not found.',
  })
}
</script>

<style scoped>
article + article {
  margin-top: 1rem;
}
</style>
