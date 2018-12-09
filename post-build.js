const fs = require('fs');
const path = require('path');

let appVersion = 1;
let deployFolder = 'deploy';

const FILES_NOT_TO_CACHE = ['service-worker.js', 'service-worker.map'];

if (process.argv.length >= 2) {
  appVersion = process.argv[2];
}

if (process.argv.length >= 3) {
  deployFolder = process.argv[3];
}

console.log(`update serviceworker with version ${appVersion} in folder ${deployFolder}`);

const SERVICEWORKER_FILEPATH = `${__dirname}/${deployFolder}/service-worker.js`;

let serviceWorkerCode = fs.readFileSync(SERVICEWORKER_FILEPATH, { encoding: 'utf8' });

const filesToCache = readDir(path.join(__dirname, deployFolder));

serviceWorkerCode = serviceWorkerCode
  .replace('APP_VERSION = \'1\'', `APP_VERSION = '${appVersion}'`)
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
