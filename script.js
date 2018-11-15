
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

var database = firebase.database();


var tr = $("<tr>");
tr.addClass("table table-striped");
var tdName = $("<td>");
var tdRate = $("<td>");
var tdRole = $("<td>");
var tdDate = $("<td>");
var tdMonths = $("<td>");
var tdMonthlyRate = $("<td>");

tdName.html("Name");
tdRate.html("Rate");
tdRole.html("Role");
tdDate.html("Start Date");
tdMonths.html("Months");
tdMonthlyRate.html("Monthly Rate");
tr.append(tdName);
 tr.append(tdRate);
 tr.append(tdRole);
 tr.append(tdDate);
 tr.append(tdMonths);
 tr.append(tdMonthlyRate);


 $("#results").append(tr);



database.ref("EmployeeTracker/").on("value", function(snapshot) {
    var databaseObject = snapshot.val();

   var tr = $("<tr>");
   tr.addClass("table table-striped");
   var tdName = $("<td>");
   var tdRate = $("<td>");
   var tdRole = $("<td>");
   var tdDate = $("<td>");
   var tdMonths = $("<td>");
   var tdMonthlyRate = $("<td>");
   

    tdName.append(databaseObject.databaseName);
    tdRate.append(databaseObject.databaseRate);
    tdRole.append(databaseObject.databaseRole);
    tdDate.append(databaseObject.databasedate);

    var startDate = databaseObject.databasedate;

    //Todays date
    var endDate = new Date(); 
    
    var months = moment(new Date(endDate)).diff(new Date(startDate), 'months', true);
    var monthsRounded = Math.round(months,2);

    tdMonths.append(monthsRounded);

    var monthlyRate = months * databaseObject.databaseRate;

    var monthlyRateRounded = Math.round(monthlyRate,2);

    tdMonthlyRate.append("$" + monthlyRateRounded);

    tr.append(tdName);
    tr.append(tdRate);
    tr.append(tdRole);
    tr.append(tdDate);
    tr.append(tdMonths);
    tr.append(tdMonthlyRate);


    $("#results").append(tr);




    // If any errors are experienced, log them to console.
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  $(".btn").on("click",function(event){
    event.preventDefault();
  
    var formName = $("#name-input").val().trim();
    var formRole = $("#role-input").val().trim();
    var formStartDate = $("#start-date").val().trim();
    var formRate = $("#monthly-rate").val().trim();
    


  // Save the employee data in Firebase
  database.ref("EmployeeTracker/").set({
    databaseName : formName,
    databaseRole : formRole,
    databasedate : formStartDate,
    databaseRate : formRate

  }).then(function(){
        console.log("saved");
  });

})