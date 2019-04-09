import React, { Component } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import LoginForm from '../LoginForm/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <PageTitle />
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;