// https://console.firebase.google.com/u/0/project/luppio-demo/overview

let addPianta;
let piante;

async function firebaseSetup() {
  const fb_app_url = "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  const fb_database_url =
    "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

  const { initializeApp } = await import(fb_app_url);
  const {
    getDatabase,
    ref,
    push,
    set,
    onValue,
    //ricordati di uncommentare questo nella pagina totalieh
  } = await import(fb_database_url);

  const firebaseConfig = {
    apiKey: "AIzaSyAgcH48bNeDZxeqOUdZ3vKqw7131oR36_U",
  authDomain: "luppio-5a8ab.firebaseapp.com",
  databaseURL: "https://luppio-5a8ab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "luppio-5a8ab",
  storageBucket: "luppio-5a8ab.appspot.com",
  messagingSenderId: "411841638943",
  appId: "1:411841638943:web:fed919391ea6f3c7b05b2a"
  };

  const app = initializeApp(firebaseConfig);
  const myDatabase = getDatabase(app);

  const pianteRef = ref(myDatabase, "piante");

  onValue(pianteRef, function (snapshot) {
    const data = snapshot.val();
    piante = data;
  });

  addPianta = function (properties) {
    const singlePiantaRef = push(pianteRef);
    set(singlePiantaRef, properties);
  };
}

firebaseSetup();
