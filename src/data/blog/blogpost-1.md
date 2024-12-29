---
title: Moving to Astro for static site generation
pubDate: 29/12/2024 14:25
author: "Harry James Moss"
tags:
  - Jekyll 
  - Astro
  - HTMX
imgUrl: '../../assets/astro.jpeg'
description: Moving beyond Jekyll for static site generation

---

## Previous efforts
 
I've spent a long time (actually years) looking for a static site generator that I could be truly happy with. Truth be told, I'm still looking. Just for clarity, I'm talking about something for 'personal' websites that you might use for displaying portfolio work, career development, networking and the like. I really like [mkdocs](https://www.mkdocs.org/) for generatic static sites for documentation, and I think you should use it if that's what you're looking for. 

For a few years I stuck with [Jekyll](https://jekyllrb.com/)but never really got on with the ruby packaging cruft that comes along with it (sorry!). There was always a feeling that the themes were a bit... tired? Still, the zero-to-static-site time was quite low, and it's served me in the past. I've also dabbled with a few alternatives, but never really found them as good as Jekyll, which I still don't love. 

## Checking out AstroJS 

As is now tradition in the nether zone between Christmas and New Year, I had a look at updating my personal/career/interests website. A bit of googling led me to stumble across [Astro](https://astro.build/) as an alternative to Jekyll after I decided that a theme refresh wasn't quite going to cut it.

I've long resisted properly delving into a JavaScript framework, and that hasn't really changed. I skimmed the docs, was impressed by the demo sites on display, but really since I want a static site I skipped over _most_ of the bells and whistles and launched straight into browsing pre-created themes. I quickly found a theme I liked (shout out [Brutal](https://github.com/ElianCodes/brutal)!) and kicked things off with `npm`. I'm way more familiar with node/npm than I ever was with the gem/bundler world thanks to some DevOps-y projects I've been involved in at work, so this was a nice & familiar process that had me set up with a skeleton site in no time at all, save for the node install.

After tweaking things to my liking, resizing divs here and there and putting some of my own 'branding' up, things were pretty much done. As is normal with these things, it'll need work on in the future. What I'm mainly hoping for is to build on what I've got, rather than have a complete change of framework in six months time. Time will tell! And, on that...

## What about htmx?

I attended a great talk by Chris Cave-Ayland at RSLondon in 2023 (here's [the abstract](https://rslondon.ac.uk/rslondonsoutheast2023/abstracts/#ft7), but I sadly can't find the slides) extolling the virtues of [htmx](https://htmx.org/) and positioning it as part of the backlash against bloated JS frameworks, replacing JS where html would do instead. This is probably where I'll turn my attention next, incorporating some htmx into the static site. If it gets far enough, then it might turn into a template for use with Astro. Whether this is a good idea remains to be seen.


