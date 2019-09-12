
function writeIsland() {
    var examKey = $('.islandinfo_coords').text().match(/([.0-9]*\d\/[.0-9]*\d)/g);
    examKey = examKey.toString().replace("/", "_");
    var examName = $('#input-exam-label').val();
    $('#write-exam').val(examKey + ","+examName);
}