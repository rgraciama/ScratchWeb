var headUrl = "https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/Grepolis/";
var listLibs = ["https://www.gstatic.com/firebasejs/5.9.0/firebase.js",
                headUrl + "dbFirebase/dbFirebase_v002.js",
                headUrl + "session/session_v007.js",
                headUrl + "islands/islands_v006.js",
                headUrl + "_main_v004.js"];

//listLibs.reverse();
function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

function doImportLibs(listLibs) {
    for (var lib of listLibs) {
        importarScript(lib);
    }
}
//purge jsdelivr
//https://purge.jsdelivr.net/gh/rgraciama@latest