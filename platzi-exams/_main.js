var i = 0;

(
    function() {
        observe2(300);
    }
)();

function observe2(time) {
    if(i<10) i++;
    else {
        if (dbExams !== null) {

        }
        if ($("#buttonId").attr("onClick") === undefined) {
            //$('#buttonId').click(function() {
            //    setExam();
            //});

            //TODO añade la funcion onClick
            $("#buttonId").addEventListener('click', function(){ alert('blah');}, false);
        }
    }
    setTimeout(function() {
        observe2(time);
    }, time);
}
