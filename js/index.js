


const mainVisualSwiper = new Swiper('.main_visual .swiper', {
    
    // Optional parameters
    direction: "vertical",
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.main_visual .swiper .swiper-button-next',
      prevEl: '.main_visual .swiper .swiper-button-prev',
    },
  
    autoplay: {
        delay: 8000,
    },
  });