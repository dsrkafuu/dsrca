const transpileModules = require('next-transpile-modules');

const withTranspileModules = transpileModules(['@dsrca/react']);

/** @type {import('next').NextConfig} */
module.exports = withTranspileModules({
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
});
