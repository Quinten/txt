# cms html snippets

### insert a link with a url

    <a href="{{store url="about-us"}}">About us</a>

### insert an image from the wysiwyg folder

    <img src="{{media url="wysiwyg/banners/intro.jpg"}}" alt="" />

### insert an image from the themes folder

    <img src="{{view url="images/example.svg"}}" alt="" />

### insert a static block into another cms block or page

    {{block class="Magento\\Cms\\Block\\Block" block_id="block_identifier"}}

### insert a template into a block or page

    <div>{{block class="Magento\\Framework\\View\\Element\\Template" name="test_content" template="Vendor_Module::testpage.phtml"}}</div>

### insert a template with variables

    <div>{{block class="Magento\\Catalog\\Block\\Navigation" name="popular-categories-home" template="Magento_Catalog::navigation/subcat-thumbs.phtml" selected_category_ids="3912,3914,3915,3916,3917,3918,3919,3920"}}</div>
