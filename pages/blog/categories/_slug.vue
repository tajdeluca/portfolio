<template>
  <div>
    <header>
      <Banner v-bind:heading="tag.title"
        v-bind:subheading="tag.subtitle"
        v-bind:header-background-gradient-start-colour="tag.gradientStartColour"
        v-bind:header-background-gradient-end-colour="tag.gradientEndColour" />
    </header>
    <StickyLink linkTo="/blog" linkText="Back to the article index."></StickyLink>
    <div class="container">
      <h3>About this series</h3>
      <p>{{ tag.description }}</p>
    </div>
    <div class="container article-grid">
      <h3>Articles</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioBlogPost from 'types/portfolio-blog-post';

export default Vue.extend({
  methods: {
    getHorizontalRuleTheme(gradientStartColour: string, gradientEndColour: string) {
      return `--horizontal-rule-start-colour: ${gradientStartColour}; --horizontal-rule-end-colour: ${gradientEndColour}`;
    }
  },
  head(): any {
    return {
      title: `Taj Deluca - Front End Wizard - Gradient Shift - Categories - ${this.category.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.category.description }
      ]
    }
  },
  data() {
    const category: PortfolioBlogPost = {
      customSlug: '',
      title: '',
      description: '',
      gradientStartColour: '#c86dd7',
      gradientEndColour: '#3023ae',
      readingTime: 0,
      createdAt: new Date(),
    };

    return {
      category
    };
  },
  async asyncData ({ params, error, $content }) {
    const slug = params.slug;
    const tag = await $content(`blog/categories`)
      .where({ customSlug: slug })
      .fetch();

    if(tag.length === 0) {
      error({ statusCode: 404, message: 'Category not found.' });
      return;
    }

    return {
      tag: tag[0]
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
