
function setExam() {
    // la idea es un map donde la key sea el examen.
    // ==> Después el valor sea un map dónde la pregunta sea la key.
    // ====> El valor sea un map dónde la respuesta sea la key y si es cierto o falso el valor.

    var examKeyStr = window.location.href;
    var examKey = examKeyStr.replace(".", "_").replace(/\//g,"_");;
    var questionKey = document.getElementById('question').innerText;
    var answers = new Map();

    $( ".Answer-content" ).each(function( index, answer ) {
        answers.set(answer.innerHTML);
    });


    //TODO hacer que answer tengan la frase de la pregunta y valor en un map.

    writeExamData(examKey, questionKey, answers, dbPlatzi);

}

/**** EXAMS */
//read Exams
var examsRef = dbPlatzi.ref("/exams");
var dbExams;
examsRef.on('value', function(snapshot) {
    dbExams = snapshot.val();
});

//write exam
function writeExamData(examKey, questionKey, answers, dbPlatzi) {
    dbPlatzi.ref('/exams/'+examKey).child(questionKey).push(answers);
}