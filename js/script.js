$('.header__burger').on('click', function() {
	$('.header__burger').toggleClass('active')
	$('.header__menu').toggleClass('active')
	$('body').toggleClass('lock')
})

$('.side-item__head').on('click', function() {
	$(this).next($('.side-item__body')).slideToggle()
})