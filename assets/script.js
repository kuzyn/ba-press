Zepto(function($) {
  
  // need to instanciate the clip-path this way else first transition jag
  $('.wrapper-main-image').css('clip-path', 'inset(0)');

  // when we over the size triggers
  $('.trigger-size').on('mouseenter', function(e) {
    $('.main-image-overlay').css('opacity', 1);

    if (e.srcElement.innerText === 'letter') {
      $('.wrapper-main-image').css('clip-path', 'inset(0 0 0 260px)');
      $('.main-image-overlay-width').addClass('overlay-width-letter'); 
      $('.main-image-overlay-height').addClass('overlay-height-letter'); 
    } else {
      $('.main-image-overlay-width').addClass('overlay-width-ledger'); 
      $('.main-image-overlay-height').addClass('overlay-height-ledger'); 
    }
  });
  
  // when we leave the size triggers (reset)
  $('.trigger-size').on('mouseleave', function(e) {
    $('.main-image-overlay').css('opacity', null);
    $('.wrapper-main-image').css('clip-path', 'inset(0)');
    $('.main-image-overlay').removeClass('overlay-width-ledger overlay-height-ledger overlay-width-letter overlay-height-letter'); 
  });

  // when we enter the color triggers
  $('.trigger-color').on('mouseenter', function(e) {
    var color = e.srcElement.innerText.replace(' ', '_');

    switch (color) {
      case 'medium_blue':
        $('.wrapper-main-image').css('filter', 'hue-rotate(320deg) saturate(130%)');
        break;
      case 'green':
        $('.wrapper-main-image').css('filter', 'hue-rotate(200deg) saturate(160%)');
        break;
      case 'teal':
        $('.wrapper-main-image').css('filter', 'hue-rotate(240deg) saturate(140%)');
        break;
      case 'black':
        $('.wrapper-main-image').css('filter', 'saturate(0%) contrast(1.20)');
        break;
      default:
        break;
    }

  });

  // when we enter the color triggers
  $('.trigger-color').on('mouseleave', function(e) {
    $('.wrapper-main-image').css('filter', null);
  });

});
