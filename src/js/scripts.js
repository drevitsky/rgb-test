$(document).ready(function(){

  // $(window).on('scroll',function(){
  //    var scrollTop = $('html,body').scrollTop();
  //   if (scrollTop > 10) {
  //     $('.logo').fadeOut();
  //   } else {
  //     $('.logo').fadeIn();
  //   }
  // })
$('.slider').slick({
  dots:true,
  //slidesToShow: 2
  infinite: false
  
  //easing:'swing'
});


  $('.menu-tog').on('click',function(e){
    e.preventDefault();
  $('body').toggleClass('menu--opened');

  })
  $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .on('click',function(e){
        e.preventDefault();
      $('body').removeClass('menu--opened');
    })

});


