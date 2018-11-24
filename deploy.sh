VERSION=$1

if [ -z "$VERSION" ]; then
  echo "Please pass a version as command arg"
  exit 1
fi

echo "Deploying new version $VERSION to gh-pages branch"

cd deploy

git rm -r .

mkdir images

cp ../dist/*.* .
cp ../CNAME .

if [ -f "./styles/*.*.map" ]; then
  rm ./styles/*.*.map
fi

git add -u && git add .

git commit -m "Version ${VERSION}"

git push -u origin gh-pages

