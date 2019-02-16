function buildAnyStructureExceptOneByName(structureName) {
    var max = $('.fastBuild').length;
    if (max != 0) {
        var pos = 0;
        var isStructure = true;
        while (isStructure && (pos < max)) {
            isStructure = $($('.fastBuild').get(pos)).attr("title").includes(structureName);
            if (isStructure) pos++;
        }
        if (!isStructure) $('.fastBuild').get(pos).click();
    }
}

function buildStructureByName(structureName) {
    var max = $('.fastBuild').length;
    if (max != 0) {
        var pos = 0;
        var isStructure = false;
        while (!isStructure && (pos < max)) {
            isStructure = $($('.fastBuild').get(pos)).attr("title").includes(structureName);
            if (!isStructure) pos++;
        }
        if (isStructure) $('.fastBuild').get(pos).click();
    }
}

function buildFirstStructure() {
    var max = $('.fastBuild').length;
    if (max != 0) {
        $('.fastBuild').get(0).click();
    }
}