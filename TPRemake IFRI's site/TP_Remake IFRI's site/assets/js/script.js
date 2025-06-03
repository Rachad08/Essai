const heading = document.getElementById("big-heading");
const stopPoint = document.getElementById("banner");
let lastScroll = 0;
window.addEventListener("scroll", () => {
    const stopOffset = stopPoint.getBoundingClientRect().top;

    let currentScroll = window.scrollY;
    if (stopOffset <= 0) {
        heading.style.transform = 'translateY(-300px)';
    }
    if ( currentScroll < lastScroll) {
        heading.style.transform = 'translateY(-220px)';
    }
    if (stopOffset >= 0) {
        heading.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
})

const targets = document.querySelectorAll('.target');
const hiddenBlock = document.getElementById('hidden-block');

window.addEventListener('scroll', () => {
  let show = false;

  targets.forEach(target => {
    const rect = target.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom > 0) {
      show = true;
    }
  });

  hiddenBlock.style.display = show ? 'block' : 'none';
});

//slider
const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");

let index = 0;
let direction = 1; // 1 = vers la droite, -1 = vers la gauche

setInterval(() => {
  index += direction;

  // Si on arrive au dernier ou au premier slide, on inverse la direction
  if (index === slides.length - 1 || index === 0) {
    direction *= -1;
  }

  track.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

// //retenu bloc bleue
// const header_3s = document.querySelector(".header-3");
// const section_3s = document.querySelectorAll(".section-3s");

// window.addEventListener('scroll', () => {
//     let show = false;
  
//     section_3s.forEach(target => {
//       const rect = target.getBoundingClientRect();
//       if (rect.top <= 0 && rect.bottom > 0) {
//         show = true;
//       }
//     });
  
//     header_3s.style.position = show ? 'fixed' : 'unset';
//   });
// //retenu bloc vert 
// // const header_1s = document.querySelector(".header-1");
// // const section_1s = document.querySelectorAll(".section-1s");
// // window.addEventListener('scroll', () => {
// //     let show = false;
  
// //     section_1s.forEach(target => {
// //       const rect = target.getBoundingClientRect();
// //       if (rect.top <= 0 && rect.bottom > 0) {
// //         show = true;
// //       }
// //     });
  
// //     header_1s.style.position = show ? 'fixed' : 'unset';
// //   });

