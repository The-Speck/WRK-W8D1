import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUp from './signup_form_container';
import LogIn from './login_form_container';

class Greeting extends React.Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>HELLLO {this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      );
    } else {
        return (
          <div>
            {this.props.location.pathname === '/login' ?
            <Link to='/signup'>Sign Up</Link> :
            <Link to='/login'>Log In</Link>}
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
          </div>
        );
    }
  }
}

export default Greeting;
