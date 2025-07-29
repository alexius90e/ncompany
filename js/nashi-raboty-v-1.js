const nashiRabotyV1SwiperEl = document.querySelector('.nashi-raboty-v-1 .swiper');

if (nashiRabotyV1SwiperEl) {
  const swiper = new Swiper(nashiRabotyV1SwiperEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1,
          fill: 'row',
        },
        spaceBetween: 20,
      },
      993: {
        slidesPerView: 1,
        grid: {
          rows: 2,
          fill: 'row',
        },
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
