import { Meteor } from 'meteor/meteor';
import '../imports/api/slideProgress.js';

const CLUSTER_URL = "localhost:8000";

Meteor.startup(() => {
  var fiber = require('fibers');
  var io = require('socket.io-client');
  var socket = io(CLUSTER_URL);

  socket.on("connect", () => {
    console.log("Meteor Server connected to Socket Cluster.");
  });

  socket.on("updateProgress", (data) => {
    insertToSlideProgress(data);
  });

  socket.on("askQuestion", (data) => {
    console.log(data.question);
    insertToLiveQuestions(data);
  })
});


//  Push Slide Progress Updates to Collection
import {SlideProgress} from '../imports/api/slideProgress.js';
var insertToSlideProgress = Meteor.bindEnvironment(function(data) {
  var results = SlideProgress.findOne({student: data.student});
  console.log(results == undefined);
  if (results == undefined) {
    SlideProgress.insert({
      student: data.student,
      slideID: data.slideID
    });
  } else {
    console.log("updating");
     SlideProgress.update({
       student: data.student
     }, {
       $set: {
         slideID: data.slideID
       }
     });
   }
});

//  Push Live Questions Posted to Collections
import {LiveQuestions} from '../imports/api/liveQuestions.js';
var insertToLiveQuestions = Meteor.bindEnvironment((data) => {
  LiveQuestions.insert(data);
});
