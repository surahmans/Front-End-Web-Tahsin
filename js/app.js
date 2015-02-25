$(window).resize(function () {
    $('header').css("height", $(window).height());
});
$(document).ready(function () {
    $('header').css("height", $(window).height());
    photo();
    article();
});
$(window).scroll(function () {
    if ($(window).scrollTop() > $('body').height() / 4) {
        $('.hidden-col-level').addClass('fadeIn');
    }
});

function photo() {
    $('.photo').click(function () {
        var currentPhoto = $('.active-photo');
        var clickedPhoto = $(this);

        currentPhoto.removeClass('active-photo pulse', 300);
        clickedPhoto.addClass('active-photo pulse').fadeIn("slow");

        $('.active-testimonial').removeClass('active-testimonial');
        $('.testimonial').parent().children().eq($(this).index() - 3).addClass('active-testimonial');
    });
};

function article() {
    $('article img').mouseenter(function () {
        $(this).siblings().addClass('slideUp').css('width', $(this).width());
    });
    $('.overlay').mouseleave(function() {
        $(this).removeClass('slideUp');
    });
};


