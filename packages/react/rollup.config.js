const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');
const scss = require('rollup-plugin-scss');

const name = 'DSRReactComp';
const input = './src/index.ts';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const external = Object.keys(globals);

/** @type {import('rollup').RollupOptions} */
const umd = {
  input,
  output: {
    file: './lib/index.js',
    format: 'umd',
    name,
    sourcemap: true,
    globals,
  },
  external,
  plugins: [nodeResolve(), commonjs(), typescript(), scss()],
};

/** @type {import('rollup').RollupOptions} */
const esm = {
  input,
  output: {
    file: './es/index.js',
    format: 'esm',
    sourcemap: true,
  },
  external,
  plugins: [nodeResolve(), commonjs(), typescript(), scss()],
};

/** @type {import('rollup').RollupOptions} */
const cdn = {
  input,
  output: {
    file: './lib/index.min.js',
    format: 'umd',
    name,
    sourcemap: true,
    globals,
  },
  external,
  plugins: [nodeResolve(), commonjs(), typescript(), scss(), terser()],
};

module.exports = [umd, esm, cdn];
