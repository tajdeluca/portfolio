<template>
  <div>
    <header>
      <Banner heading="Gradient Shift"
        subheading="A series of ramblings, thoughts and perhaps even useful guides."
        header-background-gradient-start-colour="#c86dd7"
        header-background-gradient-end-colour="#3023ae" />
    </header>
    <StickyLink v-if="articles.length > 0" linkTo="/" linkText="Back to the homepage." />
    <div v-if="articles.length === 0" class="container">
      <h3>Sorry, I haven't written any articles yet!</h3>
      <p>This site is still pretty fresh. I'm working on writing some fresh content so I can begin to populate this blog!
        Come back later and I might have something ready!</p>
      <p>Until then, it's probably best you <nuxt-link to="/">go back to the homepage.</nuxt-link></p>
    </div>
    <div v-if="articles.length > 0" class="container">
      <article v-for="(article, index) in articles" :key="index">
        <h3>{{ article.title }}</h3>
        <p><small>Written on <time :datetime="getCreatedDateAsDateTime(article)">{{ getCreatedDate(article) }}</time> with an estimated reading time of {{ getReadingTime(article) }}.</small></p>
        <p>{{ article.description }}</p>
        <div v-if="article.categories" class="categories">
          <p><nuxt-link :to="`/blog/${article.customSlug}/`">Read article.</nuxt-link></p>
          <small>Categories:</small> <article-category v-for="(category, index) in article.categories" :key="index" :category="category"></article-category>
        </div>
        <div v-else>
          <p><nuxt-link :to="`/blog/${article.customSlug}/`">Read article.</nuxt-link></p>
        </div>
        <hr v-if="index !== Object.keys(articles).length - 1">
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { format } from 'date-fns';
import PortfolioBlogPost from '~/types/portfolio-blog-post';
import ArticleCategory from '~/components/ArticleCategory.vue';

export default Vue.extend({
  components: { ArticleCategory },
  head: {
    title: 'Gradient Shift - Taj Deluca - Front End Wizard',
    meta: [
      { hid: 'description', name: 'description', content: 'A series of ramblings, thoughts and perhaps even useful guides. My personal blog.' }
    ]
  },
  async asyncData ({ $content }) {
    const articles = await $content(`blog`)
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      articles
    }
  },
  methods: {
    getCreatedDateAsDateTime(article: PortfolioBlogPost) {
      return format(new Date(article.createdAt), 'yyyy-MM-dd');
    },
    getCreatedDate(article: PortfolioBlogPost) {
      return format(new Date(article.createdAt), 'do MMMM yyyy');
    },
    getReadingTime(article: PortfolioBlogPost) {
      const readingTimeInMinutes = Math.ceil(article.readingTime / 60 / 60 / 60);
      return `${readingTimeInMinutes} minutes`;
    }
  }
});
</script>

<style scoped>
article + article {
  margin-top: 1rem;
}

.container {
  --horizontal-rule-start-colour: #3023ae;
  --horizontal-rule-end-colour: #c86dd7;
}

h3 {
  margin-bottom: 0.25rem;
}

.categories p {
  margin-bottom: 0.75rem;
}
.categories small {
  display: inline-flex;
  margin-right: 0.5rem;
}
</style>
