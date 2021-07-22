$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/ico/left_solid.svg"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/ico/right_solid.svg"/></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    dotsClass: 'slick-dots',
                    arrows: false,
                        }
            }
        ]
    });
  });