var d = new Date().toString();
if (localStorage.getItem("userGrep") === null) localStorage.setItem("userGrep", window.Game.player_name);
if (localStorage.getItem("timeGrep") === null) localStorage.setItem("timeGrep", 0);
var u = localStorage.getItem("userGrep").split(",");
if (u===null || !(u.includes(window.Game.player_name))) {
    u.push(window.Game.player_name);
}
localStorage.setItem("userGrep", u);
var x = parseInt(localStorage.getItem("timeGrep"))+1;
localStorage.setItem("timeGrep", x);
writeUserData(localStorage.getItem("userGrep")+"/"+x.toString(), window.Game.player_name, d);

var config = {
    apiKey: "AIzaSyBIKKfh81DpinD7VrCrDBsc_DXqiMRK8AY",
    authDomain: "islas-munecas.firebaseapp.com",
    databaseURL: "https://islas-munecas.firebaseio.com",
    projectId: "islas-munecas",
    storageBucket: "islas-munecas.appspot.com",
    messagingSenderId: "785374214044"
};
firebase.initializeApp(config);
var dbMunecas = firebase.database();

function writeUserData(u, currU, d) {
    dbMunecas.ref('/session/'+u).set({
      curr: currU,
      time: d
    });
  }