var headUrl = "https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/platzi-exams/";
var version = "02";

var listLibs = [headUrl + "exams/func_exams_v"+version+".js",
                //headUrl + "exams/exam.js",
                headUrl + "dbFirebase/dbFirebase.js",
                "https://www.gstatic.com/firebasejs/5.9.0/firebase.js",
                "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"];

listLibs.reverse();
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

doImportLibs(listLibs);
//purge jsdelivr
//https://purge.jsdelivr.net/gh/rgraciama@latest
//https://purge.jsdelivr.net/gh/rgraciama/ScratchWeb/platzi-exams/exams/exam.js@latest