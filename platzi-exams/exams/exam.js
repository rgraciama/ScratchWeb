
function writeExamName() {
    // la idea es un map donde la key sea el examen.
    // ==> Después el valor sea un map dónde la pregunta sea la key.
    // ====> El valor sea un map dónde la respuesta sea la key y si es cierto o falso el valor.

    var examKey = window.location.href;
    var question =
    var answers =

    var islandKeyName = islandTag.split(",");
    writeExamData(islandKeyName[0], islandKeyName[1], dbPlatzi);
    $('#write-exam').val("");
}