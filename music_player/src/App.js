import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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

class Player extends React.Component{
  getDefaultProps () {
    return {
        track: {
          name: "We Were Young",
          artist: "Odesza",
          album: "Summer's Gone",
          year: 2012,
          artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
          duration: 192,
          source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
      }}
    }
  getInitialState(){
    return { playStatus: 'play', currentTime: 0 }
  }
	render() {
		return (
			<div className="Player">
				<div className="Background"></div>
				<div className="Header"><div className="Title">Now playing</div></div>
				<div className="Artwork"></div>
				<TrackInformation />
				<Scrubber />
				<Controls />
				<Timestamps />
				<audio>
					<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3" />
				</audio>
			</div>
		)
	}
};

class TrackInformation extends React.Component{
	render() {
		return (
			<div className="TrackInformation">
				<div className="Name">We Were Young</div>
				<div className="Artist">Odesza</div>
				<div className="Album">Summers Gone</div>
     </div>
		)
	}
};

class Scrubber extends React.Component{
	render() {
		return (
			<div className="Scrubber">
				<div className="Scrubber-Progress"></div>
			</div>
		)
	}
};

class Controls extends React.Component{
	render() {
		return (
			<div className="Controls">
				<div className="Button">
					<i className="fa fa-fw fa-play"></i>
				</div>
			</div>
		)
	}
};

class Timestamps extends React.Component{
	render() {
		return (
			<div className="Timestamps">
				<div className="Time Time--current">0</div>
				<div className="Time Time--total">192</div>
			</div>
		)
	}
};

// Render the UI
ReactDOM.render(
	<Player />,
	document.querySelector('body')
);


export default App;
