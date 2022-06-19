// $(document).ready(function () {



//   var scroll_pos = 0;

//   $(document).scroll(function () {
//       scroll_pos = $(this).scrollTop();

//       if (scroll_pos <= 1700) { 

//         $("#navbarNav").css('background-color', 'transparent'); // change the bottom color // elgengroid
         

//       }
//       else if (scroll_pos >= 1750 || scroll_pos <= 3400){
//         $("#navbarNav").css('background-color', 'white');
     

//       }
//       else 
//       {
//         $("#navbarNav").css('background-color', 'yellow'); // black


// //       }
// //   });
// // });

function topFunction() {

  $('html, body').animate({ scrollTop: 0 }, 'slow'); // top function
}

const nav = document.querySelector('#navbarNav');
const brand = document.querySelector('#brandimage');
const section = document.querySelector('#info');

let options = {
  rootMargin: '-20%',
  // threshold: 0.0
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      nav.classList.add('scrollNavbarblack')
      brand.classList.add('brandraised')
 

    }
    else {

      nav.classList.remove('scrollNavbarblack')

    }

  })


}, options)

observer.observe(section)

anime({
  targets: '.title',
  keyframes:
    [
      { translateY: -20 },

    ],
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true,
  duration: 1500,
});



$('.icon1').hover(function () {
  anime({
    targets: '.icon1',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: -30 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px magenta',


  });

});


$('.icon2').hover(function () {
  anime({
    targets: '.icon2',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: -30 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px magenta',


  });

});


$('.icon3').hover(function () {
  anime({
    targets: '.icon3',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: -30 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px magenta',


  });

});


$('.icon4').hover(function () {
  anime({
    targets: '.icon4',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: -30 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px magenta',


  });

});


$('.icon5').hover(function () {
  anime({
    targets: '.icon5',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: -30 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px magenta',


  });

});



$('.icon6').hover(function () {
  anime({
    targets: '.icon6',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: -30 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px magenta',


  });

});


$('.icon7').hover(function () {
  anime({
    targets: '.icon7',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: -30 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px magenta',


  });

});


$('.icon8').hover(function () {
  anime({
    targets: '.icon8',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: -30 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px magenta',


  });

});


$('.icon9').hover(function () {
  anime({
    targets: '.icon9',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: -30 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px magenta',


  });

});




