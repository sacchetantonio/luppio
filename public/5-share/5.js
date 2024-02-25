const urlStringOrigin = window.location.origin;
const urlStringArrive = window.location.href;
let urlOrigin = new URL(urlStringOrigin);
let urlArrive = new URL(urlStringArrive);
// Estrapolate parameters from the url
let parameter = urlArrive.searchParams.get("case");
let scale1 = urlArrive.searchParams.get("scale1");
let scale2 = urlArrive.searchParams.get("scale2");
let scale3 = urlArrive.searchParams.get("scale3");

let text1 =
  "Thank you for creating this plant: you saved not only your life but all the others’.It represents your existence here. Oh! One last thing, choose your favorite color and give your plant a name";
let speech;
let enterButton;
let loadingPage;
let typingBox;
let aboutButton;
let gardenButton;
let logo;
let nextButton;
let analysingSpace;
let nameTitle;
let sub;
let sub1;
let sub2;
let sub3;

var self = [0, 0, 0],
  cam,
  state = {
    distance: 100,
    center: [0, 0, 0],
    rotation: [1, 0, 0, 0],
  };

let d;

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

let button;
let button2;
let button3;
let button4;

let scrivinome;
let nome;
let myFont;
let myFont2;
let myFont3;
let myFont4;
let loghino;
let loghino1;
let loghino2;

let bgcolor = "#02f886";
let txcolor = "#5126c2";
let h;

let angolo = 0;
let increment = 0.02;

function preload() {
  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX + "px"),
      (cursor.style.top = e.clientY + "px");
  });

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

  myFont = loadFont("./addons/Syne-ExtraBold.ttf");
  myFont2 = loadFont("./addons/Syne-Bold.ttf");
  myFont3 = loadFont("./addons/Trispace_Condensed-Bold.ttf");
  myFont4 = loadFont("./addons/Trispace-Regular.ttf");
  loghino1 = loadImage("./addons/LogoOvaleViola.png");
  loghino2 = loadImage("./addons/LogoOvaleVerde.png");
}

function setup() {
  bgcolor = "#02f886";
  txcolor = "#5126c2";

  let angolo = 0;
  createCanvas(
    ((windowHeight - windowHeight / 8) * 9) / 16,
    windowHeight - windowHeight / 8,
    WEBGL
  );
  loadingImage = document.getElementById("loadingImage");
  loadingImage.style.left = "-100%";
  loadingImage.style.transition = "1.5s";

  let background = createElement("div");
  background.class("background");

  speech = new p5.Speech();

  aboutButton = createElement("button", "about");
  aboutButton.id("aboutButton");
  aboutButton.class("menuButton");
  aboutButton.mouseClicked(openAbout);

  gardenButton = createElement("button", "garden");
  gardenButton.id("gardenButton");
  gardenButton.class("menuButton");
  gardenButton.mouseClicked(openGarden);

  typingBox = createElement("div");
  typingBox.class("typingBox");
  let container = createElement("div");
  container.class("container");
  typingBox.child(container);
  let typing = createElement("p", ">> " + text1 + " //");
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

  setAttributes("antialias", true);
  document.oncontextmenu = () => false;
  cam = createEasyCam();
  resetMatrix();
  cam.setState(state, 1000);
  cam.state_reset = state;
  cam.setZoomScale(0);
  cam.setRotationConstraint(true, false, false);

  button = createButton("change background");
  button.id("cambia");
  button.mousePressed(changeBackground1);

  button3 = createButton("PLANT IT");
  button3.id("salva");
  button3.mousePressed(snapshot);

  scrivinome = createInput().attribute("placeholder", "give it a name");
  scrivinome.id("scrivinome");
  nameTitle = scrivinome.value().toUpperCase();
  loghino = loghino1;
}

function voice() {
  speech.listVoices();
  speech.setVoice("Fred");
  speech.setRate(1);
  speech.setPitch(2);
  speech.speak(text1);
}

// This function translates the parameter taken from the url into the variables
function selectCase() {
  if (parameter == 111) {
    family = 1;
    variabile1 = alberoRadici1;
    variabile2 = alberoFrutto1;
    sub1 = "trixilos";
    sub2 = "tarolico";
    sub3 = "taratus";
  }
  if (parameter == 112) {
    family = 1;
    variabile1 = alberoRadici1;
    variabile2 = alberoFrutto2;
    sub1 = "trixilos";
    sub2 = "tarolico";
    sub3 = "feratiscus";
  }
  if (parameter == 113) {
    family = 1;
    variabile1 = alberoRadici1;
    variabile2 = alberoFrutto3;
    sub1 = "trixilos";
    sub2 = "tarolico";
    sub3 = "testinus";
  }
  if (parameter == 121) {
    family = 1;
    variabile1 = alberoRadici2;
    variabile2 = alberoFrutto1;
    sub1 = "trixilos";
    sub2 = "retticulo";
    sub3 = "taratus";
  }
  if (parameter == 122) {
    family = 1;
    variabile1 = alberoRadici2;
    variabile2 = alberoFrutto2;
    sub1 = "trixilos";
    sub2 = "retticulo";
    sub3 = "feratiscus";
  }
  if (parameter == 123) {
    family = 1;
    variabile1 = alberoRadici2;
    variabile2 = alberoFrutto3;
    sub1 = "trixilos";
    sub2 = "retticulo";
    sub3 = "testinus";
  }
  if (parameter == 131) {
    family = 1;
    variabile1 = alberoRadici3;
    variabile2 = alberoFrutto1;
    sub1 = "trixilos";
    sub2 = "ionico";
    sub3 = "taratus";
  }
  if (parameter == 132) {
    family = 1;
    variabile1 = alberoRadici3;
    variabile2 = alberoFrutto2;
    sub1 = "trixilos";
    sub2 = "ionico";
    sub3 = "feratiscus";
  }
  if (parameter == 133) {
    family = 1;
    variabile1 = alberoRadici3;
    variabile2 = alberoFrutto3;
    sub1 = "trixilos";
    sub2 = "ionico";
    sub3 = "testinus";
  }
  if (parameter == 211) {
    family = 2;
    variabile1 = fioreFoglia1;
    variabile2 = fiorePetali1;
    d = 1.7;
    sub1 = "frillyu";
    sub2 = "blomico";
    sub3 = "bonzorulum";
  }
  if (parameter == 212) {
    family = 2;
    variabile1 = fioreFoglia1;
    variabile2 = fiorePetali2;
    d = 1.88;
    sub1 = "frillyu";
    sub2 = "blomico";
    sub3 = "gledonio";
  }
  if (parameter == 213) {
    family = 2;
    variabile1 = fioreFoglia1;
    variabile2 = fiorePetali3;
    d = 1.78;
    sub1 = "frillyu";
    sub2 = "blomico";
    sub3 = "dindirolon";
  }
  if (parameter == 221) {
    family = 2;
    variabile1 = fioreFoglia2;
    variabile2 = fiorePetali1;
    d = 1.7;
    sub1 = "frillyu";
    sub2 = "alavico";
    sub3 = "bonzorulum";
  }
  if (parameter == 222) {
    family = 2;
    variabile1 = fioreFoglia2;
    variabile2 = fiorePetali2;
    d = 1.88;
    sub1 = "frillyu";
    sub2 = "alavico";
    sub3 = "gledonio";
  }
  if (parameter == 223) {
    family = 2;
    variabile1 = fioreFoglia2;
    variabile2 = fiorePetali3;
    d = 1.78;
    sub1 = "frillyu";
    sub2 = "alavico";
    sub3 = "dindirolon";
  }
  if (parameter == 231) {
    family = 2;
    variabile1 = fioreFoglia3;
    variabile2 = fiorePetali1;
    d = 1.7;
    sub1 = "frillyu";
    sub2 = "mascellico";
    sub3 = "bonzorullum";
  }
  if (parameter == 232) {
    family = 2;
    variabile1 = fioreFoglia3;
    variabile2 = fiorePetali2;
    d = 1.88;
    sub1 = "frillyu";
    sub2 = "mascellico";
    sub3 = "gledonico";
  }
  if (parameter == 233) {
    family = 2;
    variabile1 = fioreFoglia3;
    variabile2 = fiorePetali3;
    d = 1.78;
    sub1 = "frillyu";
    sub2 = "mascellico";
    sub3 = "dindirolon";
  }
  if (parameter == 311) {
    family = 3;
    variabile1 = grassaFoglie1;
    variabile2 = grassaPetali1;
    sub1 = "sukulaas";
    sub2 = "bonzoorola";
    sub3 = "siricida";
  }
  if (parameter == 312) {
    family = 3;
    variabile1 = grassaFoglie1;
    variabile2 = grassaPetali2;
    sub1 = "sukulaas";
    sub2 = "bonzoorola";
    sub3 = "balbonza";
  }
  if (parameter == 313) {
    family = 3;
    variabile1 = grassaFoglie1;
    variabile2 = grassaPetali3;
    sub1 = "sukulaas";
    sub2 = "bonzoorola";
    sub3 = "pimpinula";
  }
  if (parameter == 321) {
    family = 3;
    variabile1 = grassaFoglie2;
    variabile2 = grassaPetali1;
    sub1 = "sukulaas";
    sub2 = "fellonia";
    sub3 = "siricida";
  }
  if (parameter == 322) {
    family = 3;
    variabile1 = grassaFoglie2;
    variabile2 = grassaPetali2;
    sub1 = "sukulaas";
    sub2 = "fellonia";
    sub3 = "balbonza";
  }
  if (parameter == 323) {
    family = 3;
    variabile1 = grassaFoglie2;
    variabile2 = grassaPetali3;
    sub1 = "sukulaas";
    sub2 = "fellonia";
    sub3 = "pimpinula";
  }
  if (parameter == 331) {
    family = 3;
    variabile1 = grassaFoglie3;
    variabile2 = grassaPetali1;
    sub1 = "sukulaas";
    sub2 = "porlezia";
    sub3 = "siricida";
  }
  if (parameter == 332) {
    family = 3;
    variabile1 = grassaFoglie3;
    variabile2 = grassaPetali2;
    sub1 = "sukulaas";
    sub2 = "porlezia";
    sub3 = "balbonza";
  }
  if (parameter == 333) {
    family = 3;
    variabile1 = grassaFoglie3;
    variabile2 = grassaPetali3;
    sub1 = "sukulaas";
    sub2 = "porlezia";
    sub3 = "pimpinula";
  }
}

function draw() {
  pointLight(40, 20, 70, 300, 600, 300);
  pointLight(1, 80, 20, 30, -500, 300);
  pointLight(60, 5, 80, -300, -600, -300);

  background(bgcolor);
  noStroke();

  selectCase();

  // Variables are now connected to the functions that build the plant
  if (family == 1) {
    buildAlbero();
  }
  if (family == 2) {
    buildFiore();
  }
  if (family == 3) {
    buildGrassa();
  }

  angolo += increment;
  push();
  scale(30);

  fill(txcolor);
  textSize(0.2);
  textFont(myFont4);
  textAlign(CENTER);
  nameTitle = scrivinome.value().toUpperCase();
  text(nameTitle, 0, 1.5);
  textSize(0.06);
  textFont(myFont4);
  sub = sub1 + " " + sub2 + " " + sub3;
  text(sub.toUpperCase(), 0, 1.6);
  imageMode(CENTER);
  image(loghino, 0, -1.4, 1.8, 0.744);

  translate(0, 1.6);
  rotateZ(PI / 2);
  textFont(myFont4);
  textSize(0.06);
  textAlign(CENTER);
  fill(txcolor);
  text("@LUPPIOFLOWERS", -1.5, -0.9);
  pop();
}

function buildFiore() {
  push();
  rotateZ(PI);
  translate(0, -35, 0);
  rotateY(angolo);
  scale(30);
  specularMaterial(220);
  model(fioreStelo);

  //4
  push();
  translate(0.2, 0.1, -0.2);
  scale(0.8);
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 0.5, -0.2);
  scale(0.3);
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 0.9, -0.2);
  scale(0.7);
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  push();
  translate(0.2, 1.3, -0.2);
  scale(0.4);
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //4

  push();
  translate(0, 0.2, -0.4);
  scale(0.9);
  scale(scale2);
  // rotateY(-PI);
  model(variabile1);
  pop();

  push();
  translate(0, 0.6, -0.4);
  scale(scale2);
  // rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1, -0.4);
  scale(0.5);
  scale(scale2);
  // rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1.4, -0.4);
  scale(0.7);
  scale(scale2);
  // rotateY(PI);
  model(variabile1);
  pop();

  //4

  push();
  translate(-0.2, 0.3, -0.2);
  scale(scale2);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  push();
  translate(-0.2, 0.7, -0.2);
  scale(0.4);
  scale(scale2);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  push();
  translate(-0.2, 1.1, -0.2);
  scale(0.6);
  scale(scale2);
  rotateY(PI / 2);
  model(variabile1);
  pop();

  //4

  push();
  translate(0, 0.4, 0);
  scale(0.8);
  scale(scale2);
  rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 0.8, 0);
  scale(0.3);
  scale(scale2);
  rotateY(PI);
  model(variabile1);
  pop();

  push();
  translate(0, 1.2, 0);
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
  scale(scale1);
  // rotateX(PI / 3);
  model(fiorePistillo);
  pop();
  pop();
}

function buildAlbero() {
  push();
  rotateZ(PI);
  translate(0, -32, 0);
  rotateY(angolo);
  scale(21);
  specularMaterial(220);
  model(alberoStelo);

  //4
  push();
  translate(0, 0, 0);
  scale(0.9);
  scale(scale1);
  // ;
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //fiore

  //4

  push();
  translate(0, 1.35, 0.8 * scale2);
  scale(0.8);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  translate(0.8 * scale2, 1.35, 0);
  scale(0.6);
  scale(scale3);
  rotateY(PI / 2);
  model(variabile2);
  pop();
  push();
  translate(0, 1.35, -0.8 * scale2);
  scale(0.4);
  scale(scale3);
  rotateY(PI);
  model(variabile2);
  pop();
  push();
  translate(-0.8 * scale2, 1.35, 0);
  scale(0.9);
  scale(scale3);
  rotateY(-PI / 2);
  model(variabile2);
  pop();

  //4

  push();
  translate(0, 2.49, 0.8 * scale2);
  scale(0.8);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  translate(0.8 * scale2, 2.49, 0);
  scale(0.5);
  scale(scale3);
  rotateY(PI / 2);
  model(variabile2);
  pop();
  push();
  translate(0, 2.49, -0.8 * scale2);
  scale(0.4);
  scale(scale3);
  rotateY(PI);
  model(variabile2);
  pop();
  push();
  translate(-0.8 * scale2, 2.49, 0);
  scale(0.7);
  scale(scale3);
  rotateY(-PI / 2);
  model(variabile2);
  pop();

  //4

  push();
  rotateY(PI / 4);
  translate(0, 1.9, 0.8 * scale2);
  scale(0.6);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY(-PI / 4);
  translate(0, 1.9, 0.8 * scale2);
  scale(0.8);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY((-PI / 4) * 3);
  translate(0, 1.9, 0.8 * scale2);
  scale(0.4);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();
  push();
  rotateY((PI / 4) * 3);
  translate(0, 1.9, 0.8 * scale2);
  scale(0.7);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //RAMI
  push();
  translate(0, 1.62, 0);
  scale(1.1);
  // ;
  scale(scale2, 1, scale2);
  model(alberoRami);
  pop();
  pop();
}

function buildGrassa() {
  push();
  rotateZ(PI);
  translate(0, -35, 0);
  rotateY(angolo);
  scale(30);
  specularMaterial(220);
  model(grassaStelo);

  //4
  push();
  translate(0, 0, 0);
  scale(0.5);
  scale(scale2);
  rotateY(-PI / 2);
  model(variabile1);
  pop();

  //fiore

  //4

  push();
  translate(0, 1.45, 0);
  scale(1.2);
  scale(scale3);
  // rotateX(PI / 3);
  model(variabile2);
  pop();

  //spine
  push();
  translate(0, 2.2, 0);
  scale(scale1);
  // ;
  model(grassaSpine);
  pop();
  pop();
}

function openGarden() {}

// These functions are concatenated to change the background color
function changeBackground1() {
  bgcolor = "magenta";
  txcolor = "#5126c2";
  button.mousePressed(changeBackground2);
}
function changeBackground2() {
  bgcolor = "#5126c2";
  txcolor = "#02f886";
  button.mousePressed(changeBackground3);
  canvas.style.borderColor = "#02f886";
  loghino = loghino2;
}

function changeBackground3() {
  bgcolor = "#02f886";
  txcolor = "#5126c2";
  loghino = loghino1;
  canvas.style.borderColor = "#5126c2";
  button.mousePressed(changeBackground1);
}

function changeBackground() {
  if (b == 0) {
    bgcolor = "magenta";
    txcolor = "whyte";
    b = 1;
  }
  if (b == 1) {
    bgcolor = "#5126c2";
    txcolor = "#02f886";
    b = 2;
  }
  if (b == 2) {
    bgcolor = "#02f886";
    txcolor = "#5126c2";
    b = 0;
  }
}

// Save your plant on your device!
function snapshot() {
  save(nameTitle + ".jpg");
  document.getElementById("planted").style.width = "100%";
  document.getElementById("planted").style.transition = "0.5s";
  salvaParametri();
  setTimeout(goNext, 5000);
}

function goNext() {
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

// This function save your selected parameters in the Firebase realtime database

function openGarden() {
  window.open((href = "./archive.html"), "_self");
}

function salvaParametri() {
  let thisPianta = null;

  thisPianta = {
    case: parameter,
    scale1: scale1,
    scale2: scale2,
    scale3: scale3,
    title: nameTitle,
  };
  addPianta(thisPianta);
  thisPianta = null;
  // prevent default
  return false;
}
