const charMainSwiper = new Swiper('.harakteristiky-v-1__slider > .swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    360: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.harakteristiky-v-1__controls-next',
    prevEl: '.harakteristiky-v-1__controls-prev',
  },
});

const charSlideSliders = document.querySelectorAll(
  '.harakteristiky-v-1__slider .harakteristiky-v-1__slide-sliders'
);

charSlideSliders.forEach((slidersContainer) => {
  const mainSliderElem = slidersContainer.querySelector('.harakteristiky-v-1__slide-main.swiper');
  const thumbsSliderElem = slidersContainer.querySelector(
    '.harakteristiky-v-1__slide-thumbs.swiper'
  );

  if (mainSliderElem && thumbsSliderElem) {
    const thumbsSwiper = new Swiper(thumbsSliderElem, {
      spaceBetween: 8,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const mainSwiper = new Swiper(mainSliderElem, {
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  }
});
