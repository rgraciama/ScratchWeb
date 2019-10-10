var i = 0;

(
    function () {
        observe2(300);
    }
)();

function observe2(time) {

    if (i < 10 && typeof(dbPlatzi) === "undefined") i++;
    else {
        var btn = document.getElementsByClassName('questionNext')[0];
        var btnResults = document.getElementById("results");
        if ($('ul.Questions-list').length === 0 && btn !== undefined && $("#write-question").val()!=="") {
            if (btn.onclick === null) {
                document.getElementsByClassName('questionNext')[0].setAttribute('onclick', 'triggerTampermonkeyQuestion()');
            }
            if ($("#write-question").val()==="Y") {
                setExam();
            }
        } else if ($('ul.Questions-list').length > 0 && btnResults === null && $("#write-question").val()!==""){
            var newButton = document.createElement("button");
            newButton.setAttribute("id", "results");
            var newContent = document.createTextNode("Resultados");
            newButton.appendChild(newContent);

            var buttonRegresar = document.getElementsByClassName('Questions-btn')[0];
            buttonRegresar.appendChild(newButton);
            document.getElementById('results').setAttribute('onclick', 'triggerTampermonkeyResult()');

            if ($("#write-result").val()==="Y") {
                setResults();
            }
        }
    }
    setTimeout(function () {
        observe2(time);
    }, time);
}


