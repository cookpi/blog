#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd dist/docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy by travis'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:cookappsdev/cookappsdev.github.io.git master

cd -
