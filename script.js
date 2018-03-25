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


//capture button click
//button on click function for submit button
$("#buttonclick").on("click", function() {
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
        train: train,
        destination: destination,
        trainTime: trainTime,
        minutes: minutes
    }


    //code for handling the push
    //BUT this also gets pushed to database! what is going on???
    database.ref().push({
            train: train,
            destination: destination,
            trainTime: trainTime,
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



        //Change HTML to reflect information
        $("#train-table").append('<tr><td>' + train + '</td><td>' + destination + '</td><td>' + trainTime + '</td><td>' + minutes + '</td></tr>');

        $("#trainname-input").text(childSnapshot.val().train);
        $("#destination-input").text(childSnapshot.val().destination);
        $("#traintime-input").text(childSnapshot.val().trainTime);
        $("#frequency-input").text(childSnapshot.val().minutes);


    });




});