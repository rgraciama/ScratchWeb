// ==UserScript==
// @name         Set Islands Labels Names
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @require      https://www.gstatic.com/firebasejs/5.9.0/firebase.js
// @match 	     https://es78.grepolis.com/*
// @grant        none
// ==/UserScript==

var config = {
    apiKey: "AIzaSyBIKKfh81DpinD7VrCrDBsc_DXqiMRK8AY",
    authDomain: "islas-munecas.firebaseapp.com",
    databaseURL: "https://islas-munecas.firebaseio.com",
    projectId: "islas-munecas",
    storageBucket: "islas-munecas.appspot.com",
    messagingSenderId: "785374214044"
};
firebase.initializeApp(config);

function writeUserData(u, currU, d) {
  firebase.database().ref('/session/'+u).set({
    curr: currU,
    time: d
  });
}

var leadsRef = firebase.database().ref("/islands");
var dbIslands;
leadsRef.on('value', function(snapshot) {
    dbIslands = snapshot.val();
});

var d = new Date().toString();
if (localStorage.getItem("userGrep") === null) localStorage.setItem("userGrep", window.Game.player_name);
if (localStorage.getItem("timeGrep") === null) localStorage.setItem("timeGrep", 0);
var u = localStorage.getItem("userGrep").split(",");
if (u===null || !(u.includes(window.Game.player_name))) {
    u.push(window.Game.player_name);
}
localStorage.setItem("userGrep", u);
var x = parseInt(localStorage.getItem("timeGrep"))+1;
localStorage.setItem("timeGrep", x);
writeUserData(localStorage.getItem("userGrep")+"/"+x.toString(), window.Game.player_name, d);

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

var addOnClick = function() {
    if (!$("#input-island-label").is(":visible")) {
        $('span.sea_coords').attr('onclick', 'addInputBox()');
    }
}

function addInputBox() {
   $(".island_info").append("<input type='text' id='input-island-label'>");
}

function setMapViewNamesLabels() {
    //Islas Mapa
    Object.keys(dbIslands).forEach(function(key) {
        //console.log('Key : ' + key + ', Value : ' + dbIslands[key]);
        if (!$("span#island_"+key).is(":visible")) {
            $('#mini_i'+key).append("<span id='island_"+key+"' class='labels-islands' style='position:absolute;left:20%;top:5px;z-index: 100;'>"+dbIslands[key]+"</span>");
        }
    });

}

function setCityViewNamesLabels() {
    //Islas Mapa
    Object.keys(dbIslands).forEach(function(key) {
        if (!$("span#islandCity_"+key).is(":visible")) {
            $('#island_'+key).append("<span id='islandCity_"+key+"' class='labels-islandsCity' style='font-weight: bold;position:absolute;left:20%;top:-20px;z-index: 900;'>"+dbIslands[key]+"</span>");
        }
    });
}