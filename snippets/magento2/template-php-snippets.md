# Short php snippets

## Url's

### Get current url

    <?php $_currentUrl = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Framework\UrlInterface')->getCurrentUrl(); ?>

### Create a slug from a string

    <?php $slug = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Catalog\Model\Product\Url')->formatUrlKey($string); ?>

### Get url of file inside the theme 'web' folder, like an image...

    <?php echo $block->getViewFileUrl('Magento_Theme::images/logo.svg'); ?>

### Get store url for a general path

    <a href="<?php echo $block->getUrl('customer/account'); ?>"><?=__('Account')?></a>

## Category's

### Get current category

    <?php $category = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Framework\Registry')->registry('current_category'); ?>

## Products

### Get product image

If your block inherits from `Magento\Catalog\Block\Product\AbstractProduct` you can get the image of a product with

    <?php $imageUrl = $block->getImage($_product, 'product_page_image_large')->getImageUrl(); ?>

(In case it doesn't inherit from that block, you can do:)

    <?php $imageUrl = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Catalog\Block\Product\AbstractProduct')->getImage($_product, 'product_page_image_large')->getImageUrl(); ?>

### Product add to wishlist link

If your block inherits from `Magento\Catalog\Block\Product\AbstractProduct` you can get the wishlistlink of a product with

    <a href="#" data-post='<?php echo $block->getAddToWishlistParams($_product); ?>'  class="action towishlist" data-action="add-to-wishlist" title="<?php echo __('Add to Wish List') ?>"><span><?php echo __('Add to Wish List') ?></span></a>

## Users

### Check if a user is logged in

    <?php
        $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
        $customerSession = $objectManager->get('Magento\Customer\Model\Session');
        if ($customerSession->isLoggedIn()):
    ?>
    <span><?=__('<a href="/customer/account/logout">Log out</a>')?></span>
    <?php endif; ?>

## Blocks

### Quickly get a static block

    <?php if ($sb = $block->getLayout()->createBlock('Magento\Cms\Block\Block')->setBlockId('my-block')->toHtml()) { ?>
        <?php echo $sb; ?>
    <?php } else { ?>
        <p>Alt content</p>
    <?php } ?>

### Quickly get some template that uses a product for something

    <?php if ($pcib = $block->getLayout()->createBlock('Magento\Catalog\Block\Product\ListProduct')->setProduct($_product)->setTemplate('Magento_Catalog::product/view/parent-category-info.phtml')->toHtml()) { ?>
        <?php echo $pcib; ?>
    <?php } ?>
