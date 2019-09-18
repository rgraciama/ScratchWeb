var i = 0;

(
    function () {
        observe2(300);
    }
)();

function observe2(time) {
    var btn = document.getElementById('buttonId');
    if (i < 10) i++;
    else {
        if (dbExams !== null) {

        }

        if (!$('ul.Questions-list')[0] && btn.onclick === null) {
            document.getElementById('buttonId').setAttribute('onclick', 'setExam()');
        } else {
            document.createElement("button", {id: "results"});
            var newButton = document.getElementById('results').setAttribute('onclick', 'setResults()');
            var buttonRegresar = document.getElementsByClassName('Questions-btn')[0];

            document.body.insertBefore(newButton, buttonRegresar);
        }
    }
    setTimeout(function () {
        observe2(time);
    }, time);
}
