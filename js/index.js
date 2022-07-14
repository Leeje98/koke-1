

$(function(){

  jQuery("#Video").YTPlayer({
      videoURL:'WF4jHGcZtT0',                   // 동영상주소
      containment:'.video_box',                   // 선택자 (동영상 삽입할 클래스명)
      autoPlay:true,                            // 자동재생 (음소거가 true인 경우에만 가능함)
      mute:true,                                // 음소거여부
      startAt:0,                                // 동영상이 시작되어야 하는 초
      opacity:1,                                // 불투명도
      showControls: false,                      // 영상 컨트롤(재생바 등) 표시여부
      playOnlyIfVisible: true                   // 해당 화면 밖에 있을때, 일시 중지 
  });

})


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
  // main_visual 텍스트 슬라이드





  new Swiper('.brand_review .swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper_tool .button-next',
      prevEl: '.swiper_tool .button-prev',
    },

    pagination: {
      el: '.swiper_tool .number-pagination',
      // type: 'bullets',
      type: 'fraction',
    },
  });
  // brand_review 
