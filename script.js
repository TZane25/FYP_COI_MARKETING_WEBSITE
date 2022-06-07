$(document).ready(function () {



  var scroll_pos = 0;

  $(document).scroll(function () {
      scroll_pos = $(this).scrollTop();

      if (scroll_pos <= 1700) { 

        $("#navbarNav").css('background-color', 'transparent'); // change the bottom color // elgengroid
         

      }
      else if (scroll_pos >= 1700 || scroll_pos <= 3400){
        $("#navbarNav").css('background-color', 'white');
        $('#navbarNav').css('transition','transform 1s ease');

        $(".nav-item").css('color', 'black' , 'transition','transform 1s ease')

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
