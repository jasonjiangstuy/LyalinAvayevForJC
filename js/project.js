$(function(){
    
    var expanded = false;
    $('#expandDiv').click(
        function () {
            expanded = true;
            $(this).toggle();
        }
    ).toggle();
    document.querySelectorAll('.projectImage').forEach(item => {
        item.addEventListener('click', event => {
          //handle click
          console.log(item.src, item.getAttribute('text'));
          $('#targetImg').attr('src', item.src);
          $('#targetText').text(item.getAttribute('text'));
          $('#expandDiv').show('fast');
        })
      })

});