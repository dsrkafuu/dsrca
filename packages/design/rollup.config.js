const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

const name = 'DSRDesign';
const input = './src/lib/index.ts';

/** @type {import('rollup').RollupOptions} */
const umd = {
  input,
  output: {
    file: './lib/index.js',
    format: 'umd',
    name,
    sourcemap: true,
  },
  plugins: [nodeResolve(), typescript()],
};

/** @type {import('rollup').RollupOptions} */
const esm = {
  input,
  output: {
    file: './es/index.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [nodeResolve(), typescript()],
};

/** @type {import('rollup').RollupOptions} */
const cdn = {
  input,
  output: {
    file: './lib/index.min.js',
    format: 'umd',
    name,
    sourcemap: true,
  },
  plugins: [nodeResolve(), typescript(), terser()],
};

module.exports = [umd, esm, cdn];
