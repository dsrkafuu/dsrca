const { merge, cloneDeep } = require('lodash');

const eslint = {
  base: require('./eslint/base'),
  react: require('./eslint/react'),
};

/**
 * @param {'base'|'react'} preset
 * @param {import('eslint').ESLint.ConfigData} config
 * @returns {import('eslint').ESLint.ConfigData}
 */
function getESLintConfig(preset, config = {}) {
  return merge(cloneDeep(eslint[preset]), config);
}

const prettier = require('./prettier');
/**
 * @param {import('prettier').Options} config
 * @returns {import('prettier').Options}
 */
function getPrettierConfig(config = {}) {
  return merge(cloneDeep(prettier), config);
}

module.exports = {
  getESLintConfig,
  getPrettierConfig,
};
