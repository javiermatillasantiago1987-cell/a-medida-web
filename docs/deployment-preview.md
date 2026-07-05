# Vercel preview deployment

This project is ready to deploy as a standalone Next.js website for review.

## Recommended setup

- Platform: Vercel
- Vercel project name: `a-medida-web`
- Connected GitHub repository: the standalone `a-medida-web` repository, not the CRM/Lito project
- Deployment type: preview or staging review URL
- Final production domain later: `www.a-medida.es`

This preview should be used to share the current corporate website with Fernando for review. It is not the final production launch.

## Deploy to Vercel

1. Push the latest `a-medida-web` repository changes to GitHub.
2. In Vercel, create a new project.
3. Import the standalone GitHub repository for `a-medida-web`.
4. Keep the framework preset as Next.js.
5. Use the default commands:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: Next.js default
6. Name the Vercel project `a-medida-web`.
7. Deploy and copy the generated Vercel preview URL.

## Assets

Public assets are served from the `public` directory. The current logo lives at:

`public/brand/amedida-logo.png`

In production it is available as:

`/brand/amedida-logo.png`

## Review checklist

After deployment, check the preview URL on desktop and mobile:

- Home page loads without layout shifts or missing assets.
- Header logo appears correctly and links to `/`.
- Mobile menu opens, closes and links navigate correctly.
- Footer logo and navigation appear correctly.
- Main pages work: `/`, `/servicios`, `/metodo`, `/sectores`, `/tecnologia`, `/contacto`.
- CTAs are visible and readable.
- Gradients remain visible without harming text contrast.
- Spanish copy reads correctly and no mojibake or broken characters appear.
- The site feels like a review/staging preview, not a final production domain.

## Do not add yet

Do not add WordPress, another CMS, authentication, database, Supabase, CRM features or production-domain configuration for this preview step.
