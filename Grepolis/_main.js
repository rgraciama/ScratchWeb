var i = 0;

(
    function() {
        observe2(300);
    }
)();

function observe2(time) {
    if(i<10) i++;
    else {
        if (dbIslands !== null) {
            if($("div#minimap_canvas.expanded").is(":visible")) setMapViewNamesLabels(dbIslands);
            if(!$("div#minimap_canvas.expanded").is(":visible")) setCityViewNamesLabels(dbIslands);
        }
        if($(".islandinfo_coords").is(":visible")) addOnClick();
        if($("#write-island").val()!=="") writeIslandName();
        if($(".content.js-dropdown-item-list [id*='movement_']").lenght!==0) writeMovement(dbMoves);
    }
    setTimeout(function() {
        observe2(time);
    }, time);
}
