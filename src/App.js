import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Landing from './Landing'
import Nav from './Nav'
import Login from './Login'
import Profile from './Profile'
import Donate from './Donate'
import Signup from './Signup'
import Volunteer from './Volunteer'
import DonateOptions from './DonateOptions'
import DonateBarcode from './DonateBarcode'
import Reciever from './Reciever'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path ='/' render={() => <Landing />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/donate' render={() => <Donate />} />
          <Route path='/signup' render={() => <Signup />} />
          <Route path='/volunteer' render={() => <Volunteer />} />
          <Route path='/DonateOptions' render={() => <DonateOptions />} />
          <Route path='/DonateBarcode' render={() => <DonateBarcode />} />
          <Route path='/reciever' render={() => <Reciever />} />
        </div>
      </Router>
    );
  }
}

export default App;
