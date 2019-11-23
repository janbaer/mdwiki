#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const appVersion = require('./package.json').version;
const distFolder = './dist';

const FILES_NOT_TO_CACHE = ['.git', 'CNAME', 'service-worker.js', 'service-worker.map'];

console.log(`update serviceworker with version ${appVersion} in folder ${distFolder}`);

const SERVICEWORKER_FILEPATH = `${__dirname}/${distFolder}/service-worker.js`;

fs.unlinkSync(SERVICEWORKER_FILEPATH);
if (fs.existsSync(`${SERVICEWORKER_FILEPATH}.map`)) {
  fs.unlinkSync(`${SERVICEWORKER_FILEPATH}.map`);
}
fs.copyFileSync('./src/service-worker.js', SERVICEWORKER_FILEPATH);

let serviceWorkerCode = fs.readFileSync(SERVICEWORKER_FILEPATH, { encoding: 'utf8' });

const filesToCache = readDir(path.join(__dirname, distFolder));

serviceWorkerCode = serviceWorkerCode
  .replace(/#1/g, appVersion)
  .replace('appFiles = []', `appFiles = [${filesToCache.join(', ')}]`);

fs.writeFileSync(SERVICEWORKER_FILEPATH, serviceWorkerCode, { encoding: 'utf8' });

function readDir(directoryPath) {
  const files = [];
  fs.readdirSync(directoryPath).forEach(file => {
    if (!FILES_NOT_TO_CACHE.includes(file)) {
      files.push(`'${file}'`);
    }
  });
  return files;
}
