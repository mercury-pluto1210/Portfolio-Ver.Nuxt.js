$(window).load(function () {
  $('.loading').delay(3000).fadeOut(300);
  $('.home').delay(3000).fadeIn();
});
$(function(){
  $('.bars-text').hover(
      function(){
          $('.bars-text').css('background-color','rgba(102, 101, 101, 1.0)');
      },
      function(){
          $('.bars-text').css('background-color','rgba(102, 101, 101, 0.7)');
      }
  );
  $('.heart').click(function(){
      if($('.heart').hasClass('like')){
          $('.heart').removeClass('like');
          $('.like-contents').show().slideUp('fast');
      }
      else{
          $('.heart').addClass('like');
          $('.like-contents').slideDown('fast').show();
      }
  });
  $('.bars-text').click(function(){
      $('.menu').animate({
          'right':'0%'
      },1000);
  });
  $('.back').click(function(){
      $('.menu').animate({
          'right':'-23%'
      },1000);
  });

  var label = $(this).next('label')
  $('.transform').focus(function() {
      $(this).next('label').addClass('up')
    });
});
