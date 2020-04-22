$('.nav__link_input').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('nav__link_input_active');
    $('.nav__link').toggleClass('nav__link_active')
    $('.nav__link_input__item').toggleClass('nav__link_input__item_active')
});

$('.slider').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.burger-menu-button').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('burger-menu-button_active');
  $('.burger-links').toggleClass('burger-links_active');
})

const anchors = document.querySelectorAll('a[href*="#"]');
const burgerButton = document.querySelector('.burger-menu-button');
const burgerLinks = document.querySelector('.burger-links')

for(let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
    burgerButton.classList.toggle('burger-menu-button_active');
    burgerLinks.classList.toggle('burger-links_active');
  });
};

// const blocks = Array.from(document.querySelectorAll('.block'));

// window.onscroll = function() {
//   blocks.forEach(elem => {
//     let currentScroll = window.pageYOffset;
//     let top = `${elem.offsetTop}`;
//     let bottom = `${elem.offsetTop + elem.offsetHeight}`;
//     if(currentScroll > top && currentScroll < bottom) {
//       burgerButton.style.background = 'white';
//       burgerButton.classList.add('background')
//     }  else {
//       burgerButton.style.background = '#383838';
//       burgerButton.classList.remove('background')
//     }
//   });
// };

// const blocks = Array.from(document.querySelectorAll('.block'));

// window.onscroll = function() {
//   blocks.forEach(elem => {
//     let currentScroll = window.pageYOffset;
//     let top = `${elem.offsetTop}`;
//     let bottom = `${elem.offsetTop + elem.offsetHeight}`;
//     if(currentScroll > top && currentScroll < bottom) {
//       burgerButton.classList.add("white");
//       burgerButton.classList.add('background');
//       let white = document.querySelector('.white');
//       white.style.background = 'white';
//     } else {
//       burgerButton.classList.remove('white')
//       burgerButton.classList.remove('background');
//       burgerButton.style.background = '#383838';
//     }
//   });
// };

// const blocks = Array.from(document.querySelectorAll('.block'));

// blocks.forEach(elem => {
//   elem.onscroll = function() {
//     console.log(elem)
//     let currentScroll = window.pageYOffset;
//     let top = `${elem.offsetTop}`;
//     let bottom = `${elem.offsetTop + elem.offsetHeight}`;
//     if(currentScroll > top && currentScroll < bottom) {
//       burgerButton.classList.add("white");
//       burgerButton.classList.add('background');
//       let white = document.querySelector('.white');
//       white.style.background = 'white';
//     } else {
//       burgerButton.classList.remove('white')
//       burgerButton.classList.remove('background');
//       burgerButton.style.background = '#383838';
//     }
//   } ();
// });

let block2 = document.querySelector('.block-2');
let block4 = document.querySelector('.block-4');
let block6 = document.querySelector('.block-6');
let block10 = document.querySelector('.block-10');
let footer = document.querySelector('footer');


window.onscroll = function() {
  let currentScroll = window.pageYOffset;
  // block 2
  let block2Top = block2.offsetTop - 50;
  let block2Bottom = block2Top + block2.offsetHeight;
  // block 4
  let block4Top = block4.offsetTop - 50;
  let block4Bottom = block4Top + block4.offsetHeight;
  // block 6
  let block6Top = block6.offsetTop - 50;
  let block6Bottom = block6Top + block6.offsetHeight;
  // block 10
  let block10Top = block10.offsetTop - 50;
  let block10Bottom = block10Top + block10.offsetHeight;
  // footer
  let footerTop = footer.offsetTop - 50;
  let footerBottom = footerTop + footer.offsetHeight;
  if(currentScroll > block2Top && currentScroll < block2Bottom) {
    burgerButton.style.background = 'white'
    burgerButton.classList.add('background');
  } else if (currentScroll > block4Top && currentScroll < block4Bottom) {
    burgerButton.style.background = 'white'
    burgerButton.classList.add('background');
  } else if (currentScroll > block6Top && currentScroll < block6Bottom) {
    burgerButton.style.background = 'white'
    burgerButton.classList.add('background');
  } else if (currentScroll > block10Top && currentScroll < block10Bottom) {
    burgerButton.style.background = 'white'
    burgerButton.classList.add('background');
  } else if (currentScroll > footerTop && currentScroll < footerBottom) {
    burgerButton.style.background = 'white'
    burgerButton.classList.add('background');
  } else {
    burgerButton.style.background = '#383838'
    burgerButton.classList.remove('background');
    if(burgerButton.classList.contains('burger-menu-button_active')) {
      $('.burger-menu-button').css({background: 'white'})
      burgerButton.style.background = 'white';
    }
  }
  burgerButton.onclick = function() {
    $('.burger-menu-button_active').css({background: 'white'})
    $('.burger-menu-button_active').on('click', function() {
      if(currentScroll > block2Top && currentScroll < block2Bottom 
        || currentScroll > block4Top && currentScroll < block4Bottom 
        || currentScroll > block6Top && currentScroll < block6Bottom 
        || currentScroll > block10Top && currentScroll < block10Bottom 
        || currentScroll > footerTop && currentScroll < footerBottom) {
        $('.burger-menu-button').css({background: 'white'})
        burgerButton.style.background = 'white'
      } else {
        $('.burger-menu-button').css({background: '#383838'})
        burgerButton.style.background = '#383838'
      }
    })
  }
}


