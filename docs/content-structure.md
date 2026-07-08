# Content structure

Website content lives in `src/content`. The site is still static and code-managed, but the content is organized as CMS-like objects so it can be moved to a CMS later without rewriting the presentation layer.

## Where to edit content

- Global site metadata and footer copy: `src/content/site.ts`
- Header and footer navigation: `src/content/navigation.ts`
- Homepage content: `src/content/home.ts`
- Services page, service cards and compact service list: `src/content/services.ts`
- Method page and method steps: `src/content/method.ts`
- Sectors page and sector cards: `src/content/sectors.ts`
- Technology page content: `src/content/technology.ts`
- Contact page copy and contact CTAs: `src/content/contact.ts`
- Shared content types: `src/content/types.ts`

## Page content shape

Each page content file follows a CMS-ready shape:

```ts
{
  slug: "servicios",
  seo: {
    title: "Servicios",
    description: "..."
  },
  hero: {
    eyebrow: "Servicios",
    title: "...",
    description: "...",
    primaryCta: { label: "...", href: "..." }
  },
  sections: {
    ...
  },
  cta: {
    title: "...",
    description: "...",
    primaryCta: { label: "...", href: "..." }
  }
}
```

Page files compose sections from these objects. Components should receive content through props and stay focused on rendering UI.

## Why this is CMS-ready

The content layer uses stable fields such as `slug`, `seo`, `hero`, `sections`, `items`, and `cta`. These fields map cleanly to future document types or entries in WordPress headless, Sanity, Storyblok, Payload, Contentful, or another CMS.

Icon values are stored as string keys rather than React components. A future CMS can store the same keys, while the frontend keeps control over the actual icon components.

The compact service list uses `intro`, `items` and optional contextual notes. Each item has a `title` and `description`, which keeps Fernando's recognizable service blocks visible while preserving a compact, CMS-ready structure.

## Future CMS integration

When a CMS is introduced, add a data-fetching layer that returns the same TypeScript shapes currently exported from `src/content`. Page components should not need a major rewrite if the fetched CMS data matches these types.

Do not add CMS packages, WordPress, API routes, authentication, database code, Supabase, preview mode, or CRM features yet. The current version should remain static until a CMS is explicitly selected.
