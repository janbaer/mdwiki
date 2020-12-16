#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const micromatch = require('micromatch');

const appVersion = require('./package.json').version;
const distFolder = './build';

console.log(`update serviceworker with version ${appVersion} in folder ${distFolder}`);
const SERVICEWORKER_FILEPATH = path.join(__dirname, distFolder, 'service-worker.js');

const filesToCache = readFilesToCache();

let serviceWorkerCode = fs.readFileSync(SERVICEWORKER_FILEPATH, { encoding: 'utf8' });

serviceWorkerCode = serviceWorkerCode
  .replace(/#1/g, appVersion)
  .replace('appFiles = []', `appFiles = [${filesToCache.join(', ')}]`);

fs.writeFileSync(SERVICEWORKER_FILEPATH, serviceWorkerCode, { encoding: 'utf8' });

function readFilesToCache() {
  const filesToCache = readFilesRecursively(distFolder)
    .map(f => f.replace('build/', ''))
    .filter(includeFile);

  return filesToCache.map(file => `'${file}'`);
}

function readFilesRecursively(folderPath) {
  const files = [];
  const dirEntries = fs.readdirSync(folderPath, { withFileTypes: true });

  for (const dirEntry of dirEntries) {
    const fullPath = path.join(folderPath, dirEntry.name);
    if (dirEntry.isDirectory()) {
      const filesFromSubfolders = readFilesRecursively(fullPath);
      files.push(...filesFromSubfolders);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function includeFile(file) {
  const filesToExclude = ['service-worker.js', '.map', 'env.js', 'CNAME'];
  return !filesToExclude.some(f => file.endsWith(f));
}
