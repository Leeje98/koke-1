

let mainImg = document.querySelector('.main_img > img')
let thumImg = document.querySelectorAll('.thum_img_box > img')

for(let i=0; i<thumImg.length; i++) {
    thumImg[i].onclick = mainChange
}

function mainChange() {
    let newImg = this.src
    mainImg.setAttribute('src', newImg)
}
// 클릭에 따라 썸네일 이미지 바뀌기



function on() {
    document.querySelector('.xi-heart-o').style.display = 'none'
    document.querySelector('.xi-heart').style.display = 'block'
}
function off() {
    document.querySelector('.xi-heart-o').style.display = 'block'
    document.querySelector('.xi-heart').style.display = 'none'
}
// 찜하기 (하트아이콘) 클릭 이벤트




// function BtnEvent() {
//     const Btn = document.querySelector('.Toggle_Btn')

//     if(Btn.innerHTML="상세정보 더보기") {
//         Btn.innerHTML="상세정보 접기"
//     } else {
//         Btn.innerHTML="상세정보 더보기"
//     }

// }


// function Event() {
//     const Btn = document.querySelector('#DetailsBtn')

//     // if (Btn.checkd = true) {
//     if (checkbox.checked = true) {
//         document.querySelector('.tab_nav_02').style.color = 'bule'
//     }

// }


 function BtnEvent() {
  const Debtn = document.querySelector(".De_btn");

  const Filter = document.querySelector(".filter");

  if(Debtn.value=="상세정보 더보기"){
    Debtn.value="상세정보 접기";
    Filter.style.display = 'none';
    document.querySelector('.Details_box').style.height = 'auto'
    }
  else {
    Debtn.value="상세정보 더보기";
    Filter.style.display = 'block';
    document.querySelector('.Details_box').style.height = '1200px';
    // window.scrollTo({ left: 0, top: 1700, behavior: "smooth" })
    window.scrollTo({ top: 1700 })
    }
 }
 // 상세이미지 펼치고 닫는 기능
