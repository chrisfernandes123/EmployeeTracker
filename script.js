
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

database.ref("EmployeeTracker/").on("value", function(snapshot) {
    var databaseObject = snapshot.val();










    // If any errors are experienced, log them to console.
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });



  // Save the new price in Firebase
  database.ref("EmployeeTracker/").set({
    

  }).then(function(){
   
  });