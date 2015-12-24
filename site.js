$(document).ready(function () {
	var name,
	date,
	naughty,
	message;

	$('.submit-btn').click(function(e){
		e.preventDefault();
		$('.nice-div').hide();
		$('.naughty-div').hide();

		name = $('.name-input').val();

		date = Date.now()

		date % 2 == 0 ? naughty = true : naughty = false;

		if (naughty){

			message = name + ", you are NAUGHTY";
			$('.naughty-txt').empty().text(message)
			$('.naughty-div').show()
		} else {
			message = name + ", you are NICE";
			$('.nice-txt').empty().text(message)
			$('.nice-div').show()
		}
	});


});