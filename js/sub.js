
// let elems = document.querySelectorAll('.sheet li');


// elems.forEach(function(userItem) {
//     deleteUser(userItem);
//   });


// let elem = document.querySelector('.sheet li');

// elem.addEventListener('click', () => {
//     element.classList.toggle('on');
// })

// elements.forEach(function (element) {
//     alert(element.innerHTML)
//   });

// // 

// function changeStyle() {
// elements.forEach(function (element) {
//     element.style.color = "white";
//     element.style.backgroundColor = "red";
//     element.style.margin = "10px 0";
// });
// }

// // 

// const allButtons = document.querySelectorAll("button");

let options = document.querySelectorAll('.sheet li');


options.forEach(function (element) {
    element.addEventListener("click", () => {
    // element.style.color = "white";
    // element.style.backgroundColor = "#333";
    element.classList.toggle('on');
  });
});

// const quickMove_01 = document.querySelectorAll('.Move')

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 200) {
//       gsap.to(quickMove_01, 0.3, {
//         opacity: 1
//       })
//     } else {
//         gsap.to(quickMove_01, 0.3, {
//           opacity: 0
//         })
//     }
// })
/* top_btn, down_btn 200px 내려가면 보이는 효과*/



// const allButtons = document.querySelectorAll("button");

// allButtons.forEach(function (button) {
//   button.addEventListener("click", () => {
//     alert("Button clicked!");
//   });
// });


