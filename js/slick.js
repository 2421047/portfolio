$(document).on('ready',function(){
$('.slider-for').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider-for',
    centerMode: true,
    dots: true,
    focusOnSelect: true
  });
});