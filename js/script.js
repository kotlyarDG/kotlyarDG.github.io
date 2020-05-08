$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('_active')
		$('body').toggleClass('_lock')
	});

	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}

	ibg();

	$('.slider-main').slick({
   	dots: true
  });

	$('.services-item_1').mouseenter(function(event){
		$('.services-item_1 .services-item__icon_1').hide()
		$('.services-item_1 .services-item__icon_2').show()
	});

	$('.services-item_1').mouseleave(function(event){
		$('.services-item_1 .services-item__icon_1').show()
		$('.services-item_1 .services-item__icon_2').hide()
	});

	$('.services-item_2').mouseenter(function(event){
		$('.services-item_2 .services-item__icon_1').hide()
		$('.services-item_2 .services-item__icon_2').show()
	});

	$('.services-item_2').mouseleave(function(event){
		$('.services-item_2 .services-item__icon_1').show()
		$('.services-item_2 .services-item__icon_2').hide()
	});

	$('.services-item_3').mouseenter(function(event){
		$('.services-item_3 .services-item__icon_1').hide()
		$('.services-item_3 .services-item__icon_2').show()
	});

	$('.services-item_3').mouseleave(function(event){
		$('.services-item_3 .services-item__icon_1').show()
		$('.services-item_3 .services-item__icon_2').hide()
	});

	$('.services-item_4').mouseenter(function(event){
		$('.services-item_4 .services-item__icon_1').hide()
		$('.services-item_4 .services-item__icon_2').show()
	});

	$('.services-item_4').mouseleave(function(event){
		$('.services-item_4 .services-item__icon_1').show()
		$('.services-item_4 .services-item__icon_2').hide()
	});

	

	$('.filter__btn').click(function(event) {
			var cat = $(this).data('filter');
		event.preventDefault();
		console.log(cat);
		$('.filter__btn.active-filter').removeClass('active-filter')
		$(this).addClass('active-filter')

		if(cat == 1){
			$('.filter__item').show();
		} else {
			$('.filter__item').hide();
			$('.filter__item.f_' + cat).show();
		}


	});

	$('.post__slider').slick({
		slidesToShow: 3,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 1800,
		speed: 1200,

	responsive: [
		{
			breakpoint: 990,

			settings: {
				slidesToShow: 2
			},

			breakpoint: 630,

			settings: {
				slidesToShow: 1,
				autoplay: false,
				variableWidth: true
			}
		}
	]
	});

});