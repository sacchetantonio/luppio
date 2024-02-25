const urlString = window.parent.location.href;
let url = new URL(urlString);
console.log(url);

let text =
  "Hey, welcome to Luppio. You might be confused: the Earth does not exist anymore because of global warming. Luckily, we were able to find a new livable planet. The first thing to do to start building your own life is creating a plant.";
let speech;
let loadingImage;
let enterButton;
let loadingPage;
let typingBox;
let aboutButton;
let gardenButton;



function setup() {

  loadingImage = document.getElementById("loadingImage");

  // CURSOR FUNCTIONS
  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX + "px"),
      (cursor.style.top = e.clientY + "px");
  });
  // END CURSOR

  noCanvas();

  let background = createElement("div");
  background.class("background");
  setTimeout(windowResized, 2400);
setTimeout(enter, 2500);

  speech = new p5.Speech();



  aboutButton = createElement("button", "about");
  aboutButton.id("aboutButton");
  aboutButton.class("menuButton");
  aboutButton.mouseClicked(openAbout);

  gardenButton = createElement("button", "garden");
  gardenButton.id("gardenButton");
  gardenButton.class("menuButton");
  gardenButton.mouseClicked(openGarden);

}
function enter() {
  
  enterButton = createElement("button", "START THE EXPERIENCE");
  enterButton.id("enterButton");
  enterButton.mouseClicked(openPage);
}

function windowResized() {
  if(windowHeight*1.1 > windowWidth){
    document.getElementById("phone").style.display = "block";
  
  }else{
    document.getElementById("phone").style.display = "none";
  }
}
function draw() {}



function voice() {
  speech.listVoices();
  speech.setVoice("Fred");
  speech.setRate(1);
  speech.setPitch(2);
  speech.speak(text);
}


function openPage() {
  setTimeout(voice, 100);
  document.getElementById("enterButton").style.display = "none";

  typingBox = createElement("div");
  typingBox.class("typingBox");
  let container = createElement("div");
  container.class("container");
  typingBox.child(container);
  let typing = createElement("p", ">> " + text + " //");
  typing.class("typing");
  container.child(typing);
  let hiders = createElement("div");
  hiders.class("hiders");
  container.child(hiders);
  let hider1 = createElement("p", "\xa0");
  hiders.child(hider1);
  let hider2 = createElement("p", "\xa0");
  hiders.child(hider2);
  let hider3 = createElement("p", "\xa0");
  hiders.child(hider3);
  let hider4 = createElement("p", "\xa0");
  hiders.child(hider4);
  let hider5 = createElement("p", "\xa0");
  hiders.child(hider5);
  let hider6 = createElement("p", "\xa0");
  hiders.child(hider6);
  let hider7 = createElement("p", "\xa0");
  hiders.child(hider7);
  let hider8 = createElement("p", "\xa0");
  hiders.child(hider8);

  loadingImage.style.left = "-100%";
  loadingImage.style.transition = "0.5s";

  let north = nf(random(0, 90), 2, 4);
  let west = nf(random(0, 90), 2, 4);
  let temperature = nf(random(-21, 56), 2, 1);
  let humidity = nf(random(10, 98), 2, 1);
  let y = year() + 30;
  let m = month();
  let d = day();
  let hour = floor(random(0, 36));
  let minute = floor(random(0, 30));

  let nPiante;
  let piante1;

  piante1 = Object.values(piante);
  nPiante = piante1.length;
  console.log(nPiante);

  marqueeFondo = createElement(
    "marquee",
    north +
      "° N  ○  " +
      west +
      "  ° W  ○  TEMPERATURE " +
      temperature +
      "°C  ○  HUMIDITY " +
      humidity +
      "%  ○    PLANTS PLANTED " +
      nPiante +
      " ○  " +
      y +
      "." +
      m +
      "." +
      d +
      "  ○  " +
      hour +
      ":" +
      minute +
      "  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W" +
      north +
      "° N  ○  " +
      west +
      "  ° W  ○  TEMPERATURE " +
      temperature +
      "°C  ○  HUMIDITY " +
      humidity +
      "%  ○  PLANTS PLANTED " +
      nPiante +
      " ○  " +
      y +
      "." +
      m +
      "." +
      d +
      "  ○  " +
      hour +
      ":" +
      minute +
      "  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W" +
      north +
      "° N  ○  " +
      west +
      "  ° W  ○  TEMPERATURE " +
      temperature +
      "°C  ○  HUMIDITY " +
      humidity +
      "%  ○  PLANTS PLANTED " +
      nPiante +
      "  ○  " +
      y +
      "." +
      m +
      "." +
      d +
      "  ○  " +
      hour +
      ":" +
      minute +
      "  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W" +
      north +
      "° N  ○  " +
      west +
      "  ° W  ○  TEMPERATURE " +
      temperature +
      "°C  ○  HUMIDITY " +
      humidity +
      "%  ○  PLANTS PLANTED " +
      nPiante +
      "  ○  " +
      y +
      "." +
      m +
      "." +
      d +
      "  ○  " +
      hour +
      ":" +
      minute +
      "  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W" +
      north +
      "° N  ○  " +
      west +
      "  ° W  ○  TEMPERATURE " +
      temperature +
      "°C  ○  HUMIDITY " +
      humidity +
      "%  ○  PLANTS PLANTED " +
      nPiante +
      "  ○  " +
      y +
      "." +
      m +
      "." +
      d +
      "  ○  " +
      hour +
      ":" +
      minute +
      "  ○  " +
      north +
      "  ° N  ○  " +
      west +
      "  ° W"
  );
  marqueeFondo.class("marqueeFondo");

  windowResized()
}

function enter() {

  enterButton = createElement("button", "START THE EXPERIENCE");
  enterButton.id("enterButton");
  enterButton.mouseClicked(openPage);
}

function openGarden() {
  window.open((href = "./archive.html"), "_self");
}

function openAbout() {
  document.getElementById("about-section").style.left = "0%";
  document.getElementById("about-section").style.transition = "0.5s";
}
function closeAbout() {
  document.getElementById("about-section").style.left = "100%";
  document.getElementById("about-section").style.transition = "0.5s";
}


