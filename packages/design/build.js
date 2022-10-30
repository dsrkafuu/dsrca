const path = require('path');
const childProcess = require('child_process');
const fse = require('fs-extra');
const chalk = require('chalk');
const glob = require('glob');
const esbuild = require('esbuild');
const pkg = require('./package.json');

async function buildSCSS() {
  const outDir = path.resolve(__dirname, './style');
  fse.ensureDirSync(outDir);
  const scssFiles = glob
    .sync('./src/style/*.scss', { cwd: __dirname })
    .map((file) => path.resolve(__dirname, file));

  const workers = scssFiles.map((file) => {
    return new Promise((resolve, reject) => {
      try {
        const output = path.resolve(outDir, path.basename(file));
        fse.copyFileSync(file, output);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  });
  await Promise.all(workers);
}

async function buildJS() {
  const workers = ['cjs', 'esm'].map((format) => {
    const outDir = path.resolve(__dirname, format === 'cjs' ? 'lib' : 'es');
    fse.ensureDirSync(outDir);

    return new Promise((resolve, reject) => {
      try {
        esbuild.buildSync({
          entryPoints: glob
            .sync('src/lib/**/*.@(js|jsx|ts|tsx)', { cwd: __dirname })
            .map((file) => path.resolve(__dirname, file)),
          outdir: outDir,
          sourcemap: true,
          target: 'es2015',
          format,
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  });
  await Promise.all(workers);
}

async function buildTypes() {
  await Promise.all([
    new Promise((resolve, reject) => {
      childProcess.exec('tsc --outDir ./lib', { cwd: __dirname }, (error) => {
        error ? reject(error) : resolve();
      });
    }),
    new Promise((resolve, reject) => {
      childProcess.exec('tsc --outDir ./es', { cwd: __dirname }, (error) => {
        error ? reject(error) : resolve();
      });
    }),
  ]);
}

const startTime = Date.now();
console.log(chalk.blue(`[${pkg.name}] start building...`));
const workers = [buildSCSS(), buildJS(), buildTypes()];
Promise.all(workers).then(() => {
  const endTime = Date.now();
  console.log(chalk.blue(`[${pkg.name}] done within ${endTime - startTime}ms`));
});
