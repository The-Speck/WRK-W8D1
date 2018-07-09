import React from 'react';
import { connect } from 'react-redux'
import Greeting from './greeting_container';
import { AuthRoute } from '../util/route_util.jsx';
import { logout } from '../actions/session_actions';
import SignUp from './signup_form_container';
import LogIn from './login_form_container';
import { Link, Route, NavLink, withRouter } from 'react-router-dom';


const App = ({session}) => {
  debugger
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
          { !Boolean(session.id) ?
            <div>
              <NavLink exact to="/signup">Signup</NavLink>
              <NavLink exact to="/login">Login</NavLink>
            </div>
            :
            <div>
              <Greeting/>
            </div>
          }

          <AuthRoute exact component={SignUp} path="/signup" />
          <AuthRoute exact component={LogIn} path="/login" />
      </header>
    </div>
  );
};

const mapStuff = state => {
  return {
    session: state.session
  }
}

export default withRouter(connect(mapStuff)(App));
