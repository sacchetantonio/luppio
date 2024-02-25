const urlStringOrigin = window.location.origin;
const urlStringArrive = window.location.href;
let urlOrigin = new URL(urlStringOrigin);
let urlArrive = new URL(urlStringArrive);
console.log(urlOrigin);

// Estrapolate plant family from the url
let parameter = urlArrive.searchParams.get("family");

let family = parameter;

let part1;
let part2;
let chosenParts;
let textFamily;
if (family == 1) {
  textFamily = "Triximos";
}
if (family == 2) {
  textFamily = "Frillyu";
}
if (family == 3) {
  textFamily = "Sukulaas";
}
let text =
  "You selected: " +
  textFamily +
  "." +
  " According to COLOR TONE and BRIGHTNESS we will get your location. Move around to change the plant’s characteristics.";
let speech;
let enterButton;
let loadingPage;
let typingBox;
let aboutButton;
let gardenButton;
let logo;
let nextButton;
let analysingSpace;
let loadingImage;

var self = [0, 0, 0],
  cam,
  state = {
    distance: 100,
    center: [0, 0, 0],
    rotation: [1, 0, 0, 0],
  };

let video;
let iterator1 = 0;
let iterator2 = 0;
let a1 = 0;
let a2 = 0;

let d;

let r;
let g;
let b;

let bright;
let hue;

let cacca;
let pipi = 50;

let variabile1;
let variabile2;

let fioreStelo;
let fiorePistillo;
let fioreFoglia1;
let fioreFoglia2;
let fioreFoglia3;
let fiorePetali1;
let fiorePetali2;
let fiorePetali3;

let alberoStelo;
let alberoRami;
let alberoFrutto1;
let alberoFrutto2;
let alberoFrutto3;
let alberoRadici1;
let alberoRadici2;
let alberoRadici3;

let grassaStelo;
let grassaSpine;
let grassaPetali1;
let grassaPetali2;
let grassaPetali3;
let grassaFoglie1;
let grassaFoglie2;
let grassaFoglie3;

function preload() {
  logo = loadImage("./addons/luppio.png");
  fioreStelo = loadModel("./addons/fioreStelo.obj");
  fioreFoglia1 = loadModel("./addons/fioreFoglia1.obj");
  fioreFoglia2 = loadModel("./addons/fioreFoglia2.obj");
  fioreFoglia3 = loadModel("./addons/fioreFoglia3.obj");
  fiorePetali1 = loadModel("./addons/fiorePetali1.obj");
  fiorePetali2 = loadModel("./addons/fiorePetali2.obj");
  fiorePetali3 = loadModel("./addons/fiorePetali3.obj");
  fiorePistillo = loadModel("./addons/fiorePistillo.obj");

  alberoStelo = loadModel("./addons/alberoStelo.obj");
  alberoRami = loadModel("./addons/alberoRami.obj");
  alberoFrutto1 = loadModel("./addons/alberoFrutto1.obj");
  alberoFrutto2 = loadModel("./addons/alberoFrutto2.obj");
  alberoFrutto3 = loadModel("./addons/alberoFrutto3.obj");
  alberoRadici1 = loadModel("./addons/alberoRadici1.obj");
  alberoRadici2 = loadModel("./addons/alberoRadici2.obj");
  alberoRadici3 = loadModel("./addons/alberoRadici3.obj");

  grassaStelo = loadModel("./addons/grassaStelo.obj");
  grassaSpine = loadModel("./addons/grassaSpine.obj");
  grassaPetali1 = loadModel("./addons/grassaPetali1.obj");
  grassaPetali2 = loadModel("./addons/grassaPetali2.obj");
  grassaPetali3 = loadModel("./addons/grassaPetali3.obj");
  grassaFoglie1 = loadModel("./addons/grassaFoglie1.obj");
  grassaFoglie2 = loadModel("./addons/grassaFoglie2.obj");
  grassaFoglie3 = loadModel("./addons/grassaFoglie3.obj");
}

function setup() {
  // Cursor functions
  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX + "px"),
      (cursor.style.top = e.clientY + "px");
  });

  // Loading
  loadingImage = document.getElementById("loadingImage");
  loadingImage.style.left = "-100%";
  loadingImage.style.transition = "1.5s";

  let background = createElement("div");
  background.class("background");

  // Speech
  speech = new p5.Speech();

  // Webcam detection
  enterButton = createElement("button", "START WEBCAM");
  enterButton.id("enterButton");
  enterButton.mouseClicked(moveSpace);

  // Go to about
  aboutButton = createElement("button", "about");
  aboutButton.id("aboutButton");
  aboutButton.class("menuButton");
  aboutButton.mouseClicked(openAbout);

  // Go to about
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

  pixelDensity(1);

  // Camera
  setAttributes("antialias", true);
  document.oncontextmenu = () => false;
  cam = createEasyCam();
  resetMatrix();
  cam.setState(state, 1000);
  cam.state_reset = state; // state to use on reset

  // Set one of these three parameters to 'true' to
  // constrain yaw, pitch, roll rotation.
  // (This can still be over-ridden with the 'shift' key)
  cam.setZoomScale(0);
  cam.setRotationConstraint(true, false, false);

  video = logo;
}

// Voice
function voice() {
  speech.listVoices();
  speech.setVoice("Fred");
  speech.setRate(1);
  speech.setPitch(2);
  speech.speak(text);
}

function draw() {
  background(81, 38, 194);

  // Lights
  pointLight(40, 20, 70, 300, 600, 300);
  pointLight(1, 80, 20, 30, -500, 300);
  pointLight(60, 5, 80, -300, -600, -300);

  iterator1 += a1;
  iterator2 += a2;

  if (iterator1 > 1) {
    a1 = 0;
  }
  if (iterator1 > 0.5) {
    a2 = 0.005;
  }
  if (iterator2 > 1) {
    a2 = 0;
  }

  // Webcam video analyzing
  noStroke();
  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let i = (x + y * video.width) * 4;

      r = video.pixels[i];
      g = video.pixels[i + 1];
      b = video.pixels[i + 2];

      bright = (r + g + b) / 3;

      cacca = map(bright, 0, 255, 0, 5);
    }
  }

  // Connect families' numbers
  if (family == 1) {
    buildAlbero();
  }
  if (family == 2) {
    buildFiore();
  }
  if (family == 3) {
    buildGrassa();
  }
}

function buildFiore() {
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  if (max == r) {
    // if red is the predominent color
    hue = (g - b) / (max - min);
  } else if (max == g) {
    // if green is the predominent color
    hue = 2 + (b - r) / (max - min);
  } else if (max == b) {
    // if blue is the predominent color
    hue = 4 + (r - g) / (max - min);
  }

  if (min < 50) {
    variabile1 = fioreFoglia1;
  }
  if (min > 50 && min < 100) {
    variabile1 = fioreFoglia2;
  }
  if (min > 100 && min < 160) {
    variabile1 = fioreFoglia3;
  }
  if (cacca < 2) {
    variabile2 = fiorePetali1;
    d = 1.7;
  }
  if (cacca > 2 && cacca < 4) {
    variabile2 = fiorePetali2;
    d = 1.88;
  }
  if (cacca > 4 && cacca < 5) {
    variabile2 = fiorePetali3;
    d = 1.78;
  }
  rotateZ(PI);
  translate(0, -30, 0);
  rotateY((-PI / 5) * 2);
  scale(30);
  specularMaterial(220);
  model(fioreStelo);

  //4
  push();
  translate(0.2, 0.1, -0.2);
  scale(0.8);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 0.5, -0.2);
  scale(0.3);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 0.9, -0.2);
  scale(0.7);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 1.3, -0.2);
  scale(0.4);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //4

  push();
  translate(0, 0.2, -0.4);
  scale(0.9);
  scale(iterator1);
  // rotateY(-PI);
  model(variabile1);
  pop();

  push();
  translate(0, 0.6, -0.4);
  scale(iterator1);
  // rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1, -0.4);
  scale(0.5);
  scale(iterator1);
  // rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1.4, -0.4);
  scale(0.7);
  scale(iterator1);
  // rotateY(PI);
  model(variabile1);
  pop();

  //4

  push();
  translate(-0.2, 0.3, -0.2);
  scale(iterator1);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  push();
  translate(-0.2, 0.7, -0.2);
  scale(0.4);
  scale(iterator1);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  push();
  translate(-0.2, 1.1, -0.2);
  scale(0.6);
  scale(iterator1);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  //4

  push();
  translate(0, 0.4, 0);
  scale(0.8);
  scale(iterator1);
  rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 0.8, 0);
  scale(0.3);
  scale(iterator1);
  rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1.2, 0);
  scale(iterator1);
  rotateY(PI);
  model(variabile1);
  pop();

  //fiore

  push();
  translate(0, 1.6, 0);
  scale(0.5);
  scale(iterator1);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //fiorePistillo
  push();
  translate(0, d, 0);

  scale(iterator2);
  // rotateX(PI / 3);
  model(fiorePistillo);
  pop();
}

function buildAlbero() {
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  if (max == r) {
    // if red is the predominent color
    hue = (g - b) / (max - min);
  } else if (max == g) {
    // if green is the predominent color
    hue = 2 + (b - r) / (max - min);
  } else if (max == b) {
    // if blue is the predominent color
    hue = 4 + (r - g) / (max - min);
  }

  if (min < 50) {
    variabile1 = alberoRadici1;
  }
  if (min > 50 && min < 100) {
    variabile1 = alberoRadici2;
  }
  if (min > 100 && min < 160) {
    variabile1 = alberoRadici3;
  }
  if (cacca < 2) {
    variabile2 = alberoFrutto1;
  }
  if (cacca > 2 && cacca < 4) {
    variabile2 = alberoFrutto2;
  }
  if (cacca > 4 && cacca < 5) {
    variabile2 = alberoFrutto3;
  }

  rotateZ(PI);
  translate(0, -35, 0);
  rotateY((-PI / 5) * 2);
  scale(22);
  specularMaterial(220);
  model(alberoStelo);

  //4
  push();
  translate(0, 0, 0);
  scale(1.5);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //fiore

  //4

  push();
  translate(0, 1.35, 0.8);
  scale(0.8);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  translate(0.8, 1.35, 0);
  scale(0.6);
  scale(iterator2);
  rotateY(PI / 2);
  model(variabile2);
  pop();
  push();
  translate(0, 1.35, -0.8);
  scale(0.4);
  scale(iterator2);
  rotateY(PI);
  model(variabile2);
  pop();
  push();
  translate(-0.8, 1.35, 0);
  scale(0.9);
  scale(iterator2);
  rotateY(-PI / 2);
  model(variabile2);
  pop();

  //4

  push();
  translate(0, 2.49, 0.8);
  scale(0.8);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  translate(0.8, 2.49, 0);
  scale(0.5);
  scale(iterator2);
  rotateY(PI / 2);
  model(variabile2);
  pop();
  push();
  translate(0, 2.49, -0.8);
  scale(0.4);
  scale(iterator2);
  rotateY(PI);
  model(variabile2);
  pop();
  push();
  translate(-0.8, 2.49, 0);
  scale(0.7);
  scale(iterator2);
  rotateY(-PI / 2);
  model(variabile2);
  pop();

  //4

  push();
  rotateY(PI / 4);
  translate(0, 1.9, 0.8);
  scale(0.6);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY(-PI / 4);
  translate(0, 1.9, 0.8);
  scale(0.8);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY((-PI / 4) * 3);
  translate(0, 1.9, 0.8);
  scale(0.4);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY((PI / 4) * 3);
  translate(0, 1.9, 0.8);
  scale(0.7);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //RAMI
  push();
  translate(0, 1.62, 0);
  scale(1.1);
  // scale(iterator2);

  model(alberoRami);
  pop();
}

function buildGrassa() {
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  if (max == r) {
    // if red is the predominent color
    hue = (g - b) / (max - min);
  } else if (max == g) {
    // if green is the predominent color
    hue = 2 + (b - r) / (max - min);
  } else if (max == b) {
    // if blue is the predominent color
    hue = 4 + (r - g) / (max - min);
  }

  if (min < 50) {
    variabile1 = grassaFoglie1;
  }
  if (min > 50 && min < 100) {
    variabile1 = grassaFoglie2;
  }
  if (min > 100 && min < 160) {
    variabile1 = grassaFoglie3;
  }
  if (cacca < 2) {
    variabile2 = grassaPetali1;
  }
  if (cacca > 2 && cacca < 4) {
    variabile2 = grassaPetali2;
  }
  if (cacca > 4 && cacca < 5) {
    variabile2 = grassaPetali3;
  }

  rotateZ(PI);
  translate(0, -35, 0);
  rotateY((-PI / 5) * 2);
  scale(30);
  specularMaterial(220);
  model(grassaStelo);

  //4
  push();
  translate(0, 0, 0);
  scale(0.6);
  scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //fiore

  //4

  push();
  translate(0, 1.45, 0);
  scale(1.5);
  scale(iterator2);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //spine
  push();
  translate(0, 2.2, 0);
  scale(1.2);
  // scale(iterator2);

  model(grassaSpine);
  pop();
}

function openGarden() {}

// Activate webcam and consequently resize layout
function moveSpace() {
  camera.start();
  document.getElementById("enterButton").style.display = "none";

  canvas.style.left = "23%";
  canvas.style.transition = "0.5s";
  setTimeout(moveWebcam, 2000);
}

// Things that happen when we analyze camera
function moveWebcam() {
  document.getElementsByClassName("input_video")[0].style.right = "50%";
  document.getElementsByClassName("input_video")[0].style.transition = "0.5s";
  a1 = 0.005;
  video = createCapture(VIDEO);
  video.size(40, 30);
  video.hide();
  analyzingSpace = createElement("h1", "ANALYSING THE SPACE");
  analyzingSpace.id("analyser");
  setTimeout(goNext, 10000);
}

// Things to go to the next page and save family icon
function goNext() {
  video = video.get();
  document.getElementById("analyser").style.display = "none";

  // Sophisticated system to.... (next comment)
  if (
    variabile1 == fioreFoglia1 ||
    variabile1 == alberoRadici1 ||
    variabile1 == grassaFoglie1
  ) {
    part1 = 1;
  }
  if (
    variabile1 == fioreFoglia2 ||
    variabile1 == alberoRadici2 ||
    variabile1 == grassaFoglie2
  ) {
    part1 = 2;
  }
  if (
    variabile1 == fioreFoglia3 ||
    variabile1 == alberoRadici3 ||
    variabile1 == grassaFoglie3
  ) {
    part1 = 3;
  }
  if (
    variabile2 == fiorePetali1 ||
    variabile2 == alberoFrutto1 ||
    variabile2 == grassaPetali1
  ) {
    part2 = 1;
  }
  if (
    variabile2 == fiorePetali2 ||
    variabile2 == alberoFrutto2 ||
    variabile2 == grassaPetali2
  ) {
    part2 = 2;
  }
  if (
    variabile2 == fiorePetali3 ||
    variabile2 == alberoFrutto3 ||
    variabile2 == grassaPetali3
  ) {
    part2 = 3;
  }

  // ...translate variables in a compact parameter
  // which will be translated again in the variables in the next pages
  chosenParts = family + "" + part1 + "" + part2;

  // Go to next page
  scanCompleted = createElement("h1", "SCAN COMPLETED");
  scanCompleted.id("scan");
  nextButton = createElement("button", "NEXT");
  nextButton.id("nextButton");
  nextButton.mouseClicked(nextPage);
  console.log(chosenParts);
}

function nextPage() {
  window.open((href = "./personalize.html?case=" + chosenParts), "_self");
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
