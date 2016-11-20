var express = require('express');
var router = express.Router();
//

// var firebase = require("firebase/app");
// require("firebase/auth");




router.post('/auth', function (req, res) {

  var url = require('url');
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  var score = req.query.score;
  var politics = req.query.politics;


  var usersRef = firebase.database().ref().child('users');

  var newUserRef = usersRef.push({score: score, politics: politics});

  var uid = newUserRef.key;

  res.redirect('/users/'+uid);

});



module.exports = router;
