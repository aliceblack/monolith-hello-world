import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/monolith-frontend/dist/css/main.css';

import HelloWorldBubble from './HelloWorldBubble';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldBubble time={0} url="http://localhost:5000" />
      </div>
    );
  }
}

export default App;
