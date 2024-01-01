<template>
  <div v-if="category">
    <header>
      <Banner v-bind:heading="category.title"
        v-bind:subheading="category.subtitle"
        v-bind:header-background-gradient-start-colour="category.gradientStartColour"
        v-bind:header-background-gradient-end-colour="category.gradientEndColour" />
    </header>
    <StickyLink linkTo="/blog" linkText="Back to the article index."></StickyLink>
    <div class="container">
      <h3>About this series</h3>
      <p>{{ category.description }}</p>
    </div>
    <div class="container">
      <h3>Articles</h3>
      <div class="article-grid">
        <nuxt-link v-for="(article, index) in articles" :key="index" :to="`/blog/${article.customSlug}`" :style="`--horizontal-rule-start-colour: ${article.gradientStartColour}; --horizontal-rule-end-colour: ${article.gradientEndColour}`">
          <h4>{{ article.title }}</h4>
          <h5>{{ article.subtitle }}</h5>
          <h6>Written on <time :datetime="getCreatedDateAsDateTime(article)">{{ getCreatedDate(article) }}</time></h6>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCreatedDate, getCreatedDateAsDateTime } from '../utils'

useHead({
  title: 'Gradient Shift - Taj Deluca - Front End Wizard',
  meta: [
    { name: 'description', content: 'A series of ramblings, thoughts and perhaps even useful guides. My personal blog.' }
  ]
})

const route = useRoute()
const slug = ref(route.params["slug"])

const { data: category } = await useAsyncData(`blog-category-${slug.value}`, () => queryContent('/blog/categories').where({ customSlug: slug.value }).findOne())

if (!category)
{
  throw createError({
    statusCode: 404,
    statusMessage: 'Category not found.',
  })
}

const { data: articles } = await useAsyncData(`blog-category-${slug.value}-articles`, () => queryContent('/blog').where({ 'categories.customSlug': { $contains: slug.value } }).find())
</script>

<style scoped>
article + article {
  margin-top: 1rem;
}

.container {
  --horizontal-rule-start-colour: #3023ae;
  --horizontal-rule-end-colour: #c86dd7;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .article-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.article-grid > a {
  --horizontal-rule-start-colour: #3023ae;
  --horizontal-rule-end-colour: #c86dd7;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: linear-gradient(134deg, var(--horizontal-rule-start-colour) 0%, var(--horizontal-rule-end-colour) 100%);
  color: #ffffff;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.article-grid > a:after {
  background-image: linear-gradient(90deg, var(--horizontal-rule-start-colour) 0%, var(--horizontal-rule-end-colour) 100%);
  content: '';
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: 500ms opacity ease-in-out;
  width: 100%;
  z-index: 2;
}

.article-grid > a:hover:after {
  opacity: 1;
}

.article-grid > a > h4 {
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 3;
}

.article-grid > a > h5 {
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 3;
}

.article-grid > a > h6 {
  margin-bottom: 0;
  position: relative;
  z-index: 3;
}
</style>
