# css less snippets

Acces documentation on any Magento 2 installation https://pedicurepecceu.be/pub/static/frontend/Magento/blank/en_US/css/docs/index.html

### icon font parameters

    .lib-icon-font(
        @_icon-font-content,
        @_icon-font: @icon-font,
        @_icon-font-size: @icon-font__size,
        @_icon-font-line-height: @icon-font__line-height,
        @_icon-font-color: @icon-font__color,
        @_icon-font-color-hover: @icon-font__color-hover,
        @_icon-font-color-active: @icon-font__color-active,
        @_icon-font-margin: @icon-font__margin,
        @_icon-font-vertical-align: @icon-font__vertical-align,
        @_icon-font-position: @icon-font__position,
        @_icon-font-text-hide: @icon-font__text-hide,
        @_icon-font-display: @icon-font__display
    );

### use an svg inline

    @pattern-svg: "<svg xmlns='http://www.w3.org/2000/svg' width='2' height='1' viewBox='0 0 2 1'><rect fill='@{color-deep-blue}' x='0' y='0' width='1' height='1' /><rect fill='@{color-lite-blue}' x='1' y='0' width='1' height='1' /></svg>";
    @pattern-svg-escaped: escape(@pattern-svg);
    @pattern: "data:image/svg+xml,@{pattern-svg-escaped}";
    
    .some-element {
        background: url(@pattern) repeat center center;    
    }

### Style links

In this case make a hidden link

    .lib-link(
        @_link-color: @primary__color,
        @_link-text-decoration: none,
        @_link-color-visited: @primary__color,
        @_link-text-decoration-visited: none,
        @_link-color-hover: @primary__color,
        @_link-text-decoration-hover: none,
        @_link-color-active: @primary__color,
        @_link-text-decoration-active: none,
    );

### Unhide something that is hidden with a mixin

    .lib-visually-hidden-reset();





