# abdulhannan.in

Personal site, built with [Astro](https://astro.build) and deployed to GitHub
Pages by `.github/workflows/deploy.yml` on every push to `master`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Editing

- **Words:** everything the home page says lives in `src/data/site.ts`.
- **Photos:** put files in `public/images/` and list them under
  `offTheClock.photos` in `src/data/site.ts` (one to four).
- **Writing:** add markdown to `src/content/posts/`. A post builds only once its
  front matter says `draft: false`; `example-draft.md` shows the fields. The
  `/writing` page is not linked from the home page yet.
- **Design intent:** `PRODUCT.md` records who the site is for and what it must
  not become.

Old URLs kept on purpose: `/resume.pdf`, `/SpeechMap.pdf`,
`/assets/SpeechMap.pdf`, `/batchnorm_rep.pdf`, and `/bot.html`.
