gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline();

// var vw = -window.innerWidth;

// tl.to(".boxes", {
//   duration: 5,
//   ease: "none",
//   x: vw,
//   repeat: -1,
// });

// let sections = gsap.utils.toArray(".panel");

// let container = document.querySelector(".wrap");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: '.wrap',
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // end: "+=3500",
//     end: () => "+=" + document.querySelector(".wrap").offsetWidth,
//   },
// });

let items = gsap.utils.toArray(".item");
let el = gsap.utils.toArray(".el");

gsap.to(el, {
  xPercent: -100,
  //   x: () =>    -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".customContainer",
    pin: true,
    scrub: 1,
    // snap: false,
    // snap: 1 / (el.length - 1),
    end: () => "+=" + document.querySelector(".customContainer").offsetWidth,
  },
});

gsap.to(items, {
  xPercent: -100 * (items.length - 1),
  //   x: () =>    -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".item-wrap",
    pin: true,
    scrub: 1,
    // snap: false,
    snap: 1 / (items.length - 1),
    end: () => "+=" + document.querySelector(".item-wrap").offsetWidth,
  },
});
