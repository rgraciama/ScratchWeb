function writeMovement(dbMoves) {
    var moves = $(".content.js-dropdown-item-list [id*='movement_']");
    if (!(moves == 'null')) {
        moves.each(function(i) {
            var id = $( this ).attr('id');
            console.log(id);
            var move = {
                user: window.Game.player_name,
                time: $( this ).attr('data-timestamp'),
                type: $( this ).attr('data-commandtype'),
                city: "city",
                ref: "ref"
            }
            if (!isInDbMoves(id, dbMoves)) {
                //falta singleton de dbMunecas
                console.log("hola");
                writeMoveData(id, move);
            }
        });
    }
}

function isInDbMoves(id, dbMoves) {
    return Object.keys(dbMoves).includes(id);;
}