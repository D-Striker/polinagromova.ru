$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	autoplay: true,
  	loop: true,
  	margin: 20,
  	responsive:{
  		0:{
            items:1
        },
        540:{
            items:2
        },
        1000:{
            items:3
  	 }
   }
  });
});