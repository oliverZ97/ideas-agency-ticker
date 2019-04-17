import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { browserHistory } from 'react-router';
import PageTitle from '../../Components/PageTitle/PageTitle';
import LoginForm from '../../Components/LoginForm/LoginForm';
import apiClient from '../../services/apiClient';
import './LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFailed: false,
      redirect: false
    };

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(username, password) {
    apiClient.login(username, password)
    .then(() => {
      browserHistory.push('/list')
    } )
    .catch(() => {
      this.setState({
        loginFailed: true
      })
    })
  }

  render() {
    /** if (this.state.redirect) {
      return <Redirect to='/list' />
    }*/

    return (
      <div className="LoginPage">
        <PageTitle />
        <LoginForm onSubmit={this.onLogin} showError={this.state.loginFailed} />
      </div>
    );
  }
}

export default LoginPage;