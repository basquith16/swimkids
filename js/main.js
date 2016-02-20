$(document).ready(function() {
  $('section#screenshots a').on('click', function() {
    $('div#modal img').attr('src', $(this).attr('data-image-url'));
  });

  var nav = $('.navbar-fixed-top');
  var distance = $('.navbar-fixed-top').offset();

  if (distance.top >= 300)  {
    nav.addClass('effect');
  }

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
      nav.addClass('effect');
    } else {
      nav.removeClass('effect');
    }
  });

  $('.features-image img').waypoint(function() {
    $('.features-image img').addClass('animated zoomIn')
  }, {
    offset: '99%'
  });

  $('#sharky').waypoint(function() {
    $('#sharky').addClass('bounceInRight')
  }, {
    offset: 'none'
  });

  $('#title').waypoint(function() {
    $('#title').addClass('tada')
  }, {
    offset: 'none'
  });

  $('#subTitle').waypoint(function() {
    $('#subTitle').addClass('swing')
  }, {
    offset: 'none'
  });

  $('#moreButton').on('click', function() {
    $('#moreButton').fadeOut();
    $('#hidden').toggleClass('hidden');
  });

  $('#lessButton').on('click', function() {
    $('#hidden').toggleClass('hidden');
    $('#moreButton').fadeIn();
  });

    $('#moreBlog').on('click', function () {
    $('#hiddenPost').toggleClass('hidden');
    $('#moreBlog').fadeOut();
  });

  $('#lessBlogButton').on('click', function() {
    $('#hiddenPost').toggleClass('hidden');
    $('#moreBlog').fadeIn();
  });

  try {
		$('#head').ripples({
			resolution: 512,
			dropRadius: 20, //px
			perturbance: 0.04,
		});
		// $('main').ripples({
		// 	resolution: 128,
		// 	dropRadius: 10, //px
		// 	perturbance: 0.04,
		// 	interactive: false
		// });
	}
	catch (e) {
		$('.error').show().text(e);
	}
	$('.js-ripples-disable').on('click', function() {
		$('body, main').ripples('destroy');
		$(this).hide();
	});
	$('.js-ripples-play').on('click', function() {
		$('body, main').ripples('play');
	});
	$('.js-ripples-pause').on('click', function() {
		$('body, main').ripples('pause');
	});
	// Automatic drops
	setInterval(function() {
		var $el = $('main');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;
		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);
});

smoothScroll.init({
  speed: 700,
  easing: 'easeInOutQuad',
  updateURL: false,
  offset: 50
});
