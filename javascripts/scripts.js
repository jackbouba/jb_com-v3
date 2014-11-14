jQuery(function($){
  
  $(".fittext").fitText(.35);
  
  var $heroHeadline = $('.hero h2');
  var range = 300;
  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    $heroHeadline.each(function() {
      var offset = $(this).offset().top;
      var height = $(this).outerHeight();
      offset = offset + height / 2;
      $(this).css({'opacity': ((st - offset + range) / range)
      });
    });
  });
  
});