function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

var headUrl = "https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb@latest/OGame/";
/* Entities & Functions */
importarScript(headUrl & "entities/Target.js");
/* Libraries */
importarScript(headUrl & "libs/waitForKeyElements.js");
/* utils */
importarScript(headUrl & "util/buildStructure.js");
importarScript(headUrl & "util/dashboard.js");
/* main*/
importarScript(headUrl & "_main.js");