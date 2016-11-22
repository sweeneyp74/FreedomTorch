var express = require('express');
var router = express.Router();
//

var firebase = require("firebase");






router.get('/', function (req, res) {

  var url = require('url');
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  var score = req.query.score;
  var politics = req.query.politics;



  var usersRef = firebase.database().ref().child('users');
  usersRef.push({calculated: calculated});
  // res.json({status: 'I am a GET response'});
  // redirect to the users page

  // res.redirect('/users/kevin');

  // app.render('auth', function(err, html){
  //
  // // ...
  //
  // });

  // res.render('auth', { myVar : 'dude' });

  res.render('auth', {layout: true}, function(err, html){
  var response =  {
    some_data: 'blablabla',
    some_more_data: [5, 8, 10, 67],
    my_html: html
  };
  res.send(response);
});


});



module.exports = router;
