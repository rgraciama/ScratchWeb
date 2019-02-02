/*var randNum = Math.floor(Math.random() * (+150000 - +60000)) + +60000;
waitForKeyElements (".fastBuild", buildStructure);
setTimeout(function() {
    location.reload();
},randNum);*/

// window.location.href

//Objetivo 1
let t1 = new Target(0,0,0);

if (window.location.href.contains(pages[t1.what])) {
    goToMenuOption(t1.what);
}

/*
function buildStructure() {
    if (resources.energy > 0) {
        //buildStructureByName('energía');
        buildFirstStructure();
        //buildAnyStructureExceptOneByName('energía');
    } else {
        buildStructureByName('energía');
    }
}
*/