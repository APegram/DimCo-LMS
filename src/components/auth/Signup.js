import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { signUp, formValidation } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  

  handleChange = (e) => {
    if (e.target.id === 'firstName' || e.target.id === 'lastName'){
      if (e.target.value.length > 15){
          e.target.value = e.target.value.substring(0, 15)
      }
    } 
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, firstName, lastName } = this.state
    const { firebase } = this.props

    const user = {
      email,
      password
    }
    const profile = {
      firstName,
      lastName,
      initials: firstName[0] + lastName[0],
      email,
      memberSince: new Date()
    }
      firebase.createUser(user, profile)
  }

  render() {
    const { auth, validateForm } = this.props
    const { email, password, firstName, lastName } = this.state
    const isEnabled = 
  email.length > 0 && email.includes('@') && 
      password.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0;

    if (auth.auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-index-0" disabled={!isEnabled}>Creater Account & Login</button>
            <div className="red-text center">
              {auth.authError ? <p>{auth.authError.message}</p> : validateForm ? <p>{validateForm}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase,
    validateForm: state.authentication.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
    formValidation: () => dispatch(formValidation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(SignUp))
