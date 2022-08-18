

$(function(){



  jQuery("#Video").YTPlayer({
      videoURL:'WF4jHGcZtT0',                   // 동영상주소
      containment:'.video_box',                   // 선택자 (동영상 삽입할 클래스명)
      autoPlay:true,                            // 자동재생 (음소거가 true인 경우에만 가능함)
      mute:true,                                // 음소거여부
      startAt:0,                                // 동영상이 시작되어야 하는 초
      opacity:1,                                // 불투명도
      showControls: false,                      // 영상 컨트롤(재생바 등) 표시여부
      playOnlyIfVisible: true,                  // 해당 화면 밖에 있을때, 일시 중지 
  }); // YTPlayer





})



const quickMove = document.querySelectorAll('.Quick_button_box.Move')

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      gsap.to(quickMove, 0.3, {
        opacity: 1
      })
    } else {
        gsap.to(quickMove, 0.3, {
          opacity: 0
        })
    }
})
/* top_btn, down_btn 200px 내려가면 보이는 효과*/




const floating = document.querySelector('.floating_banner')

window.addEventListener('scroll', () => {
  if (window.scrollY > 900) {
    gsap.to(floating, 0.5, {
      opacity: 1
    })
  } else {
    gsap.to(floating, 0.5, {
      opacity: 0
    })
  }
})
/* floating_banner 비주얼메인 지나치면 보이는 효과*/





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
      nextEl: '.main_visual .visual-button-next',
      prevEl: '.main_visual .visual-button-prev'
    },
  
    autoplay: {
        delay: 8000,
    },
    
  });
  // main_visual 텍스트 슬라이드
















const scrollEls = document.querySelectorAll('.scroll_el')

scrollEls.forEach((scrollEl) => {
  new ScrollMagic
    .Scene({       // 감지할 위치 
      triggerElement: scrollEl,   // 감지할 대상
      triggerHook: 0.7 // 화면 높이를 0에서 1로 봤을때 0.7쯤 오면 이벤트를 일으키기 위해 Hook이라는 고리를 걸어놓고 감지하게 한다 (0.7이나 0.8이 제일 많이 쓰인다)
    })
    .setClassToggle(scrollEl, 'show')
    .addTo(new ScrollMagic.Controller())
})
// ScrollMagic       -- sub_banner  -- brand_video





const Products = document.querySelectorAll('.product_list li')

Products.forEach((Product) => {
  new ScrollMagic
    .Scene({       // 감지할 위치 
      triggerElement: Product,   // 감지할 대상
      triggerHook: 0.7 // 화면 높이를 0에서 1로 봤을때 0.7쯤 오면 이벤트를 일으키기 위해 Hook이라는 고리를 걸어놓고 감지하게 한다 (0.7이나 0.8이 제일 많이 쓰인다)
    })
    .setClassToggle(Product, 'show_pd')
    .addTo(new ScrollMagic.Controller())
})
// ScrollMagic      --- 상품 리스트 밑에서 위로 효과













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
  // brand_review // REVIEW
