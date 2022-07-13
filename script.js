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


anime({
  targets: '.screwImage',
  keyframes:
    [
      {rotate: 360},
    ],
  easing: 'easeInOutQuad',
  loop: true,
  duration: 5500,
})

anime({
  targets: '.pigImage',
  keyframes:
    [
      { translateY: -15 },
    ],
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true,
  duration: 1500,
})

anime({
  targets: '.riskImage',
  keyframes:
    [
      { translateY: -30,
        rotate: 15
      },
    ],
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true,
  duration: 1500,
})

anime({
  targets: '.microsoftImage',
  keyframes:
    [
      { rotate: 25,
        rotate: -25},
    ],
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true,
  duration: 1500,
})

$('.card1').mouseenter(function () {
  anime({
    targets: '.card1',
    duration: 500,
    loop: false,
    keyframes:
      [
        { scale: 1.1 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad'
  })
});

$('.card1').mouseleave(function () {
  anime({
    targets: '.card1',
    duration: 500,
    loop: false,
    keyframes:
      [
        { scale: 1.0},

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad'

  })
});

$('.card2').mouseenter(function () {
  anime({
    targets: '.card2',
    duration: 500,
    loop: false,
    keyframes:
      [
        { scale: 1.1 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad'
  })
});

$('.card2').mouseleave(function () {
  anime({
    targets: '.card2',
    duration: 500,
    loop: false,
    keyframes:
      [
        { scale: 1.0},

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad'

  })
});

$('.card3').mouseenter(function () {
  anime({
    targets: '.card3',
    duration: 500,
    loop: false,
    keyframes:
      [
        { scale: 1.1 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad'
  })
});

$('.card3').mouseleave(function () {
  anime({
    targets: '.card3',
    duration: 500,
    loop: false,
    keyframes:
      [
        { scale: 1.0},

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad'

  })
});


$('.icon1').mouseenter(function () {
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
    'box-shadow': '10px 10px 100px 5px magenta'

  })
});

$('.icon1').mouseleave(function () {
  anime({
    targets: '.icon1',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: 0 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px black'
    

  })
});


$('.icon2').mouseenter(function () {
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
    'box-shadow': '10px 10px 100px 5px magenta'

  })
});

$('.icon2').mouseleave(function () {
  anime({
    targets: '.icon2',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: 0 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px black'
    

  })
});


$('.icon3').mouseenter(function () {
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
    'box-shadow': '10px 10px 100px 5px magenta'

  })
});

$('.icon3').mouseleave(function () {
  anime({
    targets: '.icon3',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: 0 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px black'
    

  })
});


$('.icon4').mouseenter(function () {
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
    'box-shadow': '10px 10px 100px 5px magenta'

  })
});

$('.icon4').mouseleave(function () {
  anime({
    targets: '.icon4',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: 0 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px black'
    

  })
});


$('.icon5').mouseenter(function () {
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
    'box-shadow': '10px 10px 100px 5px magenta'

  })
});

$('.icon5').mouseleave(function () {
  anime({
    targets: '.icon5',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: 0 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px black'
    

  })
});



$('.icon6').mouseenter(function () {
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
    'box-shadow': '10px 10px 100px 5px magenta'

  })
});

$('.icon6').mouseleave(function () {
  anime({
    targets: '.icon6',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: 0 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px black'
    

  })
});


$('.icon7').mouseenter(function () {
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
    'box-shadow': '10px 10px 100px 5px magenta'

  })
});

$('.icon7').mouseleave(function () {
  anime({
    targets: '.icon7',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: 0 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px black'
    

  })
});


$('.icon8').mouseenter(function () {
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
    'box-shadow': '10px 10px 100px 5px magenta'

  })
});

$('.icon8').mouseleave(function () {
  anime({
    targets: '.icon8',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: 0 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px black'
    

  })
});


$('.icon9').mouseenter(function () {
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
    'box-shadow': '10px 10px 100px 5px magenta'

  })
});

$('.icon9').mouseleave(function () {
  anime({
    targets: '.icon9',
    duration: 1000,
    loop: false,
    keyframes:
      [
        { translateY: 0 },

      ],
    direction: 'alternate',
    easing: 'easeInOutQuad',
    'box-shadow': '10px 10px 100px 5px black'
    

  })
});




