<template>
  <div class="parent">
    <div class="content">
      <slot />
    </div>
    <footer class="container">
      <small>Copyright &copy; Taj Deluca {{ currentDate.getFullYear() }}</small>
    </footer>
  </div>
</template>

<script setup lang="ts">
  const currentDate = new Date()
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
