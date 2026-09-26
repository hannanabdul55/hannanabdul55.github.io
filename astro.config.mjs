// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://abdulhannan.in',
  // 'file' keeps the old Jekyll URL shape (e.g. /bot.html) working.
  build: { format: 'file' },
  trailingSlash: 'never',
});
