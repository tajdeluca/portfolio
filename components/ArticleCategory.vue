<template>
  <div class="category">
    <nuxt-link :to="`/blog/categories/${category.customSlug}`" :style="`background: ${this.backgroundGradient}`">{{ category.title }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    backgroundGradient(): any {
      return `linear-gradient(134deg, ${this.category.gradientStartColour} 0%, ${this.category.gradientEndColour} 100%);`;
    }
  },
  props: {
    category: {
      type: Object,
      required: true,
    }
  }
});
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
