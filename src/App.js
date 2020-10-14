import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './screens/login/Login';
import Home from './screens/home/Home';

class App extends Component {
  render (){
    return (
     <Router>
       <div>
         <Route exact path ="/" render={(props) =><Login {...props}/>}/>
         <Route exact path="/Home" render={({history},props) =><Home history ={history} {...props}/>}/>
       </div>
       </Router>
    )
  }
}

export default App;
