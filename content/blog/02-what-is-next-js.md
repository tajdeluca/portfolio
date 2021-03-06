---
customSlug: what-is-next-js
title: What is Next.js?
subtitle: A big picture overview of what it is and what it can do.
description: It's an incredibly useful server side and static generation framework, but what does that mean and how does it help? Let's dive in and I'll give you the big picture overview of something all the cool developers are using.
gradientStartColour: '#007cf0'
gradientEndColour:  '#00dfd8'
createdAt: 2021-03-06
categories: [journey-to-kubernetes]
---

### In a nutshell 🥜
To quote [their website](https://nextjs.org) directly Next.js is "The React Framework for Production".

That's it. Article over.

Just kidding, we've got so much more to talk about! Why don't you take a seat and we'll go into it a bit more.

Next.js builds upon some concepts called "Server Side Rendering" and "Static Site Generation" which you may have seen as the acronyms "SSR" and "SSG" respectively. These concepts were developed to aid in the performant delivery of content to an end user. With that comes the added benefit of:

1. Improved SEO, because web crawlers don't need JavaScript to crawl the output
1. Improved performance, because we can now optimise at a much more targeted scale (imagine not having to deliver a whole bundle of styles/scripts/etc. at once)
1. Simpler routing. Defined by folders rather than configuration.
1. Backend functionality, without the need for a traditional backend setup.

With that let's talk a bit about SSR and SSG to understand what the differences are and how you might benefit from either.

---

### Server Side Rendering
With Single Page Applications (SPAs) came great power... and a great shirking of responsibilities. Brilliant, we can deliver a whole application to an end user and we won't have to deal with any of processing! That will work out absolutely fine for everyone involved... everybody... absolutely nobody will be impacted by this... except _maybe_...

1. Mobile users
1. Users with bad internet
1. Users that don't have i9 processors and 64GB of RAM
1. Users across the world who fit into all of the above
1. Developers who need to implement internationalization (i18n) functionality
1. Poor poor marketing departments who need your site to be visible in search engines with strange requirements

We can try to mitigate the internet/delivery problem by serving the SPA through a Content Delivery Network (CDN) which will distribute the app across the world (or wherever you choose it to). That's one problem solved. But we still have a plethora of other issues that we would need to address. Performance, SEO and i18n complications are quite important for the modern web so this seemed like a pretty big oversight.

I'll touch on i18n a bit more as this, in Angular for example, requires multiple builds to be performed to create different versions of the application in different languages. Then you need to set up some custom routing _somewhere_ for your web server to handle this. Trust me... I've felt that pain. What can we do to mitigate this though?

Well some genius, or perhaps a group or even a large team of geniuses, came up with the idea of pre-rendering an application on the server before delivering the rendered content to the end user! This has the effect of:

1. Payloads being smaller (less to send back as there's less to process)
1. Allowing us to optimise any assets we may send back, such as images
1. Search engines (not very advanced ones) being able to crawl the site as normal
1. Translations being hot-swappable upon each request (thus not delivering an entire applications worth of translations)

This sounds great, but it comes with one big downside. It's a lot of work to make a site performant. This translates across to the code and the bootstrapping required to do such processing. It becomes _very_ easy to create a a gigantic mess of code that's very fragile and nobody knows how to change.

As of writing no framework be it React, Vue or Angular provides a first party framework for doing this. They do provide guidance on how to achieve it though and as a result we have frameworks such as Next.js, which allows us to do this out of the (third party) box.

#### SSR in a nutshell
Server Side Rendering is a method to take a single page application and pre-render a route at request time to deliver an optimised bundle to the end user. This may involve optimisation (smaller images, less HTML etc.), SEO and DevOps improvements. However it comes at a development cost which can be addressed by utilising third party frameworks such as Next.js. 

---

### Static Site Generation
Static Site Generation (SSG) has an end result that is similar to what SSR provides and in certain cases can replace it entirely depending on your use cases. The key difference between SSG and SSR is that SSG pre-renders a route at _build_ time rather than _runtime_. This is particularly useful if you have pages that don't change very often.

A good example might be a product page where the product itself doesn't change that often but things like quantities and prices do. The bulk of the content could be rendered in advance and any dynamic content can be loaded at runtime. Generally you would use this because:

1. You want to reduce API calls to rate-limited APIs (like Contentful or another headless content management system)
1. You need to reduce server side costs, and file hosting is much cheaper than application hosting
1. You have a lot of content that you don't change that often
1. You really want to ensure the fast delivery of content to an end user

In a similar fashion to SSR, SSG can involve code bloat when trying to write the renderer yourself. It's possible, but I advise against it. Especially since frameworks like Next.js take that pain out of the equation for you and handle things you may neglect (like meta tags, oddly specific but they can be quite useful for stuff like preloading).

---

### So, why use Next.js?
There are a multitude of reasons but here are the main selling points:

1. You use React, or are planning to
1. You have a need to deliver content to an end user _fast_
1. You want to reduce costs
1. You just want to develop and not think too much about the overhead of optimisation

Next.js will have a serious net benefit to you if you fit into these categories. There is one thing you should take into consideration though...

---

### Hosting
Next.js allows you to host things in 3 ways, so far as I can tell. All of which are [documented here](https://nextjs.org/docs/deployment).

#### Via Vercel
Since Next.js was made by Vercel it stands to reason that they would have a very seamless integration and deployment strategy! This is by _far_ the easiest way to get a Next.js site up and running. I got a site up and running in about 5 minutes (most of that was logging into GitHub and typing in my MFA on a laptop that I didn't have my password manager on...) which is incredibly quick!

#### Via a custom Node.js server
If you're like me, you work for a company that values the decisions they make in regards to infrastructure. So introducing a new one (Vercel) is a __hard__ sell. If you host on, what I consider to be, the big 3 (Amazon Web Services, Azure or Google Cloud Platform) then you have _plenty_ of options available to you to get this done.

But it takes a bit of thought and I will hopefully figure out a good way to do this (in Azure in particular, but it should work across platforms) later on in this series.

But do know, this _is_ possible (if a bit yucky through something like IIS). If you're using containers though, you are golden. You can use out of the box Next.js builds + runtimes without too much effort on top of that and put whatever webserver you want in front of it.

Azure people... I feel your pain. Try and convince your team to [use Linux based app services instead](https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs?pivots=platform-linux)?

#### Via Content Delivery Networks
Ok it doesn't need to be directly through a CDN but you can perform a [static HTML export](https://nextjs.org/docs/advanced-features/static-html-export) which allows you to serve your SSG content through one.

---

### That all sounds great! How do I get started?
Well, through the great [Next.js documentation](https://nextjs.org/docs/getting-started) of course! I've tried my best not to just rip from that and explain what I feel are the benefits and the downsides. I feel the downsides more come down to process and the limitations of certain organization structures though so I don't fault the framework at all for that! We all have to apply some realism to our dreams once in a while though.

---

### Are there alternatives for other frameworks?
Yes! In fact I use something called [NuxtJS](https://nuxtjs.org) for this website here. It offers the same benefits and was actually (I believe, I may be wrong on this) based on Next.js. It just uses Vue as a framework under the hood instead of React.

Angular though... sorry it's [a bit long winded](https://angular.io/guide/universal). Honestly I recommend you just cut your losses here and make Angular applications as small as possible and utilise them for admin specific tasks. Perhaps dashboards accessible to only a subset of authenticated users and things like that where performance isn't a huge concern. It is still a really great, opinionated, framework though!

---

### Closing thoughts
I hope you've enjoyed this little foray into the world of Next.js. If you have learned something new today as a result of reading this, then I have done what I set out to do. If this clicks with your experience of Next.js then it means I'm on the right track and if it doesn't make any sense at all... I must not have explained it properly. Please do ask me any questions you might have!

Next in the series we'll get stuck into Docker, containers and how they can help us.
