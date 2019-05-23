import React from 'react';
import AssignmentSummary from './assignmentSummary';
import { Link } from 'react-router-dom';

const AssignmentList = ({ assignments }) => {
  return (
    <div className="assignment-list section">
      {assignments && assignments.map(assignment => {
        return (
          <Link to={`/assignment/${assignment.id}`} key={assignment.id}>
            <AssignmentSummary assignment={assignment} />
          </Link>
        )
      })}
    </div>
  )
}

export default AssignmentList