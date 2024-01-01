<template>
  <div class="category">
    <NuxtLink :to="`/blog/categories/${fullCategory.customSlug}`" :style="`background: ${backgroundGradient}`">{{ fullCategory.title }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { getArticleCategories } from '~/pages/blog/utils';

const props = defineProps(['category'])

const { data: allCategories } = await useAsyncData('blog-article-categories', () => getArticleCategories())

const fullCategory = allCategories.value?.find(x => x.customSlug === props.category)

if (!fullCategory)
{
  throw new Error("Category not found.")
}

const backgroundGradient = computed(() => `linear-gradient(134deg, ${fullCategory.gradientStartColour} 0%, ${fullCategory.gradientEndColour} 100%);`)
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
