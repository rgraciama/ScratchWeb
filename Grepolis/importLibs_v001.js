var headUrl = "https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/Grepolis/";
var listLibs = [headUrl + "islands/func_islands_v001.js"];

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

doImportLibs();
//purge jsdelivr
//https://purge.jsdelivr.net/gh/rgraciama@latest