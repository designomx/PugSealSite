$(document).ready(function() {
    $('#section-portada').height($(window).height()-56);
    $('#section-rooms').height($(window).height()-56);
    $('.portadaindividuales').height($(window).height()*(3/4));
    //$('.footportadaindividuales').css('padding-top',$('.portadaindividuales').height()-20);
    //$('.footportadaindividuales').css('padding-top',$(window).height()-56);
    $('.footportadaindividuales').css('padding-top',$('.portadaindividuales').height()).height($(window).height()-$('#section-portada').height()-56).css('max-height',$(window).height()-56);
    $('.down-scroll').css('top',$(window).height()-25);
    $('.logoindividuales').css('top',$('.portadaindividuales').height()-$('.logoindividuales').height()-10);

    $('.ver_mas_room_left').css('top',$('.room-preview-left-img').height()*(4/6));
    $('.especificaciones-room-left').css('margin-top',$('.room-preview-left-img').height()*(1/3));
    $('.box_ubicacion_room_left').css('margin-top',$('.room-preview-left-img').height()*(1/6));
    $('.ver_mas_room_right').css('top',$('.room-preview-right-img').height()*(1/2));
    $('.especificaciones-room-right').css('margin-top',$('.room-preview-right-img').height()*(3/5));
    $('.ver_mas_room_center').css('top',$('.room-preview-center-img').height()*(-1/5));
    $('.room-preview-center-box').css('margin-top',$('.room-preview-center-img').height()*(1/4));
});

$(window).on('resize', function () {
    $('#section-portada').height($(window).height()-56);
    $('#section-rooms').height($(window).height()-56);
    $('#section-extra').height($(window).height()-56);
    $('.portadaindividuales').height($(window).height()*(3/4));
    //$('.footportadaindividuales').css('padding-top',$('.portadaindividuales').height()-20);
    $('.footportadaindividuales').css('padding-top',$('.portadaindividuales').height());
    $('.down-scroll').css('top',$(window).height()-25);
    $('.logoindividuales').css('top',$('.portadaindividuales').height()-$('.logoindividuales').height()-10);
    $('.footportadaindividuales').css('padding-top',$('.portadaindividuales').height()).height($(window).height()-$('#section-portada').height()-56).css('max-height',$(window).height()-56);

    $('.ver_mas_room_left').css('top',$('.room-preview-left-img').height()*(4/6));
    $('.especificaciones-room-left').css('margin-top',$('.room-preview-left-img').height()*(1/3));
    $('.box_ubicacion_room_left').css('margin-top',$('.room-preview-left-img').height()*(1/6));

    $('.ver_mas_room_right').css('top',$('.room-preview-right-img').height()*(1/2));
    $('.especificaciones-room-right').css('margin-top',$('.room-preview-right-img').height()*(3/5));

    $('.room-preview-center-box').css('margin-top',$('.room-preview-center-img').height()*(1/4));
    $('.ver_mas_room_center').css('top',$('.room-preview-center-img').height()*(-1/5));
    $('.especificaciones-room-right').css('margin-top',$('.room-preview-center-img').height()*(3/5));
});