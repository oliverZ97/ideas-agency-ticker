import React, { Component } from 'react';
import { Link } from 'react-router';
import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
        <form className="LoginForm">
          <div className="username">
            <label htmlFor="uName"></label>
            <input type="text" placeholder="Username" minLength="4" name="uName"></input>
          </div>
          <div className="password">
            <label htmlFor="psw"></label>
            <input type="password" placeholder="Password" minLength="6" name="psw"></input>
          </div>
          <div>
          <Link to="/list"><button type="submit">Login</button></Link>
          </div>
        </form>
    );
  }
}

export default LoginForm;
