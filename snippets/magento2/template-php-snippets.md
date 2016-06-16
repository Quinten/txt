# Short php snippets

## Url's

### Get current url

    <?php $_currentUrl = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Framework\UrlInterface')->getCurrentUrl(); ?>

### Create a slug from a string

    <?php $slug = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Catalog\Model\Product\Url')->formatUrlKey($string); ?>

### Get url of file inside the theme 'web' folder, like an image...

    <?php echo $block->getViewFileUrl('Magento_Theme::images/logo.svg'); ?>

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

