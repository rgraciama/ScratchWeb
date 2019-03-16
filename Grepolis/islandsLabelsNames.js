var islands = new Map();
islands.set("Ibiza", "505_536");
islands.set("Cuba", "505_530");
islands.set("Nido", "496_531");
islands.set("Mallorca", "513_528");
islands.set("Bora Bora", "504_544");
var i = 0;

(
    function() {
        observe2(300);
    }
)();

function observe2(time) {
    if(i<10) i++;
    else {
        if($("div#minimap_canvas.expanded").is(":visible") && $('.labels-islands').size()==0) setNamesLabels();
    }
    setTimeout(function() {
        observe2(time);
    }, time);
}

function setNamesLabels() {
    //Islas
    for (var [key, value] of islands) {
        $('#mini_i'+value).append("<span class='labels-islands'>"+key+"</span>");
    }
}