#!/bin/sh

# set up node environment
nvm use default

# copy files 
cp -R _book/ /Users/r5by_/git/hexo-blog/public/books/gardening

# deploy
cd /Users/r5by_/git/hexo-blog
. deploy.sh
cd -
