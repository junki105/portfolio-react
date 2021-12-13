const swiper_work = new Swiper('.swiper-container-work', {
    loop: true,
    speed: 500,
    spaceBetween: 40,
     
    breakpoints: {
      300: {
        slidesPerView: 1.2,
      },
      767: {
        slidesPerView: 2.8, 
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-work',
      prevEl: '.swiper-button-prev-work',
    }
  
  });