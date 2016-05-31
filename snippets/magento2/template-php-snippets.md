# Short php snippets

## Url's

### Get current url

    <?php $_currentUrl = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Framework\UrlInterface')->getCurrentUrl(); ?>

### Create a slug from a string

    <?php $slug = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Catalog\Model\Product\Url')->formatUrlKey($string); ?>




