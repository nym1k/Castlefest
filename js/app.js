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

var $header = $('.hd-Header');

$(window).scroll(debounce(function () {
  if (!$(window).scrollTop()) {
    $header.removeClass('hd-Header-fill')
  } else {
    $header.addClass('hd-Header-fill')
  }
}, 10));

$('.car-HeroCarousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true
});

$('.car-InfoTiles').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  cellSelector: '.car-InfoTiles_Cell',
  adaptiveHeight: true,
  prevNextButtons: false,
  wrapAround: true,
  watchCSS: true
});

$('.car-Tickets').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  cellSelector: '.car-Tickets_Cell',
  adaptiveHeight: true,
  prevNextButtons: false,
  wrapAround: true,
  watchCSS: true
});
