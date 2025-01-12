document.addEventListener('DOMContentLoaded', function () {
  const mainCharSlider = new Splide('#harakterSliderMain', {
    type: 'loop',
    perPage: 3,
    gap: 20,
    perMove: 1,
    arrows: false,
    breakpoints: {
      360: {
        perPage: 1,
      },
      576: {
        perPage: 1.3,
      },
      768: {
        perPage: 1.6,
      },
      992: {
        perPage: 2,
      },
      2560: {
        perPage: 3,
      },
    },
  });

  mainCharSlider.mount();

  const mainCharSliderNext = document.querySelector('.harakteristiky-v-1__controls-next');
  const mainCharSliderPrev = document.querySelector('.harakteristiky-v-1__controls-prev');

  if (mainCharSliderNext)
    mainCharSliderNext.addEventListener('click', () => {
      mainCharSlider.go('>');
    });

  if (mainCharSliderPrev)
    mainCharSliderPrev.addEventListener('click', () => {
      mainCharSlider.go('<');
    });

  const charSlides = document.querySelectorAll(
    '.harakteristiky-v-1__slider .harakteristiky-v-1__slide'
  );

  charSlides.forEach((slidersElem) => {
    const baseClassName = '.harakteristiky-v-1__slide';
    const mainSliderElem = slidersElem.querySelector(`${baseClassName}-main .splide`);
    const thumbsSliderElem = slidersElem.querySelector(`${baseClassName}-thumbs .splide`);

    const main = new Splide(mainSliderElem, {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      drag: false,
    });

    const thumbnails = new Splide(thumbsSliderElem, {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: 8,
      speed: 300,
      arrows: false,
      drag: false,
      focus: 'center',
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
  });
});
