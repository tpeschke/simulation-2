import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

import AddNewS1 from './componets/AddNewS1'



class App extends Component {
  render() {
    return (
      <div className="App">
        <AddNewS1 />
      </div>
    );
  }
}

export default App;
