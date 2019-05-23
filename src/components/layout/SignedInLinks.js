import React from 'react';
import { NavLink } from 'react-router-dom';
import { withFirebase } from 'react-redux-firebase';

const SignedInLinks = ({firebase, profile}) => {
  
  return (
    <ul className="right">
      <li><NavLink to='/create/assignment'>New assignment</NavLink></li>
      <li><NavLink onClick={() => firebase.logout()} to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>
    </ul>
  )
}

export default withFirebase(SignedInLinks)