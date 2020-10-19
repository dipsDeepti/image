 import React, { Component } from 'react';
 import { BrowserRouter as Router, Route } from 'react-router-dom';
 import Home from '../screens/home/Home';
 import Profile from '../screens/profile/Profile';
 import Login from '../screens/login/Login';

 class Controller extends Component {

    constructor() {
      super();
      this.baseUrl = "https://graph.instagram.com/";
    }
    render() {
      return (
        <Router>
          <div className="main-container">
            <Route path='/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />

          </div>
        </Router>
      )
    }
  }
  
  export default Controller;