import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PageTitle from '../../Components/PageTitle/PageTitle';
import LoginForm from '../../Components/LoginForm/LoginForm';
import apiClient from '../../services/apiClient';
import './LoginPage.scss';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFailed: false,
      redirect: false
    };
    console.log(props);

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(username, password) {
    apiClient.login(username, password)
    .then(() => {
      browserHistory.push('/list-search')
    } )
    .catch(() => {
      this.setState({
        loginFailed: true
      })
    })
  }

  render() {
    return (
      <div className="container-column--items-centered loginPage">
        <PageTitle />
        <LoginForm onSubmit={this.onLogin} showError={this.state.loginFailed} />
      </div>
    );
  }
}

export default LoginPage;