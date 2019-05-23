import React, { Component } from 'react';
import { connect } from 'react-redux';
import createassignment from '../../store/actions/assignmentActions';

class CreateAssignment extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    if (e.target.id === 'title'){
      if (e.target.value.length > 40){
          e.target.value = e.target.value.substring(0, 40)
      }
    }
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createassignment(this.state)
    this.props.history.push('/')
  }
  
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Submit Assignment</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <input type="text" id="content" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-index-0">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createassignment: (assignment) => dispatch(createassignment(assignment))
  }
}

export default connect(null, mapDispatchToProps)(CreateAssignment)
