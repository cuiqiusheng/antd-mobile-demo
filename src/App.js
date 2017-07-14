import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import SinglePage from './containers/SinglePage';

class BasicApp extends Component {

  render() {
    return (
      <div className="App">
        <SinglePage />
      </div>
    );
  }
}

const App = () => (
  <Router>
    <Route exact path="/" component={BasicApp} />
  </Router>
);

export default App;
