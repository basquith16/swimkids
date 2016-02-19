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
});


smoothScroll.init({
  speed: 700,
  easing: 'easeInOutQuad',
  updateURL: false,
  offset: 50
});
