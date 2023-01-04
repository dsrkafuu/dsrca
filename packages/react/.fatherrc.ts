import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    output: './es',
    targets: {
      chrome: 87,
      firefox: 78,
      safari: 14,
    },
  },
  cjs: {
    output: './lib',
    targets: {
      chrome: 87,
      firefox: 78,
      safari: 14,
    },
  },
});
