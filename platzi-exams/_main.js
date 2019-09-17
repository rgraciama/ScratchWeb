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
        if (btn.onclick === null) {
            document.getElementById('buttonId').setAttribute('onclick', 'setExam()');
        }
    }
    setTimeout(function () {
        observe2(time);
    }, time);
}
