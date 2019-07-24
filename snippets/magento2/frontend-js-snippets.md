### List all component in the page (in console)

    var currentUiComponents = {};
    requirejs('uiRegistry').filter(function(item){
        currentUiComponents[item.name] = item;
    });
    console.log(currentUiComponents);

### Simple jquery document ready

    <script>
        require(['jquery','domReady!'], function ($) {
            $('.o-toggle-link').click(function (e) {
                $('.o-toggle-element').toggleClass('is-active');
            });
        });
    </script>

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
    
### Quickly add translations to the calendar

    <script type="text/javascript">
        require(["jquery","mage/calendar"], 
        function ($) {
            $.datepicker.regional['nl'] = {
                closeText: 'Sluit', // set a close button text
                currentText: 'Vandaag', // set today text
                monthNames: ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'], // set month names
                monthNamesShort: ['Jan','Feb','Maa','Apr','Mei','Jun','Jul','Aug','Sept','Okt','Nov','Dec'], // set short month names
                dayNames: ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'], // set days names
                dayNamesShort: ['Zon','Maa','Din','Woe','Don','Vrij','Zat'], // set short day names
                dayNamesMin: ['Zo','Ma','Di','Wo','Do','Vr','Za'], // set more short days names
                //dateFormat: 'dd/mm/yy' // set format date
            };

            $.datepicker.setDefaults($.datepicker.regional['nl']);
        });
    </script>
