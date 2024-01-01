export default defineNuxtConfig({
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'styles/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
  },
  content: {
    nestedProperties: ['categories.customSlug']
  },
  hooks: {
    'content:file:beforeInsert': async (document) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text);
        const { $content } = require('@nuxt/content');

        document.readingTime = time;

        if (document.dir === '/blog' && document?.categories) {
          // Replace tags with the processed version.
          if (typeof $content === 'function') {
            const fullCategories = await $content('/blog/categories')
              .where({ customSlug: { $in: document.categories } })
              .fetch();

            document.categories = fullCategories;
          } else {
            document.categories = null;
          }
        }
      }
    }
  },
  typescript: {
    typeCheck: true,
  }
})
