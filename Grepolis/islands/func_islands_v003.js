function addInputBox() {
    if (!$('#input-island-label').is(":visible")) {
        $(".island_info").append("<input type='text' id='input-island-label'>");
        var islandKey = $('.islandinfo_coords').text().match(/([.0-9]*\d\/[.0-9]*\d)/g);
        islandKey = islandKey.toString().replace("/", "_");
        
        var islandName = $('#islandCity_'+islandKey).text();
        $('#input-island-label').val(islandName);
    }
}
