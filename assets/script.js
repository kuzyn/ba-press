Zepto(function($) {
  
  console.log('zepto');
  $('.trigger-size').on('mouseenter', function(e) {
    var type = e.srcElement.innerText;
    $('.main-image-overlay').css('opacity', 1);
  });

  $('.trigger-size').on('mouseleave', function(e) {
    var type = e.srcElement.innerText;
    $('.main-image-overlay').css('opacity', 0);
  });

  $('.trigger-color').on('mouseenter', function(e) {
    console.log(e);
  });

});
