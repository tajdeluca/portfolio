<template>
  <div v-if="post">
    <header>
      <Banner v-bind:heading="post.title"
        v-bind:subheading="post.subtitle"
        v-bind:header-background-gradient-start-colour="post.gradientStartColour"
        v-bind:header-background-gradient-end-colour="post.gradientEndColour" />
    </header>
    <StickyLink linkTo="/blog" linkText="Back to the article index."></StickyLink>
    <article class="container" :style="getHorizontalRuleTheme(post.gradientStartColour, post.gradientEndColour)">
      <p><small>Written on <time :datetime="getCreatedDateAsDateTime(post)">{{ getCreatedDate(post) }}</time> with an estimated reading time of {{ getReadingTime(post) }}.</small></p>
      <ContentRenderer :value="post" />
      <div v-if="post.categories">
        <hr>
        <p>This article is part of the following categories:</p>
        <article-category v-for="(category, id) in post.categories" :key="id" :category="category"></article-category>
      </div>
      <hr>
      <h3>Want to continue reading?</h3>
      <nav class="article-nav-grid" v-if="surroundingArticles">
        <div v-if="surroundingArticles[0]" class="previous-article">
          <h4>Previous article</h4>
          <NuxtLink :to="`/blog/${surroundingArticles[0].customSlug}`">{{ surroundingArticles[0].title }}</NuxtLink>
        </div>
        <div v-if="surroundingArticles[1]" class="next-article">
          <h4>Next article</h4>
          <NuxtLink :to="`/blog/${surroundingArticles[1].customSlug}`">{{ surroundingArticles[1].title }}</NuxtLink>
        </div>
      </nav>
    </article>
  </div>
</template>

<script setup lang="ts">
import { getCreatedDate, getCreatedDateAsDateTime, getReadingTime } from '~/blog-utils'
import ArticleCategory from '~/components/ArticleCategory.vue';

function getHorizontalRuleTheme(gradientStartColour: string, gradientEndColour: string) {
  return `--horizontal-rule-start-colour: ${gradientStartColour}; --horizontal-rule-end-colour: ${gradientEndColour}`;
}

const route = useRoute()
const slug = ref(route.params["slug"])

const { data: post } = await useAsyncData(`blog-article-${slug.value}`, () => queryContent('/blog').where({ customSlug: slug.value }).findOne())

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found.',
  })
}

useHead({
  title: `${post.value?.title} - Gradient Shift - Taj Deluca - Front End Wizard`,
  meta: [
    { name: 'description', content: post.value?.description }
  ]
})

const { data: surroundingArticles } = await useAsyncData(`blog-article-${slug.value}-surround`, () => queryContent('/blog')
  .only(['title', 'customSlug'])
  .where({
    _path: {
      $not: {
        $contains: 'categories',
      }
    }
  })
  .sort({
    createdAt: 1,
  })
  .findSurround(post.value?._path ?? '', {
    before: 1,
    after: 1
  }))
</script>

<style scoped>
article + article {
  margin-top: 1rem;
}

.container {
  --horizontal-rule-start-colour: #3023ae;
  --horizontal-rule-end-colour: #c86dd7;
}

.article-nav-grid {
  column-gap: 2rem;
  display: grid;
  grid-auto-columns: 1fr;
}
</style>
