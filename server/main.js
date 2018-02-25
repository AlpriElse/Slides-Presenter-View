import { Meteor } from 'meteor/meteor';
import '../imports/api/slideProgress.js';

Meteor.startup(() => {
  // code to run on server at startup
});

var io = require('socket.io-client');
var socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Meteor Server connected to Socket Cluster.");
})
