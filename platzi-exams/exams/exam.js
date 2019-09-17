
function setExam() {
    // la idea es un map donde la key sea el examen.
    // ==> Después el valor sea un map dónde la pregunta sea la key.
    // ====> El valor sea un map dónde la respuesta sea la key y si es cierto o falso el valor.

    var examKeyStr = window.location.href;
    var examKey = examKeyStr.replace(".", "_").replace(/\//g,"_");;

    writeExamData(examKey);
    var questionKey = document.getElementById('question').innerText;
    writeQuestionData(examKey, questionKey);

    $( ".Answer-content" ).each(function( index, answer ) {
        writeAnswerData(examKey, questionKey, {key: answer.innerHtml, value: "-"});
    });

}

/**** EXAMS */
//read Exams
var examsRef = dbPlatzi.ref("/exams");
var dbExams;
examsRef.on('value', function(snapshot) {
    dbExams = snapshot.val();
});

//write exam
function writeExamData(examKey) {
    dbPlatzi.ref('/exams/').push(examKey);
}

function writeQuestionData(examKey, questionKey) {
    dbPlatzi.ref('/exams/'+examKey).push(questionKey);
}

function writeAnswerData(examKey, questionKey, answer) {
    dbPlatzi.ref('/exams/'+examKey/questionKey).set(answer.key).set(answer.value);
}