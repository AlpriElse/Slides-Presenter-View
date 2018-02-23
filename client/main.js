import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

require("/node_modules/bootstrap/dist/js/bootstrap.min.js");

import Home from '../imports/ui/Home.jsx';

require('bootstrap');

Meteor.startup(() => {
  render(
    <Home/>,
    document.getElementById('app')
  );
});
