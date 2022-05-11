<template>
  <div>
    <header>
      <Banner v-bind:heading="job.title"
        v-bind:subheading="job.role"
        v-bind:header-background-gradient-start-colour="job.gradientStartColour"
        v-bind:header-background-gradient-end-colour="job.gradientEndColour"
        v-bind:header-background-gradient-direction="job.gradientDirection" />
    </header>
    <StickyLink linkTo="/" linkText="Back to the homepage." />
    <article class="container" :style="horizontalRuleStyles">
      <nuxt-content :document="job" />
    </article>
  </div>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import Vue from 'vue';

export default Vue.extend({
  head(): any {
    return {
      title: `My tenure @ ${this.job.title} - Taj Deluca - Front End Wizard`,
      meta: [
        { hid: 'description', name: 'description', content: this.job.description }
      ]
    }
  },
  data() {
    const job = {
      title: '',
      description: '',
      gradientStartColour: '',
      gradientEndColour: '',
      gradientDirection: 0,
    };

    return {
      job
    };
  },
  async asyncData ({ params, error, $content }) {
    const slug = params.slug;
    const jobs = await $content(`experience`)
      .where({ slug: slug })
      .fetch() as Array<FetchReturn>;

    if(jobs.length === 0) {
      error({ statusCode: 404, message: 'Work experience not found.' });
      return;
    }

    return {
      job: jobs[0]
    }
  },
  computed: {
    horizontalRuleStyles(): any {
      return {
        '--horizontal-rule-start-colour': this.job.gradientStartColour,
        '--horizontal-rule-end-colour': this.job.gradientEndColour,
      }
    }
  }
});
</script>

<style scoped>
article + article {
  margin-top: 1rem;
}
</style>
