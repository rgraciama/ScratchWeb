
function setExam() {
    // la idea es un map donde la key sea el examen.
    // ==> Después el valor sea un map dónde la pregunta sea la key.
    // ====> El valor sea un map dónde la respuesta sea la key y si es cierto o falso el valor.

    var examKeyStr = window.location.href;
    var examKey = examKeyStr.replace(".", "_").replace(/\//g,"_");;
    var questionKey = 'todo';
    var answers = [{a: 1},{a: 2},{a: 3}];
    //TODO hacer que answer tengan la frase de la pregunta y valor en un map.

    writeExamData(examKey, questionKey, answers, dbPlatzi);

}