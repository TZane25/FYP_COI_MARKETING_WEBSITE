$(document).ready(function () {



  var scroll_pos = 0;

  $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();

      if (scroll_pos <= 1700) { 

        $("#navbarNav").css('background-color', 'transparent'); // change the bottom color // elgengroid
         

      }
      else if (scroll_pos >= 1750 || scroll_pos <= 3400){
        $("#navbarNav").css('background-color', 'white');
     

      }
      else 
      {
        $("#navbarNav").css('background-color', 'yellow'); // black


      }
  });
});

function topFunction() {

  $('html, body').animate({ scrollTop: 0 }, 'slow'); // top function
}

