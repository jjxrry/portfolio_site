const workText = new SplitType('#works')
const aniTextOne = new SplitType('.ani-text-1', {charClass: 'cloudtxt1', wordClass: 'cloud-text-1'});
const aniTextTwo = new SplitType('.ani-text-2', {charClass: 'cloudtxt2', wordClass: 'cloud-text-2'});
const aniTextThree = new SplitType('.ani-text-3', {charClass: 'cloudtxt3', wordClass: 'cloud-text-3'});
const navbar = document.querySelector('#nav-bar');

gsap.registerPlugin(ScrollTrigger);

// let smoother = ScrollSmoother.create({
//   wrapper: '.top-wrapper',
//   content: '.top-content',
// })



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

gsap.from('.sketch', {
  opacity: 0,
  ease: 'power4.in',
  duration: 4,
  scrollTrigger: {
    trigger: '.hero-animation',
    toggleActions: 'play reverse play reverse',
  }
})



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

let sections = gsap.utils.toArray(".bar");
let container = document.querySelector('.top-container');


gsap.to(".hero-text", {
  yPercent: -110,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-bar",
    scrub: true
  }, 
});


gsap.to('.char', {
  y: 0,
  ease: 'power1.in',
  delay: .2,
  stagger: .15,
  duration: .8,
  scrollTrigger: {
    trigger: '.project-container',
    toggleActions: 'play reverse play reverse',
  }
})

gsap.from('.cloud-text-1', {
  y: 100,
  duration: 1,
  ease: 'slow',
  stagger: .2,
  // delay: .1,
  scrollTrigger: {
    trigger: '.animation-bar',
    toggleActions: 'play restart play restart',
  }
})

gsap.from('.cloud-text-2', {
  x: 500,
  duration: 1.5,
  ease: 'slow',
  stagger: .1,
  // delay: .1,
  scrollTrigger: {
    trigger: '.animation-bar',
    toggleActions: 'play restart play restart',
  }
})

gsap.from('.cloud-text-3', {
  opacity: 0,
  delay: 2.5,
  duration: 1.5,
  ease: 'power4.in',
  scrollTrigger: {
    trigger: '.animation-bar',
    toggleActions: 'play restart play restart',
  }
})