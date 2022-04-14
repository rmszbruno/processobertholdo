$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })

  $('.bannerprincipal').owlCarousel({
    items:1,
    margin:10,
    autoWidth:true,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

  var $contactDireita = $('#contactdireita');
  var $contactEsquerda = $('#contactesquerda');
  var $optionsFooter = $('.optionsfooter');

$(window).resize(function() {
  if (window.innerWidth <= 900) $contactDireita.addClass('text-center');

});

$(window).resize(function() {
    if (window.innerWidth <= 900) $contactEsquerda.addClass('text-center');
  
  });

$(window).resize(function() {
    if (window.innerWidth <= 900) $optionsFooter.addClass('text-center');
  
});

  });

  