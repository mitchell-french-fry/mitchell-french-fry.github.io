$(document).ready(function () {
	var color,
	date,
	eggCount;

	var defaultMessage = "eggs";

	$('.submit-btn').click(function(e){
		e.preventDefault();
		$('.bunny-div').hide();

		color = $('.name-input').val();

		eggCount = 1 + Math.floor(Math.random() * 35);

    $('.egg-count').text(eggCount + ' ' + defaultMessage);

    $('.bunny-div').show();
	});


});