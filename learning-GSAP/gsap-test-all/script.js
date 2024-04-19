gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 50%",
    end: "bottom 10%",
    scrub: 1,
    pin: true,
    markers: true
  },
  rotation: 900,
  duration: 2,
  // repeat:-1

})
