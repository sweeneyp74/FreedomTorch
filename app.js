/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START app]
'use strict';

const express = require('express');
var firebase = require("firebase");
const app = express();

app.get('/', (req, res) => {
  res.status(200).sendFile('public/index.html' , { root : __dirname});
});


// Initialize Firebase

  var config = {
    // apiKey: "<API_KEY>",
    // authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://freedom-torch.firebaseio.com",
    // storageBucket: "<BUCKET>.appspot.com",
    // messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);



// Kev
var router = express.Router();

// ------------------------------------------------------------------------
//  Route Handlers
// ------------------------------------------------------------------------

app.get('/auth', (req, res) => {
  res.status(200).sendFile('public/auth.html' , { root : __dirname});
});

app.use('/typeform', require('./routes/typeform'));

app.use('/auth', require('./routes/auth'));



// ------------------------------------------------------------------------
//  Start the server
// ------------------------------------------------------------------------


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
