function importarScript(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

importarScript("https://gist.github.com/raw/2625891/waitForKeyElements.js");
importarScript("http://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/master/OGame/buildStructure.js");
importarScript("http://cdn.jsdelivr.net/gh/rgraciama/ScratchWeb/master/OGame/mainBot.js");