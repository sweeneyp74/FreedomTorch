var express = require('express');
var router = express.Router();
//

// var firebase = require("firebase/app");
// require("firebase/auth");
var firebase = require("firebase");



// Initialize Firebase

  var config = {
    // apiKey: "<API_KEY>",
    // authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://freedom-torch.firebaseio.com",
    // storageBucket: "<BUCKET>.appspot.com",
    // messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);

var database = firebase.database();


router.get('/', function (req, res) {

    res.json({status: 'ok I am hoya'});
});


router.post('/', function (req, res) {

  console.log('request',req)

  var typeformRef = firebase.database().ref().child('typeforms');

  typeformRef.push(req);



    res.json({status: 'ok I am hoya'});
});


module.exports = router;
