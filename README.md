# Personal Website

This is the repo for my personal website, built using [Astro](https://astro.build/) with the [Brutal](https://github.com/eliancodes/brutal) theme.

The theme mentions:

> The theme has no JavaScript integration out of the box, but can always be added of course.

which is exactly what I was looking for here!

There is an RSS feed that outputs blog post content. I'll also be adding a Talks page, where the talks will be written in `reveal.js`.

## Local Dev Usage

I'm using `npm` here - `pnpm` is also a valid choice.

Start the site with

```bash
npm run dev
```

## Layout

### `components/blog/`

This directory contains all components for the blog.

### `components/errors/`

This directory contains all error components.

#### `components/errors/404.astro`

This component is used when a page is not found.

### `components/generic/`

This directory contains all generic components, reused over multiple pages.

### `components/home/`

This directory contains all components for the home page.

### `components/layout/`

This directory contains all layout components. For instance, the header and footer and `<head>` section.
