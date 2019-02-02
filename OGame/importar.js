function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/OGame/waitForKeyElements.js");
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/OGame/buildStructure.js");
importarScript("https://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/OGame/mainBot.js");