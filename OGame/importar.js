function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
/* Entities & Functions */
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb@latest/OGame/entities/Target.js");

/* Libraries */
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb@latest/OGame/libs/waitForKeyElements.js");

/* utils */
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb@latest/OGame/util/buildStructure.js");
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb@latest/OGame/util/dashboard.js");

importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb@latest/OGame/_main.js");