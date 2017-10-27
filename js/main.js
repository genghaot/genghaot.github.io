$(document).ready(function(){
    var mn = $(".navbar");
    mns = "scrolled";
    hdr = $('.navbar').height();

    $(window).scroll(function() {
      if( $(this).scrollTop() > hdr ) {
        mn.addClass(mns);
      } else {
        mn.removeClass(mns);
      }
    });
    
    new WOW().init();

    $(".worknav").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top - 40
        }, 500);
    });

    $(".topnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 500);
    });

    var s = skrollr.init();
    if (s.isMobile()) {
        s.destroy();
    }
});