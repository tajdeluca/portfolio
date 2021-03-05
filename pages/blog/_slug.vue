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
      <nuxt-content :document="post" />
      <hr v-if="post.categories">
      <h3>You can also find this article in the following categories:</h3>
      <article-category v-for="(category, id) in post.categories" :key="id" :category="category"></article-category>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioBlogPost from 'types/portfolio-blog-post';
import ArticleCategory from '~/components/ArticleCategory.vue';

export default Vue.extend({
  components: { ArticleCategory },
  methods: {
    getHorizontalRuleTheme(gradientStartColour: string, gradientEndColour: string) {
      return `--horizontal-rule-start-colour: ${gradientStartColour}; --horizontal-rule-end-colour: ${gradientEndColour}`;
    }
  },
  head(): any {
    return {
      title: `Taj Deluca - Front End Wizard - Gradient Shift - ${this.post.title}`,
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
    const post = await $content(`blog`)
      .where({ customSlug: slug })
      .fetch();

    if(post.length === 0) {
      error({ statusCode: 404, message: 'Blog post not found.' });
      return;
    }

    return {
      post: post[0]
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
</style>
