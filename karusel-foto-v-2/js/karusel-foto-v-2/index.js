const karuselFotoV2Swiper = new Swiper('.karusel-foto-v-2__slider .swiper', {
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
      slidesPerView: 3,
      spaceBetween: 22,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: '.karusel-foto-v-2__slider-controls-next',
    prevEl: '.karusel-foto-v-2__slider-controls-prev',
  },
});
