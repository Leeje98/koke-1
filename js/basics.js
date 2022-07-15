


const topBannerCloseBtn = document.querySelector('.topBanner_inner .fa-xmark')

topBannerCloseBtn.onclick = hiddenEvent

function hiddenEvent() {
  document.querySelector('.topBanner').style.height = '0'
  document.querySelector('.main_visual').style.paddingTop = '100px'
}
// 탑배너 닫히게 하기





const HamBtn = document.querySelector('.AllMenu')
const sheetAll = document.querySelector('.sheet_All')

HamBtn.onmouseover = HamslideDownEvent
sheetAll.onmouseleave  = HamslideUpEvent

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
sheetBrand.onmouseleave  = brandslideUpEvent

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
    searsh.setAttribute('placeholder', '검색어 입력')
})

searshBtn.addEventListener('blur', () => {
    searsh.style.width = '0'
    searsh.style.opacity = '0'
})
// 검색창 늘이고 줄이기

