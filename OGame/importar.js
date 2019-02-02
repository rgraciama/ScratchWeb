function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/OGame/libs/waitForKeyElements.js");
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/OGame/util/buildStructure.js");
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/OGame/util/dashboard.js");
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/OGame/_main.js");