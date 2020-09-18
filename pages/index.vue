<template>
  <div>
    <header>
      <Header heading="Hi there! I'm Taj."
        subheading="I'm on a mission to make the web better for everyone."
        header-background-gradient-start-colour="#3023ae"
        header-background-gradient-end-colour="#c86dd7"
        v-bind:show-home-link="false" />
    </header>
    <div class="container">
      <article>
        <h3>A little bit about me...</h3>
        <p>A sofware engineer born and raised in the United Kingdom. My goal is to make the web a better place for everyone, one
          website at a time. Whether that's by optimising content delivery or creating an accessible experience I find that I love all aspects
          of web development!
        </p>
        <p>The skills I have cover a wide array of things such as cloud platforms (AWS, Azure, etc.), front-end languages
          (JavaScript, TypeScript, etc.) and back-end languages (C#, PHP, etc.).</p>
        <p>If you'd like to get in touch, you can contact me on <a href="https://www.linkedin.com/in/taj-deluca-678bbb80" rel="noopener">LinkedIn</a> or <a href="https://twitter.com/TajDeluca" rel="noopener">Twitter</a>.</p>
        <hr />
      </article>
      <h3>I have a wide range of skills because of these companies...</h3>
      <article>
        <h4>CWT Digital</h4>
        <p>A small agency that was based in Brighton. This was my first major foray into the commerical world of web development.
          Here I was able to progress from a humble Web Developer to a Front-End Architect while learning quite a bit about the travel industry.</p>
        <p><nuxt-link to="jobs/cwt-digital/">Learn more about my time at CWT Digital.</nuxt-link></p>
      </article>
      <article>
        <h4>Zen3 UK</h4>
        <p>A part of a larger organisation, but a much smaller team, there was definitely more of a client-facing focus here! It was much of a continuation of
          my role at CWT Digital, but with more of a focus on working with an offshore team.</p>
        <p><nuxt-link to="jobs/zen3-uk/">Learn more about my time at Zen3 UK.</nuxt-link></p>
      </article>
      <article>
        <h4>HolidayTaxis</h4>
        <p>A Brighton based travel company with offices around the world. Here I was able to work with several notable travel
          companies to implement custom whitelabel solutions.</p>
        <p><nuxt-link to="jobs/holidaytaxis/">Learn more about my time at HolidayTaxis.</nuxt-link></p>
      </article>
      <article>
        <h4>INTO University Partnerships</h4>
        <p>My breakout role into a completely different industry. Focusing on higher education, INTO gives me a chance to flex my front-end skills
          while learning about the .NET Core tech stack.</p>
        <p><nuxt-link to="jobs/into-university-partnerships/">Learn more about my time at INTO University Partnerships.</nuxt-link></p>
        <hr>
      </article>
      <article>
        <h3>Wait, there's more...</h3>
        <h4>About me</h4>
        <p>It's hard to put into words what I'm capable of. Spreading it out all over the place might be a bit confusing and the introduction
          on this page, I think, is way too small to get an idea of that! You can <nuxt-link to="about">learn more about me here</nuxt-link> to get
          a better idea of who I am and what I can do.</p>
        <h4>About the knowledge I can share</h4>
        <p>Occasionally I like to write down a bit more about my achievements, or perhaps just my thoughts on particular topics.
          If you're interested in that you can <nuxt-link to="blog">find my blog here.</nuxt-link></p>
        <hr>
      </article>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head: {
    title: 'Taj Deluca - Front End Wizard',
    meta: [
      { hid: 'description', name: 'description', content: 'I\'m just a developer who made his own portfolio for fun... and profit.' }
    ]
  }
});
</script>

<style scoped>
article + article {
  margin-top: 1rem;
}

hr {
  background: linear-gradient(134deg, #3023ae 0%, #c86dd7 100%);
}
</style>
