# CLI commands

### Change the base-urls with magerun2

Interactively get the composer package

    composer require

Then type:

  n98/magerun2
  
And hit enter a couple of times.

List all base-urls

    ./vendor/bin/n98-magerun2 sys:store:config:base-url:list

Change the urls

    ./vendor/bin/n98-magerun2 config:set "web/unsecure/base_url" "http://domain.dev"
    ./vendor/bin/n98-magerun2 config:set "web/secure/base_url" "http://domain.dev"



