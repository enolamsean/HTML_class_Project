/* NAVIGATION */
var picture = $('.picture');

// Show full screen nav
$('nav').on('click', function () {
	$(this).toggleClass('show');
});

// On click, scroll to appropriate select
$('ul li').on('click', function () {
	var thisPicture = $(this);
	var number = thisPicture.text();

	$('html, body').stop().animate({scrollTop: $('.picture'+number).position().top}, 400);
});