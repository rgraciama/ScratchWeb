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

    questionKey = questionKey.replace("[.,$\]\[]");
    examKey = examKey.replace("[.,$\]\[]");
    //TODO printAnswers en otro lado
    //[.|,|$|\]|\[]
    try {
        if (dbExams[examKey][questionKey]) {
            console.log("Ya existe: "+examKey+", "+questionKey);
            //printAnswers(examKey, questionKey);p
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

//write exam
function writeAnswerData(examKey, questionKey, answer, value) {
    try {
        dbPlatzi.ref('/exams/' + examKey).child(questionKey).child(answer).set(value);
    } catch (e) {
        console.log("No se puede guardar, error: "+ e);
        console.log("exam: "+examKey);
        console.log("question: "+questionKey);
        //TODO Probar reduciendo la pregunta
        //dbPlatzi.ref('/exams/' + examKey).child(questionKey).child(answer).set(value);
    }
}

/*** Set Results Exams **/
function setResults() {
    //check results and give the results
    var examKey = $('.ResultInfo-careerName')[0].innerText;


    examKey = examKey.replace("[.,$\]\[]");

    $(".QuestionItem-text").each(function (index, questionElement) {
        var question = questionElement.innerText.trim();
        question = question.replace("[.,$\]\[]");
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
            } else if (!checkQuestionHasCorrectAnswer(examKey, question) && !correct) {
                writeResultsOnAnswerNoCorrect(examKey, question);
            } else {
                console.log("Condición extraña, es posible que hayas acertado, pero el programa no sepa que respuesta pusiste");
                console.log("ExamKey: "+examKey);
                console.log("Question: "+question);
            }


        }
    } catch (e) {
        console.log("Error: "+ e);
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

    if(dbExams === undefined) {
        iniDbExams();
    }
    var examKey = $('.Course')[0].innerText;
    var questionKey = document.getElementById('question').innerText;
    //TODO printAnswers en otro lado
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
}

//Añado comment para ver si actualiza el jsdelivr