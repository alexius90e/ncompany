const karuselFotoV1Swiper = new Swiper('.karusel-foto-v-1__slider .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    1600: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: '.karusel-foto-v-1__slider-controls-next',
    prevEl: '.karusel-foto-v-1__slider-controls-prev',
  },
});
