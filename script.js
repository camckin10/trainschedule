//Issues as of 1-17-18
//user will get multiple entries in train information table at top even after entering one train input

 
//Successes as of 1-17-18
//basic html completed
//pushing to firebase
//inuts show in console
//data is pushing to HTML


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
  //var trainData = {
    //train
  //}
  //var train = " ";
  //var destination = " ";
  //var trainTime = " ";
  //var minutes = 0;

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

    //moment.js
    //putting time values in an object that gets pushed to databse
    var trainData = {
      train:train,
      destination : destination,
      trainTime : trainTime,
      minutes:minutes
    }


    //code for handling the push
    //BUT this also gets pushed to database! what is going on???
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


      //Firebase watcher + initial loader 
  //code that works the same as .on("value")
  database.ref().on("child_added", function(childSnapshot) {
    //console log everything from childSnapshot to double check
    var train = childSnapshot.val().train;
    var destination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().trainTime;
    var minutes = childSnapshot.val().minutes;

    // //Parsing through the time input and separating the hours from minutes
    //     var val2 = trainData.split(":"); // ["03", "15"]
    
    //     // using moment.js to calculate hours and minutes and storing it as a variable
    //     var fTime = moment().hours(val2[0]).minutes(val2[1]);

    //     // logging different types of formats and functions of moment.js
    //     console.log(fTime);
    //     console.log(fTime.format("hh:mm"));   // 03:15 am
    //     console.log(moment().diff(fTime, "hours" ))


         //Change HTML to reflect information
        $("#train-table").append('<tr><td>' + train + '</td><td>' + destination + '</td><td>' + trainTime + '</td><td>' + minutes + '</td></tr>');

        $("#trainname-input").text(childSnapshot.val().train);
        $("#destination-input").text(childSnapshot.val().destination);
        $("#traintime-input").text(childSnapshot.val().trainTime);
        $("#frequency-input").text(childSnapshot.val().minutes);


      });


    //   //Change HTML to reflect information
    // $("#table table-inverse table-bordered").append('<tr><td>' + train + '</td><td>' + destination + '</td><td>' + trainTime + '</td><td>' + minutes + '</td></tr>');

    // $("#trainname-input").text(childSnapshot.val().train);
    // $("#destination-input").text(childSnapshot.val().destination);
    // $("#traintime-input").text(childSnapshot.val().trainTime);
    // $("#frequency-input").text(childSnapshot.val().minutes);



  }); 



  // //Firebase watcher + initial loader 
  // //code that works the same as .on("value")
  // database.ref().on("child_added"), function(childSnapshot) {
  //   //console log everything from childSnapshot to double check
  //   var train = childSnapshot.val().train;
  //   var destination = childSnapshot.val().destination;
  //   var trainTime = childSnapshot.val().trainTime;
  //   var minutes = childSnapshot.val().minutes;

  //   //Parsing through the time input and separating the hours from minutes
  //       var val2 = trainData.time.split(":"); // ["03", "15"]
    
  //       // using moment.js to calculate hours and minutes and storing it as a variable
  //       var fTime = moment().hours(val2[0]).minutes(val2[1]);

  //       // logging different types of formats and functions of moment.js
  //       console.log(fTime);
  //       console.log(fTime.format("hh:mm"));   // 03:15 am
  //       console.log(moment().diff(fTime, "hours" ))

  //     };


    //$("#table table-inverse table-bordered").append('<tr><td>' + train + '</td><td>' + destination + '</td><td>' + trainTime + '</td><td>' + minutes + '</td></tr>');

  //function to handle the errors
    //function (errorCheck) {
    //console.log("error");
  //})

//database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {

    //Change HTML to reflect information
    //$("#trainname-input").text(snapshot.val().train);
    //$("#destination-input").text(snapshot.val().destination);
//     $("#traintime-input").text(snapshot.val().trainTime);
//     $("#frequency-input").text(snapshot.val().minutes);

   

// })

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

//capturing input into variable = 
//var userInput = " ";
//var storeJs = moment().format(h:mm:ss:a);
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






