<template>
  <div>
    <header>
      <Header heading="Hi there! I'm Taj."
        subheading="But you can call me a Front-End wizard."
        header-background-gradient-start-colour="#3023ae"
        header-background-gradient-end-colour="#c86dd7" />
    </header>
    <div class="container">
      <h3>A little bit about me...</h3>
      <article>
        <p>A (primarily) front-end developer born and raised in the United Kingdom. My goal is to make the web a better place for everyone, one
          website at a time. Whether that's by optimising content delivery or creating an accessible experience I find that I love all aspects
          of web development!
        </p>
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
        <p>Another Brighton based travel company with offices around the world. Here I was able to work with several notable travel
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
</style>
