import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon } from 'antd-mobile';

class App extends Component {

  handleClick() {
    alert(1);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button inline size="small" className="btn" type="primary" icon="search" onClick={this.handleClick}>
          inline
        </Button>
      </div>
    );
  }
}

export default App;
