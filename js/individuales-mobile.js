$(document).ready(function() {
    $('.portadaindividuales').height($(window).height()*(3/4));
    //$('.footportadaindividuales').css('padding-top',$('.portadaindividuales').height()-20);
    //$('.footportadaindividuales').css('padding-top',$(window).height()-56);
    $('.footportadaindividuales').css('padding-top',$('.portadaindividuales').height());
    $('.down-scroll').css('top',$(window).height()-25);
    $('.logoindividuales').css('top',$('.portadaindividuales').height()-$('.logoindividuales').height()-10);
});

$(window).on('resize', function () {
    $('.portadaindividuales').height($(window).height()*(3/4));
    //$('.footportadaindividuales').css('padding-top',$('.portadaindividuales').height()-20);
    $('.footportadaindividuales').css('padding-top',$('.portadaindividuales').height());
    $('.down-scroll').css('top',$(window).height()-25);
    $('.logoindividuales').css('top',$('.portadaindividuales').height()-$('.logoindividuales').height()-10);
});