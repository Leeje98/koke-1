
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

let swiper2 = new Swiper(".sheet_01 .hot_2022_swiper", {
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


const swiper02_1 = new Swiper(".sheet_02 .hot_2022_swiper_ind", {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    // autoplay: {
    //     delay: 5000,
    // },
});
// 

const swiper02_2 = new Swiper(".sheet_02 .hot_2022_swiper", {
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
