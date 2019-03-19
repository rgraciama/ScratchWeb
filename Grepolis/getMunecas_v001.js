function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

var headUrl = "https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/Grepolis/";
importarScript(headUrl + "islands/islands_v001.js");
importarScript(headUrl + "session/session_v001.js");
importarScript(headUrl + "_main_v001.js");

//purge jsdelivr
//https://purge.jsdelivr.net/gh/rgraciama@latest