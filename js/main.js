(function($) {
    'use strict';
    //scope safe

    //Document ready
    $(function() {
        var top = $('body').offset().top;
        var TOP = 0; //top of page
        var navBar = $('.navbar-default');
        var navTop = navBar.position().top;
        var islocked = false; // if navBar is locked to top of screen
        var disabled = false; // prevent other animations until first promise is returned

        $(window).scroll(function(event){
            if (disabled) { return; }

            var sTop = $(this).scrollTop();

            if (TOP < sTop && sTop < navTop && !islocked) {
                windowAnimation(navTop + navBar.height(), "static", "fixed");
            } else if (sTop < navTop && islocked) {
                windowAnimation(TOP, "fixed", "static");
            }
        });

        var windowAnimation = function(location, firstClass, secondClass) {
            disabled = !disabled;

            scrollAnimation(location); //scrolls either up or down

            swapClasses(firstClass, secondClass); //swaps nav class

            releaseAnimation();
        };

        var swapClasses = function(toSwap, swapped) {
            navBar.removeClass( `navbar-${toSwap}-top` )
                  .addClass( `navbar-${swapped}-top` );

            islocked = !islocked;
        };

        var scrollAnimation = function(location) {
            $('html, body').animate({
                scrollTop: location
            },400, 'easeOutExpo');
        };

        var releaseAnimation = function() {
            $( 'html, body' ).promise().done(function() {
                disabled = !disabled;
            });
        };

    });
})(jQuery);
