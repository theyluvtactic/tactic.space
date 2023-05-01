(function($){
  'use strict';
    $(window).on('load', function () {
        if ($("#preloader").length > 0)
        {
            $("#preloader").fadeOut("slow");
        }
    });
})(jQuery)