gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

var vw = -window.innerWidth;

tl.to(".boxes", {
  duration: 5,
  ease: "none",
  x: vw,
  repeat: -1,
});

let sections = gsap.utils.toArray(".panel");

let container = document.querySelector(".wrap");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // end: "+=3500",
    end: () => "+=" + container.offsetWidth,
  },
});

let items = gsap.utils.toArray(".item");

let containerWork = document.querySelector(".containerWork");

gsap.to(containerWork, {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: containerWork,
    pin: true,
    scrub: 1,
    // snap: 1,
    // end: "+=3500",
    end: () => "+=" + containerWork.offsetWidth,
  },
});