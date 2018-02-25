import { Meteor } from 'meteor/meteor';
import '../imports/api/slideProgress.js';

import {SlideProgress} from '../imports/api/slideProgress.js';

var fiber = require('fibers');

var io = require('socket.io-client');
var socket = io("http://localhost:5000");


Meteor.startup(() => {

});

socket.on("connect", () => {
  console.log("Meteor Server connected to Socket Cluster.");
});

socket.on("updateProgress", (data) => {
  console.log("student: ", data.student);
  console.log("slide: ", data.slideID);
  insertToSlideProgress(data);

});

var insertToSlideProgress = Meteor.bindEnvironment(function(data) {
  SlideProgress.insert({
    student: data.student,
    slideID: data.slideID
  });
});
