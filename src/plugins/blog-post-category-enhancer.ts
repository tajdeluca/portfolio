import readingTime from 'reading-time'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hook('content:file:beforeParse' as any, async (file: any): Promise<void> => {
    console.warn(file)
    if (file._id.endsWith('.md')) {
      file.readingTime = readingTime(file.text);
      if (file._dir === 'blog' && file?.categories) {
        // Replace tags with the processed version.
        const fullCategories = await queryContent('/blog/categories')
            .where({ customSlug: { $in: file.categories } })
            .find();
        file.categories = fullCategories;
      }
    }
  })
})
