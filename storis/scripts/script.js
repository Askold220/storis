const swiper2 = new Swiper('.first_swpr', {
  slidesPerView: 1,
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3600,
  },
  loop: true,
  breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
});

var swiper5 = new Swiper('.swpr-cnt', {
direction: 'horizontal',
loop: true,
grabCursor: true,
centeredSlides: false,
slidesPerView: "auto",

observer: true,
observeParents: true,
pagination: {
  el: ".swiper-pagination-2",
  clickable: true,
},
autoplay: {
  delay: 3600,
},
// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

});

var swiper5 = new Swiper('.main-portfolio', {
slidesPerView: 1,
loop: true,
grabCursor: true,
slidesPerView: "auto",
observer: true,
// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

});

var swiper = new Swiper(".mySwiper", {
slidesPerView: 10,
spaceBetween: 20,
loop: true,
freeMode: true,
autoplay: {
  delay: 1200,
},
});


const accordion = document.getElementsByClassName('abaut-acrd');
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
      this.classList.toggle('active')
  })
};
/* GingerMax */



