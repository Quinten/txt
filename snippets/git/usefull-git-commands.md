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

## Pull requests

### Prepare a branch to propose a pull request with

    git remote add upstream git@github.com:magento/magento2.git
    git remote update
    git checkout -b upstream upstream/master
    git cherry-pick <SHA hash of commit>
    git push origin upstream
