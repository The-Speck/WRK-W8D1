import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  showErrors() {

  }

  render(){
    // debugger
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>{this.errors}</h2>
          <label>Username: </label>
          <input onChange={this.handleChange("username")}/>
          <br />
          <label>Password: </label>
          <input onChange={this.handleChange("password")}/>
          <br/>
          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
