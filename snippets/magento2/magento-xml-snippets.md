# Short Magento XML snippets

### Remove a block

    <referenceBlock name="paypal.partner.right.logo" remove="true” />

### Add a static block

    <referenceContainer name="my-static-block-parent-container-name">
            <block class="Magento\Cms\Block\Block" name="my-static-block-name">
                <arguments>
                    <argument name="block_id" xsi:type="string">my-static-block-id</argument>
                </arguments>
            </block>
    </referenceContainer>
