(function($) {
    'use strict';
    //scope safe

    //Document ready
    $(function() {
        //focus on page load
        $('.landing').focus();
        var navBar = $('.navbar-default');
        var navTop = navBar.position().top;
        var islocked = false;
        var disabled = false;

        $(window).scroll(function(event){
            if (disabled) { return; }

            var st = $(this).scrollTop();
            if (st < navTop && !islocked) {
                disabled = !disabled;

                $('html, body').animate({
                    scrollTop: navTop
                },700, 'easeOutExpo');

                $( 'html, body' ).promise().done(function() {
                    disabled = !disabled;
                    swapClass("static", "fixed");
                });
            } else if (st < navTop && islocked) {
                // upscroll code
                disabled = !disabled;

                swapClass("fixed", "static");
                $('html, body').animate({
                    scrollTop: 0
                },500, 'easeOutExpo');

                $( 'html, body' ).promise().done(function() {
                    disabled = !disabled;
                });
        }
    });

        var swapClass = function(toSwap, swapped) {
            navBar
            .removeClass(`navbar-${toSwap}-top`)
            .addClass(`navbar-${swapped}-top`);

            islocked = !islocked;
        };
    });
})(jQuery);
