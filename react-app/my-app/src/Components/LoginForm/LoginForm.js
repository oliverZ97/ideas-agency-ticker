import React, { Component } from 'react';
import { Link } from 'react-router';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      showError: props.showError
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    state.showError = props.showError
    return state
  } 

  handleChangeUsername(e) {
    this.setState({ name: e.target.value })
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value })

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.password);
  }

  render() {

    var errorMessage = this.state.showError ? <p className="ErrorMsg">Oops! Please check your Login Data.</p> : null;

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
        {errorMessage}
      </form>
    );
  }
}

export default LoginForm;
