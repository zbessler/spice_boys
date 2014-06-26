$( document ).ready(function() {

    $('.link').click(function(){
        // $('html, body').animate({
        //     scrollTop: $( $.attr(this, 'href') ).offset().top
        // }, 500);

    $("html, body").delay(100).animate({scrollTop: $( $.attr(this, 'href') ).offset().top-100 }, 1000)
        return false;
    });
});
