<template>
  <nav class="container">
    <ul>
      <li>
        <NuxtLink v-bind:to="props.linkTo">{{ props.linkText }}</NuxtLink>
      </li>
    </ul>
    <div>
      <slot></slot>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  linkTo: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>
nav {
  background: var(--body-background);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -1.5rem;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  position: sticky;
  text-align: left;
  top: 0;
  width: 100%;
  z-index: 1;
}

nav ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
</style>
