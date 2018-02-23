import {Mongo} from 'meteor/mongo';

export const PracticeProblems = new Mongo.Collection('practice-problems');

PracticeProblems.schema = new SimpleSchema({
  student: {type: String},
  submittedCode: {type: String},
  problemID: {type: String}
})
