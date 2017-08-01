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
    
## Users

### Check logged in

    <?php if (Mage::getSingleton('customer/session')->isLoggedIn()): ?>
        <span>Logged in</span>
    <?php endif; ?>

### Get user gravatar

        <?php $gravatarUrl = 'https://www.gravatar.com/avatar/'.md5(strtolower(trim(Mage::getSingleton('customer/session')->getCustomer()->getEmail()))).'?s=128&d=mm'; ?>
        <img src="<?php echo $gravatarUrl; ?>" />

## Images

### Resize and then crop

            <?php
                $newImageUrl = '//placehold.it/375x563/cccccc/ffffff/?text=Nope';
                if ($_imageUrl = $_obj->getImage()) { // like /e/l/elsa.jpg

                    $resizedBasePath = Mage::getBaseDir('media') . DS . "path" . DS . "image" . DS . "resized";
                    // create folder
                    if (!file_exists($resizedBasePath)) {
                        mkdir($resizedBasePath, 0777);
                    }
                    if(!file_exists($resizedBasePath . DS . $FRAME_WIDTH . "x" . $FRAME_HEIGHT)) {
                        mkdir($resizedBasePath . DS . $FRAME_WIDTH . "x" . $FRAME_HEIGHT, 0777);
                    }

                    // get image name
                    //$imageName = substr(strrchr($imageUrl, "/"), 1);
                    $imageName = $_imageUrl;

                    // resized image path (media/look/image/resized/IMAGE_NAME)
                    $imageResized = Mage::getBaseDir('media') . DS . "path" . DS . "image" . DS . "resized" . DS . $FRAME_WIDTH . "x" . $FRAME_HEIGHT . $imageName;

                    // changing image url into direct path
                    $dirImg = Mage::getBaseDir('media') . DS . "path" . DS . "image" . $imageName;

                    // if resized image doesn't exist, save the resized image to the resized directory
                    if (!file_exists($imageResized) && file_exists($dirImg)) {

                        $imageObj = new Varien_Image($dirImg);
                        $oWidth = $imageObj->getOriginalWidth();
                        $oHeight = $imageObj->getOriginalHeight();
                        // calculate crop factor, with fixed height:
                        $newHeight = $FRAME_HEIGHT;
                        $newWidth = floor(($oWidth / $oHeight) * $newHeight);
                        if ($newWidth < $FRAME_WIDTH) {
                            // resize, with fixed width:
                            $newWidth = $FRAME_WIDTH;
                            $newHeight = floor(($oHeight / $oWidth) * $newWidth);
                        }

                        if (($newWidth / $newHeight) > ($FRAME_WIDTH / $FRAME_HEIGHT)) {
                            $top = 0;
                            $left = floor(($newWidth - $FRAME_WIDTH) / 2);
                            $right = $left;
                            $bottom = 0;
                        } else {
                            $top = floor(($newHeight - $FRAME_HEIGHT) / 2);
                            $left = 0;
                            $right = 0;
                            $bottom = $top;
                        }

                        // resize, with $newWidth & $newHeight, with aspect ratio:
                        $imageObj->constrainOnly(FALSE);
                        $imageObj->keepAspectRatio(FALSE);
                        $imageObj->keepFrame(FALSE);
                        $imageObj->keepTransparency(FALSE);
                        $imageObj->resize($newWidth, $newHeight);
                        $imageObj->crop($top, $left, $right, $bottom);
                        $imageObj->save($imageResized);

                        $newImageUrl = Mage::getBaseUrl('media') . "path/image/resized/" . $FRAME_WIDTH . "x" . $FRAME_HEIGHT . $imageName;

                    } else if (file_exists($imageResized)) {

                        $newImageUrl = Mage::getBaseUrl('media') . "path/image/resized/" . $FRAME_WIDTH . "x" . $FRAME_HEIGHT . $imageName;

                    }

                }
            ?>
