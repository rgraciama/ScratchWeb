function setExam() {
    // la idea es un map donde la key sea el examen.
    // ==> Después el valor sea un map dónde la pregunta sea la key.
    // ====> El valor sea un map dónde la respuesta sea la key y si es cierto o falso el valor.


    var examKeyStr = window.location.href;
    var examKey = examKeyStr.replace(".", "_").replace(/\//g, "_");
    var questionKey = document.getElementById('question').innerText;

    if (!dbExams[examKey][questionKey]) {
        writeAnswers(examKey, questionKey);
    } else {
        printAnswers(examKey, questionKey);
    }
}

function writeAnswers(examKey, questionKey) {

    $(".Answer-content").each(function (index, answerElement) {
        var answer = answerElement.textContent.trim();
        if (answerElement.className.includes("is-selected")) {
            writeAnswerData(examKey, questionKey, answer, "*");
        } else {
            writeAnswerData(examKey, questionKey, answer, "-");
        }
    });
}

function printAnswers(examKey, questionKey) {
    $(".Answer-content").each(function (index, answerElement) {
        var answer = answerElement.textContent.trim();
        if (dbExams[examKey][questionKey][answer] === "F") {
            console.log("False");
            answerElement.css("background", "red");
        } else if (dbExams[examKey][questionKey][answer] === "T") {
            console.log("True");
            answerElement.css("background", "green");
        }
    });
}

/**** EXAMS */
//read Exams
var examsRef = dbPlatzi.ref("/exams");
var dbExams;
examsRef.on('value', function (snapshot) {
    dbExams = snapshot.val();
});

//write exam
function writeAnswerData(examKey, questionKey, answer, value) {
    dbPlatzi.ref('/exams/' + examKey).child(questionKey).child(answer).set(value);
}