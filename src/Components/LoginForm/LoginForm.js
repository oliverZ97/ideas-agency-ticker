import React, { Component } from 'react';

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
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="container-column container-column--items-centered">
          <input className="text text__secondary text--dark form__input" type="text" placeholder="Username" minLength="4" name="username" onChange={this.handleChangeUsername}></input>
        </div>
        <div className="container-column container-column--items-centered">
          <input className="text text__secondary text--dark form__input" type="password" placeholder="Password" minLength="6" name="password" onChange={this.handleChangePassword}></input>
        </div>
        <div className="container-column container-column--items-centered">
          <button className="btn btn__primary text text__primary text--dark" type="submit">Login</button>
        </div>
        {errorMessage}
      </form>
    );
  }
}

export default LoginForm;
