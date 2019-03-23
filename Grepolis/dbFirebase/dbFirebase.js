var configMunecas = {
    apiKey: "AIzaSyBIKKfh81DpinD7VrCrDBsc_DXqiMRK8AY",
    authDomain: "islas-munecas.firebaseapp.com",
    databaseURL: "https://islas-munecas.firebaseio.com",
    projectId: "islas-munecas",
    storageBucket: "islas-munecas.appspot.com",
    messagingSenderId: "785374214044"
};
firebase.initializeApp(configMunecas);
var dbMunecas = firebase.database();

//write session
function writeUserData(folderName, session, dbMunecas) {
    dbMunecas.ref('/session/'+folderName).set(session);
}

/**** ISLANDS */
//read Islands
var islandsRef = dbMunecas.ref("/islands");
var dbIslands;
islandsRef.on('value', function(snapshot) {
    dbIslands = snapshot.val();
});

//write island
function writeIslandData(keyIsland, name, dbMunecas) {
  dbMunecas.ref('/islands/'+keyIsland).set({name: name});
}

/**** MOVES */
//read moves
var movesRef = dbMunecas.ref("/moves");
var dbMoves;
movesRef.on('value', function(snapshot) {
    dbMoves = snapshot.val();
});

//write movement
function writeMoveData(id, move) {
  dbMunecas.ref('/moves/'+id).set(move);
}


