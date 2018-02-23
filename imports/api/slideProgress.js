import {Mongo} from 'meteor/mongo';

export const SlideProgress = new Mongo.Collection('slide-progress');

SlideProgress.schema = new SimpleSchema({
  student: {type: String},
  slideID: {type: String}
});
