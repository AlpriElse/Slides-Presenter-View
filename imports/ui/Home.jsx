import React from 'react';

import SlideProgressView from './dev/SlideProgressView';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <SlideProgressView />

      </div>
    );
  }
}
