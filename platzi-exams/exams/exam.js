$("body").append("<input id='write-exam' type='hidden' value=''/>");

var addOnClick = function() {
    if (!$("#input-exam-label").is(":visible")) {
        $(".island_info").append("<input type='text' id='input-exam-label' style='width:120px;'>");


        var islandKey = $('.islandinfo_coords').text().match(/([.0-9]*\d\/[.0-9]*\d)/g);
        islandKey = islandKey.toString().replace("/", "_");
        
        var islandName = $('#islandCity_'+islandKey).text();
        $('#input-exam-label').val(islandName);

        $(".island_info").append("<a onClick='writeIsland()' "+
        "style='float: left; margin: 0px 0px 0px 4px; display: block; width: 22px; height: 23px; background: url(&quot;https://grmh.pl/gui/but.png&quot;) -132px 0px repeat scroll;'"+
        "></a>");
    }
}

function setMapViewNamesLabels(dbExams) {
    //Exam
    for (exam in dbExams) {
        if (!$("span#island_"+exam).is(":visible")) {
            $('#mini_i'+exam).append("<span id='island_"+exam+"' class='labels-islands' style='font-weight: bold;position:absolute;left:20%;top:5px;z-index: 100;'>"+dbIslands[exam].name+"</span>");
        }
    }
}

function setCityViewNamesLabels(dbExams) {
    //Islas Mapa
    for (exam in dbExams) {
        //console.log(exam+" "+dbExams[exam]);
        if (!$("span#islandCity_"+exam).is(":visible")) {
            $('#island_'+exam).append("<span id='islandCity_"+exam+"' class='labels-islandsCity' style='font-weight: bold;position:absolute;left:20%;top:-20px;z-index: 900;'>"+dbExams[exam].name+"</span>");
        }      
    }
}

function writeExamName() {
    var islandTag = $('#write-exam').val();
    var islandKeyName = islandTag.split(",");
    writeExamData(islandKeyName[0], islandKeyName[1], dbPlatzi);
    $('#write-exam').val("");
}