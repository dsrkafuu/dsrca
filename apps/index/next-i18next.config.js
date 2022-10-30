const path = require('path');

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  localePath: path.resolve(__dirname, './locales'),
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
};
