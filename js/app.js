$(window).resize(function(){
    $('header').css("height", $(window).height());
});
$(document).ready(function(){
    $('header').css("height", $(window).height());
});
$(window).scroll(function() {
    if ($(window).scrollTop() > $('body').height() / 4) {
        $('.hidden-col-level').addClass('fadeIn');
    }
});

