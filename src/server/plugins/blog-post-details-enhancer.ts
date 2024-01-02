import { readingTime } from 'reading-time-estimator'

const afterParse = 'content:file:afterParse' as any
const beforeParse = 'content:file:beforeParse' as any

export default defineNitroPlugin((nitroApp) => {
  const fileBodies: { [key: string]: string } = {}
  nitroApp.hooks.hook(beforeParse, (file: any) => {
    if (file._id.endsWith('.md')) {
      fileBodies[file._id] = file.body
    }
  })
  nitroApp.hooks.hook(afterParse, (file: any) => {
    if (file._id.endsWith('.md')) {
      file.readingTime = readingTime(fileBodies[file._id], 180, 'en')
    }
  })
})
