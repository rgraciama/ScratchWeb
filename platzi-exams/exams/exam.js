function setExam() {
    // la idea es un map donde la key sea el examen.
    // ==> Después el valor sea un map dónde la pregunta sea la key.
    // ====> El valor sea un map dónde la respuesta sea la key y si es cierto o falso el valor.


    //var examKeyStr = window.location.href;
    //var examKey = examKeyStr.replace(".", "_").replace(/\//g, "_");

    var examKey = $('.Course')[0].innerText;
    var questionKey = document.getElementById('question').innerText;
    //TODO printAnswers en otro lado
    try {
        if (dbExams[examKey][questionKey]) {
            printAnswers(examKey, questionKey);
        } else {
            writeAnswers(examKey, questionKey);
        }
    } catch (e) {
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
                $(this).css("background-color", "fcafa4") //red
            } else if (dbExams[examKey][questionKey][answer] === "T") {
                console.log("True");
                $(this).css("background-color", "00ff2e"); //green
            }
        } catch (e) {
            Console.log("No se encuentra: " + examKey + ", " + questionKey + ", " + answer);
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
    var examKey = $('.ResultInfo-careerName')[0].innerText;

    $(".QuestionItem-text").each(function (index, questionElement) {
        var question = questionElement.innerText.trim();
        if ($('.QuestionItem-text').parent()[index].className.includes("Correct")) {
            modifyAnswers(examKey, question, true);
        } else {
            modifyAnswers(examKey, question, false);
        }


    });

    $('#write-result').val("");
}

function modifyAnswers(examKey, question, correct) {
    try {
        if (dbExams[examKey][question] !== null) {
            if (checkQuestionHasCorrectAnswer(examKey, question) && correct) {
                writeResultsOnAnswer(examKey, question);
            } else if (!checkQuestionHasCorrectAnswer(examKey, questions) && !correct) {
                writeResultsOnAnswerNoCorrect(examKey, question);
            } else {
                console.log("Condición extraña, es posible que hayas acertado, pero el programa no sepa que respuesta pusiste");
                console.log("ExamKey: "+examKey);
                console.log("Question: "+question);
            }


        }
    } catch (e) {
        console.log("ExamKey: " + examKey);
        console.log("Question: " + question);
    }
}


function checkQuestionHasCorrectAnswer(examKey, question) {
    for (var clave in dbExams[examKey][question]) {
        if (dbExams[examKey][question][clave] === '*') return true;
    }
    return false;
}

function writeResultsOnAnswer(examKey, question) {
    for (var clave in dbExams[examKey][question]) {
        if (dbExams[examKey][question][clave] === '*') {
            writeAnswerData(examKey, question, clave, 'T');
        } else if (dbExams[examKey][question][clave] === '-') {
            writeAnswerData(examKey, question, clave, 'F');
        }
    }

}

function writeResultsOnAnswerNoCorrect(examKey, question) {
    for (var clave in dbExams[examKey][question]) {
        if (dbExams[examKey][question][clave] === '*') {
            writeAnswerData(examKey, question, clave, 'F');
        }
    }

}

function getQuestion() {
    var examKey = $('.Course')[0].innerText;
    var questionKey = document.getElementById('question').innerText;
    //TODO printAnswers en otro lado
    try {
        if (dbExams[examKey][questionKey]) {
            printAnswers(examKey, questionKey);
        } else {
            $('#get-question').val("N");
        }
    } catch (e) {
        $('#get-question').val("N");
    }
    $('#get-question').val("Y");
}

//Añado comment para ver si actualiza el jsdelivr