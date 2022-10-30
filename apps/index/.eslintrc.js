const { getESLintConfig } = require('@dsrca/config');

module.exports = getESLintConfig('next', {
  settings: {
    next: {
      rootDir: './apps/*/',
    },
  },
});
