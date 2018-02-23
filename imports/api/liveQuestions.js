import {Mongo} from 'meteor/mongo';

export const LiveQuestions = new Mongo.Collection('live-questions');

Lists.schema = new SimpleSchema({
  student: {type: String},
  question: {type: String},
  hide: {type: Boolean}
})
