<template>
  <div class="parent">
    <div class="content">
      <Nuxt />
    </div>
    <footer class="container">
      <small>Copyright &copy; Taj Deluca {{ currentDate.getFullYear() }}</small>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      currentDate: new Date(),
    };
  }
});
</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.parent .content {
  flex-grow: 1;
}

footer {
  padding: 1rem;
  text-align: center;
}
</style>
