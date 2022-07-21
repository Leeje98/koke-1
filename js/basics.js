


const topBannerCloseBtn = document.querySelector('.topBanner_inner .fa-xmark')

topBannerCloseBtn.onclick = hiddenEvent

function hiddenEvent() {
  document.querySelector('.topBanner').style.height = '0';

  document.querySelector('.main_visual').style.paddingTop = '100px';
  document.querySelector('.main_visual .visual-button-prev').style.paddingTop = '0';

  document.querySelector('aside .filter').style.paddingTop = '0';
}
// 탑배너 닫히게 하기




const topBtn = document.querySelector('.Quick_top_box')

topBtn.addEventListener('click', () => {
  gsap.to(window, 1, {
    scrollTo: 0
  })
})
/* top_btn */


const downBtn = document.querySelector('.Quick_bottom_box')

downBtn.addEventListener('click', () => {
  gsap.to(window, 2, {
    scrollTo: 7000
  })
})
/* down_btn */




const HamBtn = document.querySelector('.lnb01 .AllMenu')
const sheetAll = document.querySelector('.AllMenu .sheet_All')

HamBtn.onmouseover = HamslideDownEvent
// sheetAll.onmouseleave  = HamslideUpEvent
// sheetAll.onmouseout  = HamslideUpEvent
HamBtn.onmouseout  = HamslideUpEvent

function HamslideDownEvent() {
  // document.querySelector('.sheet_All').style.height = 'auto'
  document.querySelector('.sheet_All').style.height = '330px'
  document.querySelector('.sheet_brand').style.top = '51px'
}

function HamslideUpEvent() {
  document.querySelector('.sheet_All').style.height = '0'
}
// 햄버튼 호버시 전체메뉴 풀다운 효과





const Brand = document.querySelector('.brand')
const sheetBrand = document.querySelector('.sheet_brand')

Brand.onmouseover = brandslideDownEvent
// sheetBrand.onmouseleave  = brandslideUpEvent
// sheetBrand.onmouseout  = brandslideUpEvent
Brand.onmouseout  = brandslideUpEvent

function brandslideDownEvent() {
  // document.querySelector('.sheet_All').style.height = 'auto'
  document.querySelector('.sheet_brand').style.height = '400px'
  document.querySelector('.sheet_brand').style.top = '51px'
}

function brandslideUpEvent() {
  document.querySelector('.sheet_brand').style.height = '0'
}
// 햄버튼 옆 |브랜드 검색| 호버시 풀다운 효과





const searshBtn = document.querySelector('.lnb .seash_li')
const searsh = document.querySelector('#Lnb_seash')


searshBtn.addEventListener('click', () => {
    searsh.style.width = '120px'
    searsh.style.opacity = '1'
    searshBtn.style.flex = '1.5'
    // searshBtn.style.textAlign = 'end'
    searsh.setAttribute('placeholder', '검색어 입력')
})

searshBtn.addEventListener('blur', () => {
    searsh.style.width = '0'
    searsh.style.opacity = '0'
})
// 클릭시 검색창 늘이기

