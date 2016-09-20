# cms html snippets

### insert an image from the themes folder

    <img src="{{view url="images/example.svg"}}" alt="" />

### insert a static block into another cms block or page

    {{block class="Magento\\Cms\\Block\\Block" block_id="block_identifier"}}

### insert a template into a block or page

    <div>{{block class="Magento\\Framework\\View\\Element\\Template" name="test_content" template="Vendor_Module::testpage.phtml"}}</div>
