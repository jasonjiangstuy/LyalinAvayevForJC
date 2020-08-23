$(function(){
    $('#main').hide();
    $('#mainNav').hide()
    //bring window to top
    window.scrollTo(0, 0);

    // block scrolling
    $('body').addClass('stop-scrolling');

    // hide content

    // find height of document in pixels
    var documentHeight = Number(window.innerHeight);

    // find width
    var documentWidth = Number(window.innerWidth);
    
    // log

    console.log(documentHeight, documentWidth);
    // number of clouds vertically and horasonatally
    const numUp = 10;
    const numLeft = 10;

    // create image size with measurements
    var imageHeight = documentHeight / (numUp /2);
    var imageWidth = documentWidth / (numLeft /2);

    // create image spacing
    var imageHspace = documentHeight / numUp;
    var imageWspace = documentWidth / numLeft;

    // store image element in variable


    // find element to append the images to
    var target = $('#prependHere');
    var startingTop;
    var startingLeft = (-imageWidth / 2);
    const middle = documentWidth / 2
    for (x = 0; x < numLeft; x++ ){
        startingTop = (-imageHeight/2);
        for (i = -1; i < numUp; i++) {

        let myClass = 'clouds ';
        if (startingLeft < middle){
            myClass += 'left';
        }else{
            myClass += 'right';
        }
        target.append(
            $('<img/>', {
                src: 'imgs/cloud.png',
                class: myClass,
          
              }).css({
                  // starting location in top left
                  top: startingTop + 'px',
                  left: startingLeft + 'px',
                  height: imageHeight,
                  width: imageWidth
              })
            );
        startingTop += imageHspace;
    }
    startingLeft += imageWspace;
}

// make clouds go away
setTimeout( function() {
    $(".pillarWrap").attr('id', 'pillarWrap')
    // .css({opacity: 0});
    

    setTimeout( function() {
        $('body').removeClass('stop-scrolling');
        $("#main").show('slow');
        $('#mainNav').show('slow')
    }, 1100);
}, 2000);


    

});