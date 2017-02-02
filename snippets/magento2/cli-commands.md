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

Removing the https redirect

    ./vendor/bin/n98-magerun2 config:set "web/secure/use_in_adminhtml" 0
    ./vendor/bin/n98-magerun2 config:set "web/secure/use_in_frontend" 0

Remove minification

    ./vendor/bin/n98-magerun2 config:set "dev/template/minify_html" 0
    ./vendor/bin/n98-magerun2 config:set "dev/js/minify_files" 0
    ./vendor/bin/n98-magerun2 config:set "dev/css/minify_files" 0

Remove static signing

    ./vendor/bin/n98-magerun2 config:set "dev/static/sign" 0

### Alternative method to change the base urls

    bin/magento setup:store-config:set --base-url "http://domain.dev"
