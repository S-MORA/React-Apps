import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome';
import registerValidSW from './serviceWorker';
import './index.css';

ReactDOM.render(<Metronome />, document.getElementById('root'));
registerValidSW();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Metronome;
