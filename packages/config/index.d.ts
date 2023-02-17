import { ESLint } from 'eslint';
import { Options } from 'prettier';

export function getESLintConfig(
  preset: 'base' | 'react' | 'next',
  config?: ESLint.ConfigData
): ESLint.ConfigData;

export function getPrettierConfig(config?: Options): Options;
