<template>
  <div class="category">
    <nuxt-link :to="`/blog/categories/${category.customSlug}`" :style="`background: ${backgroundGradient}`">{{ category.title }}</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['category'])

const backgroundGradient = computed(() => `linear-gradient(134deg, ${props.category.gradientStartColour} 0%, ${props.category.gradientEndColour} 100%);`)
</script>

<style scoped>
.category {
  display: inline-flex;
}

.category a {
  border-radius: 4rem;
  color: #ffffff;
  font-size: 0.75rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
}
</style>
