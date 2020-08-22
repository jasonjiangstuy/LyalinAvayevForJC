
// start
$(function(){
    $('#mainNav').hide();
    var mainNav = $('#mainNav');
    var thresh = Number($('#showNav').offset().top);
    $(window).resize(function(){
        thresh = Number($('#showNav').offset().top);
        console.log(thresh);
    })
    $(window).scroll(function(){
        console.log($(document).scrollTop());
        if (Number($(document).scrollTop()) > thresh) {
            mainNav.show();
            console.log('showing');
        } else {
            mainNav.hide();
            console.log('hiding');
        }
});
});

