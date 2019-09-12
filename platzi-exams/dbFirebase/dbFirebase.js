var configMunecas = {
    apiKey: "AIzaSyBIKKfh81DpinD7VrCrDBsc_DXqiMRK8AY",
    authDomain: "islas-munecas.firebaseapp.com",
    databaseURL: "https://islas-munecas.firebaseio.com",
    projectId: "islas-munecas",
    storageBucket: "islas-munecas.appspot.com",
    messagingSenderId: "785374214044"
};
firebase.initializeApp(configMunecas);
var dbPlatzi = firebase.database();

//write session
function writeUserData(folderName, session, dbPlatzi) {
    dbPlatzi.ref('/session/'+folderName).set(session);
}

/**** ISLANDS */
//read Islands
var examsRef = dbPlatzi.ref("/exams");
var dbExams;
examsRef.on('value', function(snapshot) {
    dbExams = snapshot.val();
});

//write exam
function writeExamData(keyIsland, name, dbPlatzi) {
  dbPlatzi.ref('/exams/'+keyIsland).set({name: name});
}


