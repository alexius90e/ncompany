const charMainSwiper = new Swiper('.harakteristiky-v-1__slider > .swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  cssMode: true,
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

charSlideSliders.forEach((slidersElem) => {
  const baseClassName = '.harakteristiky-v-1__slide';
  const mainSliderElem = slidersElem.querySelector(`${baseClassName}-main .swiper`);
  const thumbsSliderElem = slidersElem.querySelector(`${baseClassName}-thumbs.swiper`);
  const mainSliderNext = slidersElem.querySelector(`${baseClassName}-main-controls-next`);
  const mainSliderPrev = slidersElem.querySelector(`${baseClassName}-main-controls-prev`);

  if (mainSliderElem && thumbsSliderElem) {
    const thumbsSwiper = new Swiper(thumbsSliderElem, {
      spaceBetween: 8,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      allowTouchMove: false,
      cssMode: true,
    });
    const mainSwiper = new Swiper(mainSliderElem, {
      spaceBetween: 20,
      loop: true,
      allowTouchMove: false,
      navigation: {
        nextEl: mainSliderNext,
        prevEl: mainSliderPrev,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
      cssMode: true,
    });
  }
});
