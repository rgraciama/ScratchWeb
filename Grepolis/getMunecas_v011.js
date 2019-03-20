function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

var headUrl = "https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/Grepolis/";

importarScript("https://www.gstatic.com/firebasejs/5.9.0/firebase.js");
importarScript(headUrl + "session/session_v007.js");
importarScript(headUrl + "dbFirebase/dbFirebase_v002.js");
importarScript(headUrl + "islands/islands_v005.js");
importarScript(headUrl + "_main_v004.js");

//purge jsdelivr
//https://purge.jsdelivr.net/gh/rgraciama@latest