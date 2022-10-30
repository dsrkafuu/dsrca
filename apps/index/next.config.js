const transpileModules = require('next-transpile-modules');
const { i18n } = require('./next-i18next.config');

const withTranspileModules = transpileModules(['@dsrca/react']);

/** @type {import('next').NextConfig} */
module.exports = withTranspileModules({
  i18n,
  reactStrictMode: true,
});
