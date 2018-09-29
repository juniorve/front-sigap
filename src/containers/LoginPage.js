import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';
import { AuthConsumer } from '../contexts/AuthContext';

class LoginPage extends Component {
  render(){
    return (
      <AuthConsumer>
        {({login}) => (
          <LoginForm handleSubmit={login}/>
        )}
      </AuthConsumer>
    );
  }
};

export default LoginPage;