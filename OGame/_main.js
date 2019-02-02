var randNum = Math.floor(Math.random() * (+300000 - +60000)) + +60000;
waitForKeyElements (".fastBuild", buildStructure);
setTimeout(function() {
    location.reload();
},randNum);

// window.location.href

function buildStructure() {
    if (resources.energy > 0) {
        //buildStructureByName('energía');
        buildFirstStructure();
        //buildAnyStructureExceptOneByName('energía');
    } else {
        buildStructureByName('energía');
    }
}