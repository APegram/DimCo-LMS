import React from 'react';
import moment from 'moment';

const AssignmentSummary = ({ assignment }) => {
  return (
    <div className="card z-depth-0 assignment-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{assignment.title}</span>
          {assignment.requirements.forEach(requirement => <span>{requirement}</span>)}
          <p className="grey-text"><strong>Due: </strong>{moment(assignment.due_date.toDate()).calendar()}</p>
        </div>
      </div>
  )
}

export default AssignmentSummary