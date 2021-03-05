<template>
  <div>
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
      title: `${this.category.title} - Categories - Gradient Shift - Taj Deluca - Front End Wizard`,
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
    const category = await $content(`blog/categories`)
      .where({ customSlug: slug })
      .fetch();

    if(category.length === 0) {
      error({ statusCode: 404, message: 'Category not found.' });
      return;
    }

    return {
      category: category[0]
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
