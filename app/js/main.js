$(function () {

   $(".menu__btn").on('click', function () {
      $(".menu__list-item").slideToggle();
   });


   $('select').styler();

   $('.page-rating').rateYo({

      starWidth: '14px',
      normalFill: '#ffffff',
      ratedFill: '#995437',
      readOnly: true,
      spacing: '10px',
   });
   $('.reviews__inner').slick({
      prevArrow: '<button type="button" class="slick-btn slick-prev icon-chevron-left"></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next icon-chevron-right"></button>',

      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 601,
            settings: {
               arrows: false,
            }

         },
      ]
   });

   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      var $this = $(this),
         blockId = $this.data('scroll'),
         blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");

      $("html, body").animate({
         scrollTop: blockOffset
      }, 500);
   });


});