import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

import Home from '../imports/ui/Home.jsx';

require('bootstrap');

Meteor.startup(() => {
  render(
    <Home/>,
    document.getElementById('app')
  );
});
