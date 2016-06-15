# Short Magento XML snippets

### Remove a block

    <referenceBlock name="paypal.partner.right.logo" remove="true" />

### Move a block

    <move element="name.block.to.move" destination="target.parent.name" after="target.sibling.name" />

### Prepend a block

    <move element="name.block.to.move" destination="target.parent.name" before="-" />

### Append a block

    <move element="name.block.to.move" destination="target.parent.name" after="-" />

### Add a static block

    <referenceContainer name="my-static-block-parent-container-name">
            <block class="Magento\Cms\Block\Block" name="my-static-block-name">
                <arguments>
                    <argument name="block_id" xsi:type="string">my-static-block-id</argument>
                </arguments>
            </block>
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
