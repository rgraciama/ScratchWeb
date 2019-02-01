// ==UserScript==
// @name         OGame Auto build
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://s158-es.ogame.gameforge.com/game/index.php?page=*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://raw.githubusercontent.com/rgraciama/ScratchWeb/master/OGame/buildStructure.js
// @grant        none
// ==/UserScript==
var randNum = Math.floor(Math.random() * (+300000 - +60000)) + +60000;
waitForKeyElements (".fastBuild", buildStructure);
setTimeout(function() {
    location.reload();
},randNum);

function buildStructure() {
    if ($('#resources_energy').text() > 0) {
        //buildStructureByName('energía');
        buildFirstStructure();
        //buildAnyStructureExceptOneByName('energía');
    } else {
        buildStructureByName('energía');
    }
}

