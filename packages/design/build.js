const path = require('path');
const fse = require('fs-extra');
const chalk = require('chalk');
const glob = require('glob');
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

const startTime = Date.now();
console.log(chalk.blue(`[${pkg.name}] [style] start building...`));
const workers = [buildSCSS()];
Promise.all(workers).then(() => {
  const endTime = Date.now();
  console.log(
    chalk.blue(`[${pkg.name}] [style] done within ${endTime - startTime}ms`)
  );
});
