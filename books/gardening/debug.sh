#!/bin/zsh

set -e

# set up node environment
# nvm use default

# copy files 
gitbook build
cp -R _book/ /Users/r5by_/git/hexo-blog/public/books/gardening

# deploy
cd /Users/r5by_/git/hexo-blog
. debug.sh
cd -
