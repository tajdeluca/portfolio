---
title: The what’s, why’s and how’s of my personal website
subtitle: My thoughts and learnings after rebuilding my site (again)...
description: The start of my journey from radio silence to a small social media presence. An overview into why I created this website and the tools and frameworks I used to achieve my goal.
gradientStartColour: '#c86dd7'
gradientEndColour:  '#3023ae'
createdAt: 2020-11-01
---

### It's hard to market yourself when all your work is private.
As I've worked at <nuxt-link to="/experience/into-university-partnerships">INTO</nuxt-link> I've come to understand that the way you market yourself is becoming increasingly important, especially as I progress in my career. It's hard to stand out when the world is full of talented individuals and you like keeping to yourself! Do you struggle to represent yourself in interviews? Find it hard to show the results of what you've implemented because of commercial secrecy or some other such thing? I know I've had problems with it! So that's why I set out to fix that.

#### Who is this aimed at?
This blog post assumes you have at least a basic understanding of the following:

- Javascript Frameworks
- AWS
- Continuous Integration/Continuous Deployment practices (CI/CD)
- Content Delivery Networks (CDNs)
- Server Side Rendering (SSR)
- Single Page Applications (SPAs)

If you're not too sure what these things are, then I would suggest giving them some thought and doing some research into them as all of these things are touched upon during this article.

---

### What was the goal?
With the vast array of tools and frameworks out there... what did I decide upon? How did I choose it? Well I'll tell you it's not easy! I will say though that at the end of the day, for me, it came down to:

1. Cost
1. Performance
1. Simplicity
1. Accessibility

Cost is easy enough to understand. I don't want to pay the world for hosting! Tying it into simplicity I don't want to worry about traffic, I don't want to worry about things going down or needing to update software. All of these things are absolutely fantastic to experience if you're not too experienced with setting up web servers and deployment processes but... I have been there and I have seen better ways since.

So what about performance? I'd like my website to perform well in of itself. Can't take up too much memory and I don't want people to spend _minutes_ downloading assets. So I want to make it lean, but I want the power of a framework too (that much I've already decided). There's also the delivery of the site to the end user. I want to be able to showcase, albeit subtly, that I am competent in delivering software efficiently across the world.

Simplicity is its own reward in my eyes. I knew that I wanted to start writing blog posts. I knew that writing them in HTML would be an utter pain. I tried that and just found it really difficult to maintain the larger content pages. You may have heard of the [Jamstack](https://jamstack.org/what-is-jamstack/) architecture and this is what gave me the greatest inspiration! I really liked the idea of writing my content in markdown and pre-rendering everything to make pages as efficient as possible.

Accessibility ties in to both performance and simplicity I would say. I want my site to be accessible across the world, in a reasonable amount of time, and I also want it to be easy to navigate. Mobiles, tablets, screen readers and beyond should be able to have a good experience here!

So the basic requirements I have are:

- Pre-rendered pages
- Markdown content to make blog writing easy
- Low file size footprint

---

### The hosting
This was a no-brainer for me. I know I want to host pre-rendered pages, which will just be static HTML in the end, so I knew exactly what my options were. What I ended up deciding on and using was:

1. AWS Route 53 - For the DNS routing
1. AWS S3 - For the file hosting
1. AWS CloudFront - To serve the static files, from a private bucket, across the world

Really simple and straightforward, with only IAM roles really being the complicated thing here. If I wanted to be really lazy I could have used something like [Vercel](https://vercel.com) to host for me. I wanted to flex my DevOps muscles a bit though so I went with the slightly more difficult option!

---

### The deployment
Ok you know where you're going to host it, but how do you get it there? Well there's lots of options... I could use AWS CodeDeploy, or maybe just manually sync to the S3 bucket if I really wanted to... (I didn't) but is there a simpler way?... What's that? GitHub recently released [CI/CD tools](https://github.com/features/actions)??? Amazing, let's use that then!

So GitHub and GitHub Actions it is.

---

### The frameworks
There is one absolute in the front end world and that is that there will always be too many frameworks to choose from! Nowadays there's what I consider to be the 3 big players in the JavaScript framework space:

- Angular
- React
- Vue

I have worked with both Angular and Vue in the past, but have yet to go beyond reading documentation for React. So how did I make my choice? What were the benefits and downsides of each?

#### Angular
With the server side rendering aspect in mind, I already knew that Angular's documentation on it is particularly lacking. In my opinion this particular feature was an afterthought to them as it's just not as intuitive to set up as it is for Vue and React. But perhaps I'm too harsh as the frameworks I would end up comparing, Next and Nuxt, are both third party.

##### Benefits
- I use Angular every day in my current job. I know the ins and outs and the pain points.
- It's opinionated. If there's a way to do something, it's likely the Angular team has documented it.
- It's got out of the box Typescript support. Useful if I want to keep the codebase clean.

##### Downsides
- The build times are quite long. And get even longer as applications grow.
- The real power of Angular comes from hooking it up to various services and tying it all together.
    - My site is simple, do I really need all that extra power?
- Sometimes it can be very difficult to work around certain aspects. Customisation of components for example can be tricky.

#### React
React is a bit of an interesting one for me. I've only really ever looked at the documentation for it and I have strong opinions that it is inherently ugly code to write. There's something about the way components look that I just dislike. I'm sure that's a really silly opinion to have on it as it's become so widespread for a reason! From what I have seen it's incredibly extensible and can be moulded to do pretty much anything you need it to, from native applications to single page applications.

##### Benefits
- It's something new to learn. Always good to keep your skills fresh and up to date.
- It's got a lot of flexibility. If there's a problem it's likely someone has already come up with a solution.
- There's a _lot_ of third party support for all sorts of tools.
    - From design systems, to mobile applications... honestly it's all so cool!

##### Downsides
- To me, the code is ugly. I'm working on this opinion and I feel if I could work with it more regularly I would learn to love it.
- Maybe it's a bit _too_ flexible. There's a lot of bootstrapping to be done in some cases.

#### Vue
I've worked with this in the past and I have to say there's one thing I really loved about this framework. Single File Components. It's just such a nice addition to a framework which makes it a pleasurable experience to write component based code. It seemed like a natural progression of keeping your styling, script and template separate yet bringing them together in a way that doesn't particularly conflict with itself.

It's kind of the dark horse of the 3 frameworks as it seems to have a much smaller following (for now!). However I have to say that working with it, and the documentation behind it, is solid.

##### Benefits
- Well documented. The docs are extensive and note the methodology behind everything.
- Easy to work with.
- Has hot reloading capabilities. Really useful when changing small parts of the site at a time!

##### Downsides
- Not the most popular of frameworks. It's difficult to justify in commerical environments as a result.
- Like React it can be tricky to set up sometimes. Webpack configs can get a bit crazy!

#### Biases aside...
It was always going to be React vs Vue for me. I actually tried an Angular single page application before creating the current iteration but was left wanting when it came to rendering performance. With both React and Vue it's possible to perform an incredible level of micro-optimisation because they allow you to modify the build process so easily. Hot reloading is also a big plus and I find Angular to be quite bulky in this regard.

---

### React vs Vue - What do they offer?
I mentioned earlier that I might be being too harsh on Angular for not providing a decent server side rendering option that's as intuitive to set up as a single page application. It's an incredibly powerful framework with several CLI (command line interface) options i haven't explored so I will give it the benefit of the doubt and chalk it up to a lack of knowledge on my part.

However what I do know is that both React and Vue have some very good third party options to do exactly what I want it to:

- Next.js for React
- Nuxt.js for Vue

Both are frameworks that enable concepts such as server side rendering and static website generation to be applied to their respective frameworks. This comes with the added benefits of better search engine optimisation (SEO), performance (smaller bundle sizes, don't have to render everything) and with that the ability to pre-fetch information ahead of time before sending it across to the user. Both are really awesome tools and I'm under the impression that Nuxt.js was actually inspired by Next.js.

I've decided to go with [Nuxt.js](https://nuxtjs.org) for my portfolio but I urge any React developers who may be reading to check out [Next.js](https://nextjs.org) if you haven't already! You can apply exactly the same concepts as I have with Nuxt.

---

### Nuxt wins!... Now what?
Ok it may sound like the above was a huge ordeal for me but really it wasn't! These sorts of things can be thought about in the space of a few hours, though I will say take care if applying to anywhere you work. There's often special cases you need to consider where a particular solution won't work.

So with that in mind, it turns out Nuxt makes it really easy to create an application...

```bash
npx create-nuxt-app <project-name>
```

That's honestly it... It takes you through all the options you really need to set up. I opted for Typescript and a [static compilation](https://nuxtjs.org/docs/2.x/concepts/static-site-generation) setup.

So all I have to do is style and write some stuff about myself, because Nuxt handles the routing via folders already! It's so nice... honestly.

---

### The content
So Nuxt has this concept of [dynamic pages](https://nuxtjs.org/docs/2.x/directory-structure/pages#dynamic-pages) which is what I'm going to heavily leverage for things like where I've worked and these blog posts. I don't want to have to continuously write HTML manually for all of these things and I find markdown much easier to write content in... so let's use a very handy plugin called `@nuxt/content` to allow me to do that.

```bash
npm install --save @nuxt/content
```

I won't go into great detail here but essentially it allows you to go off and grab markdown content from a folder. It's all explained here on the [Nuxt Content](https://content.nuxtjs.org) site.

I did run into a problem with the Typescript parsing with this when it came to adding the [front matter](https://content.nuxtjs.org/writing#front-matter) data to the head of the page. Adding `:any` afterwards seemed to resolve it, but I don't know if I should be ok with that...

So the following erroneous code:

```typescript
// Had errors
head() {
  return {
    title: `Taj Deluca - Front End Wizard - Gradient Shift - ${this.post.title}`,
    meta: [
      { hid: 'description', name: 'description', content: this.post.description }
    ]
  }
},
```

Became the following working code:

```typescript
// No errors now, woo?
head(): any {
  return {
    title: `Taj Deluca - Front End Wizard - Gradient Shift - ${this.post.title}`,
    meta: [
      { hid: 'description', name: 'description', content: this.post.description }
    ]
  }
},
```

Writing the code is straightforward, now for the deployment.

---

### The Deployment
I wanted a concept of a preview URL and a production URL. Sometimes you want someone to proof read your content before you go live so it seemed like a good idea. It's also good practice for CI/CD deployments in general. Have a place where you can test your code before it goes live. Unless you subscribe to the "Production is the test environment" method... in which case... brave.

Utilising GitHub Actions I created both a `beta.yml` and `prod.yml` file, knowing that these would both basically be the same thing, just using different secrets. The secrets for the repository are where I store things like the S3 and CloudFront access keys. Never commit secrets to the repository after all! (And I really hope I didn't mistakenly do that... it's been a while...)

The basic actions I need to perform are:

1. Build
1. Test
1. Configure
1. Deploy

What's the configure step you may ask, well that's the step where I move around some extra files that will differ on Live compared to everywhere else. At the moment that means I don't want bots crawling the site, so it involves copying across a different `robots.txt` file.

So the expanded list of actions is:

1. Build
    - Install Node.js
    - Install packages
    - Run nuxt generation
1. Test
    - Run Cypress tests on generated site
1. Configure
    - Copy across correct robots.txt
1. Deploy
    - Sync deployment files to S3
    - Clear CloudFront caches so it's all available.

It was simple enough to do! The main pain point I had here was getting the IAM permissions set up correctly! There is documentation on each respective action ([jakejarvis/s3-sync-action](https://github.com/jakejarvis/s3-sync-action/issues/10) and [chetan/invalidate-cloudfront-action](https://github.com/chetan/invalidate-cloudfront-action)) which will let you know what you need to set those up.

There was another issue with CloudFront where I had to set up a Lamda@Edge function to route all traffic from folders to `index.html` where possible. Unfortunately CloudFront doesn't support this out of the box.

So with that I have a very satisfying pipeline set up and it all works really nicely!

---

### Why go through the effort?
Two reasons. For fun, obviously! There was also the factor of cost. Previously I was hosting a site on an EC2 instance and although it's fairly affordable even the cheaper option which was good for my use case was still costing me around $14USD per month.

By switching my site to be hosted on S3 and served through Cloudfront I reduced that cost to less than $1USD per month, which is pretty great! I honestly don't get much traffic so I'm happy with that.

The fun aspect for me is experimenting with all sorts of technology. GitHub actions is fairly new and I've always wanted to create a statically generated site. It has made my life so much easier when it comes to content addition and I don't think I can go back to writing out all that HTML myself!

It's also really satisfying to see a website I've made perform really well. I like my sites to be quick and not laggy.

---

### Can I see the code?
Of course, I've now opened it up for anyone to access it and you can [find the repository here](https://github.com/tajdeluca/portfolio).
