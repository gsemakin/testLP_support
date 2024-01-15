document.addEventListener("DOMContentLoaded", () => {
  const resortsSlider = new Swiper(".faq-slider", {
    speed: 400,
    spaceBetween: 32,
    slidesPerView: 1.25,

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      300: {
        slidesPerView: 3,
        spaceBetween: 16,
      },

      769: {
        slidesPerView: 3,
        spaceBetween: 32,
      },

      961: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },

    navigation: {
      nextEl: ".faq-swiper-button-next",
      prevEl: ".faq-swiper-button-prev",
    },
  });
});
