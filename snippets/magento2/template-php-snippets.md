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
