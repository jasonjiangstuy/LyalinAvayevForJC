
// start
$(function(){
    
    $('#mainNav').hide();
    var mainNav = $('#mainNav');
    var thresh = Number($('#showNav').offset().top);
    $(window).resize(function(){
        thresh = Number($('#showNav').offset().top);
        console.log(thresh);
    })
    var showing = false
    $(window).scroll(function(){
        console.log($(document).scrollTop());
        if (Number($(document).scrollTop()) > thresh) {
            if (showing == false){
            mainNav.slideToggle();
            console.log('showing');
            showing = true;
            }
        } else {
            if (showing == true){
            mainNav.hide();
            console.log('hiding');
            showing = false;
        }
    }
});
});

