var i = 0;

(
    function () {
        observe2(300);
    }
)();

function observe2(time) {

    if (i < 10 && typeof (dbPlatzi) === "undefined" && typeof(dbExams) === "undefined") i++;
    else {
        var btn = document.getElementsByClassName('questionNext')[0];
        var btnResults = document.getElementById("results");
        if (isWriteQuestion()) {
            setExam();
        }
        if (isWriteResult()) {
            setResults();
        }
        if (isGetQuestion() && dbExams !== undefined) {
            getQuestion();
        }
        if ($('ul.Questions-list').length === 0 && btn !== undefined) {
            if (btn.onclick === null) {
                document.getElementsByClassName('questionNext')[0].setAttribute('onclick', 'triggerTampermonkeyQuestion()');
            }

        } else if ($('ul.Questions-list').length > 0 && btnResults === null) {
            var newButton = document.createElement("button");
            newButton.setAttribute("id", "results");
            var newContent = document.createTextNode("Resultados");
            newButton.appendChild(newContent);

            var buttonRegresar = document.getElementsByClassName('Questions-btn')[0];
            buttonRegresar.appendChild(newButton);
            document.getElementById('results').setAttribute('onclick', 'triggerTampermonkeyResult()');
        }
    }
    setTimeout(function () {
        observe2(time);
    }, time);
}

function isWriteQuestion() {
    return window.location.href.includes("platzi.com/clases/examen/") &&
        $('#write-question') !== null &&
        $('#write-question').val() !== "" &&
        $('#write-question').val() !== undefined;
}

function isGetQuestion() {
    return window.location.href.includes("platzi.com/clases/examen/") &&
        $('#get-question').val() === "";
}

function isWriteResult() {
    return window.location.href.includes("platzi.com/clases/exams/") &&
        $('#write-result') !== null &&
        $('#write-result').val() !== "" &&
        $('#write-result').val() !== undefined;
}

