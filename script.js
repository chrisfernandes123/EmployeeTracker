<<<<<<< HEAD
$("#sumbit-button").on("click",function(event){
    event.preventDefault();
  
    var formName = $("#name-input").val().trim();
    var formRole = $("#role-input").val().trim();
    var formStartDate = $("#start-date").val().trim();
    var formRate = $("#monthly-rate").val().trim();
    
})
=======
// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"

var config = {
  //From Chris Fernandes personal project on Firebase.
  apiKey: "AIzaSyDuLLYyag4uSszoGcosqr3idA_PmKEDsOE",
  authDomain: "my-project-1475612656552.firebaseapp.com",
  databaseURL: "https://my-project-1475612656552.firebaseio.com",
  projectId: "my-project-1475612656552",
  storageBucket: "",
  messagingSenderId: "359506709188"

};

firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();
>>>>>>> 62aac7edaca039c557e057e013f991f3780aa500
