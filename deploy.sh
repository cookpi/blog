#!/usr/bin/env sh

npm run docs:build
cd dist/docs
echo "blog.cookapps.io" > CNAME
git init
git add -A
git commit -m 'deploy via travis'
git push -f https://__GITHUB_TOKEN__@github.com/cookpi/cookpi.github.io.git master
