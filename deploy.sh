set -e

npm run build

cd dist

echo > .nojekyll

git init
git checkout
git add -A
git commit -m "deploy"

cd -