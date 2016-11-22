var express = require('express');
var router = express.Router();
//

// var firebase = require("firebase/app");
// require("firebase/auth");
var firebase = require("firebase");






router.get('/', function (req, res) {

  var calculated = {score: 666}
  var usersRef = firebase.database().ref().child('users');
  usersRef.push({calculated: calculated});
  // res.json({status: 'I am a GET response'});
  // redirect to the users page

  // res.redirect('/users/kevin');

  res.json({status:'ok'})
});



module.exports = router;
