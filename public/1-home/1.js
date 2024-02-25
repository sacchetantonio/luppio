//Animations
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const title = intro.querySelector(".luppioBigHome");
const textBotanic = intro.querySelector(".botanical");
const text2 = intro.querySelector(".text-home-1");

const logo = intro.querySelector(".logoHome");
const button = intro.querySelector("#button-start-exp");
const scroll = intro.querySelector(".scroll-down");

//End section
const section = document.querySelector("section");
const end = section.querySelector(".luppioBigHome");
const end2 = section.querySelector(".text-home-1");
const end3 = section.querySelector(".logoHome");
const end4 = section.querySelector("#button-start-exp");
const end5 = section.querySelector(".botanical");
const end6 = section.querySelector(".scroll-down");

//Scrollmagic
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: intro,
  triggerHook: 0,
})

  .setPin(intro)
  .addTo(controller);

//Text animation
let textAnim = TweenMax.fromTo(title, 2, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

//Video animation
let accelamount = 0.5;
let scrollpos = 0.2;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 80);

//Text2 animation
let textAnim2 = TweenMax.fromTo(text2, 3, { opacity: -6 }, { opacity: 1 });

let scene3 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
})

  .setTween(textAnim2)
  .addTo(controller);

//Logo animation
let logoAnim = TweenMax.fromTo(logo, 2, { opacity: -8 }, { opacity: 1 });

let scene4 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
})

  .setTween(logoAnim)
  .addTo(controller);

//Button animation
let buttonAnim = TweenMax.fromTo(button, 2, { opacity: -50 }, { opacity: 1 });

let scene5 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
})

  .setTween(buttonAnim)
  .addTo(controller);

//Botanical animation
let botanicalAnim = TweenMax.fromTo(
  textBotanic,
  2,
  { opacity: 1 },
  { opacity: 0 }
);

let scene6 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
})

  .setTween(botanicalAnim)
  .addTo(controller);

// Scroll animation
let scrollAnim = TweenMax.fromTo(scroll, 8, { opacity: 1 }, { opacity: 0 });

let scene7 = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0,
})

  .setTween(scrollAnim)
  .addTo(controller);
