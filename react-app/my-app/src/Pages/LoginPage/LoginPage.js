import React, { Component } from 'react';
import PageTitle from '../../PageTitle/PageTitle';
import LoginForm from '../../LoginForm/LoginForm';
import apiClient from '../../services/apiClient';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFailed: false,
    };

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(username, password) {
    if(username !== password) {
      this.setState({loginFailed: true});
    } else {
      this.setState({loginFailed: false});
    }


    apiClient.login(username, password);
  }

  render() {
    return (
      <div className="LoginPage">
        <PageTitle />
        <LoginForm onSubmit={this.onLogin} showError={this.state.loginFailed} />
      </div>
    );
  }
}

export default LoginPage;