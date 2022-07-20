
const swiper_1_1 = new Swiper(".sheet_01 .hot_2022_swiper_ind", {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,   // 한번에 보여질 슬라이드 갯수
    freeMode: true,     // 스스륵 
    watchSlidesProgress: true,
});


const swiper_1_2 = new Swiper(".sheet_01 .hot_2022_swiper", {
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_1_1,
    },
    autoplay: {
        delay: 7000,                      // 자동재생 시 슬라이드가 멈추어 있는 시간
        disableOnInteraction: false,      // 클릭하고 나서 자동재생 재개
    },
    speed: 1000,                           // 슬라이드 전환시 걸리는 시간
});







const swiper_2_1 = new Swiper('.sheet_02 .hot_2022_swiper_ind', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});


const swiper_2_2 = new Swiper(".sheet_02 .hot_2022_swiper", {
    spaceBetween: 3,
    freeMode: {
        enabled: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_2_1,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    speed: 1000, 
});







const swiper_3_1 = new Swiper('.sheet_03 .hot_2022_swiper_ind', {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});


const swiper_3_2 = new Swiper(".sheet_03 .hot_2022_swiper", {
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_3_1,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    speed: 1000, 
});






const swiper_4_1 = new Swiper('.sheet_04 .hot_2022_swiper_ind', {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});


const swiper_4_2 = new Swiper(".sheet_04 .hot_2022_swiper", {
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_4_1,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    speed: 1000, 
});





const swiper_5_1 = new Swiper('.sheet_05 .hot_2022_swiper_ind', {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});


const swiper_5_2 = new Swiper(".sheet_05 .hot_2022_swiper", {
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_5_1,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    speed: 1000, 
});





const swiper_6_1 = new Swiper('.sheet_06 .hot_2022_swiper_ind', {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});


const swiper_6_2 = new Swiper(".sheet_06 .hot_2022_swiper", {
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper_6_1,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    speed: 1000, 
});

































new Swiper('.roastery_brands .slide_box .swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 6,
    speed: 7000,
    // Navigation arrows
    navigation: {
      nextEl: '.slide_box .swiper-button-next',
      prevEl: '.slide_box .swiper-button-prev',
    },
    autoplay: {
        delay: 0,
        // waitForTransition: false,
        disableOnInteraction: false,
    },
  });
//  roastery_brands 로스터리 브랜드 리스트 슬라이드