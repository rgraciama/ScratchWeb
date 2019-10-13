/**** EXAMS */
//read Exams
var examsRef = dbPlatzi.ref("/exams");
var dbExams;
examsRef.on('value', function (snapshot) {
    dbExams = snapshot.val();
});

function iniDbExams() {
    examsRef = dbPlatzi.ref("/exams");
    dbPlatzi.ref("/exams").on('value', function (snapshot) {
        dbExams = snapshot.val();
    });
}

function setExam() {
    // la idea es un map donde la key sea el examen.
    // ==> Después el valor sea un map dónde la pregunta sea la key.
    // ====> El valor sea un map dónde la respuesta sea la key y si es cierto o falso el valor.

    var examKey = $('.Course')[0].innerText;
    var questionKey = document.getElementById('question').innerText;

    questionKey = parseValueToSaveInFirebase(questionKey);
    examKey = parseValueToSaveInFirebase(examKey);

    try {
        if (dbExams[examKey][questionKey]) {
            console.log("Ya existe: " + examKey + ", " + questionKey);
            if (checkIfExamHasAstersisk(examKey, questionKey)) resetExamQuestions(examKey, questionKey);
            writeAnswersOnlySelected(examKey, questionKey);
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
        answer = parseValueToSaveInFirebase(answer);
        if ($('.Answer')[index].className.includes("is-selected")) {

            writeAnswerData(examKey, questionKey, answer, "*");

        } else {

            writeAnswerData(examKey, questionKey, answer, "-");

        }
    });
}

function writeAnswersOnlySelected(examKey, questionKey) {
    $(".Answer-content").each(function (index, answerElement) {
        var answer = answerElement.textContent.trim();
        answer = parseValueToSaveInFirebase(answer);
        if ($('.Answer')[index].className.includes("is-selected")) {
            writeAnswerData(examKey, questionKey, answer, "*");
        }
    });
}

function printAnswers(examKey, questionKey) {

    //TODO esperar a la nueva pregunta para pintarla
    $(".Answer-content").each(function (index, answerElement) {
        var answer = answerElement.textContent.trim();
        answer = parseValueToSaveInFirebase(answer);
        try {
            if (dbExams[examKey][questionKey][answer] === "F") {
                $(this).css("background-color", "#fcafa4") //red
            } else if (dbExams[examKey][questionKey][answer] === "T") {
                $(this).css("background-color", "#00ff8c"); //green
            }
        } catch (e) {
            Console.log("No se encuentra: " + examKey + ", " + questionKey + ", " + answer);
        }

    });
}

//write exam
function writeAnswerData(examKey, questionKey, answer, value) {
    try {
        dbPlatzi.ref('/exams/' + examKey).child(questionKey).child(answer).set(value);
    } catch (e) {
        console.log("No se puede guardar, error: " + e);
        console.log("exam: " + examKey);
        console.log("question: " + questionKey);
    }
}

function parseValueToSaveInFirebase(str) {
    return str.replace(/[\/.,$\]\[]/g, "_");
}

/*** Set Results Exams **/
function setResults() {
    //check results and give the results
    var examKey = $('.ResultInfo-careerName')[0].innerText;


    examKey = parseValueToSaveInFirebase(examKey);

    $(".QuestionItem-text").each(function (index, questionElement) {
        var question = questionElement.innerText.trim();
        question = parseValueToSaveInFirebase(question);
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
            } else if (!correct) {
                writeResultsOnAnswerNoCorrect(examKey, question);
            } else {
                console.log("Condición extraña, es posible que hayas acertado, pero el programa no sepa que respuesta pusiste");
                console.log("ExamKey: " + examKey);
                console.log("Question: " + question);
            }


        }
    } catch (e) {
        console.log("Error: " + e);
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

function checkIfExamHasAstersisk(exam, questionKey) {
    for (var clave in dbExams[examKey][question]) {
        if (dbExams[examKey][question][clave] === '*') {
            return true;
        }
    }
    return false;
}

function resetExamQuestions(examKey, questionKey) {
    for (var clave in dbExams[examKey][question]) {
        writeAnswerData(examKey, questionKey, answer, "-");
    }
}

var prevQuestion;
function getQuestion() {

    if (dbExams === undefined) {
        iniDbExams();
    }

    var examKey = $('.Course')[0].innerText;
    examKey = parseValueToSaveInFirebase(examKey);
    var questionKey = document.getElementById('question').innerText;
    questionKey = parseValueToSaveInFirebase(questionKey);
    if (prevQuestion !== questionKey && $(".Answer-content").length > 1) {
        try {
            if (dbExams[examKey][questionKey]) {
                printAnswers(examKey, questionKey);
                $('#get-question').val("Y");
            } else {
                $('#get-question').val("N");
            }
        } catch (e) {
            $('#get-question').val("N");
        }
        prevQuestion = questionKey;
    }
}

//Añado comment para ver si actualiza el jsdelivr