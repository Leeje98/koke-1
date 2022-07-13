
const swiper = new Swiper(".hot_2022_swiper_ind", {
    spaceBetween: 10,   // 공간사이
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 5000,
    },
});

const swiper2 = new Swiper(".hot_2022_swiper", {
    spaceBetween: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
