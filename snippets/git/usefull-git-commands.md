# Usefull git commnads

## Remotes

### Delete a remote branch (but keep locally)

    git push origin --delete branch-name

### View remotes

    git remote -v

### Remove remote

    git remote rm origin

## Submodules

### Init and update submodules in 1 command

    git submodule update --init --recursive

### Updating to latest tips of remote branches of submodules

    git submodule update --recursive --remote

## Pull requests

### Prepare a branch to propose a pull request with

    git remote add upstream git@github.com:magento/magento2.git
    git remote update
    git checkout -b upstream upstream/master
    git cherry-pick <SHA hash of commit>
    git push origin upstream

## Stashing

### An alternative to stashing, which let's you "stash" only a certain path

Stash it:

    git diff path/to/dir > stashed.diff
    git checkout path/to/dir

Pop it:

    git apply stashed.diff

## Tagging

### List tags

    git tag

### Create a tag

    git tag -a v0.0.1 -m "My first release"

### Create a new branch that looks like the tag

    git checkout -b version2 v2.0.0

## gh-pages

### Deploy a specific subfolder to gh-pages (in this case the pub/ folder)

    git subtree push --prefix pub/ origin gh-pages

