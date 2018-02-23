import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {SlideProgress} from '../../api/slideProgress.js';

class SlideProgressView extends React.Component {
  renderProgress() {
    return this.props.slideProgressData.map((entry) => {
      return (
        <tr key={entry._id}>
          <td>{entry.student}</td>
          <td>{entry.slideID}</td>
        </tr>
      )
    });
  }
  render() {
    console.log(this.props.slideProgressData);
    return (
      <div className="card">
        <div className="card-body">
        <h3>[DEV] Slide Progress</h3>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Student</th>
                  <th scope="col">Slide ID</th>
                </tr>
              </thead>
              <tbody>
                {this.renderProgress()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default withTracker(() => {
  console.log("Slide Progress:");
  return {
    slideProgressData: SlideProgress.find({}).fetch()
  };
})(SlideProgressView);
