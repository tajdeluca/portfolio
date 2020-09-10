<template>
  <div class="parent">
    <div class="content">
      <Nuxt />
    </div>
    <footer>
      <small>Copyright &copy; Taj Deluca 2020</small>
    </footer>
  </div>
</template>

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
