<template>
  <div>
    <header>
      <Banner v-bind:heading="post.title"
        v-bind:subheading="post.subtitle"
        v-bind:header-background-gradient-start-colour="post.gradientStartColour"
        v-bind:header-background-gradient-end-colour="post.gradientEndColour" />
    </header>
    <StickyLink linkTo="/blog" linkText="Back to the article index."></StickyLink>
    <article class="container" :style="getHorizontalRuleTheme(post.gradientStartColour, post.gradientEndColour)">
      <p><small>Written on <time :datetime="getCreatedDateAsDateTime(post)">{{ getCreatedDate(post) }}</time> with an estimated reading time of {{ getReadingTime(post) }}.</small></p>
      <nuxt-content :document="post" />
      <div v-if="post.categories">
        <hr>
        <p>This article is part of the following categories:</p>
        <article-category v-for="(category, id) in post.categories" :key="id" :category="category"></article-category>
      </div>
      <hr>
      <h3>Want to continue reading?</h3>
      <nav class="article-nav-grid">
        <div v-if="prevArticle" class="previous-article">
          <h4>Previous article</h4>
          <nuxt-link :to="`/blog/${prevArticle.customSlug}`">{{ prevArticle.title }}</nuxt-link>
        </div>
        <div v-if="nextArticle" class="next-article">
          <h4>Next article</h4>
          <nuxt-link :to="`/blog/${nextArticle.customSlug}`">{{ nextArticle.title }}</nuxt-link>
        </div>
      </nav>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioBlogPost from 'types/portfolio-blog-post';
import ArticleCategory from '~/components/ArticleCategory.vue';
import { format } from 'date-fns';

export default Vue.extend({
  components: { ArticleCategory },
  methods: {
    getHorizontalRuleTheme(gradientStartColour: string, gradientEndColour: string) {
      return `--horizontal-rule-start-colour: ${gradientStartColour}; --horizontal-rule-end-colour: ${gradientEndColour}`;
    },
    getCreatedDateAsDateTime(article: PortfolioBlogPost) {
      return format(new Date(article.createdAt), 'yyyy-MM-dd');
    },
    getCreatedDate(article: PortfolioBlogPost) {
      return format(new Date(article.createdAt), 'do MMMM yyyy');
    },
    getReadingTime(article: PortfolioBlogPost) {
      const readingTimeInMinutes = Math.ceil(article.readingTime / 60 / 60 / 60);
      return `${readingTimeInMinutes} minutes`;
    },
  },
  head(): any {
    return {
      title: `${this.post.title} - Gradient Shift - Taj Deluca - Front End Wizard`,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description }
      ]
    }
  },
  data() {
    const post: PortfolioBlogPost = {
      customSlug: '',
      title: '',
      description: '',
      gradientStartColour: '#c86dd7',
      gradientEndColour: '#3023ae',
      readingTime: 0,
      createdAt: new Date(),
    };

    return {
      post
    };
  },
  async asyncData ({ params, error, $content }) {
    const slug = params.slug;
    const post: any = await $content(`blog`)
      .where({ customSlug: slug })
      .fetch();

    if(post.length === 0) {
      error({ statusCode: 404, message: 'Blog post not found.' });
      return;
    }

    const [prevArticle, nextArticle] = await $content('blog')
      .only(['title', 'customSlug'])
      .sortBy('createdAt', 'asc')
      .surround(post[0].slug)
      .fetch();

    return {
      post: post[0],
      prevArticle,
      nextArticle
    }
  },
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

.article-nav-grid {
  column-gap: 2rem;
  display: grid;
  grid-auto-columns: 1fr;
}
</style>
