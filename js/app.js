$(window).resize(function () {
    $('header').css("height", $(window).height());
    form();
});
$(document).ready(function () {
    $('header').css("height", $(window).height());
    photo();
    article();
    form();
});

$(window).scroll(function() {

        var levelPos = $('.container').offset().top;

        var topOfWindow = $(window).scrollTop();
        if (levelPos < topOfWindow+500) {
            $('.hidden-col-level').addClass("fadeIn");
        }

});

function form() {
    $('input').css('width', $('form').width() / 2.5);
    $('textarea').css('width', $('input').width() * 2 + 30);
    $('button').css('right', ($('form').width() - $('textarea').width()) / 2 + 15);
};

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


