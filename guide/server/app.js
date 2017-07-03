'use strict';

/* App
..............................*/
require('dotenv').load();

const express     = require('express');
const parser      = require('body-parser');
const fs          = require('fs');
const app         = express();

app.set('port', process.env.PORT);
app.use(express.static('guide/public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('*', function(request, response) {
  fs.readFile(__dirname + '/layout.html', 'utf8', function(err, source) {
    if (err) {
      return console.log(err);
    }
    response.send(source);
  });
});

/* Listen
..............................*/
app.listen(process.env.PORT, function () {
  console.log("Web server listening on port " + process.env.PORT);
});
