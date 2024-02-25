const urlStringOrigin = window.location.origin;
const urlStringArrive = window.location.href;
let urlOrigin = new URL(urlStringOrigin);
let urlArrive = new URL(urlStringArrive);
let parameter = urlArrive.searchParams.get("case");

console.log(urlArrive);
console.log(parameter);

let text =
  "Now use your voice and your gestures to alter and personalyze the components of your beautiful alien plant.";
let speech;
let enterButton;
let typingBox;
let aboutButton;
let gardenButton;
let fixButton1;
let fixButton2;
let gotScale;
let gotScale2;
let gotScale3;
let nextButton1;
let nextButton2;
let nextButton3;
let loadingImage;

let title1;
let subtitle1;
let title2;
let subtitle2;
let title3;
let subtitle3;

let partText1;
let partText2;
let partText3;
let familyText;
let titleText;
let subtitleText;

var self = [0, 0, 0],
  cam,
  state = {
    distance: 100,
    center: [0, 0, 0],
    rotation: [1, 0, 0, 0],
  };

let iterator1 = 0;
let iterator2 = 0;
let d;

let family;
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

let micLevel1;
let a = 0;
let scale1;
let scale2 = 1;
let micLevel2;
let b = 0;
let scale3 = 1;

function preload() {
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
  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX + "px"),
      (cursor.style.top = e.clientY + "px");
  });

  loadingImage = document.getElementById("loadingImage");
  loadingImage.style.left = "-100%";
  loadingImage.style.transition = "1.5s";

  let background = createElement("div");
  background.class("background");
  speech = new p5.Speech();

  // Button to start mic
  enterButton = createElement("button", "START MIC");
  enterButton.id("enterButton");
  enterButton.mouseClicked(firstInteraction);

  aboutButton = createElement("button", "about");
  aboutButton.id("aboutButton");
  aboutButton.class("menuButton");
  aboutButton.mouseClicked(openAbout);

  gardenButton = createElement("button", "garden");
  gardenButton.id("gardenButton");
  gardenButton.class("menuButton");
  gardenButton.mouseClicked(openGarden);
  selectCase();

  if (family == 1) {
    familyText = "Triximos";
    partText1 = "roots";
    partText2 = "branches";
    partText3 = "fruits";
  }
  if (family == 2) {
    familyText = "Florij";
    partText1 = "pistil";
    partText2 = "leaves";
    partText3 = "flower";
  }
  if (family == 3) {
    familyText = "Sukulaas";
    partText1 = "thorn";
    partText2 = "leaves";
    partText3 = "flower";
  }

  titleText = "SHOUT";

  title1 = createElement("h1", titleText);
  title1.id("title");

  subtitle1 = createElement("p", subtitleText);
  subtitle1.id("subtitle");
  title1.child(subtitle1);

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

  setTimeout(voice, 100);

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

  setAttributes("antialias", true);
  document.oncontextmenu = () => false;
  cam = createEasyCam();
  resetMatrix();
  cam.setState(state, 1000);
  cam.state_reset = state;
  cam.setZoomScale(0);
  cam.setRotationConstraint(true, false, false);

  userStartAudio();
  mic = new p5.AudioIn();
}

function voice() {
  speech.listVoices();
  speech.setVoice("Fred");
  speech.setRate(1);
  speech.setPitch(2);
  speech.speak(text);
}

function selectCase() {
  if (parameter == 111) {
    family = 1;
    variabile1 = alberoRadici1;
    variabile2 = alberoFrutto1;
    partText1 = "roots";
    partText2 = "branches";
    partText3 = "fruits";
  }
  if (parameter == 112) {
    family = 1;
    variabile1 = alberoRadici1;
    variabile2 = alberoFrutto2;
  }
  if (parameter == 113) {
    family = 1;
    variabile1 = alberoRadici1;
    variabile2 = alberoFrutto3;
  }
  if (parameter == 121) {
    family = 1;
    variabile1 = alberoRadici2;
    variabile2 = alberoFrutto1;
  }
  if (parameter == 122) {
    family = 1;
    variabile1 = alberoRadici2;
    variabile2 = alberoFrutto2;
  }
  if (parameter == 123) {
    family = 1;
    variabile1 = alberoRadici2;
    variabile2 = alberoFrutto3;
  }
  if (parameter == 131) {
    family = 1;
    variabile1 = alberoRadici3;
    variabile2 = alberoFrutto1;
  }
  if (parameter == 132) {
    family = 1;
    variabile1 = alberoRadici3;
    variabile2 = alberoFrutto2;
  }
  if (parameter == 133) {
    family = 1;
    variabile1 = alberoRadici3;
    variabile2 = alberoFrutto3;
  }
  if (parameter == 211) {
    family = 2;
    variabile1 = fioreFoglia1;
    variabile2 = fiorePetali1;
    d = 1.7;
  }
  if (parameter == 212) {
    family = 2;
    variabile1 = fioreFoglia1;
    variabile2 = fiorePetali2;
    d = 1.88;
  }
  if (parameter == 213) {
    family = 2;
    variabile1 = fioreFoglia1;
    variabile2 = fiorePetali3;
    d = 1.78;
  }
  if (parameter == 221) {
    family = 2;
    variabile1 = fioreFoglia2;
    variabile2 = fiorePetali1;
    d = 1.7;
  }
  if (parameter == 222) {
    family = 2;
    variabile1 = fioreFoglia2;
    variabile2 = fiorePetali2;
    d = 1.88;
  }
  if (parameter == 223) {
    family = 2;
    variabile1 = fioreFoglia2;
    variabile2 = fiorePetali3;
    d = 1.78;
  }
  if (parameter == 231) {
    family = 2;
    variabile1 = fioreFoglia3;
    variabile2 = fiorePetali1;
    d = 1.7;
  }
  if (parameter == 232) {
    family = 2;
    variabile1 = fioreFoglia3;
    variabile2 = fiorePetali2;
    d = 1.88;
  }
  if (parameter == 233) {
    family = 2;
    variabile1 = fioreFoglia3;
    variabile2 = fiorePetali3;
    d = 1.78;
  }
  if (parameter == 311) {
    family = 3;
    variabile1 = grassaFoglie1;
    variabile2 = grassaPetali1;
  }
  if (parameter == 312) {
    family = 3;
    variabile1 = grassaFoglie1;
    variabile2 = grassaPetali2;
  }
  if (parameter == 313) {
    family = 3;
    variabile1 = grassaFoglie1;
    variabile2 = grassaPetali3;
  }
  if (parameter == 321) {
    family = 3;
    variabile1 = grassaFoglie2;
    variabile2 = grassaPetali1;
  }
  if (parameter == 322) {
    family = 3;
    variabile1 = grassaFoglie2;
    variabile2 = grassaPetali2;
  }
  if (parameter == 323) {
    family = 3;
    variabile1 = grassaFoglie2;
    variabile2 = grassaPetali3;
  }
  if (parameter == 331) {
    family = 3;
    variabile1 = grassaFoglie3;
    variabile2 = grassaPetali1;
  }
  if (parameter == 332) {
    family = 3;
    variabile1 = grassaFoglie3;
    variabile2 = grassaPetali2;
  }
  if (parameter == 333) {
    family = 3;
    variabile1 = grassaFoglie3;
    variabile2 = grassaPetali3;
  }
}

function draw() {
  // Mic analyzing
  if (a == 0) {
    micLevel1 = mic.getLevel();
    scale3 = 1;
    scale1 = nf(map(micLevel1, 0, 1, 0.7, 4), 1, 2);
  }
  if (a == 1) {
    micLevel2 = mic.getLevel();
    micLevel1 = getItem("micLevel1");
    scale3 = nf(map(micLevel2, 0, 1, 1, 4), 1, 2);
  }

  background(81, 38, 194);

  pointLight(40, 20, 70, 300, 600, 300);
  pointLight(1, 80, 20, 30, -500, 300);
  pointLight(60, 5, 80, -300, -600, -300);

  noStroke();

  if (frameCount > 50 && frameCount < 250) {
    iterator1 += 0.005;
    iterator2 += 0.005;
  }
  if (frameCount > 250) {
    iterator1 += 0;
    iterator2 += 0;
  }

  selectCase();

  if (family == 1) {
    buildAlbero();
    familyText = "Triximos";
    partText1 = "roots";
    partText2 = "branches";
    partText3 = "fruits";
  }
  if (family == 2) {
    buildFiore();
    familyText = "Frillyu";
    partText1 = "pistil";
    partText2 = "leaves";
    partText3 = "flower";
  }
  if (family == 3) {
    buildGrassa();
    familyText = "Sukulaas";
    partText1 = "thorn";
    partText2 = "leaves";
    partText3 = "flower";
  }

  // Detect fingers position
  if (detections != undefined) {
    if (detections.multiHandLandmarks != undefined) {
      drawHands();
    }
  }
}

function drawHands() {
  for (let i = 0; i < detections.multiHandLandmarks.length; i++) {
    for (let j = 0; j < detections.multiHandLandmarks[i].length; j++) {
      altezzaMano = detections.multiHandLandmarks[0][8].y;
      scale2 = nf(map(altezzaMano, 1, 0, 0.3, 1.7), 1, 2);
    }
  }
}

function buildFiore() {
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
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 0.5, -0.2);
  scale(0.3);
  scale(iterator1);
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 0.9, -0.2);
  scale(0.7);
  scale(iterator1);
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 1.3, -0.2);
  scale(0.4);
  scale(iterator1);
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //4

  push();
  translate(0, 0.2, -0.4);
  scale(0.9);
  scale(iterator1);
  scale(scale2);
  // rotateY(-PI);
  model(variabile1);
  pop();

  push();
  translate(0, 0.6, -0.4);
  scale(iterator1);
  scale(scale2);
  // rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1, -0.4);
  scale(0.5);
  scale(iterator1);
  scale(scale2);
  // rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1.4, -0.4);
  scale(0.7);
  scale(iterator1);
  scale(scale2);
  // rotateY(PI);
  model(variabile1);
  pop();

  //4

  push();
  translate(-0.2, 0.3, -0.2);
  scale(iterator1);
  scale(scale2);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  push();
  translate(-0.2, 0.7, -0.2);
  scale(0.4);
  scale(iterator1);
  scale(scale2);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  push();
  translate(-0.2, 1.1, -0.2);
  scale(0.6);
  scale(iterator1);
  scale(scale2);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  //4

  push();
  translate(0, 0.4, 0);
  scale(0.8);
  scale(iterator1);
  scale(scale2);
  rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 0.8, 0);
  scale(0.3);
  scale(iterator1);
  scale(scale2);
  rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1.2, 0);
  scale(iterator1);
  scale(scale2);
  rotateY(PI);
  model(variabile1);
  pop();

  //fiore

  push();
  translate(0, 1.6, 0);
  scale(0.5);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //fiorePistillo
  push();
  translate(0, 1.6 + (d - 1.6) * scale3, 0);
  scale(1.2);
  scale(iterator2);
  scale(scale1);
  // rotateX(PI / 3);
  model(fiorePistillo);
  pop();
}

function buildAlbero() {
  rotateZ(PI);
  translate(0, -35, 0);
  rotateY((-PI / 5) * 2);
  scale(22);
  specularMaterial(220);
  model(alberoStelo);

  //4
  push();
  translate(0, 0, 0);
  scale(0.9);
  scale(scale1);
  // scale(iterator1);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //fiore

  //4

  push();
  translate(0, 1.35, 0.8 * scale2);
  scale(0.8);
  scale(iterator2);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  translate(0.8 * scale2, 1.35, 0);
  scale(0.6);
  scale(iterator2);
  scale(scale3);
  rotateY(PI / 2);
  model(variabile2);
  pop();
  push();
  translate(0, 1.35, -0.8 * scale2);
  scale(0.4);
  scale(iterator2);
  scale(scale3);
  rotateY(PI);
  model(variabile2);
  pop();
  push();
  translate(-0.8 * scale2, 1.35, 0);
  scale(0.9);
  scale(iterator2);
  scale(scale3);
  rotateY(-PI / 2);
  model(variabile2);
  pop();

  //4

  push();
  translate(0, 2.49, 0.8 * scale2);
  scale(0.8);
  scale(iterator2);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  translate(0.8 * scale2, 2.49, 0);
  scale(0.5);
  scale(iterator2);
  scale(scale3);
  rotateY(PI / 2);
  model(variabile2);
  pop();
  push();
  translate(0, 2.49, -0.8 * scale2);
  scale(0.4);
  scale(iterator2);
  scale(scale3);
  rotateY(PI);
  model(variabile2);
  pop();
  push();
  translate(-0.8 * scale2, 2.49, 0);
  scale(0.7);
  scale(iterator2);
  scale(scale3);
  rotateY(-PI / 2);
  model(variabile2);
  pop();

  //4

  push();
  rotateY(PI / 4);
  translate(0, 1.9, 0.8 * scale2);
  scale(0.6);
  scale(iterator2);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY(-PI / 4);
  translate(0, 1.9, 0.8 * scale2);
  scale(0.8);
  scale(iterator2);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY((-PI / 4) * 3);
  translate(0, 1.9, 0.8 * scale2);
  scale(0.4);
  scale(iterator2);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY((PI / 4) * 3);
  translate(0, 1.9, 0.8 * scale2);
  scale(0.7);
  scale(iterator2);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //RAMI
  push();
  translate(0, 1.62, 0);
  scale(1.1);
  // scale(iterator2);
  scale(scale2, 1, scale2);
  model(alberoRami);
  pop();
}

function buildGrassa() {
  rotateZ(PI);
  translate(0, -35, 0);
  rotateY((-PI / 5) * 2);
  scale(30);
  specularMaterial(220);
  model(grassaStelo);

  //4
  push();
  translate(0, 0, 0);
  scale(0.5);
  scale(iterator1);
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //fiore

  //4

  push();
  translate(0, 1.45, 0);
  scale(1.2);
  scale(iterator2);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //spine
  push();
  translate(0, 2.2, 0);
  scale(scale1);
  // scale(iterator2);
  model(grassaSpine);
  pop();
}

function openGarden() {}

// Following functions make layout move during interactions
function firstInteraction() {
  mic.start();
  a = 0;
  document.getElementById("enterButton").style.display = "none";

  document.getElementById("title").style.top = "87%";
  document.getElementById("title").style.fontSize = "60px";
  document.getElementById("subtitle").style.fontSize = "16px";
  document.getElementById("title").style.animation =
    "blinker 1s linear infinite";
  document.getElementById("title").style.transition = "0.5s";
  document.getElementById("subtitle").style.transition = "0.5s";

  fixButton1 = createElement("button", "FIX SCALE");
  fixButton1.id("fixButton1");
  fixButton1.mouseClicked(fixScale1);
}

function fixScale1() {
  storeItem("micLevel1", micLevel1);
  mic.stop();
  document.getElementById("fixButton1").style.display = "none";
  document.getElementById("title").style.display = "none";
  gotScale = createElement("h1", "GOT IT");
  gotScale.id("scan");
  nextButton1 = createElement("button", "NEXT");
  nextButton1.id("nextButton");
  nextButton1.mouseClicked(secondInteraction);
}

function secondInteraction() {
  camera.start();
  titleText = "MOVE YOUR HAND";
  // subtitleText = "to modify " + partText2;
  title2 = createElement("h1", titleText);
  title2.id("title2");
  subtitle2 = createElement("p", subtitleText);
  subtitle2.id("subtitle2");
  title2.child(subtitle2);

  document.getElementById("nextButton").style.display = "none";
  document.getElementById("scan").style.display = "none";
  canvas.style.left = "23%";
  canvas.style.transition = "0.5s";
  setTimeout(moveWebcam, 1000);
}

function moveWebcam() {
  document.getElementById("title2").style.top = "87%";
  document.getElementById("title2").style.fontSize = "60px";
  document.getElementById("subtitle2").style.fontSize = "16px";
  document.getElementById("title2").style.animation =
    "blinker 1s linear infinite";
  document.getElementById("title2").style.transition = "0.5s";
  document.getElementById("subtitle2").style.transition = "0.5s";

  document.getElementsByClassName("input_video")[0].style.right = "50%";
  document.getElementsByClassName("input_video")[0].style.transition = "0.5s";

  fixButton2 = createElement("button", "FIX SCALE");
  fixButton2.id("fixButton2");
  fixButton2.mouseClicked(fixScale2);
}

function fixScale2() {
  camera.stop();
  document.getElementById("fixButton2").style.display = "none";
  document.getElementById("title2").style.display = "none";
  canvas.style.left = "0%";
  canvas.style.transition = "0.5s";
  document.getElementsByClassName("input_video")[0].style.right = "100%";
  document.getElementsByClassName("input_video")[0].style.transition = "0.5s";
  gotScale2 = createElement("h1", "GOT IT");
  gotScale2.id("scan2");
  nextButton2 = createElement("button", "NEXT");
  nextButton2.id("nextButton2");
  nextButton2.mouseClicked(thirdInteraction);
}

function thirdInteraction() {
  mic.start();
  a = 1;

  document.getElementById("nextButton2").style.display = "none";
  document.getElementById("scan2").style.display = "none";
  titleText = "BLOW";
  // subtitleText = "to modify " + partText3;
  title3 = createElement("h1", titleText);
  title3.id("title3");
  subtitle3 = createElement("p", subtitleText);
  subtitle3.id("subtitle3");
  title3.child(subtitle3);
  document.getElementById("title3").style.top = "87%";
  document.getElementById("title3").style.fontSize = "60px";
  document.getElementById("subtitle3").style.fontSize = "16px";
  document.getElementById("title3").style.animation =
    "blinker 1s linear infinite";
  document.getElementById("title3").style.transition = "1s";
  document.getElementById("subtitle3").style.transition = "1s";

  fixButton3 = createElement("button", "FIX SCALE");
  fixButton3.id("fixButton3");
  fixButton3.mouseClicked(fixScale3);
}

function fixScale3() {
  storeItem = ("micLevel2", micLevel2);
  mic.stop();
  document.getElementById("fixButton3").style.display = "none";
  document.getElementById("title3").style.display = "none";
  gotScale3 = createElement("h1", "GOT IT");
  gotScale3.id("scan3");
  nextButton1 = createElement("button", "NEXT");
  nextButton1.id("nextButton");
  nextButton1.mouseClicked(nextPage);
}

function nextPage() {
  window.open(
    (href =
      "./share.html?case=" +
      parameter +
      "&scale1=" +
      scale1 +
      "&scale2=" +
      scale2 +
      "&scale3=" +
      scale3),
    "_self"
  );
}

function openAbout() {
  document.getElementById("about-section").style.left = "0%";
  document.getElementById("about-section").style.transition = "0.5s";
}

function closeAbout() {
  document.getElementById("about-section").style.left = "100%";
  document.getElementById("about-section").style.transition = "0.5s";
}
function openGarden() {
  window.open((href = "./archive.html"), "_self");
}
