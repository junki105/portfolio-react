var swiper = new Swiper(".recruit-swiper", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
      },
    pagination: {
      el: ".swiper-pagination-recruit",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
