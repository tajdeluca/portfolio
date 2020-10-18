<template>
  <div>
    <header>
      <Banner v-bind:heading="post.title"
        v-bind:subheading="post.description"
        header-background-gradient-start-colour="#3023ae"
        header-background-gradient-end-colour="#c86dd7" />
    </header>
    <StickyLink linkTo="/blog" linkText="Back to the article index." />
    <article class="container">
      <nuxt-content :document="post" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head(): any {
    return {
      title: `Taj Deluca - Front End Wizard - Gradient Shift - ${this.post.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description }
      ]
    }
  },
  data() {
    const post = {
      title: '',
      description: '',
    };

    return {
      post
    };
  },
  async asyncData ({ params, error, $content }) {
    const slug = params.slug;
    const post = await $content(`blog`)
      .where({ slug: slug })
      .fetch();

    if(post.length === 0) {
      error({ statusCode: 404, message: 'Blog post not found.' });
      return;
    }

    return {
      post: post[0]
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
</style>
