










gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline();
// tl.to("#txt",{
//   ScrollTrigger:{
//     trigger:"#page2",
//     marker:true,
//     pin:true,
//     top:"top top",
//     scrub:1,
//   },
//   x:100,
//   duration:2
// })


gsap.to("#txt", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top 50%",
    end: "bottom 10%",
    scrub: 1,
    // markers: true
  },
  y:"-150",
  duration: 2,
})
gsap.to("#page2", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top 50%",
    end: "bottom 10%",
    scrub: 1,
    // markers: true
  },
  y:"-50",
  duration: 1,
})


gsap.to("#txt1", {
  scrollTrigger: {
    trigger: "#txt1",
    start: "-800% top",
    end: "bottom",
    scrub: 1,
    // markers: true
  },
  y:"-150",
  duration: 2,
})
gsap.to("#page1", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "bottom 10%",
    scrub: 1,
    // markers: true
  },
  y:"-50",
  duration: 1,
})


gsap.to("#txt2", {
  scrollTrigger: {
    trigger: "#txt2",
    start: "-800% 50%",
    end: "bottom",
    scrub: 1,
    // markers: true
  },
  y:"-150",
  duration: 2,
})
gsap.to("#page3", {
  scrollTrigger: {
    trigger: "#page2",
    start: "-20% top",
    // end: "bottom",
    scrub: 1,
    // markers: true
  },
  y:"-55",
  duration: 1,
})