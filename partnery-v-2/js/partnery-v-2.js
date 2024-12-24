const partneryV2Swiper = new Swiper('.partnery-v-2 .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    830: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.partnery-v-2__slider-controls-next',
    prevEl: '.partnery-v-2__slider-controls-prev',
  },
});
