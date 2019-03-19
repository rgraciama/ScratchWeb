function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

var headUrl = "https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/Grepolis/";

importarScript("https://www.gstatic.com/firebasejs/5.9.0/firebase.js");
importarScript(headUrl + "session/session_v004.js");
importarScript(headUrl + "islands/islands_v003.js");
importarScript(headUrl + "_main_v003.js");

//purge jsdelivr
//https://purge.jsdelivr.net/gh/rgraciama@latest