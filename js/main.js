$(document).ready(function(){
    new WOW().init();

    $(".worknav").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top - 100
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

$(function (){
	var container = $(window);
	var changeNavState = function(nav, newStateIndex) {
		nav.data('state', newStateIndex);
		if (newStateIndex == 0) {
			$('#nav').addClass('scrolled');
		} else {
			$('#nav').removeClass('scrolled');
		}
	};

	var boolToStateIndex = function(bool) {
		return bool * 1;
	};

	var maybeChangeNavState = function(nav, condState) {
		var navState = nav.data('state');
		if (navState === condState) {
			changeNavState(nav, boolToStateIndex(!navState));
		}
	};

	$('#nav').data('state', 1);

	container.scroll(function() {
		var $nav = $('#nav');
		if (container.scrollTop() > 0) {
			maybeChangeNavState($nav, 1);
		} else {
			maybeChangeNavState($nav, 0);
		}
	});
})