var express = require('express');
var router = express.Router();
//

// var firebase = require("firebase/app");
// require("firebase/auth");
var firebase = require("firebase");






router.get('/', function (req, res) {

  var url = require('url');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  var score = req.query.score;
  var side = req.query.side;
  var fbid = req.query.fbid;

  var user = {fbid: fbid, side: side, score: score}

  var newUserKey = firebase.database().ref().child('users').push(user).key;


  res.redirect('/?uid='+newUserKey +"&score="+score);

});



module.exports = router;
