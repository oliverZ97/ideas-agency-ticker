import React, { Component } from 'react';
import '../../css/components/form.css';
import '../../css/layout/container.css';
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

    var errorMessage = this.state.showError ? <p className="text text__primary text--light">Oops! Please check your Login Data.</p> : null;

    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <div className="loginForm__container">
          <input className="loginForm__text Form__input" type="text" placeholder="Username" minLength="4" name="username" onChange={this.handleChangeUsername}></input>
        </div>
        <div className="loginForm__container">
          <input className="loginForm__text Form__input" type="password" placeholder="Password" minLength="6" name="password" onChange={this.handleChangePassword}></input>
        </div>
        <div className="loginForm__container">
          <button className="loginForm__btn loginForm__text" type="submit">Login</button>
        </div>
        {errorMessage}
      </form>
    );
  }
}

export default LoginForm;
