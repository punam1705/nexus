TweenMax.from('.logo', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.staggerFrom('.menu-links ul li', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut
  }, 0.08)

  TweenMax.from('.search', 1, {
    delay: 1.6,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.from('.cart', 1, {
    delay: 1.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.to('.border-bottom', 1, {
    delay: 1.4,
    width: '100%',
    ease: Expo.easeInOut
  })

  TweenMax.from('.subtitle', 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.to('.title', 1, {
    delay: 2.2,
    width: '100%',
    ease: Expo.easeInOut
  })

  TweenMax.from('.desc', 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.from('.readmore', 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.to('.slider', 1, {
    delay: 3,
    opacity: 1,
    ease: Expo.easeInOut
  })

  TweenMax.to('.img-1', 1, {
    delay: 2.2,
    width: '450px',
    ease: Expo.easeInOut
  })

  TweenMax.to('.img-2', 1, {
    delay: 2.2,
    width: '300px',
    ease: Expo.easeInOut
  })

  TweenMax.to('.img-3', 1, {
    delay: 2.2,
    width: '300px',
    ease: Expo.easeInOut
  })

  TweenMax.to('.first', 1.5, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut
  })

  TweenMax.to('.second', 1.5, {
    delay: .4,
    left: '-100%',
    ease: Expo.easeInOut
  })

  TweenMax.to('.third', 1.5, {
    delay: .6,
    left: '-100%',
    ease: Expo.easeInOut
  })





  TweenMax.from('.product-title', 3, {
  delay: 2.2,
  opacity: 0,
  y: 50,
  ease: Expo.easeInOut
})
TweenMax.from('.product-img', 1, {
  delay: 3.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut
})
TweenMax.from('.product-desc p', 3, {
  delay: 4.5,
  opacity: 0,
  y: -50,
  ease: Expo.easeInOut
})
TweenMax.from('.product-desc button', 3, {
  delay: 4,
  opacity: 0,
  y: -50,
  ease: Expo.easeInOut
})











gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

