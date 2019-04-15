import React, { Component } from 'react';
import { Link } from 'react-router';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(e) {
    console.log(e);
    this.setState({ name: e.target.value })
  }

  handleChangePassword(e) {
    console.log(e);
    this.setState({ password: e.target.value })

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div className="username">
          <label htmlFor="uName"></label>
          <input type="text" placeholder="Username" minLength="4" name="uName" onChange={this.handleChangeUsername}></input>
        </div>
        <div className="password">
          <label htmlFor="psw"></label>
          <input type="password" placeholder="Password" minLength="6" name="psw" onChange={this.handleChangePassword}></input>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
