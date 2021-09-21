$(document).ready(function () {
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
	$('div.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$(".catalog-item__content").eq(i).toggleClass('catalog-item__content_active');
				$(".catalog-item__list").eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};
	toggleSlide(".catalog-item__link");
	toggleSlide(".catalog-item__back");

	// Modal

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
				messages: {
					name: {
					  required: "Введите имя",
					},
					phone: "Введите номер телефона",
					email: {
						required: "Введите почту",
						email: "Неверно введен адрес почты"
					}
				  }
				}
		);
	};
	validateForms('#consultation_form');
	validateForms('#consultation form');
	validateForms('#order form');

	$("input[name=phone]").mask("+380 (99-999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: POST,
			url: 'mailer/smart.php', 
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");



			$('form').trigger('reset');
		})
		return false;
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > 700) {
			$('.pageup').fadeIn();
		}else {
			$('.pageup').fadeOut();
		}
	})
});