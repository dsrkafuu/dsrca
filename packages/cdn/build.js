const path = require('path');
const fse = require('fs-extra');
const chalk = require('chalk');
const minify = require('./minify');
const pkg = require('./package.json');

const distPath = path.join(__dirname, './lib');
fse.ensureDirSync(distPath);
fse.emptyDirSync(distPath);

const startTime = Date.now();
console.log(chalk.blue(`[builder] [${pkg.name}] start building...`));

// 递归复制所有源文件路径
const srcPath = path.join(__dirname, './src');
const copyFolder = (src, dst) => {
  fse.ensureDirSync(dst);
  fse.readdirSync(src).forEach((file) => {
    const srcFile = path.join(src, file);
    const dstFile = path.join(dst, file);
    if (fse.statSync(srcFile).isDirectory()) {
      copyFolder(srcFile, dstFile);
    } else {
      const { content, outfile } = minify(srcFile, dstFile);
      if (content) {
        fse.writeFileSync(outfile, content);
      } else {
        fse.copyFileSync(srcFile, outfile);
      }
    }
  });
};
copyFolder(srcPath, distPath);

// 生成入口
function name(filePath) {
  const relname = path.relative(path.resolve(__dirname, './lib'), filePath);
  return relname.replace(/-/g, '_').replace(/\./g, '_').replace(/[/\\]/g, '__');
}
function jsdelivr(relpath) {
  return `https://cdn.jsdelivr.net/npm/${pkg.name}@${
    pkg.version
  }/lib/${relpath.replace(/\\/g, '/')}`;
}

let cjsTemplate = 'module.exports = {\n';
let esmTemplate = '';
let typeTemplate = '';
const genFolderHTML = (folder) => {
  fse.readdirSync(folder).forEach((file) => {
    const filePath = path.join(folder, file);
    if (fse.statSync(filePath).isDirectory()) {
      genFolderHTML(filePath);
    } else {
      cjsTemplate += `  ${name(filePath).toUpperCase()}: '${jsdelivr(
        path.relative(distPath, filePath)
      )}',\n`;
      esmTemplate += `export const ${name(
        filePath
      ).toUpperCase()} = '${jsdelivr(path.relative(distPath, filePath))}';\n`;
      typeTemplate += `export declare const ${name(
        filePath
      ).toUpperCase()}: string;\n`;
    }
  });
};
genFolderHTML(distPath);
fse.writeFileSync(path.join(distPath, 'index.js'), `${cjsTemplate}};`.trim());
fse.writeFileSync(path.join(distPath, 'index.esm.js'), esmTemplate.trim());
fse.writeFileSync(path.join(distPath, 'index.d.ts'), typeTemplate.trim());

const endTime = Date.now();
console.log(
  chalk.blue(`[builder] [${pkg.name}] done within ${endTime - startTime}ms`)
);
