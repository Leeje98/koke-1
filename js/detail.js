

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

//     if(Btn.innerText="상세정보 더보기") {
//         Btn.innerText="상세정보 접기"
//     } else if(Btn.innerText="상세정보 접기") {
//         Btn.innerText="상세정보 더보기"
//     }
// }


function Event() {
    const Btn = document.querySelector('#DetailsBtn')

    // if (Btn.checkd = true) {
    if (checkbox.checked = true) {
        document.querySelector('.tab_nav_02').style.color = 'bule'
    }

}
