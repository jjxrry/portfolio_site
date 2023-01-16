const navbar = document.querySelector('#nav-bar');
let begin = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= begin) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

function smoothScrollContact(){
  document.querySelector('.contact-bar').scrollIntoView({
      behavior: 'smooth'
  });
}

function smoothScrollProjects(){
  document.querySelector('.project-bar').scrollIntoView({
      behavior: 'smooth'
  });
}

gsap.from('.ani-bar', {
  opacity: 10,
  x: -2000,
  ease: 'power1.in',
  stagger: .3,
  duration: 2,
  scrollTrigger: {
    trigger: '.hero-animation',
    toggleActions: 'play reverse play reverse',
  }
})

const workText = new SplitType('#works')

gsap.to('.char', {
  y: 0,
  ease: 'power1.in',
  delay: .7,
  stagger: .15,
  duration: .8,
  scrollTrigger: {
    trigger: '.project-container',
    toggleActions: 'play reverse play reverse',
  }
})




gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
let container = document.querySelector('.project-container');

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  duration: 6,
  scrollTrigger: {
    trigger: ".project-container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: `+=${container.offsetWidth}`,
  }
});


gsap.to(".hero-text", {
  yPercent: -70,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-bar",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});




gsap.from('.logo', {
  scrollTrigger: {
    trigger: '.logo',
    toggleActions: 'play reverse play reverse'
  },
  opacity: 0,
  rotation: -180,
  duration: 4,
});

gsap.from('#nav-bar', {
  scrollTrigger: {
    trigger: '.logo',
    toggleActions: 'play none none none'
  },
  opacity: 0,
  delay: 1.5,
  duration: 4,
});