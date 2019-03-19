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
            if($("div#minimap_canvas.expanded").is(":visible")) setMapViewNamesLabels();
            if(!$("div#minimap_canvas.expanded").is(":visible")) setCityViewNamesLabels();
        }
        if($(".islandinfo_coords").is(":visible")) addOnClick();
    }
    setTimeout(function() {
        observe2(time);
    }, time);
}
