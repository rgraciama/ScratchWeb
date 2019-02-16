//Prueba 2

var randNum = Math.floor(Math.random() * (+150000 - +60000)) + +60000;
waitForKeyElements (".fastBuild", buildStructure);
setTimeout(function() {
    location.reload();
},randNum);


//Objetivo 1
//var t1 = new Target(0,0,0);

//t1.doTarget();


function buildStructure() {
    if (resources.energy > 0) {
        //var names = ["Orbital"]
        //buildAnyStructureExceptArrayNames(names);

        //buildStructureByName('energía');
        //buildFirstStructure();
        buildAnyStructureExceptOneByName('Orbital');
    } else {
        buildStructureByName('energía');
    }
}
