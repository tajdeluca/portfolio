<template>
  <div class="tag">
    <nuxt-link :to="`/blog/tags/${tag.customSlug}`" :style="`background: ${this.backgroundGradient}`">{{ tag.title }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    backgroundGradient(): any {
      return `linear-gradient(134deg, ${this.tag.gradientStartColour} 0%, ${this.tag.gradientEndColour} 100%);`;
    }
  },
  props: {
    tag: {
      type: Object,
      required: true,
    }
  }
});
</script>

<style scoped>
.tag {
  display: inline-flex;
}

.tag a {
  border-radius: 4rem;
  font-size: 0.75rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
}
</style>
