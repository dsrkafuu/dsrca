const {
  FAVICON__PWA_192X192_PNG,
  FAVICON__FAVICON_ICO,
} = require('@dsrca/cdn');

/** @type {import('@docusaurus/preset-classic').Options} */
const presetConfig = {
  docs: {
    sidebarPath: require.resolve('./sidebars.js'),
  },
  theme: {
    customCss: [require.resolve('./src/global.scss')],
  },
};

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  navbar: {
    title: 'DSRDOCS',
    logo: {
      src: FAVICON__PWA_192X192_PNG,
    },
    items: [
      {
        position: 'left',
        label: '工具库',
        type: 'doc',
        docId: 'lib/index',
      },
      {
        position: 'left',
        label: '组件库',
        type: 'doc',
        docId: 'design/index',
      },
      {
        position: 'right',
        label: 'GitHub',
        href: 'https://github.com/facebook/docusaurus',
      },
    ],
  },
  footer: {
    copyright: `© 2020-${new Date().getFullYear()} DSRKafuU`,
  },
  prism: {
    theme: require('prism-react-renderer/themes/github'),
    darkTheme: require('prism-react-renderer/themes/dracula'),
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DSRDOCS',
  url: 'https://docs.dsrkafuu.net',
  baseUrl: '/',
  tagline: 'Dinosaurs are cool',
  favicon: FAVICON__FAVICON_ICO,
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  presets: [['classic', presetConfig]],
  themeConfig,
  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
