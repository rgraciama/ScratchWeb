function setExam() {
    // la idea es un map donde la key sea el examen.
    // ==> Después el valor sea un map dónde la pregunta sea la key.
    // ====> El valor sea un map dónde la respuesta sea la key y si es cierto o falso el valor.


    //var examKeyStr = window.location.href;
    //var examKey = examKeyStr.replace(".", "_").replace(/\//g, "_");

    var examKey = $('.Course')[0].innerText;
    var questionKey = document.getElementById('question').innerText;

    try {
        if (dbExams[examKey][questionKey]) {
            printAnswers(examKey, questionKey);
        } else {
            writeAnswers(examKey, questionKey);
        }
    }catch (e) {
        writeAnswers(examKey, questionKey);
    }
    $('#write-question').val("");
}

function writeAnswers(examKey, questionKey) {

    $(".Answer-content").each(function (index, answerElement) {
        var answer = answerElement.textContent.trim();
        if ($('.Answer')[index].className.includes("is-selected")) {

            writeAnswerData(examKey, questionKey, answer, "*");

        } else {

            writeAnswerData(examKey, questionKey, answer, "-");

        }
    });
}

function printAnswers(examKey, questionKey) {
    $(".Answer-content").each(function (index, answerElement) {
        var answer = answerElement.textContent.trim();
        try {
            if (dbExams[examKey][questionKey][answer] === "F") {
                console.log("False");
                $(this).css("background-color", "red");
            } else if (dbExams[examKey][questionKey][answer] === "T") {
                console.log("True");
                $(this).css("background-color", "green");
            }
        } catch (e) {
            Console.log("No se encuentra: "+ examKey + ", " +questionKey+", "+ answer);
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

/*** Set Results Exams **/
function setResults() {
    //check results and give the results
    var examKeyStr = window.location.href;
    var examKey = examKeyStr.replace(".", "_").replace(/\//g, "_");

    $(".QuestionItem-text").each(function (index, questionElement) {
        var question = questionElement.innerText.trim();
        if ($('.QuestionItem-text').parent()[index].className.includes("Correct")) {
            modifyAnswers(examKey, question);
        } else {
            modifyAnswers(examKey, question);
        }


    });

    $('#write-result').val("");
}

function modifyAnswers(examKey, question) {
    if (dbExams[examKey][question] !== null) {
        for (var clave in dbExams[examKey][question]){
            if (dbExams[examKey][question][clave] === '*') {
                writeAnswerData(examKey, question, clave, 'T');
            } else if (dbExams[examKey][question][clave] === '-') {
                writeAnswerData(examKey, question, clave, 'F');
            }
        }
    }
}

//Añado comment para ver si actualiza el jsdelivr