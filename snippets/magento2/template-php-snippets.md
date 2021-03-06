# Short php snippets

## Url's

### Get current url

    <?php $_currentUrl = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Framework\UrlInterface')->getCurrentUrl(); ?>

### Create a slug from a string

    <?php $slug = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Catalog\Model\Product\Url')->formatUrlKey($string); ?>

### Get url of file inside the theme 'web' folder, like an image...

    <?= $block->getViewFileUrl('Magento_Theme::images/logo.svg') ?>

### Get store url for a general path

    <a href="<?= $block->getUrl('customer/account') ?>"><?= __('Account') ?></a>

## Pages

### Get meta data

    $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
    $_page_config = $objectManager->get('Magento\Framework\View\Page\Config');
    $_meta_title = strip_tags($_page_config->getTitle()->getShort());
    $_meta_description = strip_tags($_page_config->getDescription());
    $_meta_keywords = strip_tags($_page_config->getKeywords());

## Category's

### Get current category

    <?php $category = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Framework\Registry')->registry('current_category'); ?>

## Products

### Get more complete product

    $product = \Magento\Framework\App\ObjectManager::getInstance()->get('\Magento\Catalog\Model\ProductRepository')->getById($item->getProduct()->getId());

### Get product image

If your block inherits from `Magento\Catalog\Block\Product\AbstractProduct` you can get the image of a product with

    <?php $imageUrl = $block->getImage($_product, 'product_page_image_large')->getImageUrl(); ?>

(In case it doesn't inherit from that block, you can do:)

    <?php $imageUrl = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Catalog\Block\Product\AbstractProduct')->getImage($_product, 'product_page_image_large')->getImageUrl(); ?>

### Product add to wishlist link

If your block inherits from `Magento\Catalog\Block\Product\AbstractProduct` you can get the wishlistlink of a product with

    <a href="#" data-post='<?= $block->getAddToWishlistParams($_product) ?>'  class="action towishlist" data-action="add-to-wishlist" title="<?= __('Add to Wish List') ?>"><span><?= __('Add to Wish List') ?></span></a>

### Options of a product attribute

    $eavConfig = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Eav\Model\Config');
    $attribute = $eavConfig->getAttribute('catalog_product', 'attribute_code_here');
    $options = $attribute->getSource()->getAllOptions();

### Selected option of a product as text

    $productOptionTextValue = $_product->getAttributeText('attribute_code_here');

### Get raw value of a product attribute

    $productAttributeRawValue = $_product->getData('attribute_code_here');
    
### Get a formatted price

    $this->helper('Magento\Framework\Pricing\Helper\Data')->currency($_product->getPriceInfo()->getPrice('final_price')->getValue(), true, false);

## Users

### Check if a user is logged in

    <?php
        $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
        $customerSession = $objectManager->get('Magento\Customer\Model\Session');
        if ($customerSession->isLoggedIn()):
    ?>
    <span><?= __('<a href="/customer/account/logout">Log out</a>') ?></span>
    <?php endif; ?>

## Blocks

### Quickly get a static block

    <?php if ($sb = $block->getLayout()->createBlock('Magento\Cms\Block\Block')->setBlockId('my-block')->toHtml()) { ?>
        <?= $sb ?>
    <?php } else { ?>
        <p>Alt content</p>
    <?php } ?>

### Same but with a template

    <?php if ($tb = $block->getLayout()->createBlock('Magento\Framework\View\Element\Template')->setTemplate('Magento_Theme::html/social.phtml')->toHtml()) { ?>
        <?= $tb ?>
    <?php } else { ?>
        <p>Alt content</p>
    <?php } ?>

### Quickly get some template that uses a product for something

    <?php if ($pcib = $block->getLayout()->createBlock('Magento\Catalog\Block\Product\ListProduct')->setProduct($_product)->setTemplate('Magento_Catalog::product/view/parent-category-info.phtml')->toHtml()) { ?>
        <?= $pcib ?>
    <?php } ?>
    
### Render a block with a different template on some other spot

```
$leftnav = $block->getLayout()->getBlock('catalog.leftnav');
if (get_class($leftnav) == 'Smile\ElasticsuiteCatalog\Block\Navigation') {
    $leftnavTemplate = $leftnav->getTemplate();
    echo $leftnav->setTemplate('Smile_ElasticsuiteCatalog::layer/stock.phtml')->toHtml();
    $leftnav->setTemplate($leftnavTemplate);
}
```
