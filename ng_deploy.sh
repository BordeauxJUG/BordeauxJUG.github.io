#!/bin/bash

echo "-------------------------------------"
echo "Deploying to master branch (GH PAGES)"
echo "-------------------------------------"

dist=../dist/             # tmp dist directory

# Build the content of the website into dist-build folder
rm -rf $dist

# Cloning master branch (GH PAGES) into dist folder
git clone -b master ${1-git@}github.com/BordeauxJUG/BordeauxJUG.github.io.git $dist

# Build app
ng build -prod

# Add new resources
cp dist/* $dist
cd $dist
git add .

# Pushing to master branch
if [ $(git ls-files --deleted | wc -l) -ne 0 ]; then git ls-files --deleted | sed -e 's/^/"/g' -e 's/$/"/g' | xargs git rm; fi;
git commit -m "Auto-deploy - dist"
git push origin master

# Clean generated folders
cd ..
rm -rf $dist
rm -rf dist
