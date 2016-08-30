
$(document).ready(function () {

    $(function () {        
        var header = $(".navbar");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.removeClass('navbar--hero');
            } else {
                header.addClass('navbar--hero');
            }
        });
    });
   

});
