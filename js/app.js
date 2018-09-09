var $body = $('body');

// Debounce function - only execute after user finishes resizing window
function debounce (func, wait, immediate) {
  var timeout

  return function () {
    var context = this
    var args = arguments

    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

var $heroCarousel = $('.car-HeroCarousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  imagesLoaded: true
});

$heroCarousel.on( 'dragStart.flickity', function( event, pointer ) {
  document.ontouchmove = function (e) {
    e.preventDefault();
  }
});

$heroCarousel.on( 'dragEnd.flickity', function( event, pointer ) {
  document.ontouchmove = function (e) {
    return true;
  }
});

var $infotilesCarousel = $('.car-InfoTiles').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  cellSelector: '.car-InfoTiles_Cell',
  adaptiveHeight: true,
  prevNextButtons: false,
  wrapAround: true,
  watchCSS: true
});


$infotilesCarousel.on( 'dragStart.flickity', function( event, pointer ) {
  document.ontouchmove = function (e) {
    e.preventDefault();
  }
});

$infotilesCarousel.on( 'dragEnd.flickity', function( event, pointer ) {
  document.ontouchmove = function (e) {
    return true;
  }
});

var ticketsCarousel = $('.car-Tickets').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  cellSelector: '.car-Tickets_Cell',
  adaptiveHeight: true,
  prevNextButtons: false,
  wrapAround: true,
  watchCSS: true
});


$ticketsCarousel.on( 'dragStart.flickity', function( event, pointer ) {
  document.ontouchmove = function (e) {
    e.preventDefault();
  }
});

$ticketsCarousel.on( 'dragEnd.flickity', function( event, pointer ) {
  document.ontouchmove = function (e) {
    return true;
  }
});

function drawerPanels() {
  var drawerMenuOpen = 'drawer-main-menu-open';

  $('.mobile-main-nav').click(function(e){
    e.preventDefault();
    $('body').toggleClass(drawerMenuOpen);
    $('html').toggleClass('scroll-hide');
  });

  $('.drawer__overlay').click(function(e){
    $('body').removeClass(drawerMenuOpen);
    $('html').removeClass('scroll-hide');
  });

  $('.drawer-cart-close').click(function(e){
    $('body').removeClass(drawerMenuOpen);
    $('html').removeClass('scroll-hide');
  });

  $('.mn-MobileNav_Link').click(function(e){
    $('body').removeClass(drawerMenuOpen);
    $('html').removeClass('scroll-hide');
  });
}

drawerPanels();

// Smooth Scroll
$('a[href*="#"]:not([href="#"])').click(function() {
  if ($(window).width() > 768) {
    var headerOffset = 80;
  } else {
    headerOffset = 50
  }

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - headerOffset
      }, 1000);
      return false;
    }
  }
});

var $header = $('.hd-Header');

$(window).scroll(debounce(function () {
  if (!$(window).scrollTop()) {
    $header.removeClass('hd-Header-fill')
  } else {
    $header.addClass('hd-Header-fill')
  }
}, 10));
