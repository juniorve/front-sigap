import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';
import NotFoundPage from './containers/NotFoundPage';
import { AuthProvider, AuthConsumer } from './contexts/AuthContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthProvider>
          <AuthConsumer>
            {({isAuth}) => (
              <Router>
                {isAuth ? (
                  <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Redirect exact from="/" to="/dashboard"/>
                    <Redirect exact from="/login" to="/dashboard"/>
                    <Route path="*" component={NotFoundPage}/>
                  </Switch>
                ) : (
                  <Switch>
                    <Route path="/login" component={LoginPage}/>
                    {/* Private route logic for now */}
                    <Redirect from="/" to="/login"/>
                    <Route path="*" component={NotFoundPage}/>
                  </Switch>                  
                )}
              </Router>
            )}
          </AuthConsumer>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
