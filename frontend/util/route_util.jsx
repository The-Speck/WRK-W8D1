import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => {
  // debugger
  return (<Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>)
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
