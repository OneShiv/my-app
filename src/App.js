import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey there in react</h1>
        <p>This is working fine !!</p>
          <Person name="shiv" age="24"/>
          <Person name="pradnya" age="28"> My Hobby is racing</Person>
          <Person name="rani" age="25"/>
      </div>
    )    
  }
}

export default App;
