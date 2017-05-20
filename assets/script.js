Zepto(function($) {
  
  // need to instanciate the clip-path this way else first transition jag
  $('.wrapper-main-image').css('clip-path', 'inset(0 0 0 0)');

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
    $('.main-image-overlay').css('opacity', 0);
    $('.wrapper-main-image').css('clip-path', 'inset(0 0 0 0)');
    $('.main-image-overlay').removeClass('overlay-width-ledger overlay-height-ledger overlay-width-letter overlay-height-letter'); 
  });

  $('.trigger-color').on('mouseenter', function(e) {
    console.log(e);
  });

});
