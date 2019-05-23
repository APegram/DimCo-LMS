import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'


const Navbar = (props) => {
  const { profile } = props.firebase
  const { auth } = props
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Jeremiah said change this</Link>
        { auth.isLoaded && links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    ...state,
    auth: state.firebase.auth
  }
}


export default compose(
 firestoreConnect(),
 connect(mapStateToProps))(Navbar)