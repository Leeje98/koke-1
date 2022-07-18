
// const swiper01_1 = new Swiper(".sheet_01 .hot_2022_swiper_ind", {
const swiper = new Swiper(".sheet_01 .hot_2022_swiper_ind", {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    // autoplay: {
    //     delay: 5000,
    // },
});
// 

const swiper2 = new Swiper(".sheet_01 .hot_2022_swiper", {
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 8000,
    },
});







// const swiper02_1 = new Swiper(".sheet_02 .hot_2022_swiper_ind", {
new Swiper('.sheet_03 .hot_2022_swiper_ind', {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    // autoplay: {
    //     delay: 5000,
    // },
});
// 

// const swiper02_2 = new Swiper(".sheet_02 .hot_2022_swiper", {
new Swiper(".sheet_03 .hot_2022_swiper", {
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 8000,
    },
});


// const swiper02_1 = new Swiper(".sheet_02 .hot_2022_swiper_ind", {
new Swiper('.sheet_02 .hot_2022_swiper_ind', {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    // autoplay: {
    //     delay: 5000,
    // },
});
// 

// const swiper02_2 = new Swiper(".sheet_02 .hot_2022_swiper", {
new Swiper(".sheet_02 .hot_2022_swiper", {
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 8000,
    },
});














// const brands_swiper = new Swiper('.slide_box .swiper', {
new Swiper('.slide_box .swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 6,
    speed: 10000,
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.slide_box .swiper-button-next',
      prevEl: '.slide_box .swiper-button-prev',
    },
    autoplay: {
        // delay: 9000,
        delay: 0,
        waitForTransition: false,
    },
  });