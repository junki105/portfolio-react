var swiper = new Swiper(".about-works-swiper", {
    slidesPerView: 1.4,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
      },
    pagination: {
      el: ".swiper-pagination-about-works",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
