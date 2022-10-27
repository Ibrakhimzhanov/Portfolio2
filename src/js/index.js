gsap.registerPlugin(ScrollTrigger);

let container = document.getElementById("container");
let sections = gsap.utils.toArray(".panel");

const tl = gsap.timeline();
tl.to(container, {
  x: () =>
    -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    end: () => "+=" + container.offsetWidth,
  },
}).from(".work", 5, { transfrom: "-100%", scale: 0.5 });
