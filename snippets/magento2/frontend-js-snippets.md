### Add a string for js to translate in a phtml file

    <?php
        $_data = array(
            'Out of stock' => __('Out of stock'),
        );
    ?>
    <script type="text/javascript">
        require(["jquery", "mage/translate"], function ($) {
            $.mage.translate.add(<?php echo Zend_Json::encode($_data) ?>)
        });
    </script>
