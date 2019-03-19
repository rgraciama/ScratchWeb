// ==UserScript==
// @name         Set Islands Labels Names
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match 	     https://es78.grepolis.com/*
// @grant        none
// ==/UserScript==
var islands = new Map();
islands.set("Ibiza", "505_536");
islands.set("Cuba", "505_530");
islands.set("Nido", "496_531");
islands.set("Mallorca", "513_528");
islands.set("ORDEN", "504_544");
islands.set("snimpac", "500_548");
islands.set("Bunker", "496_550");
islands.set("BoraBora", "488_558");
islands.set("Talón", "485_561");
islands.set("Congo", "491_526");
islands.set("Morsa", "492_542");
islands.set("Cayo", "485_539");
var i = 0;

(
    function() {
        observe2(300);
    }
)();

function observe2(time) {
    if(i<10) i++;
    else {
        if($("div#minimap_canvas.expanded").is(":visible")) setMapViewNamesLabels();
        if(!$("div#minimap_canvas.expanded").is(":visible")) setCityViewNamesLabels();
    }
    setTimeout(function() {
        observe2(time);
    }, time);
}

function setMapViewNamesLabels() {
    //Islas Mapa
    for (var [key, value] of islands) {
        if (!$("span#island_"+value).is(":visible")) {
            $('#mini_i'+value).append("<span id='island_"+value+"' class='labels-islands' style='position:absolute;left:20%;top:5px;z-index: 100;'>"+key+"</span>");
        }
    }

}
function setCityViewNamesLabels() {
    //Islas Mapa
    for (var [key, value] of islands) {
        if (!$("span#islandCity_"+value).is(":visible")) {
            $('#island_'+value).append("<span id='islandCity_"+value+"' class='labels-islandsCity' style='position:absolute;left:20%;top:-20px;z-index: 900;'>"+key+"</span>");
        }
    }

}