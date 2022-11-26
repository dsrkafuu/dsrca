import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    transformer: 'esbuild',
    output: './es',
  },
  cjs: {
    transformer: 'esbuild',
    output: './lib',
  },
});
