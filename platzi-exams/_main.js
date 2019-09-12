var i = 0;

(
    function() {
        observe2(300);
    }
)();

function observe2(time) {
    if(i<10) i++;
    else {
        if (dbExams !== null) {
            if($("div#minimap_canvas.expanded").is(":visible")) setMapViewNamesLabels(dbExams);
            if(!$("div#minimap_canvas.expanded").is(":visible")) setCityViewNamesLabels(dbExams);
        }
        if($(".islandinfo_coords").is(":visible")) addOnClick();
        if($("#write-exam").val()!=="") writeExamName();
    }
    setTimeout(function() {
        observe2(time);
    }, time);
}
