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
  const globPattern = ['*', '!service-worker.js', '!**.map'];
  let filesToCache = [];

  fs.readdirSync(distFolder).forEach(file => {
    filesToCache.push(file);
  });

  filesToCache = micromatch(filesToCache, globPattern);
  return filesToCache.map(file => `'${file}'`);
}
