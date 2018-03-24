import React from 'react';

import SlideProgressView from './dev/SlideProgressView';
import LiveQuestionsView from './dev/LiveQuestionsView';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <SlideProgressView />
        <LiveQuestionsView />

      </div>
    );
  }
}
