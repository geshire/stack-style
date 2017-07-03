'use strict';

/* Environment Vars
..............................*/
require('dotenv').load();

/* Packages
..............................*/
const express     = require('express');
const parser      = require('body-parser');
const fs          = require('fs');
const events      = require('events');
const app         = express();

let emitter = new events.EventEmitter();

emitter.on('error', function(res) {
  res.status(500).send('500 error');
});


/* Express App
..............................*/
app.set('port', process.env.PORT);
app.use(express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

/* Routes
..............................*/
require('./routes')(app, emitter);

/* Handle Errors
..............................*/
app.use(function(req, res) {
  res.status(404).send('404 Not found');
});

app.use(function(err, req, res) {
  res.status(404).send('404 Not found');
});

/* Listen
..............................*/
app.listen(process.env.PORT, function () {
  console.log("Web server listening on port " + process.env.PORT);
});
