# Short php snippets for Magento 1

## Languages

### Get the current language code

    <?php $language_code = Mage::app()->getLocale()->getLocaleCode(); ?>

## Widgets

### Call a widget from a template

    <?php
    $filter = Mage::getModel('widget/template_filter');
    echo $filter->filter('{{widget type="vendor_productwidget/category_grid" store_id="12" category_id="1234" num_products="8"}}');
    ?>

## Static blocks

### Load a static block

    <?php echo $this->getLayout()->createBlock('cms/block')->setBlockId('tadaaz_text')->toHtml(); ?>
