// ==UserScript==
// @name         Firebase History
// @namespace    http://arunkhanchandani.com/
// @version      0.1
// @description  Store Browser history in Firebase!
// @author       Arun Khanchandani
// @match        *://*/*
// @grant        none
// @require      https://www.gstatic.com/firebasejs/5.9.0/firebase.js
// @noframes
// ==/UserScript==
  // Initialize Firebase
var config = {
    apiKey: "AIzaSyBIKKfh81DpinD7VrCrDBsc_DXqiMRK8AY",
    authDomain: "islas-munecas.firebaseapp.com",
    databaseURL: "https://islas-munecas.firebaseio.com",
    projectId: "islas-munecas",
    storageBucket: "islas-munecas.appspot.com",
    messagingSenderId: "785374214044"
};
firebase.initializeApp(config);
(function() {
    'use strict';
    var d = new Date();
    //writeUserData(d.getFullYear(),d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds(),window.location.href,document.title);
})();
function writeUserData(pyear, pmonth, pday, phour, pmin, psecond, purl,ptitle) {
  firebase.database().ref(pyear+'/'+pmonth+'/'+pday+'/'+phour+'/'+pmin+'/'+psecond).set({
    url: purl,
    title: ptitle
  });
}
var dbIslands;
var leadsRef = firebase.database().ref("/");
leadsRef.on('value', function(snapshot) {
    dbIslands = snapshot.val();
    console.log(dbIslands);
    /*snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
    });*/
});
