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
            var newButton = document.createElement("button", {id: "results"});

            var buttonRegresar = document.getElementsByClassName('Questions-btn')[0];

            document.body.insertBefore(newButton, buttonRegresar);

            document.getElementById('results').setAttribute('onclick', 'setResults()');


        }
    }
    setTimeout(function () {
        observe2(time);
    }, time);
}
