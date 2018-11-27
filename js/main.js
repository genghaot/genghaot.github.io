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
});

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		items:1,
		nav:true,
		navText : ['<ion-icon name="arrow-back"></ion-icon>','<ion-icon name="arrow-forward"></ion-icon>']
	})
});

$('#rvrc-modal').on('click', function() {
  var rvrcModal = $.fancybox.open( $('.rvrc-gallery'), {
    touch: false,
    infobar: false
  });
});

$('#nus-icg-2016-modal').on('click', function() {
  var nusICG2016Modal = $.fancybox.open( $('.nus-icg-2016-gallery'), {
    touch: false,
    infobar: false
  });
});

$('#the-ridge-modal').on('click', function() {
  var theRidgeModal = $.fancybox.open( $('.the-ridge-gallery'), {
    touch: false,
    infobar: false
  });
});

$('#branding-modal').on('click', function() {
  var brandingModal = $.fancybox.open( $('.branding-gallery'), {
    touch: false,
    infobar: false
  });
});

$('#posters-modal').on('click', function() {
  var postersModal = $.fancybox.open( $('.posters-gallery'), {
    touch: false,
    infobar: false
  });
});

$('#paintings-modal').on('click', function() {
  var paintingsModal = $.fancybox.open( $('.paintings-gallery'), {
    touch: false,
    infobar: false
  });
});