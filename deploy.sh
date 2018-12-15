VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Please pass a version as command arg"
  exit 1
fi

echo "Deploying new version $VERSION to gh-pages branch"

cd deploy

git rm -r .

cp ../dist/*.* .
cp ../CNAME .

rm service-worker.*
cp ../src/service-worker.js .

rm *.map

cd ..

node post-build.js ${VERSION} deploy

node_modules/babel-minify/bin/minify.js ./deploy/service-worker.js > ./deploy/service-worker.min.js

cd deploy

rm service-worker.js
mv service-worker.min.js service-worker.js

if [ -f "./styles/*.*.map" ]; then
  rm ./styles/*.*.map
fi

git add -u && git add .

git commit -m "Version ${VERSION}"

git push -u origin gh-pages

