import React, { Component } from 'react';
import Notifications from './Notifications';
import AssignmentList from '../assignments/assignmentList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    const { assignments, auth, notifications } = this.props
    // console.log(this.props)

    if (!auth.uid) return (
    <div className="container">
      <h1 className="center pink-text">Jeremiah said change this</h1>
    </div>
    )
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-s12-m6">
            <AssignmentList assignments={assignments} />
          </div>
          <div className="col-s12-m5 offset-m1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    assignments: state.firestore.ordered.assignments,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'assignments', limit: 3},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard)