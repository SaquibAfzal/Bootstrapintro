$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});
$(document).ready(function () {
    $('#login').click(function () {
        $('#loginModal').modal();
    });
    $('.close').click(function () {
        $('#loginModal').modal('hide');
    });
    $('#reserve').click(function () {
        $('#reserveModal').modal();
    });
    $('.close').click(function () {
        $('#reserveModal').modal('hide');
    });
    $('#cancel-reserve').click(function () {
        $('#reserveModal').modal('hide');
    });
});