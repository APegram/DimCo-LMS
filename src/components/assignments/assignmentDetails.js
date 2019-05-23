import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

 

function AssignmentDetails(props) {
  const { assignment } = props
  if (assignment){
    return (
      <div className="container section assignment-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{assignment.title}</span>
            <h4>Requirements</h4>
            <ul>
            {assignment.requirements.map(requirement => {
            return <li key={requirement}><strong>{requirement}</strong></li>
            })}
            </ul>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div><strong>Due: </strong>{moment(assignment.due_date.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading assignment...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const assignments = state.firestore.data.assignments;
  const assignment = assignments ? assignments[id] : null;
  return {
    assignment: assignment
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'assignments'}
  ]))(AssignmentDetails)