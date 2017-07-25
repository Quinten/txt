# jQuery snippets

### Multi framework dom ready shorthand

    jQuery(function ($) {
        // dom is ready
        // do stuff with $
    });

### Scroll detection

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        console.log(scroll);
    });
