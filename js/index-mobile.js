$(document).ready(function() {
	$('#circle').height($('#circle').width());
	$('#rectangleallanpoe').height($('.imagentriangularallanpoe').height()/2);
	$('.black-rectangle').height($('.black-rectangle').width());
	$('#section3 .top-two .col .f-circle').width($('.imagenSection3').width()).height($('.imagenSection3').height());
	var leftcircle = $('.imagenSection3').position().left + ($('.imagenSection3').width()/10);
	$('#section3 .top-two .col .f-circle').css('left',leftcircle+' !important');
});

$(window).on('resize', function () {
    // Do something.
    $('#circle').height($('#circle').width());
    $('#rectangleallanpoe').height($('.imagentriangularallanpoe').height()/2);
    $('.black-rectangle').height($('.black-rectangle').width());
    $('#section3 .top-two .col .f-circle').width($('.imagenSection3').width()).height($('.imagenSection3').height());

    /*pagina individuales*/
    $('.portadaindividuales').height($(window).height()*(3/4));
});