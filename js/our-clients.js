const partneryV2Swiper = new Swiper('.our-clients__slider .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
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
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 56,
    },
  },
  navigation: {
    nextEl: '.our-clients__slider-controls-next',
    prevEl: '.our-clients__slider-controls-prev',
  },
});
