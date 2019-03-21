var addOnClick = function() {
    if (!$("#input-island-label").is(":visible")) {
        $(".island_info").append("<input type='text' id='input-island-label'>");
        var islandKey = $('.islandinfo_coords').text().match(/([.0-9]*\d\/[.0-9]*\d)/g);
        islandKey = islandKey.toString().replace("/", "_");
        
        var islandName = $('#islandCity_'+islandKey).text();
        $('#input-island-label').val(islandName);
    }
}

function setMapViewNamesLabels(dbIslands) {
    //Islas Mapa
    Object.keys(dbIslands).forEach(function(key) {
        //console.log('Key : ' + key + ', Value : ' + dbIslands[key]);
        if (!$("span#island_"+key).is(":visible")) {
            $('#mini_i'+key).append("<span id='island_"+key+"' class='labels-islands' style='position:absolute;left:20%;top:5px;z-index: 100;'>"+dbIslands[key]+"</span>");
        }
    });

}

function setCityViewNamesLabels(dbIslands) {
    //Islas Mapa
    Object.keys(dbIslands).forEach(function(key) {
        if (!$("span#islandCity_"+key).is(":visible")) {
            $('#island_'+key).append("<span id='islandCity_"+key+"' class='labels-islandsCity' style='font-weight: bold;position:absolute;left:20%;top:-20px;z-index: 900;'>"+dbIslands[key]+"</span>");
        }
    });
}