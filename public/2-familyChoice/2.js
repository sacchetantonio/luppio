const urlString = window.location.origin;
let url = new URL(urlString);
console.log(url);
let chosenFamily;

var self = [0, 0, 0],
  cam,
  state = {
    distance: 100,
    center: [0, 0, 0],
    rotation: [1, 0, 0, 0],
  };
let tree;
let flower;
let succulent;

let angle1 = 0;
let angle2 = 0;
let angle3 = 0;

let iterator = 0;

let scaling;
let mScale;

let size1 = 1.1;
let size2 = 2.1;
let size3 = 1.7;

let x = 0;
let y = 0;
let z = 0;

let inkrement1 = 0.01;
let inkrement2 = 0.01;
let inkrement3 = 0.01;

let family1;
let family2;
let family3;

let text =
  "Now it's time to choose a family of plants. Each one provides an element, select the one you feel most connected to.";
let speech;
let enterButton;
let loadingPage;
let typingBox;
let aboutButton;
let gardenButton;
let loadingImage;
let title;

function preload() {
  tree = loadModel("./2-familyChoice/addons/albero.obj");
  flower = loadModel("./2-familyChoice/addons/Fiore1.obj");
  succulent = loadModel("./2-familyChoice/addons/Grassa.obj");
}

function setup() {
  // Cursor functions
  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX + "px"),
      (cursor.style.top = e.clientY + "px");
  });

  noCanvas();

  // Loading
  loadingImage = document.getElementById("loadingImage");
  loadingImage.style.left = "-100%";
  loadingImage.style.transition = "1.5s";

  let background = createElement("div");
  background.class("background");

  speech = new p5.Speech();

  // Plant families' names

  family1 = createElement("button", "FRILLYU");
  family1.class("familyButton");
  family1.style("left", "50%");
  family1.mouseOver(selectFlorij);
  family1.mouseOut(normalSpeed);
  family1.mousePressed(openFamily2);

  family2 = createElement("button", "SUKULAAS");
  family2.class("familyButton");
  family2.style("left", "80%");
  family2.mouseOver(selectSukulaas);
  family2.mouseOut(normalSpeed);
  family2.mousePressed(openFamily3);

  family3 = createElement("button", "TRIXIMOS");
  family3.class("familyButton");
  family3.style("left", "20%");
  family3.mouseOver(selectTriximos);
  family3.mouseOut(normalSpeed);
  family3.mousePressed(openFamily1);

  // Go to about
  aboutButton = createElement("button", "about");
  aboutButton.id("aboutButton");
  aboutButton.class("menuButton");
  aboutButton.mouseClicked(openAbout);

  // Go to garden
  gardenButton = createElement("button", "garden");
  gardenButton.id("gardenButton");
  gardenButton.class("menuButton");
  gardenButton.mouseClicked(openGarden);

  // Text and hiders to create typing effect
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
  let hider9 = createElement("p", "\xa0");
  hiders.child(hider9);

  setTimeout(voice, 100);

  // Moving Footer

  let north = nf(random(0, 90), 2, 4);
  let west = nf(random(0, 90), 2, 4);
  let temperature = nf(random(-21, 56), 2, 1);
  let humidity = nf(random(10, 98), 2, 1);
  let y = year() + 30;
  let m = month();
  let d = day();
  let hour = floor(random(0, 36));
  let minute = floor(random(0, 30));

  marqueeFondo = createElement(
    "marquee",
    north +
      "° N  ○  " +
      west +
      "  ° W  ○  TEMPERATURE " +
      temperature +
      "°C  ○  HUMIDITY " +
      humidity +
      "%  ○  " +
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
      "%  ○  " +
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
      "%  ○  " +
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
      "%  ○  " +
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
      "%  ○  " +
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
  createCanvas(windowWidth, windowHeight, WEBGL);

  // Camera
  setAttributes("antialias", true);
  document.oncontextmenu = () => false;
  cam = createEasyCam();
  resetMatrix();
  cam.setState(state, 2000);
  cam.state_reset = state; // state to use on reset
  // Set one of these three parameters to 'true' to
  // constrain yaw, pitch, roll rotation.
  // (This can still be over-ridden with the 'shift' key)
  cam.setZoomScale(0);
  cam.setRotationScale(0);
  cam.setRotationConstraint(false, false, false);
}

function draw() {
  // Variables to make model grow animation
  iterator += 0.01;
  scaling1 = noise(iterator + 400);
  scaling2 = noise(iterator + 30);
  scaling3 = noise(iterator + 100);
  mScale1 = map(scaling1, 0, 1, 0.3, 2);
  mScale2 = map(scaling2, 0, 1, 0.8, 1.2);
  mScale3 = map(scaling3, 0, 1, 0.2, 1.5);
  background(81, 38, 194);

  noStroke();

  // Lights
  pointLight(40, 20, 70, 300, 600, 300);
  pointLight(1, 80, 20, 30, -500, 300);
  pointLight(60, 5, 80, -300, -600, -300);

  translate(0, 0, 0);
  scale(8);

  rotateZ(PI);

  // Models
  push();
  specularMaterial(220);
  translate(x, y, z);
  scale(size1);
  scale(1, 1, 1);
  rotateY(angle1 * 0.8);
  model(flower);
  pop();

  push();
  specularMaterial(220);
  translate(x - 7, y - 1.8, z);
  scale(size2);
  scale(1, 1, 1);
  rotateY(-angle2 * 1);
  model(succulent);
  pop();

  push();
  specularMaterial(220);
  translate(x + 7, y - 2, z);
  scale(size3);
  scale(1, 1, 1);
  rotateY(-angle3 * 1.3);
  model(tree);
  pop();

  angle1 += inkrement1;
  angle2 += inkrement2;
  angle3 += inkrement3;
}

// Three functions to select plant type
function selectFlorij() {
  inkrement1 = inkrement1 * 3;
  size1 = 1.2;
}

function selectSukulaas() {
  inkrement2 = inkrement2 * 3;
  size2 = 2.2;
}

function selectTriximos() {
  inkrement3 = inkrement3 * 3;
  size3 = 1.8;
}

// Incremet plant rotation when mouse is over them
function normalSpeed() {
  inkrement1 = 0.01;
  inkrement2 = 0.01;
  inkrement3 = 0.01;
  size1 = 1.1;
  size2 = 2.1;
  size3 = 1.7;
}

// Next page
function openFamily1() {
  chosenFamily = 1;
  window.open((href = "./scan.html?family=" + chosenFamily), "_self");
}

function openFamily2() {
  chosenFamily = 2;
  window.open((href = "./scan.html?family=" + chosenFamily), "_self");
}

function openFamily3() {
  chosenFamily = 3;
  window.open((href = "./scan.html?family=" + chosenFamily), "_self");
}

// Mickey Mouse voice
function voice() {
  speech.listVoices();
  speech.setVoice("Fred");
  speech.setRate(1);
  speech.setPitch(2);
  speech.speak(text);
}

// Open the About popup
function openAbout() {
  document.getElementById("about-section").style.left = "0%";
  document.getElementById("about-section").style.transition = "0.5s";
}

// Close the About popup
function closeAbout() {
  document.getElementById("about-section").style.left = "100%";
  document.getElementById("about-section").style.transition = "0.5s";
}

function openGarden() {}

function openGarden() {
  window.open((href = "./archive.html"), "_self");
}
