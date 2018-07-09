import React from 'react';
import { Link, Route } from 'react-router-dom';

class Greeting extends React.Component {
  debugger
  render() {
      return (
        <div>
          <h3>Welcome {this.props.currentUser.username}</h3>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
  }
}

export default Greeting;
