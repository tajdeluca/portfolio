<template>
  <div>
    <header>
      <Banner heading="Hi there! I'm Taj."
        subheading="I'm on a mission to make the web better for everyone."
        header-background-gradient-start-colour="#3023ae"
        header-background-gradient-end-colour="#c86dd7" />
    </header>
    <div class="container">
      <article>
        <h3>A little bit about me...</h3>
        <p>A software engineer born and raised in the United Kingdom. My goal is to make the web a better place for everyone, one
          website at a time. Whether that's by optimising content delivery or creating an accessible experience I find that I love all aspects
          of web development!
        </p>
        <p>The skills I have cover a wide array of things such as cloud platforms (AWS, Azure, etc.), front-end languages
          (JavaScript, TypeScript, etc.) and back-end languages (C#, PHP, etc.).</p>
        <p>If you'd like to get in touch, you can contact me on <a href="https://www.linkedin.com/in/taj-deluca-678bbb80" rel="noopener">LinkedIn</a> or <a href="https://twitter.com/TajDeluca" rel="noopener">Twitter</a>.</p>
        <hr />
      </article>
      <h3>I have a wide range of skills because of these companies...</h3>
      <article v-for="(job, index) in jobs" :key="index">
        <h4>{{ job.title }}</h4>
        <p>{{ job.description }}</p>
        <p><nuxt-link :to="job._path">Learn more about my time at {{job.title}}.</nuxt-link></p>
        <hr v-if="index === (jobs?.length ?? 0) - 1">
      </article>
      <h3>Wait, there's more...</h3>
      <article>
        <h4>About me</h4>
        <p>It's hard to put into words what I'm capable of. Spreading it out all over the place might be a bit confusing and the introduction
          on this page, I think, is way too small to get an idea of that! You can <nuxt-link to="about">learn more about me here</nuxt-link> to get
          a better idea of who I am and what I can do.</p>
        <h4>About the knowledge I can share</h4>
        <p>Occasionally I like to write down a bit more about my achievements, or perhaps just my thoughts on particular topics.
          If you're interested in that you can <nuxt-link to="blog">find my blog here.</nuxt-link></p>
      </article>

    </div>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Taj Deluca - Front End Wizard',
  meta: [
    { name: 'description', content: `A senior full stack software engineer based in the United Kingdom. I love all things web development!` }
  ]
})

const { data: jobs } = await useAsyncData('jobs', () => queryContent('/experience').sort({
  startDate: 1
}).find())
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
