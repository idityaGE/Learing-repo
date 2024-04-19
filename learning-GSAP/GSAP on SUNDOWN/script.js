function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


//fixed img code

let eleContainer = document.querySelector(".elem-container");
let fixImg = document.querySelector("#fixed-img");

eleContainer.addEventListener('mouseenter', function () {
  fixImg.style.display = 'block';
});

eleContainer.addEventListener('mouseleave', function () {
  fixImg.style.display = 'none';
});

let imgBg = document.querySelectorAll('.elem');
imgBg.forEach(function (e) {
  e.addEventListener('mouseenter', function () {
    let image = e.getAttribute('data-img');
    fixImg.style.backgroundImage = `url(${image})`;
  })
});

let loaderPage = document.querySelector("#fixed-page");
setTimeout(() => {
  loaderPage.style.top = "-100%"
}, 4000);

//GSAP TEST

let gtl = gsap.timeline({delay:3.8});

gtl
  .from(".nav-btn", {
    opacity: 0,
    y: -30,
    duration: 1,//default duration is 0.5s
  })
  .from(".p1-left", {
    opacity: 0,
    y:30,
  })


gsap.from(".p1-right", {
  opacity: 0,
  x: 40,
  duration: 2
})

gsap.to(".shape3", {
  x: -200,
  yoyo: "true",
  duration: "-1"//create infinite loop
})


//textillate.js [jQuery cdn, animate css cdn codepen, lettering js cdn, textillate cdn]
// let tl = gsap.timeline();
// tl
//   .from('#1f', {
//     onstart: function () {
//       $('#1f').textillate({
//         in: {
//           effect: "fadeInUp",
//           callback: function () {
//             $('#1f').textillate("out")
//           }
//         },
//         out: { effect: "fadeOutUp" }
//       });
//     }
//   })
//   .to("#fixed-page",{
//     top:"-100%",
//     delay:2,
//     ease: "Power4.easeOut"
//   })