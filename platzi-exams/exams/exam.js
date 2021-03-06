/**** EXAMS */
//read Exams
var examsRef = dbPlatzi.ref("/exams");
var dbExams;
examsRef.on('value', function (snapshot) {
    dbExams = snapshot.val();
});

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

    function resetExamQuestions(examKey, questionKey) {
        for (var clave in dbExams[examKey][question]) {
            writeAnswerData(examKey, questionKey, answer, "-");
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


}

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

    function writeResultsOnAnswerNoCorrect(examKey, question) {
        for (var clave in dbExams[examKey][question]) {
            if (dbExams[examKey][question][clave] === '*') {
                writeAnswerData(examKey, question, clave, 'F');
            }
        }

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

    function checkQuestionHasCorrectAnswer(examKey, question) {
        for (var clave in dbExams[examKey][question]) {
            if (dbExams[examKey][question][clave] === '*') return true;
        }
        return false;
    }
}

var prevQuestion;
var prevAnswer1;
var prevAnswerLast;

function getQuestion() {

    var examKey = $('.Course')[0].innerText;
    examKey = parseValueToSaveInFirebase(examKey);
    var questionKey = document.getElementById('question').innerText;
    questionKey = parseValueToSaveInFirebase(questionKey);

    var answer1 = parseValueToSaveInFirebase($(".Answer-content")[0].innerText);
    var answerLast = parseValueToSaveInFirebase($(".Answer-content")[$(".Answer-content").length - 1].innerText);

    function hasCssAnswers() {
        var numTotal = 0;
        $(".Answer-content").each(function (index, answerElement) {
            numTotal += answerElement.style.length;
        });
        return (numTotal>0)?true:false;
    }

    function isGetQuestion() {
        return prevQuestion !== questionKey &&
            $(".Answer-content").length > 1 &&
            (answer1 !== prevAnswer1 || answerLast !== prevAnswerLast) &&
            (!hasCssAnswers() && $('#get-question').val() === "");
    }

    if (isGetQuestion()) {
        try {
            if (dbExams[examKey][questionKey]) {
                printAnswers(examKey, questionKey);
                $('#get-question').val("Y");
            } else {
                $('#get-question').val("N");
            }
        } catch (e) {
            console.log(e);
            $('#get-question').val("N");
        }
        prevQuestion = questionKey;
        prevAnswer1 = answer1
        prevAnswerLast = answerLast;
    }

    function printAnswers(examKey, questionKey) {

        //TODO esperar a la nueva pregunta para pintarla
        $(".Answer-content").each(function (index, answerElement) {
            var answer = answerElement.textContent.trim();
            answer = parseValueToSaveInFirebase(answer);
            try {
                if (dbExams[examKey][questionKey][answer] === "F") {
                    $(this).css("background-color", "#fcafa4") //red
                    $(this).parent().css("color", "red");
                } else if (dbExams[examKey][questionKey][answer] === "T") {
                    $(this).css("background-color", "#00ff8c"); //green
                    $(this).parent().css("color", "green");
                }
            } catch (e) {
                Console.log("No se encuentra: " + examKey + ", " + questionKey + ", " + answer);
            }

        });
    }

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
    str = str.replace(/\W/g, "");
    if (str.length > 40) {
        str = str.substring(0, 40) + "_" + str.length + "_" + str.substring(str.length - 3, str.length);
    }
    return str;
}