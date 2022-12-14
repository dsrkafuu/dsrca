import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: './dist',
  themeConfig: {
    name: 'react',
    nav: [
      {
        title: 'Docs',
        link: '/components/button',
      },
    ],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700',
    },
  ],
});
