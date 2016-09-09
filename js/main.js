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

        $(window).scroll(function(event){
            var st = $(this).scrollTop();

            if (navTop < st && !islocked){
                // $('html, body').animate({
                //     scrollTop: navTop
                // },500, 'easeOutExpo');
                swapClass("static", "fixed");
            } else if (st < navTop && islocked) {
                // upscroll code
                swapClass("fixed", "static");
                $('html, body').animate({
                    scrollTop: 0
                },500, 'easeOutExpo');
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
