const quizSwiper = new Swiper('.kviz-v-1__quiz .swiper', {
  slidesPerView: 1,
  spaceBetween: 32,
  allowTouchMove: false,
  breakpoints: {
    320: {
      autoHeight: true,
    },
    576: {
      autoHeight: false,
    },
  },
  navigation: {
    nextEl: '.kviz-v-1__quiz-card-controls-next',
    prevEl: '.kviz-v-1__quiz-card-controls-prev',
  },
});

quizSwiper.on('reachEnd', () => {
  const quizBgElem = document.querySelector('.kviz-v-1__quiz-bg');
  if (quizBgElem) quizBgElem.classList.add('reachend');
});
