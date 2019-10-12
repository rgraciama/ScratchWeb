$("body").append("<input id='write-question' type='hidden' value=''/>");
$("body").append("<input id='get-question' type='hidden' value=''/>");
$("body").append("<input id='write-result' type='hidden' value=''/>");

function triggerTampermonkeyQuestion() {
    $('#write-question').val("Y");
    //To prepare next question
    $('#get-question').val("");
}


function triggerTampermonkeyResult() {
    $('#write-result').val("Y");
}