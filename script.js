//Questions/Issues
//not updating to firebase
//not pushing to HTML page
//where to add moment.js code? 



//Initialize Firebase 
  var config = {
    apiKey: "AIzaSyC_THhjmPjEXsUiBqnF4j7j1nmjiEh7kwQ",
    authDomain: "trainschedule-59f3b.firebaseapp.com",
    databaseURL: "https://trainschedule-59f3b.firebaseio.com",
    projectId: "trainschedule-59f3b",
    storageBucket: "",
    messagingSenderId: "836780283879"
  };
  firebase.initializeApp(config);

  //reference database
  var database = firebase.database(); 

  //values for schedule
  var train = " ";
  var destination = " ";
  var trainTime = " ";
  var minutes = 0;

  //capture button click
  //button on click function for submit button
  $("#buttonclick").on("click", function (){
    //event.preventDefault() will stop page refreshing
    event.preventDefault();


    //grabbed values from text boxes
    //train name input variable
    var train = $("#trainname-input").val().trim();
    //destination input variable
    var destination = $("#destination-input").val().trim();
    //first train time input variable 
    var trainTime = $("#traintime-input").val().trim();
    //frequency(minutes) input variable
    var minutes = $("#frequency-input").val().trim();

    //code for handling the push
    database.ref().push({
      train: train,
      destination: destination,
      trainTime : trainTime,
      minutes: minutes

    })
      //checking in console for information
      console.log(train);
      console.log(destination);
      console.log(trainTime);
      console.log(minutes);

  }); 



  //Firebase watcher + initial loader 
  //code that works the same as .on("value")
  database.ref().on("child_added"), function(childSnapshot) {
    //console log everything from childSnapshot to double check
    var train = childSnapshot.val().train;
    var destination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().trainTime;
    var minutes = childSnapshot.val().minutes;

    $("#table").append('<tr><td>' + train + '</td><td>' + destination + '</td><td>' + trainTime + '</td><td>' + minutes + '</td></tr>');

  //function to handle the errors
  },  function (errorCheck) {
    console.log("error");
  }

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {

    //Change HTML to reflect information
    $("#trainname-input").text(snapshot.val().train);
    $("#destination-input").text(snapshot.val().destination);
    $("#traintime-input").text(snapshot.val().trainTime);
    $("#frequency-input").text(snapshot.val().minutes);

   

});

//moment.js section of code
//=============================================
//pseudocode 
//create a variable that will be for user input
//set user input to variable userTime
//var userInput = " " ;
//var userTime = userInput;

//var randomDate = "MM/DD/YYYY";
//var userDate = randomDate
//var userTime = ""

//var trainInfo = moment(randomDate , userDate);

//convert time after user inputs information


//train times
//first train time--military time
//frequency is recorded in minutes

//moment().format('MMMM Do YYYY , h:mm:ss:a');
//console.log(moment().format('MMMM Do YYYY'));


//using this format to get the minutes? 
//moment().format('mm');

//1.capture input into a variable 
//2.a new variable that will store moment.js format
//format is equal whatever format going for
//3.third variable(maybe converted time)..= moment().first variable.second variable

//capturing input into variable = var userInput = " ";
//var storeJs = moment().format(h:mm:ss:a)
//var result = moment().userInput.storeJs.result;

//var userInput
//---------------
//initialize firebase 
//firebase code

//initial values
//var trainName = " ";
//var destination = " ";
//var firstTrainTime = " ";
//var frequency = 0 ;
//var presentTime = moment();
//var index = 0 ;
//var trainIDs


//current time






