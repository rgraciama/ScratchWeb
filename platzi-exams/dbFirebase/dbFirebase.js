var configExams = {
    apiKey: "AIzaSyDPz7XeF9PcAIruyDDBnQz9nsNewINHVcM",
    authDomain: "platzi-exams.firebaseapp.com",
    databaseURL: "https://platzi-exams.firebaseio.com",
    projectId: "platzi-exams",
    storageBucket: "platzi-exams.appspot.com",
    messagingSenderId: "457299712528",
    appId: "1:457299712528:web:830920b9ae498b43afc895"
};
firebase.initializeApp(configExams);
var dbPlatzi = firebase.database();

/**** EXAMS */
//read Exams
var examsRef = dbPlatzi.ref("/exams");
var dbExams;
examsRef.on('value', function(snapshot) {
    dbExams = snapshot.val();
});

//write exam
function writeExamData(examKey, questionKey, answers, dbPlatzi) {
  dbPlatzi.ref('/exams/'+examKey).set( {[questionKey]: [answers] });
}


