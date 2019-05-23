import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import assignmentDetails from './components/assignments/assignmentDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';
import CreateAssignment from './components/assignments/CreateAssignment';
import PrivateRoute from './components/auth/PrivateRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <PrivateRoute exact path='/assignment/:id' component={assignmentDetails} />
            <PrivateRoute exact path='/create/assignment' component={CreateAssignment} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
