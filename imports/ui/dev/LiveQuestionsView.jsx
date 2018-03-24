import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {LiveQuestions} from '../../api/liveQuestions.js';

class LiveQuestionsView extends React.Component {
  renderQuestions() {
    return this.props.liveQuestionsData.map((entry) => {
      return (
        <tr key={entry._id}>
          <td>{entry.student}</td>
          <td>{entry.question}</td>
        </tr>
      )
    });
  }
  render() {
    console.log(this.props.liveQuestionsData);
    return (
      <div className="card">
        <div className="card-body">
        <h3>[DEV] Live Questions</h3>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Student</th>
                  <th scope="col">Question</th>
                </tr>
              </thead>
              <tbody>
                {this.renderQuestions()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    liveQuestionsData: LiveQuestions.find({}).fetch()
  };
})(LiveQuestionsView);
