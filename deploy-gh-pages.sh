#!/bin/bash
git branch -D gh-pages &&
git branch gh-pages &&
git checkout gh-pages &&
mv gh-index.html index.html &&
git add --a &&
git commit -m 'Deploy' &&
git push --set-upstream origin gh-pages -f
