const urlStringOrigin = window.location.origin;
const urlStringArrive = window.location.href;
let urlOrigin = new URL(urlStringOrigin);
let urlArrive = new URL(urlStringArrive);

let text1 =
  "Welcome to our garden! We are delighted you are a new inhabitant of Luppio. Here you can see all the plants planted by our community. Thanks for all and have a good alien day! bzbzbzbbzbzbzbzbz";
let speech;
let enterButton;
let loadingPage;
let typingBox;
let aboutButton;
let gardenButton;
let logo;
let button;
let analysingSpace;

var self = [0, 0, 0],
  cam,
  state = {
    distance: 150,
    center: [70, 0, 0],
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

let nameTitle;
let myFont;
let myFont2;
let myFont3;
let myFont4;

let angolo = 0;
let increment = 0.02;

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

  myFont = loadFont("./addons/Syne-ExtraBold.ttf");
  myFont2 = loadFont("./addons/Syne-Bold.ttf");
  myFont3 = loadFont("./addons/Trispace_Condensed-Bold.ttf");
  myFont4 = loadFont("./addons/Trispace-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  loadingImage = document.getElementById("loadingImage");
  loadingImage.style.left = "-100%";
  loadingImage.style.transition = "1.5s";

  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function (e) {
    (cursor.style.left = e.clientX + "px"),
      (cursor.style.top = e.clientY + "px");
  });
  let background = createElement("div");
  background.class("background"); // SPOSTARE IN HTML E METTERE IN TUTTE LE PAGINE

  speech = new p5.Speech();

  aboutButton = createElement("button", "about");
  aboutButton.id("aboutButton");
  aboutButton.class("menuButton");
  aboutButton.mouseClicked(openAbout);

  gardenButton = createElement("button", "garden");
  gardenButton.id("gardenButton");
  // gardenButton.class("menuButton");
  // gardenButton.mouseClicked(openGarden);

  button = createElement("button", "PLANT AGAIN");
  button.id("plant");
  button.mousePressed(replay);

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
  cam.setRotationScale(0);
  cam.setZoomScale(0);
  cam.state_reset = state; // state to use on reset
  // Set one of these three parameters to 'true' to
  // constrain yaw, pitch, roll rotation.
  // (This can still be over-ridden with the 'shift' key)

  // cam.setZoomScale(0);
  cam.setRotationConstraint(false, false, false);
}

function voice() {
  speech.listVoices();
  speech.setVoice("Fred");
  speech.setRate(1);
  speech.setPitch(2);
  speech.speak(text1);
}

let distanza = -1;
function draw() {
  pointLight(40, 20, 70, 300, 600, 300);
  pointLight(1, 80, 20, 30, -500, 300);
  pointLight(60, 5, 80, -300, -600, -300);

  background(81, 38, 194);
  noStroke();
  specularMaterial(220);

  rotateZ(PI);
  rotateY(PI / 5 + PI);
  translate(0, -70, distanza * 60);

  scale(60);

  if (piante) {
    for (key in piante) {
      const pnt = piante[key];
      let piante1 = Object.values(piante);

      let parameter = pnt.case;

      let scale1 = pnt.scale1;
      let scale2 = pnt.scale2;
      let scale3 = pnt.scale3;
      let title = pnt.title;

      translate(0, 0, 5);

      if (parameter == 111) {
        family = 1;
        variabile1 = alberoRadici1;
        variabile2 = alberoFrutto1;
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

      //costruiscco i modelli con i parametri di scala settati

      if (family == 1) {
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
      }
      if (family == 2) {
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
      }
      if (family == 3) {
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
      }
      push();
      rotateZ(PI);
      rotateY(PI / 5 + PI);
      fill("magenta");
      textSize(0.4);
      textFont(myFont2);
      textAlign(CENTER);
      nameTitle = title;
      text(nameTitle, 0, 0.8);
      pop();
    }
  }
}

function openAbout() {
  document.getElementById("about-section").style.left = "0%";
  document.getElementById("about-section").style.transition = "0.5s";
}
function closeAbout() {
  document.getElementById("about-section").style.left = "100%";
  document.getElementById("about-section").style.transition = "0.5s";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    distanza += -5;
  } else if (keyCode == LEFT_ARROW) {
    distanza += 5;
  }
}
function mouseWheel(event) {
  print(event.delta);
  distanza -= event.delta / 50;
}
function replay() {
  window.open((href = "./family.html"), "_self");
}
