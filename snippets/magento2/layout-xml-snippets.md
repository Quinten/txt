# Short Magento XML snippets

### Remove a block

    <referenceBlock name="paypal.partner.right.logo" remove="true" />

### Move a block

    <move element="name.block.to.move" destination="target.parent.name" after="target.sibling.name" />

### Prepend a block

    <move element="name.block.to.move" destination="target.parent.name" before="-" />

### Append a block

    <move element="name.block.to.move" destination="target.parent.name" after="-" />

### Simple div container

    <referenceContainer name="my.parent.container">
        <container name="my.div.container" htmlTag="div" htmlClass="some-nice-css-class" after="-">
        </container>
    </referenceContainer>


### Add a static block

    <referenceContainer name="my-static-block-parent-container-name">
            <block class="Magento\Cms\Block\Block" name="my-static-block-name">
                <arguments>
                    <argument name="block_id" xsi:type="string">my-static-block-id</argument>
                </arguments>
            </block>
    </referenceContainer>

### Add a template with some php code in it

    <referenceContainer name="some-parent-container-name">
        <block class="Magento\Framework\View\Element\Template" name="a-fancy-name-for-my-block" template="Magento_Theme::html/some-template.phtml" />
    </referenceContainer>

### Add an ampty div with a class and a html comment

    <referenceContainer name="content">
        <container name="my-placeholder" htmlTag="div" htmlClass="placeholder-css-class" before="-">
            <block class="Magento\Framework\View\Element\Text" name="my-placeholder-comment">
                <arguments>
                    <argument name="text" xsi:type="string"><![CDATA[<!-- placeholder comment -->]]></argument>
                </arguments>
            </block>
        </container>
    </referenceContainer>

### Show an attribute (like 'brand') underneath the page title

    <referenceContainer name="columns.top">
        <block class="Magento\Catalog\Block\Product\View\Description" name="product.info.brand" template="product/view/attribute.phtml" after="page.main.title">
            <arguments>
                <argument name="at_call" xsi:type="string">getBrand</argument>
                <argument name="at_code" xsi:type="string">brand</argument>
                <argument name="css_class" xsi:type="string">brand</argument>
                <argument name="at_label" xsi:type="string">none</argument>
                <argument name="at_type" xsi:type="string">text</argument><!-- needed for things like dropdowns -->
            </arguments>
        </block>
    </referenceContainer>

### Breadcrumbs

    <referenceBlock name="breadcrumbs">
        <action method="addCrumb">
            <argument name="crumbName" xsi:type="string">Home</argument>
            <argument name="crumbInfo" xsi:type="array">
                <item name="title" xsi:type="string">Home</item>
                <item name="label" xsi:type="string">Home</item>
                <item name="link" xsi:type="string">/</item>
            </argument>
        </action>
        <action method="addCrumb">
            <argument name="crumbName" xsi:type="string">Contact Us</argument>
            <argument name="crumbInfo" xsi:type="array">
                <item name="title" xsi:type="string">Contact Us</item>
                <item name="label" xsi:type="string">Contact Us</item>
            </argument>
        </action>
    </referenceBlock>



